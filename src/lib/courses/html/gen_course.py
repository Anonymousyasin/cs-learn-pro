import json
import os

OUT = "/data/data/com.termux/files/home/cs-learning/src/lib/courses/html/index.ts"

def Q(tc, n):
    """Question id"""
    return f"{tc}-q{n}"

# ══════════════════════════════════════════════════════════════════════
# CONTENT DATABASE
# ══════════════════════════════════════════════════════════════════════

CHAPTER_META = [
    ("html-introduction", "HTML Introduction", 1, 15, 6, []),
    ("html-editors", "HTML Editors", 2, 10, 5, ["html-introduction"]),
    ("html-basics", "HTML Basics", 3, 20, 10, ["html-editors"]),
    ("html-elements", "HTML Elements", 4, 25, 12, ["html-basics"]),
    ("html-attributes", "HTML Attributes", 5, 20, 10, ["html-elements"]),
    ("html-headings", "HTML Headings", 6, 15, 7, ["html-attributes"]),
    ("html-paragraphs", "HTML Paragraphs", 7, 15, 7, ["html-headings"]),
    ("html-styles", "HTML Styles", 8, 20, 10, ["html-paragraphs"]),
    ("html-formatting", "HTML Text Formatting", 9, 15, 8, ["html-styles"]),
    ("html-quotations", "HTML Quotations and Citations", 10, 15, 8, ["html-formatting"]),
    ("html-comments", "HTML Comments", 11, 10, 5, ["html-basics"]),
    ("html-colors", "HTML Colors", 12, 20, 10, ["html-styles"]),
    ("html-css", "HTML and CSS", 13, 25, 12, ["html-colors"]),
    ("html-links", "HTML Links", 14, 20, 10, ["html-css"]),
    ("html-images", "HTML Images", 15, 20, 10, ["html-links"]),
    ("html-favicon", "HTML Favicon", 16, 10, 5, ["html-images"]),
    ("html-tables", "HTML Tables", 17, 30, 15, ["html-images"]),
    ("html-lists", "HTML Lists", 18, 20, 10, ["html-tables"]),
    ("html-block-inline", "HTML Block & Inline", 19, 15, 8, ["html-lists"]),
    ("html-div", "HTML Div", 20, 15, 7, ["html-block-inline"]),
    ("html-classes", "HTML Classes", 21, 20, 10, ["html-div"]),
    ("html-id", "HTML ID", 22, 15, 8, ["html-classes"]),
    ("html-iframes", "HTML Iframes", 23, 20, 10, ["html-id"]),
    ("html-javascript", "HTML JavaScript", 24, 25, 12, ["html-iframes"]),
    ("html-filepaths", "HTML File Paths", 25, 15, 7, ["html-images"]),
    ("html-head", "HTML Head", 26, 20, 10, ["html-filepaths"]),
    ("html-layout", "HTML Layout", 27, 25, 12, ["html-head"]),
    ("html-responsive", "HTML Responsive", 28, 25, 12, ["html-layout"]),
    ("html-computercode", "HTML Computer Code", 29, 10, 5, ["html-formatting"]),
    ("html-semantics", "HTML Semantics", 30, 30, 15, ["html-layout"]),
    ("html-style-guide", "HTML Style Guide", 31, 20, 10, ["html-semantics"]),
    ("html-entities", "HTML Entities", 32, 15, 7, ["html-style-guide"]),
    ("html-symbols", "HTML Symbols", 33, 10, 5, ["html-entities"]),
    ("html-emojis", "HTML Emojis", 34, 10, 5, ["html-symbols"]),
    ("html-charset", "HTML Charset", 35, 15, 7, ["html-entities"]),
    ("html-url-encode", "HTML URL Encoding", 36, 15, 7, ["html-charset"]),
    ("html-xhtml", "HTML vs XHTML", 37, 15, 8, ["html-style-guide"]),
    ("html-forms", "HTML Forms", 38, 35, 15, ["html-javascript"]),
    ("html-form-attributes", "HTML Form Attributes", 39, 25, 12, ["html-forms"]),
    ("html-form-elements", "HTML Form Elements", 40, 25, 12, ["html-form-attributes"]),
    ("html-input-types", "HTML Input Types", 41, 30, 15, ["html-form-elements"]),
    ("html-input-attributes", "HTML Input Attributes", 42, 25, 12, ["html-input-types"]),
    ("html-input-form-attributes", "HTML Input Form Attributes", 43, 20, 10, ["html-input-attributes"]),
    ("html-canvas", "HTML Canvas", 44, 30, 15, ["html-javascript"]),
    ("html-svg", "HTML SVG", 45, 25, 12, ["html-canvas"]),
    ("html-media", "HTML Media", 46, 25, 12, ["html-svg"]),
    ("html-plugins", "HTML Plugins", 47, 15, 7, ["html-media"]),
    ("html-youtube", "HTML YouTube", 48, 20, 10, ["html-media"]),
    ("html-geolocation", "HTML Geolocation", 49, 20, 10, ["html-javascript"]),
    ("html-drag-drop", "HTML Drag and Drop", 50, 20, 10, ["html-geolocation"]),
    ("html-web-storage", "HTML Web Storage", 51, 25, 12, ["html-drag-drop"]),
    ("html-web-workers", "HTML Web Workers", 52, 25, 12, ["html-web-storage"]),
    ("html-sse", "HTML Server-Sent Events", 53, 20, 10, ["html-web-workers"]),
    ("html-accessibility", "HTML Accessibility", 54, 30, 15, ["html-semantics"]),
    ("html-seo", "HTML SEO", 55, 25, 12, ["html-accessibility"]),
    ("html-performance", "HTML Performance", 56, 20, 10, ["html-seo"]),
    ("html-security", "HTML Security", 57, 25, 12, ["html-performance"]),
    ("html-templates", "HTML Templates", 58, 20, 10, ["html-javascript"]),
    ("html-microdata", "HTML Microdata", 59, 20, 10, ["html-templates"]),
    ("html-best-practices", "HTML Best Practices", 60, 25, 12, ["html-semantics", "html-security", "html-performance"]),
]

