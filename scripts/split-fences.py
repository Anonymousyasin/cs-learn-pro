#!/usr/bin/env python3
"""
Phase 1: Split text sections with embedded code fences into separate
text → code → text sections.
"""
import re, sys
from pathlib import Path

def unescape(s):
    return s.replace('\\n','\n').replace('\\t','\t').replace('\\"','"').replace("\\'","'").replace('\\\\','\\')

def escape(s):
    return s.replace('\\','\\\\').replace('"','\\"').replace('\n','\\n').replace('\t','\\t')

def split_content(text):
    """Split text containing ``` fences into (type, content[, lang]) tuples."""
    sections = []
    i = 0
    while i < len(text):
        # Find next opening fence
        fence_start = text.find('```', i)
        if fence_start == -1:
            sections.append(('text', text[i:].strip()))
            break
        
        # Text before the fence
        before = text[i:fence_start].strip()
        if before:
            sections.append(('text', before))
        
        # Find end of this line (the newline after ```[lang])
        eol = text.find('\n', fence_start)
        if eol == -1:
            sections.append(('text', text[fence_start:].strip()))
            break
        
        lang = text[fence_start+3:eol].strip()
        if not lang:
            lang = 'python'
        
        # Find closing fence
        close = text.find('\n```', eol)
        if close == -1:
            # No closing fence — treat rest as text
            sections.append(('text', text[fence_start:].strip()))
            break
        
        code_content = text[eol+1:close].strip()
        if code_content:
            sections.append(('code', code_content, lang))
        
        i = close + 4  # skip past \n```
    
    return sections

def gen_ts(sections, indent=6):
    """Generate TS section objects as a single string with proper indentation."""
    lines = []
    pad = ' ' * indent
    for s in sections:
        if s[0] == 'text':
            lines.append(f'{pad}{{ type: "text", content: "{escape(s[1])}" }},')
        else:
            lines.append(f'{pad}{{ type: "code", language: "{s[2]}", content: "{escape(s[1])}" }},')
    return '\n'.join(lines)

def parse_string_literal(src, pos):
    """Parse a TS string literal starting at pos (which should be ").
    Returns (content, end_pos)."""
    assert src[pos] == '"', f"Expected double-quote at {pos}, got {src[pos:pos+10]}"
    i = pos + 1
    while i < len(src):
        if src[i] == '\\':
            i += 2
        elif src[i] == '"':
            return src[pos+1:i], i + 1
        else:
            i += 1
    return src[pos+1:], len(src)

def process_file(filepath, dry_run=False):
    src = Path(filepath).read_text('utf-8')
    lines = src.split('\n')
    out = []
    i = 0
    modified = False
    n = len(lines)
    
    while i < n:
        line = lines[i]
        trimmed = line.strip()
        
        # Detect start of a text section: line is "{" and next line has type: "text"
        if trimmed == '{' and i + 1 < n and '"text"' in lines[i + 1]:
            # Collect the full section block
            block_lines = [line]
            depth = line.count('{') - line.count('}')
            j = i + 1
            while j < n and depth > 0:
                l = lines[j]
                block_lines.append(l)
                depth += l.count('{') - l.count('}')
                j += 1
            
            block = '\n'.join(block_lines)
            
            # Find the content: "..." part
            cm = re.search(r'content:\s*', block)
            if cm:
                val_start = cm.end()
                if val_start < len(block) and block[val_start] == '"':
                    raw, _ = parse_string_literal(block, val_start)
                    actual = unescape(raw)
                    
                    if '```' in actual:
                        modified = True
                        new_sections = split_content(actual)
                        # Get the original section indent
                        orig_indent = len(line) - len(line.lstrip())
                        repl = gen_ts(new_sections, indent=orig_indent)
                        
                        if dry_run:
                            print(f"  Split [{len(new_sections)}]: {actual[:50].replace(chr(10), ' ')}...")
                        else:
                            out.append(repl)
                        i = j
                        continue
            
            # No split needed, original block stays
            out.extend(block_lines)
            i = j
        else:
            out.append(line)
            i += 1
    
    if modified and not dry_run:
        result = '\n'.join(out)
        Path(filepath).write_text(result, 'utf-8')
        print(f"  ✅ {Path(filepath).name} updated")
    elif not modified:
        print(f"  ✅ {Path(filepath).name} unchanged")
    return modified

if __name__ == '__main__':
    base = Path(__file__).parent.parent / 'src' / 'lib' / 'courses' / 'python'
    dry = '--dry-run' in sys.argv
    files = ['chapters-1-10.ts', 'chapters-11-30.ts', 'chapters-31-40.ts', 'chapters-projects.ts']
    for f in files:
        fp = base / f
        if fp.exists():
            print(f"Processing {f}...")
            process_file(str(fp), dry_run=dry)
    print("Done.")
