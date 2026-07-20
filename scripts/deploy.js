const fs = require('fs');
const path = require('path');

const srcDir = process.cwd();
const excludeDirs = new Set(['node_modules', '.next', '.git', '.vercel']);

function getAllFiles(dir) {
  const result = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (!excludeDirs.has(entry.name) && !entry.name.startsWith('.')) {
          result.push(...getAllFiles(full));
        }
      } else if (entry.isFile() && !entry.name.startsWith('.')) {
        result.push(full);
      }
    }
  } catch {}
  return result;
}

const files = getAllFiles('.');
console.log(JSON.stringify({ count: files.length, files }));