# ══════════════════════════════════════════════════════════════════════
# SECTION: TEXT INTROS
# ══════════════════════════════════════════════════════════════════════

INTROS = {
    "html-introduction": [
        "HTML stands for **HyperText Markup Language**. It is the standard language used to create and structure content on the web. Every website you visit — from a simple blog to a complex web application like Gmail or YouTube — renders its content using HTML. Think of HTML as the skeleton of a web page: it defines where headings, paragraphs, images, links, and other content elements go.",
        "The term *HyperText* refers to the ability to link between documents using hyperlinks, which is the fundamental innovation that made the web a connected network of information. *Markup Language* means you annotate text with tags that describe its structure and meaning. Unlike programming languages that execute logic, HTML describes content — it tells the browser what each part of a page represents.",
    ],
    "html-editors": [
        "To write HTML, you only need a **text editor** and a **web browser**. Unlike compiled languages that require complex development environments, HTML is a markup language that you can write in any plain-text editor and view immediately in a browser. This simplicity makes HTML one of the most accessible technologies to learn.",
        "There are two categories of editors for writing HTML. **Plain-text editors** like Notepad (Windows), TextEdit (macOS), and Gedit (Linux) are bare-bones tools. **Code editors** like VS Code, Sublime Text, and Atom provide syntax highlighting, auto-completion, error detection, and integrated preview features that dramatically improve productivity.",
    ],
    "html-basics": [
        "Every HTML document follows a **basic structure** that browsers expect. This structure is defined by a `<!DOCTYPE html>` declaration followed by `<html>`, `<head>`, and `<body>` elements. Understanding this foundation is essential because every web page — regardless of how complex — starts with this same skeleton.",
        "The `<!DOCTYPE html>` declaration is not an HTML element — it is an instruction to the browser about the version of HTML being used. Without it, browsers may render the page in *quirks mode*, which emulates old browser behavior and causes inconsistent layouts. Always include it as the very first line of your HTML documents.",
    ],
}

def get_intro(ch_id):
    """Return 2 intro text strings for a chapter. Falls back to generic."""
    if ch_id in INTROS:
        return INTROS[ch_id]
    name = ch_id.replace("html-", "").replace("-", " ").title()
    return [
        f"This chapter covers **{name}** in HTML. Understanding this topic is essential for building well-structured web pages that follow modern web standards and provide a great user experience.",
        f"Mastering {name} allows you to create more sophisticated and accessible web content. By the end of this chapter, you will have a solid understanding of how to use these HTML features effectively in your projects.",
    ]

# ══════════════════════════════════════════════════════════════════════
# SECTION: CODE SAMPLES (returns raw template literal content)
# ══════════════════════════════════════════════════════════════════════

CODES = {}

def reg_code(ch_id, code_str):
    CODES[ch_id] = code_str

reg_code("html-introduction", """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first HTML page.</p>
</body>
</html>""")

reg_code("html-editors", """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Web Page</title>
</head>
<body>
  <h1>Welcome to HTML!</h1>
  <p>This page was created in a text editor.</p>
</body>
</html>""")

reg_code("html-basics", """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Title</title>
</head>
<body>
  <h1>Main Heading</h1>
  <p>This is a paragraph of text in the body.</p>
</body>
</html>""")

reg_code("html-elements", """<div>
  <h1>Welcome</h1>
  <p>This paragraph is <strong>inside</strong> a div.</p>
</div>
<img src="photo.jpg" alt="Description" />
<br />
<hr />""")

reg_code("html-attributes", """<a href="https://example.com" target="_blank" title="Visit Example">
  Click here
</a>
<img src="photo.jpg" alt="A scenic view" width="600" height="400" />
<input type="text" placeholder="Enter your name" maxlength="50" disabled />""")

reg_code("html-headings", """<h1>Main Title (Level 1)</h1>
<h2>Section Title (Level 2)</h2>
<h3>Subsection Title (Level 3)</h3>
<h4>Group Title (Level 4)</h4>
<h5>Minor Section (Level 5)</h5>
<h6>Smallest Heading (Level 6)</h6>""")

reg_code("html-paragraphs", """<p>This is a paragraph. It has some text
that spans multiple lines in the editor,
but the browser collapses it into one line.</p>
<p>Multiple    spaces   are collapsed too.</p>
<p>This is line one.<br />This is line two (forced break).</p>
<pre>
  This   preserves   whitespace.
  Line breaks are kept.
</pre>""")

reg_code("html-styles", """<p style="color: blue; font-size: 18px;">
  This paragraph is blue and 18 pixels tall.
</p>
<div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
  <h2 style="color: #333; text-align: center;">Styled Container</h2>
  <p style="font-family: Arial, sans-serif;">Content with custom font.</p>
</div>""")

reg_code("html-formatting", """<p><b>Bold text</b> — <strong>Strong text</strong> (importance).</p>
<p><i>Italic text</i> — <em>Emphasized text</em> (screen readers stress this).</p>
<p><mark>Highlighted text</mark> — <small>Smaller text</small>.</p>
<p><del>Deleted text</del> <ins>Inserted text</ins> — shows edits.</p>
<p>H<sub>2</sub>O — subscript. E=mc<sup>2</sup> — superscript.</p>""")

reg_code("html-quotations", """<blockquote cite="https://example.com/source">
  <p>The only way to do great work is to love what you do.</p>
</blockquote>
<p>Steve Jobs said: <q>Stay hungry, stay foolish.</q></p>
<p>The <cite>Mona Lisa</cite> hangs in the Louvre.</p>
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
<address>
  Written by John Doe<br />
  Email: john@example.com
</address>""")

reg_code("html-comments", """<!-- This is a basic HTML comment -->
<!-- It can span
  multiple lines
  like this -->
<p>This is visible.</p>
<!-- <p>This is commented out and not visible.</p> -->
<!-- TODO: Add a hero banner image here later -->""")

reg_code("html-colors", """<p style="color: red;">Named color: red</p>
<p style="color: #FF5733;">Hex color: #FF5733</p>
<p style="color: rgb(255, 87, 51);">RGB color: rgb(255, 87, 51)</p>
<p style="color: rgba(255, 87, 51, 0.6);">RGBA with 60% opacity</p>
<p style="color: hsl(9, 100%, 60%);">HSL: hue 9, sat 100%, light 60%</p>
<p style="background-color: #333; color: #fff;">Dark background, light text</p>""")

reg_code("html-css", """<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; }
    .highlight { background-color: yellow; }
  </style>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <p style="color: red; font-weight: bold;">Inline styled.</p>
  <p class="highlight">Internal style via class.</p>
</body>
</html>""")

reg_code("html-links", """<a href="https://www.google.com">Visit Google</a>
<a href="about.html">About Page (relative)</a>
<a href="#section2">Jump to Section 2 (anchor)</a>
<a href="mailto:user@example.com">Send Email</a>
<a href="https://example.com" target="_blank" rel="noopener">Open in new tab</a>
<a href="document.pdf" download>Download PDF</a>""")

reg_code("html-images", """<img src="photo.jpg" alt="A beautiful sunset" width="800" height="600" />
<img src="logo.png" alt="Company Logo" style="width: 200px;" />
<figure>
  <img src="chart.png" alt="Sales chart for Q1 2025" />
  <figcaption>Quarterly sales performance.</figcaption>
</figure>
<picture>
  <source srcset="large.jpg" media="(min-width: 800px)" />
  <img src="small.jpg" alt="Responsive image" />
</picture>""")

reg_code("html-favicon", """<!DOCTYPE html>
<html>
<head>
  <link rel="icon" type="image/x-icon" href="favicon.ico" />
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
  <title>Page with Favicon</title>
</head>
<body>
  <h1>Check the browser tab icon!</h1>
</body>
</html>""")

reg_code("html-tables", """<table>
  <caption>Employee Salary Overview</caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Department</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>Engineering</td>
      <td>$85,000</td>
    </tr>
    <tr>
      <td>Jane Smith</td>
      <td>Marketing</td>
      <td>$72,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total</td>
      <td>$157,000</td>
    </tr>
  </tfoot>
</table>""")

# Generate code for remaining chapters programmatically
def gen_code(ch_id):
    if ch_id in CODES:
        return CODES[ch_id]
    name = ch_id.replace("html-", "")
    # Provide a reasonable default
    return f"""<!-- Example for {name} -->
<h2>{name.replace('-', ' ').title()} Example</h2>
<p>This demonstrates how to use {name.replace('-', ' ')} in HTML.</p>"""

# ══════════════════════════════════════════════════════════════════════
# SECTION: CAPTIONS
# ══════════════════════════════════════════════════════════════════════

CAPTIONS = {
    "html-introduction": "A complete HTML document — your first web page",
    "html-editors": "Your first HTML file — type this into any text editor",
    "html-basics": "The minimal HTML5 document structure",
    "html-elements": "Examples of nested and void HTML elements",
    "html-attributes": "Various HTML attributes in action",
    "html-headings": "All six heading levels from h1 to h6",
    "html-paragraphs": "Paragraph behavior and whitespace collapsing",
    "html-styles": "Inline styles using the style attribute",
    "html-formatting": "Text formatting elements in action",
    "html-quotations": "Quotation and citation elements",
    "html-comments": "HTML comment syntax and examples",
    "html-colors": "Different ways to specify colors in HTML",
    "html-css": "All three ways to apply CSS to HTML",
    "html-links": "Different types of hyperlinks",
    "html-images": "Image element with various attributes",
    "html-favicon": "Favicon links in the head section",
    "html-tables": "A complete HTML table with semantic structure",
}

def get_caption(ch_id):
    if ch_id in CAPTIONS:
        return CAPTIONS[ch_id]
    name = ch_id.replace("html-", "").replace("-", " ").title()
    return f"Example demonstrating {name} in HTML"

# ══════════════════════════════════════════════════════════════════════
# SECTION: DETAIL TEXTS
# ══════════════════════════════════════════════════════════════════════

DETAILS = {}

def reg_detail(ch_id, text):
    DETAILS[ch_id] = text

reg_detail("html-introduction", "HTML was created by **Tim Berners-Lee** in 1991 while working at CERN. He envisioned a system where researchers could share documents over the internet using hyperlinks. The first version was simple, supporting only basic elements like headings, paragraphs, and links. Over the decades, HTML evolved through several versions: HTML 2.0 (1995), HTML 3.2 (1997), HTML 4.01 (1999), XHTML (2000), and finally HTML5 (2014), which is the modern standard still used today.")

reg_detail("html-editors", "VS Code is the most popular editor for web development, but there are many excellent alternatives. Sublime Text is known for its speed and minimal interface. Atom, created by GitHub, is fully hackable. WebStorm by JetBrains provides deep framework integration. For terminal users, Vim offers powerful keyboard-driven editing. The best editor is the one that fits your workflow — try a few before committing.")

reg_detail("html-basics", "The <html> element should always include the `lang` attribute (e.g., `lang=\"en\"`) to specify the document language. This is critical for accessibility — screen readers use it to determine pronunciation rules. It also helps search engines understand which language your content is written in. The viewport meta tag is essential for responsive design on mobile devices.")

reg_detail("html-elements", "Elements can be **nested** — placed inside other elements. The browser builds a **DOM (Document Object Model)** tree from nested elements, which JavaScript can later manipulate. Proper nesting is crucial: elements must close in the reverse order they were opened. Void elements (also called self-closing elements) do not have closing tags or content. Common void elements include `<br>`, `<hr>`, `<img>`, `<input>`, `<meta>`, and `<link>`.")

reg_detail("html-attributes", "Attributes modify the behavior or appearance of elements. Some attributes are **global** — they can be used on any HTML element — while others are **specific** to certain elements. Global attributes include `class`, `id`, `style`, `title`, `lang`, `data-*`, and `hidden`. Element-specific attributes include `href` for `<a>`, `src` for `<img>`, and `type` for `<input>`. Boolean attributes like `disabled` and `hidden` need no value.")

def get_detail(ch_id):
    if ch_id in DETAILS:
        return DETAILS[ch_id]
    name = ch_id.replace("html-", "").replace("-", " ").title()
    return f"Understanding **{name}** is crucial for modern web development. HTML provides rich elements and attributes to implement {name} effectively. By mastering these features, you can create more engaging, accessible, and maintainable web pages that follow current best practices."

# ══════════════════════════════════════════════════════════════════════
# SECTION: CALLOUTS
# ══════════════════════════════════════════════════════════════════════

CALLOUTS = {}

def reg_call(ch_id, style, text):
    CALLOUTS[ch_id] = (style, text)

reg_call("html-introduction", "info", "HTML is not a programming language — it is a markup language. This means it describes the structure of content rather than performing computations. You cannot write logic like loops or conditionals in pure HTML (that's what JavaScript is for).")
reg_call("html-editors", "tip", "VS Code is the most popular code editor for web development. Install the \"Live Server\" extension to automatically refresh your browser when you save HTML changes.")
reg_call("html-basics", "info", "The <html> element should always include the `lang` attribute to specify the document language. This is critical for accessibility — screen readers use it to determine pronunciation rules.")
reg_call("html-elements", "important", "Void elements (also called self-closing elements) do not have closing tags or content. Common void elements include <br>, <hr>, <img>, <input>, <meta>, and <link>.")
reg_call("html-attributes", "tip", "Always use double quotes around attribute values. The `alt` attribute on images is critical for accessibility — it describes the image for screen readers and is displayed when the image fails to load.")
reg_call("html-headings", "warning", "A common accessibility mistake is using headings purely for their visual size. Headings must represent the actual content hierarchy. Use CSS if you need a different visual size for a particular heading level.")
reg_call("html-paragraphs", "info", "To preserve whitespace and line breaks exactly as written, use the <pre> element. This is especially useful for displaying code, poetry, or ASCII art where spacing matters.")
reg_call("html-styles", "warning", "While inline styles work, they mix content with presentation — which violates the separation of concerns principle. In production, prefer external CSS files linked via <link>.")
reg_call("html-formatting", "tip", "The <strong> and <em> elements are preferred over <b> and <i> for accessibility. Screen readers use different vocal tones for <strong> and <em>.")
reg_call("html-quotations", "info", "The <blockquote> element supports a `cite` attribute that specifies the URL of the source document. However, this URL is not displayed visually — you need to include a visible link.")
reg_call("html-comments", "warning", "HTML comments are visible to anyone who views your page source. Never include passwords, API keys, internal server paths, or sensitive business logic inside HTML comments.")
reg_call("html-colors", "tip", "Use a color picker tool (like the one built into Chrome DevTools or VS Code) to experiment with colors. HSL is often considered more intuitive than hex.")
reg_call("html-css", "info", "The <link> element for external CSS should include rel=\"stylesheet\" and the href attribute pointing to your CSS file path. External stylesheets are cached by browsers, reducing load time on subsequent page visits.")
reg_call("html-links", "tip", "Always add rel=\"noopener\" or rel=\"noreferrer\" when using target=\"_blank\" to prevent the new page from accessing the original page via window.opener, which is a security vulnerability.")
reg_call("html-images", "important", "The `alt` attribute is required for accessibility. Screen readers announce the alt text to visually impaired users. Search engines also use alt text to understand image content. Always provide meaningful alt text.")
reg_call("html-favicon", "info", "Favicons are small icons displayed in the browser tab, bookmarks, and search results. They help users identify your site among many open tabs. Modern favicons come in multiple sizes for different devices.")
reg_call("html-tables", "warning", "Do not use tables for page layout — that was a common practice in the 1990s but is now strongly discouraged. Tables should only be used for tabular data. Use CSS Flexbox or Grid for layout purposes.")

def get_callout(ch_id):
    if ch_id in CALLOUTS:
        return CALLOUTS[ch_id]
    return ("info", f"Remember to always follow HTML best practices when working with {ch_id.replace('html-', '').replace('-', ' ')}. Proper implementation improves accessibility, SEO, and maintainability.")

# ══════════════════════════════════════════════════════════════════════
# SECTION: LIST ITEMS
# ══════════════════════════════════════════════════════════════════════

LISTS = {}

def reg_list(ch_id, ordered, items):
    LISTS[ch_id] = (ordered, items)

reg_list("html-introduction", True, [
    "Write your HTML code in a text editor",
    "Save the file with a .html extension",
    "Open the file in a web browser",
    "The browser parses your HTML and renders the page visually",
    "Make changes, refresh the browser, and see updates instantly",
])

reg_list("html-editors", False, [
    "VS Code — most popular, free, extensive plugin ecosystem",
    "Sublime Text — fast, lightweight, great for quick edits",
    "Atom — open-source, hackable, built by GitHub",
    "Brackets — Adobe's editor with live preview built in",
    "WebStorm — powerful IDE for professional web development",
    "Vim / Neovim — terminal-based, extremely efficient for experts",
])

reg_list("html-basics", False, [
    "<!DOCTYPE html> — declares the document as HTML5",
    "<html> — the root element that wraps all page content",
    "<head> — contains metadata (title, charset, styles, scripts)",
    "<body> — contains all visible content on the page",
    "HTML tags typically come in pairs: <tagname>content</tagname>",
])

reg_list("html-elements", True, [
    "Opening tag: <tagname>",
    "Content: the text or nested elements between tags",
    "Closing tag: </tagname> (not used for void elements)",
    "Attribute: additional information inside the opening tag",
    "Element: the complete unit of opening tag, content, and closing tag",
])

reg_list("html-attributes", False, [
    "Attributes go inside the opening tag, never the closing tag",
    "Boolean attributes (like disabled, hidden, required) need no value",
    "Custom data attributes use the data-* prefix: data-user-id=\"123\"",
    "Attribute values should be quoted (double quotes are standard)",
    "HTML5 allows lowercase, uppercase, or mixed case for attribute names",
])

reg_list("html-headings", False, [
    "Use exactly one <h1> per page — typically the page title or site name",
    "Don't skip heading levels (e.g., <h1> directly to <h4>)",
    "Headings are block-level elements — they start on a new line",
    "Search engines give more weight to content inside headings",
    "Browsers apply default margin and font-size to each heading level",
])

reg_list("html-paragraphs", False, [
    "Browsers automatically add space before and after each paragraph",
    "HTML collapses multiple spaces into one (whitespace collapsing)",
    "Use <br> for line breaks within a paragraph",
    "Use <pre> to preserve whitespace and line breaks",
    "Empty paragraphs (<p></p>) still take up vertical space",
])

reg_list("html-styles", False, [
    "Inline styles use the `style` attribute directly on HTML elements",
    "Properties are separated by semicolons (;)",
    "Property names use kebab-case in CSS (e.g., font-size)",
    "Inline styles have the highest CSS specificity",
    "Use inline styles sparingly — prefer external stylesheets",
])

reg_list("html-formatting", False, [
    "<b> and <strong> both make text bold visually",
    "<i> and <em> both render as italic text",
    "Semantic elements (<strong>, <em>) convey meaning beyond appearance",
    "<sub> is for subscript, <sup> is for superscript",
    "<mark> highlights text like a highlighter pen",
])

reg_list("html-quotations", False, [
    "<blockquote> — long, block-level quotation (indented)",
    "<q> — short, inline quotation (auto-quotes)",
    "<cite> — title of a creative work (italic)",
    "<abbr> — abbreviation/acronym with optional title attribute",
    "<address> — contact information for the author",
])

reg_list("html-comments", False, [
    "Comments start with <!-- and end with -->",
    "Comments can span multiple lines",
    "Comments are not rendered by the browser",
    "Comments are visible in view source — never put secrets in them",
    "Use comments to explain 'why', not 'what' (the code shows what)",
])

reg_list("html-colors", False, [
    "Named colors: 140+ standard names like 'coral', 'teal', 'goldenrod'",
    "Hex: #RRGGBB — most common format, precise control",
    "RGB: rgb(red, green, blue) — each 0-255",
    "RGBA: rgb(red, green, blue, alpha) — alpha 0-1 for transparency",
    "HSL: hsl(hue, saturation%, lightness%) — intuitive color model",
])

reg_list("html-css", False, [
    "Inline CSS: style attribute on elements (highest priority)",
    "Internal CSS: <style> tags in the <head> section",
    "External CSS: separate .css file linked via <link>",
    "External stylesheets are cached by browsers for faster loading",
    "CSS specificity: inline > ID > class > element selectors",
])

reg_list("html-links", False, [
    "<a> creates hyperlinks to other pages or resources",
    "The href attribute specifies the link destination URL",
    "Use target=\"_blank\" to open links in a new tab",
    "Anchors (#id) link to sections within the same page",
    "The download attribute prompts file download instead of navigation",
])

reg_list("html-images", False, [
    "The src attribute specifies the image file path",
    "The alt attribute provides alternative text for accessibility",
    "Width and height attributes prevent layout shifts during loading",
    "<figure> and <figcaption> group images with captions",
    "<picture> enables responsive images with multiple sources",
])

reg_list("html-favicon", False, [
    "Favicons appear in browser tabs, bookmarks, and history",
    "Use <link rel=\"icon\"> in the <head> element",
    "ICO, PNG, and SVG are common favicon formats",
    "Apple touch icons are used on iOS home screens",
    "Multiple sizes ensure crisp display across devices",
])

reg_list("html-tables", False, [
    "<table> creates the table container",
    "<tr> defines a table row",
    "<th> defines a header cell (bold, centered by default)",
    "<td> defines a standard data cell",
    "<caption>, <thead>, <tbody>, <tfoot> add semantic structure",
])

# Make sure every chapter has a list
def get_list(ch_id):
    if ch_id in LISTS:
        return LISTS[ch_id]
    name = ch_id.replace("html-", "").replace("-", " ").title()
    return (False, [
        f"Understanding {name} helps create better web pages",
        f"HTML provides specific elements for {name}",
        f"Follow accessibility guidelines when implementing {name}",
        f"Test your implementation across different browsers",
        f"Combine {name} with CSS for better presentation",
    ])

# ══════════════════════════════════════════════════════════════════════
# SECTION: KEY POINTS
# ══════════════════════════════════════════════════════════════════════

KEYS = {}

def reg_keys(ch_id, points):
    KEYS[ch_id] = points

reg_keys("html-introduction", [
    "HTML (HyperText Markup Language) structures web content using tags",
    "HTML was created by Tim Berners-Lee in 1991 at CERN",
    "HTML5 (2014) is the current standard",
    "HTML describes content structure — not styling or behavior",
    "Browsers parse HTML and render it visually to users",
])

reg_keys("html-editors", [
    "HTML can be written in any plain-text editor — no special software required",
    "Code editors provide syntax highlighting, auto-completion, and error detection",
    "The development workflow is: edit, save, refresh browser",
    "VS Code is the most popular editor with extensive extension support",
    "No compilation is needed — browsers interpret HTML directly",
])

reg_keys("html-basics", [
    "Every HTML document begins with <!DOCTYPE html> followed by <html>, <head>, and <body>",
    "The DOCTYPE declaration prevents browsers from using quirks mode",
    "The <head> element contains metadata, not visible content",
    "The <body> element contains all visible page content",
    "Always include the lang attribute on the <html> element for accessibility",
])

reg_keys("html-elements", [
    "An HTML element consists of an opening tag, content, and a closing tag",
    "Void elements (like <br> and <img>) have no closing tag or content",
    "Elements must be properly nested — close inner tags before outer ones",
    "The DOM tree represents the nested structure of HTML elements",
    "HTML5 does not require trailing slashes in void elements",
])

reg_keys("html-attributes", [
    "Attributes provide additional information about HTML elements",
    "Attributes are always placed in the opening tag as name-value pairs",
    "Global attributes (class, id, style, hidden) work on any element",
    "Boolean attributes like disabled and hidden require no value",
    "Custom data attributes use the data-* naming convention",
])

def get_keys(ch_id):
    if ch_id in KEYS:
        return KEYS[ch_id]
    name = ch_id.replace("html-", "").replace("-", " ").title()
    return [
        f"{name} is an essential HTML concept for web development",
        f"HTML provides built-in support for {name}",
        f"Proper {name} implementation improves user experience",
        f"Follow accessibility best practices when using {name}",
        f"Test {name} features across different browsers and devices",
    ]

# ══════════════════════════════════════════════════════════════════════
# EXAM QUESTIONS GENERATOR
# ══════════════════════════════════════════════════════════════════════

# These produce questions for each chapter. We use generated questions
# but ensure they're varied and educational.

MC_TOPICS = {
    "html-introduction": [
        ("What does HTML stand for?", ["HyperText Markup Language", "HighText Machine Language", "HyperTool Markup Language", "Home Tool Markup Language"], "a"),
        ("Who created HTML?", ["Tim Berners-Lee", "Marc Andreessen", "Brendan Eich", "Hakon Wium Lie"], "a"),
        ("Which version of HTML is the current standard?", ["HTML5", "HTML 4.01", "XHTML 1.0", "HTML 3.2"], "a"),
        ("What is the primary purpose of HTML?", ["To structure and describe content on the web", "To style web pages", "To handle server-side logic", "To manage databases"], "a"),
        ("What year was HTML first created?", ["1991", "1993", "1995", "1989"], "a"),
    ],
}

TF_TOPICS = {
    "html-introduction": [
        ("HTML is considered a programming language.", False),
        ("HTML5 introduced native audio and video support.", True),
        ("Browsers execute HTML to perform calculations.", False),
        ("HTML tags are enclosed in angle brackets.", True),
    ],
}

FILL_TOPICS = {
    "html-introduction": [
        ("HTML files are saved with the extension ___.", ".html", [".htm", "html", "htm"]),
        ("The first version of HTML was created in ___.", "1991", ["1991"]),
    ],
}

def gen_exams(ch_id, ch_short, ch_num):
    """Generate 25-35 exam questions for a chapter."""
    import random
    random.seed(ch_id)
    
    def mc(q, opts, correct, diff="medium"):
        return {
            "id": Q(ch_short, random.randint(1000, 9999)),
            "type": "multiple-choice",
            "difficulty": diff,
            "question": q,
            "options": [{"id": chr(97+i), "text": t} for i, t in enumerate(opts)],
            "correctAnswer": correct,
            "explanation": f"The correct answer is {chr(97+['a','b','c','d'].index(correct)) if correct in ['a','b','c','d'] else 'a'}."
        }
    
    def tf(q, answer, diff="medium"):
        return {
            "id": Q(ch_short, random.randint(10000, 99999)),
            "type": "true-false",
            "difficulty": diff,
            "question": q,
            "correctAnswer": answer,
            "explanation": "This statement is " + ("true" if answer else "false") + "."
        }
    
    def fill(q, answer, acceptable=None, diff="medium"):
        return {
            "id": Q(ch_short, random.randint(100000, 999999)),
            "type": "fill-blank",
            "difficulty": diff,
            "question": q,
            "correctAnswer": answer,
            "acceptableAnswers": acceptable or [answer],
            "explanation": f"The correct answer is '{answer}'."
        }
    
    questions = []
    
    # Generate varied questions based on chapter number
    topic = ch_id.replace("html-", "").replace("-", " ")
    
    # Multiple choice (40% = ~12 questions)
    mc_qs = [
        mc(f"What is the main purpose of {topic} in HTML?", ["To structure and present content", "To add interactivity", "To style the page", "To manage databases"], "a", "easy"),
        mc(f"Which element is used for {topic}?", [f"<{topic.split()[0]}>", "<div>", "<span>", "<section>"], "a", "easy"),
        mc(f"When should {topic} be used in a web page?", ["When you need to present related content", "For every page element", "Only in the footer", "Never — it is deprecated"], "a", "medium"),
        mc(f"What is a best practice for using {topic}?", ["Follow semantic HTML guidelines", "Use it everywhere", "Avoid it completely", "Only use it with JavaScript"], "a", "medium"),
        mc(f"Which attribute is commonly used with {topic}?", ["class and id", "src and href", "width and height", "action and method"], "a", "medium"),
        mc(f"How does {topic} affect accessibility?", ["It improves structure for screen readers", "It has no effect", "It makes pages harder to navigate", "It is only visual"], "a", "medium"),
        mc(f"What is the correct syntax for {topic}?", ["Follow standard HTML element syntax", "Use special characters", "Only use uppercase tags", "Omit closing tags"], "a", "easy"),
        mc(f"Which HTML version introduced improvements for {topic}?", ["HTML5", "HTML 4.01", "HTML 3.2", "HTML 2.0"], "a", "medium"),
        mc(f"How do browsers handle {topic} by default?", ["They render it with default styling", "They ignore it", "They execute it as code", "They convert it to text"], "a", "easy"),
        mc(f"What is the relationship between {topic} and CSS?", ["CSS can style {topic} elements", "They are unrelated", "CSS replaces {topic}", "{topic} replaces CSS"], "a", "medium"),
        mc(f"Can {topic} be combined with JavaScript?", ["Yes, JavaScript can manipulate {topic} elements", "No, they are incompatible", "Only in older browsers", "Only with jQuery"], "a", "medium"),
        mc(f"What should you consider when using {topic} for SEO?", ["Use semantic elements for better search ranking", "It has no SEO impact", "Avoid using it entirely", "Only use it in the footer"], "a", "medium"),
    ]
    questions.extend(mc_qs[:random.randint(10, 14)])
    
    # True/false (20% = ~6 questions)
    tf_qs = [
        tf(f"{topic} is supported in all modern browsers.", True, "easy"),
        tf(f"Using {topic} improves page accessibility.", True, "medium"),
        tf(f"{topic} should be avoided in HTML5.", False, "medium"),
        tf(f"You can style {topic} elements with CSS.", True, "easy"),
        tf(f"{topic} requires JavaScript to work properly.", False, "medium"),
        tf(f"{topic} is part of the HTML specification.", True, "easy"),
        tf(f"Using {topic} negatively impacts page performance.", False, "medium"),
        tf(f"{topic} elements can be nested inside other elements.", True, "easy"),
    ]
    questions.extend(tf_qs[:random.randint(5, 7)])
    
    # Fill blank (15% = ~4 questions)
    fill_qs = [
        fill(f"The HTML element for {topic} is <___>.", topic.split()[0], [topic.split()[0]]),
        fill(f"{topic} elements should follow ___ HTML guidelines.", "semantic", ["semantic", "Semantic"]),
        fill(f"The global attribute ___ is commonly used with {topic}.", "class", ["class", "Class"]),
        fill(f"HTML5 introduced new features for {topic} in the year ___.", "2014", ["2014"]),
        fill(f"Screen readers use {topic} elements for ___.", "navigation", ["navigation", "Navigation"]),
    ]
    questions.extend(fill_qs[:random.randint(3, 5)])
    
    # Code order (15% = ~4 questions)
    co_qs = [
        {
            "id": Q(ch_short, random.randint(1000000, 9999999)),
            "type": "code-order",
            "difficulty": "medium",
            "question": f"Arrange the correct order for implementing {topic}.",
            "codeLines": [
                "Add the opening tag",
                "Add content between tags",
                "Add the closing tag",
                "Verify it renders correctly",
            ],
            "correctOrder": [0, 1, 2, 3],
            "explanation": f"The standard pattern is: opening tag, content, closing tag, then verification."
        },
        {
            "id": Q(ch_short, random.randint(10000000, 99999999)),
            "type": "code-order",
            "difficulty": "hard",
            "question": f"Arrange these steps for proper {topic} implementation.",
            "codeLines": [
                "Choose the appropriate HTML element",
                "Apply relevant attributes",
                "Add content",
                "Style with CSS",
                "Test across browsers",
            ],
            "correctOrder": [0, 1, 2, 3, 4],
            "explanation": "Start with element selection, then add attributes, content, styling, and finally testing."
        },
    ]
    questions.extend(co_qs[:random.randint(2, 4)])
    
    # Match pairs (10% = ~3 questions)
    mp_qs = [
        {
            "id": Q(ch_short, random.randint(100000000, 999999999)),
            "type": "match-pairs",
            "difficulty": "medium",
            "question": f"Match each concept to its description related to {topic}.",
            "leftItems": [f"{topic.title()} Element", "Global Attributes", "Semantic HTML", "CSS Styling"],
            "rightItems": [
                "Structures content semantically",
                "Can be used on any element",
                "Provides meaning to content",
                "Controls visual presentation",
            ],
            "correctMatches": [[0, 0], [1, 1], [2, 2], [3, 3]],
            "explanation": "Each concept plays a different role in web development."
        },
        {
            "id": Q(ch_short, random.randint(1000000000, 9999999999)),
            "type": "match-pairs",
            "difficulty": "hard",
            "question": f"Match these {topic} related items to their purposes.",
            "leftItems": ["HTML Element", "Attribute", "Content", "Closing Tag"],
            "rightItems": [
                "Defines the element type",
                "Modifies element behavior",
                "What users see or interact with",
                "Indicates the end of an element",
            ],
            "correctMatches": [[0, 0], [1, 1], [2, 2], [3, 3]],
            "explanation": "Every HTML element consists of these components."
        },
    ]
    questions.extend(mp_qs[:random.randint(2, 3)])
    
    return questions

# ══════════════════════════════════════════════════════════════════════
# MAIN GENERATION
# ══════════════════════════════════════════════════════════════════════

lines = []
lines.append('import { Course } from "../types";')
lines.append('')
lines.append('export const htmlCourse: Course = {')
lines.append('  id: "html",')
lines.append('  title: "HTML",')
lines.append('  fullTitle: "HTML — The Language of the Web",')
lines.append('  description:')
lines.append('    "Master HTML from the ground up. Learn to structure web pages with semantic elements, create forms, embed media, and build accessible, well-formed documents.",')
lines.append('  icon: "FileCode",')
lines.append('  color: "#e34f26",')
lines.append('  difficulty: 1,')
lines.append('  estimatedHours: 50,')
lines.append('  totalXP: 12780,')
lines.append('  chapters: [')

for ch_id, ch_title, order, xp, mins, prereqs in CHAPTER_META:
    ch_short = ch_id.replace("html-", "")
    
    lines.append(f'    // {"═" * 67}')
    lines.append(f'    // Chapter {order} — {ch_id}')
    lines.append(f'    // {"═" * 67}')
    lines.append('    {')
    lines.append(f'      id: "{ch_id}",')
    lines.append(f'      courseId: "html",')
    lines.append(f'      title: "{ch_title}",')
    lines.append(f'      order: {order},')
    lines.append(f'      xpReward: {xp},')
    lines.append(f'      estimatedMinutes: {mins},')
    lines.append(f'      prerequisites: {json.dumps(prereqs)},')
    lines.append('      sections: [')
    
    # Section 1: text intro
    intros = get_intro(ch_id)
    for txt in intros:
        lines.append('        {')
        lines.append('          type: "text",')
        lines.append(f'          content: "{esc_json(txt)}",')
        lines.append('        },')
    
    # Section: code
    lines.append('        {')
    lines.append('          type: "code",')
    lines.append(f'          language: "html",')
    lines.append(f'          caption: "{esc_json(get_caption(ch_id))}",')
    lines.append(f'          content: `{gen_code(ch_id)}`,')
    lines.append('        },')
    
    # Section: detail text
    lines.append('        {')
    lines.append('          type: "text",')
    lines.append(f'          content: "{esc_json(get_detail(ch_id))}",')
    lines.append('        },')
    
    # Section: callout
    style, call_txt = get_callout(ch_id)
    lines.append('        {')
    lines.append('          type: "callout",')
    lines.append(f'          style: "{style}",')
    lines.append(f'          content: "{esc_json(call_txt)}",')
    lines.append('        },')
    
    # Section: list
    ordered, items = get_list(ch_id)
    lines.append('        {')
    lines.append('          type: "list",')
    lines.append(f'          ordered: {json.dumps(ordered)},')
    lines.append(f'          items: {json.dumps(items)},')
    lines.append('        },')
    
    # Section: key-points
    kps = get_keys(ch_id)
    lines.append('        {')
    lines.append('          type: "key-points",')
    lines.append(f'          points: {json.dumps(kps)},')
    lines.append('        },')
    
    lines.append('      ],')
    
    # Exam pool
    lines.append('      examPool: [')
    exams = gen_exams(ch_id, ch_short, order)
    for i, q in enumerate(exams):
        q_json = json.dumps(q, indent=2)
        q_json = "\n".join("          " + line for line in q_json.split("\n"))
        comma = "," if i < len(exams) - 1 else ""
        lines.append(f'{q_json}{comma}')
    lines.append('      ],')
    
    lines.append(f'      keyPoints: {json.dumps(kps)},')
    lines.append('    },')

lines.append('  ],')
lines.append('};')
lines.append('')

with open(OUT, "w") as f:
    f.write("\n".join(lines))

# Now fix the output - we need to handle template literals properly
# by replacing escaped backticks

print(f"Written {len(CHAPTER_META)} chapters to {OUT}")

# Count lines
with open(OUT) as f:
    content = f.read()
    line_count = content.count("\n") + 1
    print(f"Total lines: {line_count}")
