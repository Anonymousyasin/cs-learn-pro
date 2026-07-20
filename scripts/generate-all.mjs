#!/usr/bin/env node
// generate-all.mjs — generate ALL 5 course data files at build time
// Run as: node scripts/generate-all.mjs (called from "prebuild" in package.json)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "src", "lib", "courses");

// ─── Course Definitions ──────────────────────────────────────────
const courses = [
  {
    id: "html", title: "HTML", fullTitle: "HTML — The Language of the Web",
    desc: "Master HTML from the ground up. Learn to structure web pages with semantic elements, create forms, embed media, and build accessible, well-formed documents.",
    icon: "FileCode", color: "#f97316", difficulty: 1, hours: 40,
    chapters: [
      "HTML Introduction","HTML Editors","HTML Basics","HTML Elements","HTML Attributes","HTML Headings","HTML Paragraphs","HTML Styles","HTML Formatting","HTML Quotations",
      "HTML Comments","HTML Colors","HTML CSS","HTML Links","HTML Images","HTML Favicon","HTML Tables","HTML Lists","HTML Block & Inline","HTML Div",
      "HTML Classes","HTML ID","HTML Iframes","HTML JavaScript","HTML File Paths","HTML Head","HTML Layout","HTML Responsive","HTML Semantics","HTML Style Guide",
      "HTML Entities","HTML Symbols","HTML Emojis","HTML Charset","HTML URL Encoding","HTML Forms","HTML Form Attributes","HTML Form Elements","HTML Input Types","HTML Input Attributes",
      "HTML Canvas","HTML SVG","HTML Media","HTML Video","HTML Audio","HTML YouTube","HTML Drag/Drop","HTML Web Storage","HTML Web Workers","HTML SSE",
      "HTML Accessibility","HTML SEO","HTML Performance","HTML Security","HTML Templates","HTML Microdata","HTML Best Practices","HTML APIs","HTML History","HTML What's New",
    ]
  },
  {
    id: "css", title: "CSS", fullTitle: "CSS — Styling the Web",
    desc: "From selectors to animations, learn to craft beautiful, responsive layouts with modern CSS including Flexbox, Grid, and CSS custom properties.",
    icon: "Palette", color: "#38bdf8", difficulty: 1, hours: 45,
    chapters: [
      "CSS Introduction","CSS Syntax","CSS Selectors","CSS How To Add","CSS Comments","CSS Colors","CSS Backgrounds","CSS Borders","CSS Margins","CSS Padding",
      "CSS Height/Width","CSS Box Model","CSS Outline","CSS Text","CSS Fonts","CSS Icons","CSS Links","CSS Lists","CSS Tables","CSS Display",
      "CSS Max-width","CSS Position","CSS Z-index","CSS Overflow","CSS Float","CSS Inline-block","CSS Align","CSS Combinators","CSS Pseudo-classes","CSS Pseudo-elements",
      "CSS Opacity","CSS Dropdowns","CSS Image Gallery","CSS Image Sprites","CSS Attr Selectors","CSS Forms","CSS Counters","CSS Layout Float","CSS Layout Flexbox","CSS Layout Grid",
      "CSS Units","CSS Specificity","CSS !important","CSS Math Functions","CSS Rounded Corners","CSS Border Images","CSS Gradients","CSS Shadows","CSS Text Effects","CSS 2D Transforms",
      "CSS 3D Transforms","CSS Transitions","CSS Animations","CSS Tooltips","CSS Image Filters","CSS Masking","CSS Buttons","CSS Pagination","CSS Multi-column","CSS Variables",
      "CSS @property","CSS Box Sizing","CSS Media Queries","CSS Responsive","CSS Viewport","CSS Frameworks","CSS Advanced Grid","CSS Container Queries","CSS Color Functions","CSS Nesting",
    ]
  },
  {
    id: "javascript", title: "JavaScript", fullTitle: "JavaScript — Bringing Pages to Life",
    desc: "The most versatile programming language. From variables to async/await, closures to classes, DOM manipulation to modern ES modules.",
    icon: "Code2", color: "#eab308", difficulty: 2, hours: 55,
    chapters: [
      "JS Introduction","JS Where To","JS Output","JS Syntax","JS Statements","JS Comments","JS Variables","JS Let","JS Const","JS Operators",
      "JS Arithmetic","JS Assignment","JS Comparison","JS Logical","JS If Else","JS Switch","JS Booleans","JS Loops","JS For Loop","JS While Loop",
      "JS Break Continue","JS Data Types","JS Functions","JS Arrow Functions","JS Scope","JS Hoisting","JS Strings","JS String Methods","JS String Search","JS Numbers",
      "JS Number Methods","JS Arrays","JS Array Methods","JS Array Search","JS Array Sort","JS Array Iteration","JS Dates","JS Date Formats","JS Math","JS Random",
      "JS Type Conversion","JS Destructuring","JS Spread","JS Errors","JS Try Catch","JS This","JS Classes","JS Class Inheritance","JS Static","JS Private",
      "JS Modules","JS JSON","JS DOM Intro","JS DOM Selectors","JS DOM Manipulation","JS DOM Events","JS Event Listener","JS Event Bubbling","JS Timing","JS Cookies",
      "JS Fetch API","JS Async","JS Promises","JS Async Await","JS Sets","JS Maps","JS Symbols","JS Iterables","JS Generators","JS Proxies",
      "JS Best Practices","JS Performance","JS Security","JS Testing","JS Modules Advanced","JS Web APIs","JS Service Workers","JS IndexedDB","JS WebSockets","JS Modern Features",
    ]
  },
  {
    id: "python", title: "Python", fullTitle: "Python — Power and Simplicity",
    desc: "Python for everyone. Learn syntax, data structures, OOP, file handling, standard library, and essential packages.",
    icon: "Terminal", color: "#22c55e", difficulty: 2, hours: 40,
    chapters: [
      "Python Intro","Python Getting Started","Python Syntax","Python Comments","Python Variables","Python Data Types","Python Numbers","Python Casting","Python Strings","Python Slicing",
      "Python String Methods","Python Format Strings","Python Booleans","Python Operators","Python Lists","Python List Methods","Python List Comprehension","Python Tuples","Python Sets","Python Dictionaries",
      "Python If Else","Python While","Python For","Python Functions","Python Function Args","Python Lambda","Python Scope","Python Modules","Python Import","Python PIP",
      "Python Try Except","Python User Input","Python File Read","Python File Write","Python File Delete","Python OS Module","Python JSON","Python Dates","Python Math","Python Regex",
      "Python Iterators","Python Generators","Python Decorators","Python Classes","Python Inheritance","Python Polymorphism","Python Magic Methods","Python Itertools","Python Collections","Python Virtual Env",
      "Python NumPy","Python Pandas","Python Matplotlib","Python SQLite","Python CSV","Python Email","Python Threading","Python Subprocess","Python Datetime","Python Best Practices",
    ]
  },
  {
    id: "cs", title: "CS / DSA", fullTitle: "Computer Science & Data Structures",
    desc: "The fundamental science behind computing. Binary, logic gates, data structures, algorithms, complexity theory, and more.",
    icon: "Shield", color: "#a78bfa", difficulty: 3, hours: 35,
    chapters: [
      "What is CS?","Binary Numbers","Hex & Octal","Logic Gates","Boolean Algebra","How CPUs Work","Memory Hierarchy","Data Representation","Algorithms Intro","Algorithm Analysis",
      "Big O Notation","Recursion","Search: Linear","Search: Binary","Sort: Bubble","Sort: Selection","Sort: Insertion","Sort: Merge","Sort: Quick","Sort: Heap",
      "Arrays","Linked Lists","Doubly Linked","Stacks","Queues","Deques","Hash Tables","Hash Collisions","Trees Intro","Binary Trees",
      "BST Operations","Tree Traversals","Heaps","Priority Queues","AVL Trees","Red-Black Trees","Trie","Graphs","Graph Representation","BFS",
      "DFS","Topological Sort","Dijkstra","Bellman-Ford","MST Prim","MST Kruskal","Dynamic Programming","DP: Knapsack","DP: LCS","Greedy Algorithms",
      "P vs NP","NP-Complete","Bit Manipulation","Computer Architecture","Operating Systems","Networking","Databases","Compilers","Distributed Systems","Computability",
    ]
  },
];

// ─── Chapter Content Generators ─────────────────────────────────
// Each generates 10–14 sections with real educational content

function genHtmlSections(chName, idx) {
  const clean = chName.replace("HTML ", "").toLowerCase();
  const s = [];
  const p1 = `HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.`;
  const p2 = `Modern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines.`;

  // Intro
  s.push({ type: "text", content: `## What is ${chName}?\n\n${chName} is a fundamental concept in web development. ${p1}\n\n${p2}` });
  s.push({ type: "key-points", points: [
    `${chName} is essential for structuring web content semantically`,
    `Proper use improves accessibility, SEO, and maintainability`,
    `HTML5 introduced many new semantic elements`,
  ]});

  if (idx % 3 === 0) {
    s.push({ type: "code", language: "html", caption: "Basic structure example:", content: `<!-- ${chName} — Basic Example -->\n<section>\n  <h2>${chName}</h2>\n  <p>This demonstrates the core concepts of ${chName}.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>` });
  } else if (idx % 3 === 1) {
    s.push({ type: "code", language: "html", caption: "Practical usage:", content: `<!-- ${chName} — Common Patterns -->\n<div class="container">\n  <header>\n    <h1>${chName}</h1>\n    <nav aria-label="Main navigation">\n      <ul>\n        <li><a href="#overview">Overview</a></li>\n        <li><a href="#examples">Examples</a></li>\n        ${idx > 20 ? '<li><a href="#advanced">Advanced</a></li>' : ''}\n      </ul>\n    </nav>\n  </header>\n</div>` });
  } else {
    s.push({ type: "code", language: "html", caption: `${chName} — Advanced usage:`, content: `<!-- ${chName} — Best Practices -->\n<article aria-labelledby="title">\n  <h2 id="title">${chName} in Practice</h2>\n  <p>When working with ${chName}, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>` });
  }

  s.push({ type: "text", content: `## Why ${chName} Matters\n\nUnderstanding ${chName} deeply allows you to create more robust, maintainable, and accessible web pages. ${idx % 2 === 0 ? "This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components." : "Mastering this topic will significantly improve your development workflow and the quality of your projects."}` });

  s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** When working with ${chName}, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content.` });

  s.push({ type: "text", content: `## Common Patterns\n\nDevelopers commonly use ${chName} in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements` });

  if (idx % 2 === 0) {
    s.push({ type: "list", ordered: false, items: [
      `${chName} forms the foundation of web page structure`,
      "Always use the most specific semantic element available",
      `Validate your ${chName} with the W3C validator regularly`,
      "Keep accessibility in mind from the start",
      "Use ARIA attributes when semantic HTML alone is insufficient",
    ]});
  } else {
    s.push({ type: "comparison", title: `${chName} — Common Approaches`, headers: ["Aspect", "Best Practice", "Avoid"], rows: [
      ["Structure", "Semantic elements (<article>, <nav>)", "Generic divs everywhere"],
      ["Accessibility", "ARIA labels + semantic HTML", "Only divs and spans"],
      ["SEO", "Proper heading hierarchy", "Skipping heading levels"],
      ["Performance", "Minimal nesting", "Deeply nested divs"],
      ["Maintenance", "Clear class names", "Inline styles everywhere"],
    ]});
  }

  s.push({ type: "callout", style: "warning", content: `⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask yourself: "Is there a more descriptive HTML element I could use here?"` });

  s.push({ type: "text", content: `## Best Practices\n\nFollow these guidelines for ${chName}:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features` });

  s.push({ type: "callout", style: "important", content: `📌 **Remember:** ${chName} is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies.` });

  s.push({ type: "text", content: `## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the ${chName} concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output` });

  return s;
}

function genCssSections(chName, idx) {
  const clean = chName.replace("CSS ", "").toLowerCase();
  const s = [];

  s.push({ type: "text", content: `## Understanding ${chName}\n\n${chName} is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively.` });
  s.push({ type: "key-points", points: [
    `${chName} is fundamental to web styling`,
    `Controls how elements appear and respond to different screen sizes`,
    `Modern CSS offers powerful tools for complex layouts`,
    `Understanding this enables responsive, beautiful designs`,
  ]});

  if (idx % 3 === 0) {
    s.push({ type: "code", language: "css", caption: "Basic syntax:", content: `/* ${chName} — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}` });
  } else if (idx % 3 === 1) {
    s.push({ type: "code", language: "css", caption: `${chName} — Modern approach:`, content: `/* ${chName} with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}` });
  } else {
    s.push({ type: "code", language: "css", caption: `${chName} — Advanced patterns:`, content: `/* ${chName} — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}` });
  }

  s.push({ type: "text", content: `## How ${chName} Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance.` });

  s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues.` });

  if (idx % 2 === 0) {
    s.push({ type: "list", ordered: false, items: [
      `${chName} controls the visual layer of web pages`,
      "CSS specificity determines which rule takes priority",
      "Use CSS custom properties for consistent theming",
      "Responsive design requires media queries and flexible units",
      "Modern CSS eliminates the need for preprocessors in many cases",
    ]});
  } else {
    s.push({ type: "comparison", title: `${chName} — Property Comparison`, headers: ["Property", "Purpose", "Example"], rows: [
      ["display", "Layout behavior", "flex, grid, block, inline"],
      ["position", "Positioning scheme", "relative, absolute, fixed"],
      ["overflow", "Content overflow", "hidden, scroll, auto"],
      ["visibility", "Element visibility", "visible, hidden"],
    ]});
  }

  s.push({ type: "callout", style: "warning", content: `⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable.` });

  s.push({ type: "text", content: `## Browser Compatibility\n\nWhen using ${chName}, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement` });

  s.push({ type: "callout", style: "important", content: `📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible.` });

  return s;
}

function genJsSections(chName, idx) {
  const clean = chName.replace(/^JS\s+/i, "").toLowerCase();
  const s = [];

  s.push({ type: "text", content: `## Understanding ${chName}\n\n${chName} is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with ${chName} effectively in real-world projects.` });
  s.push({ type: "key-points", points: [
    `${chName} is fundamental to JavaScript development`,
    `Understanding it helps prevent common bugs and errors`,
    `Modern JavaScript (ES6+) offers cleaner syntax for this concept`,
    `Master this to write more maintainable and performant code`,
  ]});

  if (idx % 2 === 0) {
    s.push({ type: "code", language: "javascript", caption: `${chName} — Basic example:`, content: `// ${chName} — Getting Started\nfunction demonstrateConcept() {\n  const data = ["learn", "code", "build"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log("Result:", transformed);\n  // Output: ["LEARN", "CODE", "BUILD"]\n}\n\ndemonstrateConcept();` });
  } else {
    s.push({ type: "code", language: "javascript", caption: `${chName} — Practical usage:`, content: `// ${chName} — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };` });
  }

  s.push({ type: "text", content: `## Deep Dive into ${chName}\n\nJavaScript's treatment of ${chName} has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code` });

  s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes.` });

  if (idx % 3 === 0) {
    s.push({ type: "comparison", title: `${chName} — Approach Comparison`, headers: ["Aspect", "Old Way (ES5)", "Modern Way (ES6+)"], rows: [
      ["Declaration", "var x = 1", "let/const x = 1"],
      ["Function", "function() {}", "() => {}"],
      ["String concat", "'a' + b", "\`a \${b}\`"],
      ["Object clone", "Object.assign", "{...obj}"],
    ]});
  } else if (idx % 3 === 1) {
    s.push({ type: "list", ordered: false, items: [
      `${chName} is essential for all JavaScript developers`,
      "Modern syntax reduces boilerplate and bugs",
      "Always use const by default, let when needed",
      "Avoid var in modern code — it has confusing scoping rules",
      "Use === instead of == to avoid type coercion surprises",
    ]});
  } else {
    s.push({ type: "exercise", title: `${chName} Practice`, description: "Apply what you've learned:", instructions: [
      "Write a function that demonstrates this concept",
      "Add appropriate error handling",
      "Test with both expected and edge case inputs",
      "Refactor to use modern JavaScript syntax",
    ], hint: "Start simple, then add sophistication gradually." });
  }

  s.push({ type: "callout", style: "warning", content: `⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior.` });

  s.push({ type: "text", content: `## Debugging Tips\n\nWhen troubleshooting ${chName}:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step` });

  s.push({ type: "callout", style: "important", content: `📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await.` });

  return s;
}

function genPythonSections(chName, idx) {
  const clean = chName.replace(/^Python\s+/i, "").toLowerCase();
  const s = [];

  s.push({ type: "text", content: `## Understanding ${chName}\n\n${chName} is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores ${chName} with practical examples and best practices drawn from real-world Python development.` });
  s.push({ type: "key-points", points: [
    `${chName} follows Python's philosophy of simplicity and readability`,
    "Python's design emphasizes clear, explicit code over clever tricks",
    `Mastering ${chName} helps prevent common Python pitfalls`,
    "Apply these patterns to write more idiomatic Python",
  ]});

  if (idx % 2 === 0) {
    s.push({ type: "code", language: "python", caption: `${chName} — Basic example:`, content: `# ${chName} — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = ["python", "code", "learn"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f"Result: {result}")\n    return result\n\nif __name__ == "__main__":\n    demonstrate_concept()` });
  } else {
    s.push({ type: "code", language: "python", caption: `${chName} — Advanced usage:`, content: `# ${chName} — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f"Error processing: {e}")\n            return []` });
  }

  s.push({ type: "text", content: `## Pythonic Approach to ${chName}\n\nPython has specific idioms for ${chName} that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability` });

  s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints.` });

  if (idx % 2 === 0) {
    s.push({ type: "list", ordered: false, items: [
      `Python's ${chName} follows the principle of least surprise`,
      "Use type hints for better code documentation and IDE support",
      "Prefer list comprehensions over map/filter for readability",
      "Context managers (with statements) handle resources cleanly",
      "Write tests with pytest for reliable, maintainable code",
    ]});
  } else {
    s.push({ type: "comparison", title: `${chName} — Python vs Other Languages`, headers: ["Feature", "Python", "JavaScript/Java"], rows: [
      ["Block scope", "Indentation", "Braces {}"],
      ["Type system", "Dynamic + type hints", "Static or dynamic"],
      ["Lists", "list (mutable)", "Array/ArrayList"],
      ["Dictionary", "dict", "Map/HashMap"],
      ["Error handling", "try/except", "try/catch"],
    ]});
  }

  s.push({ type: "callout", style: "warning", content: `⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body.` });

  s.push({ type: "text", content: `## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis` });

  s.push({ type: "callout", style: "important", content: `📌 **Remember:** Python's "batteries included" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need.` });

  return s;
}

function genCsSections(chName, idx) {
  const s = [];

  s.push({ type: "text", content: `## Understanding ${chName}\n\n${chName} is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. ${chName} plays a key role in this broader picture.` });
  s.push({ type: "key-points", points: [
    `${chName} is a core computer science concept`,
    "Understanding CS fundamentals makes you a better programmer",
    "These concepts apply across all programming languages",
    "CS theory helps in designing efficient, scalable solutions",
  ]});

  if (idx % 2 === 0) {
    s.push({ type: "code", language: "javascript", caption: `${chName} — Implementation:`, content: `// ${chName} — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?` });
  } else {
    s.push({ type: "formula", content: `${chName} has mathematical foundations`, description: "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency." });
  }

  s.push({ type: "text", content: `## Why This Matters\n\n${chName} is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals` });

  s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide.` });

  if (idx % 3 === 0) {
    s.push({ type: "list", ordered: false, items: [
      `${chName} is a building block of computer science`,
      "Understanding algorithms helps you solve problems systematically",
      "Data structures are ways to organize data for efficient access",
      "Time and space complexity guide implementation choices",
      "Practice implementing data structures from scratch",
    ]});
  } else if (idx % 3 === 1) {
    s.push({ type: "comparison", title: `${chName} — Key Comparisons`, headers: ["Aspect", "Approach A", "Approach B"], rows: [
      ["Time complexity", "O(n) — Linear", "O(log n) — Logarithmic"],
      ["Space", "In-place", "Extra memory needed"],
      ["Stability", "Preserves order", "May reorder"],
      ["Best case", "Already sorted", "Random order"],
    ]});
  } else {
    s.push({ type: "exercise", title: `${chName} Practice Problem`, description: "Test your understanding:", instructions: [
      "Implement this concept from scratch",
      "Analyze its time and space complexity",
      "Test with various input sizes",
      "Compare your implementation with standard library versions",
    ], hint: "Start with a brute-force approach, then optimize." });
  }

  s.push({ type: "callout", style: "warning", content: `⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: "Is this data large enough for the choice to matter?" Often, a simple solution is all you need.` });

  s.push({ type: "text", content: `## Further Study\n\nTo deepen your understanding of ${chName}:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain` });

  s.push({ type: "callout", style: "important", content: `📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart.` });

  return s;
}

// ─── Exam Question Generators ────────────────────────────────────
function genHtmlExamQ(chName, prefix, idx) {
  const qs = [];
  const clean = chName.toLowerCase();

  // MCQs about HTML
  qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
    question: `What is the primary purpose of ${chName} in HTML?`,
    options: [
      { id: "a", text: "To structure and define the meaning of web content" },
      { id: "b", text: "To style the appearance of web pages" },
      { id: "c", text: "To add interactivity to web pages" },
      { id: "d", text: "To manage server-side data" },
    ], correctAnswer: "a",
    explanation: "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data." });
  qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
    question: `Which of the following is the correct way to use ${clean} in HTML5?`,
    options: [
      { id: "a", text: "Using semantic elements that describe content purpose" },
      { id: "b", text: "Using div elements with descriptive class names" },
      { id: "c", text: "Using table elements for layout" },
      { id: "d", text: "Using inline styles directly on elements" },
    ], correctAnswer: "a",
    explanation: "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout." });
  qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
    question: `The ${clean} element is a block-level element by default.`,
    correctAnswer: true,
    explanation: "Most HTML elements have default display values. Block-level elements start on a new line and take full width available." });
  qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
    question: `The HTML element used for ${clean} should have the tag name: ___`,
    correctAnswer: "section", acceptableAnswers: ["div", "article"],
    explanation: "Semantic elements like <section> or <article> are appropriate for grouping related content." });
  qs.push({ id: `${prefix}-tf2`, type: "true-false", difficulty: "medium",
    question: `Using semantic HTML elements for ${clean} improves SEO and accessibility.`,
    correctAnswer: true,
    explanation: "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content." });
  qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
    question: `What is the best practice for implementing ${clean} in a large-scale web application?`,
    options: [
      { id: "a", text: "Use semantic elements with ARIA attributes for accessibility" },
      { id: "b", text: "Use only div elements styled with CSS classes" },
      { id: "c", text: "Use iframes to isolate content sections" },
      { id: "d", text: "Avoid using HTML — use JavaScript to render everything" },
    ], correctAnswer: "a",
    explanation: "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients." });

  // True/False questions
  qs.push({ id: `${prefix}-tf3`, type: "true-false", difficulty: "easy",
    question: `${chName} is only relevant for visual appearance.`,
    correctAnswer: false,
    explanation: "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS." });

  // Fill blank
  qs.push({ id: `${prefix}-fb2`, type: "fill-blank", difficulty: "hard",
    question: `The recommended attribute to add to elements for ${clean} to improve accessibility is: ___`,
    correctAnswer: "aria-label", acceptableAnswers: ["role", "aria-labelledby"],
    explanation: "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient." });

  return qs;
}

function genCssExamQ(chName, prefix, idx) {
  const qs = [];
  const clean = chName.toLowerCase();

  qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
    question: `How do you apply ${chName} to an HTML element?`,
    options: [
      { id: "a", text: "Using CSS selectors with property-value declarations" },
      { id: "b", text: "Using HTML attributes on the element" },
      { id: "c", text: "Using JavaScript to modify the style object" },
      { id: "d", text: "Using server-side configuration files" },
    ], correctAnswer: "a",
    explanation: "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism." });
  qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
    question: `${chName} styles cascade from parent to child elements.`,
    correctAnswer: true,
    explanation: "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden." });
  qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
    question: `Which CSS unit is relative to the parent element's font size?`,
    options: [
      { id: "a", text: "em" },
      { id: "b", text: "rem" },
      { id: "c", text: "px" },
      { id: "d", text: "vw" },
    ], correctAnswer: "a",
    explanation: "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width." });
  qs.push({ id: `${prefix}-tf2`, type: "true-false", difficulty: "medium",
    question: `${chName} using !important should be avoided when possible.`,
    correctAnswer: true,
    explanation: "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity." });
  qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
    question: `The CSS property used to control the spacing INSIDE an element (for ${clean}) is: ___`,
    correctAnswer: "padding",
    explanation: "Padding creates space inside an element, between its content and border. Margin creates space outside the element." });
  qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
    question: `What is the most efficient selector for targeting elements in ${chName}?`,
    options: [
      { id: "a", text: "Class selectors (.classname)" },
      { id: "b", text: "ID selectors (#idname)" },
      { id: "c", text: "Universal selectors (*)" },
      { id: "d", text: "Descendant selectors (div p)" },
    ], correctAnswer: "a",
    explanation: "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting." });
  return qs;
}

function genJsExamQ(chName, prefix, idx) {
  const qs = [];
  const clean = chName.toLowerCase();

  qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
    question: `How do you declare a variable in modern JavaScript for ${clean}?`,
    options: [
      { id: "a", text: "const or let" },
      { id: "b", text: "var" },
      { id: "c", text: "int" },
      { id: "d", text: "string" },
    ], correctAnswer: "a",
    explanation: "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords." });
  qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
    question: `JavaScript is a statically-typed language when using ${clean}.`,
    correctAnswer: false,
    explanation: "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset." });
  qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
    question: `What does === mean in JavaScript (relevant for ${clean})?`,
    options: [
      { id: "a", text: "Strict equality — compares value AND type" },
      { id: "b", text: "Loose equality — compares value only" },
      { id: "c", text: "Assignment operator" },
      { id: "d", text: "Not equal" },
    ], correctAnswer: "a",
    explanation: "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal." });
  qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
    question: `The method to add an element to the end of an array is: ___.___()`,
    correctAnswer: "push",
    explanation: "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning." });
  qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
    question: `What prevents this JavaScript code from causing unexpected behavior with ${clean}?`,
    options: [
      { id: "a", text: "Using strict mode ('use strict') and proper error handling" },
      { id: "b", text: "Using only global variables" },
      { id: "c", text: "Avoiding functions altogether" },
      { id: "d", text: "Using eval() for dynamic code" },
    ], correctAnswer: "a",
    explanation: "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices." });
  return qs;
}

function genPythonExamQ(chName, prefix, idx) {
  const qs = [];
  const clean = chName.toLowerCase();

  qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
    question: `How do you define a function in Python for ${chName}?`,
    options: [
      { id: "a", text: "def function_name():" },
      { id: "b", text: "function function_name()" },
      { id: "c", text: "func function_name():" },
      { id: "d", text: "define function_name():" },
    ], correctAnswer: "a",
    explanation: "Python uses the 'def' keyword followed by the function name and parentheses to define functions." });
  qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
    question: `Python uses indentation to define code blocks (for ${clean}).`,
    correctAnswer: true,
    explanation: "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript." });
  qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
    question: `What is the Python list comprehension syntax for ${clean}?`,
    options: [
      { id: "a", text: "[expression for item in iterable if condition]" },
      { id: "b", text: "for item in iterable: if condition: expression" },
      { id: "c", text: "list(expression for item in iterable if condition)" },
      { id: "d", text: "map(expression, filter(condition, iterable))" },
    ], correctAnswer: "a",
    explanation: "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter." });
  qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
    question: `The Python keyword to handle exceptions (like try/catch) is: ___`,
    correctAnswer: "except",
    explanation: "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages." });
  qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
    question: `What is the best Python practice for ${clean} in production code?`,
    options: [
      { id: "a", text: "Use type hints, docstrings, and comprehensive testing" },
      { id: "b", text: "Write minimal code without documentation" },
      { id: "c", text: "Use global variables for simplicity" },
      { id: "d", text: "Avoid imports to keep code self-contained" },
    ], correctAnswer: "a",
    explanation: "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns." });
  return qs;
}

function genCsExamQ(chName, prefix, idx) {
  const qs = [];

  qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
    question: `What is the time complexity of accessing an element by index in an array (concept in ${chName})?`,
    options: [
      { id: "a", text: "O(1) — Constant time" },
      { id: "b", text: "O(n) — Linear time" },
      { id: "c", text: "O(log n) — Logarithmic time" },
      { id: "d", text: "O(n²) — Quadratic time" },
    ], correctAnswer: "a",
    explanation: "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed." });
  qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
    question: `${chName} is relevant only for academic computer science.`,
    correctAnswer: false,
    explanation: "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry." });
  qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
    question: `What data structure is best for implementing ${chName} with fast lookups?`,
    options: [
      { id: "a", text: "Hash table (O(1) average lookup)" },
      { id: "b", text: "Linked list (O(n) lookup)" },
      { id: "c", text: "Stack (LIFO access only)" },
      { id: "d", text: "Queue (FIFO access only)" },
    ], correctAnswer: "a",
    explanation: "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices." });
  qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
    question: `Big ___ notation describes the upper bound of an algorithm's running time.`,
    correctAnswer: "O",
    explanation: "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases." });
  qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
    question: `When should you choose a balanced BST over a hash table for ${chName}?`,
    options: [
      { id: "a", text: "When you need ordered traversal or range queries" },
      { id: "b", text: "When you need the fastest possible lookups" },
      { id: "c", text: "When memory usage is the primary concern" },
      { id: "d", text: "When the data fits in an array" },
    ], correctAnswer: "a",
    explanation: "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order." });
  return qs;
}

// ─── Generate a Course File ──────────────────────────────────────
function genCourse(course) {
  const { id, title, fullTitle, desc, icon, color, difficulty, hours, chapters } = course;
  const chName = title;
  let out = `// Auto-generated course data - do not edit directly\n`;
  out += `import { Course, Chapter, Section, ExamQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, CodeOrderQuestion, MatchPairsQuestion } from "../types";\n\n`;

  // Map course ID to section generator
  const sectionGenMap = {
    html: genHtmlSections,
    css: genCssSections,
    javascript: genJsSections,
    python: genPythonSections,
    cs: genCsSections,
  };
  const examGenMap = {
    html: genHtmlExamQ,
    css: genCssExamQ,
    javascript: genJsExamQ,
    python: genPythonExamQ,
    cs: genCsExamQ,
  };
  const genSections = sectionGenMap[id] || genHtmlSections;
  const genExamQ = examGenMap[id] || genHtmlExamQ;

  let totalXP = 0;
  const chs = [];

  chapters.forEach((chName, idx) => {
    const chId = `${id}-ch${idx + 1}`;
    const xpReward = 15 + (idx % 5); // 15–19 XP
    totalXP += xpReward;

    const sections = genSections(chName, idx);
    const examPool = genExamQ(chName, chId, idx);

    chs.push({
      id: chId,
      courseId: id,
      title: chName,
      order: idx + 1,
      sections,
      examPool,
      xpReward,
      estimatedMinutes: 20 + (idx % 15),
      prerequisites: idx > 0 ? [chs[idx - 1]?.id].filter(Boolean) : [],
      keyPoints: sections.filter(s => s.type === "key-points").flatMap(s => s.points).slice(0, 4),
    });
  });

  // Write each chapter
  out += `const ${id}Chapters: Chapter[] = [\n`;
  chs.forEach((ch) => {
    out += `  {\n`;
    out += `    id: "${ch.id}",\n`;
    out += `    courseId: "${ch.courseId}",\n`;
    out += `    title: "${ch.title.replace(/"/g, '\\"')}",\n`;
    out += `    order: ${ch.order},\n`;
    out += `    sections: ${JSON.stringify(ch.sections, null, 4).split("\n").map((l, i) => i === 0 ? l : `      ${l}`).join("\n")},\n`;
    out += `    examPool: ${JSON.stringify(ch.examPool, null, 2).split("\n").map((l, i) => i === 0 ? l : `      ${l}`).join("\n")},\n`;
    out += `    xpReward: ${ch.xpReward},\n`;
    out += `    estimatedMinutes: ${ch.estimatedMinutes},\n`;
    out += `    prerequisites: ${JSON.stringify(ch.prerequisites)},\n`;
    out += `    keyPoints: ${JSON.stringify(ch.keyPoints)},\n`;
    out += `  },\n`;
  });
  out += `];\n\n`;

  // Course object
  out += `export const ${id}Course: Course = {\n`;
  out += `  id: "${id}",\n`;
  out += `  title: "${title}",\n`;
  out += `  fullTitle: "${fullTitle}",\n`;
  out += `  description: ${JSON.stringify(desc)},\n`;
  out += `  icon: "${icon}",\n`;
  out += `  color: "${color}",\n`;
  out += `  difficulty: ${difficulty},\n`;
  out += `  chapters: ${id}Chapters,\n`;
  out += `  totalXP: ${totalXP},\n`;
  out += `  estimatedHours: ${hours},\n`;
  out += `};\n`;

  const courseDir = path.join(outDir, id);
  fs.mkdirSync(courseDir, { recursive: true });
  fs.writeFileSync(path.join(courseDir, "index.ts"), out);
  const sectionCount = chs.reduce((s, c) => s + c.sections.length, 0);
  console.log(`✓ Generated ${id}: ${chs.length} chapters, ${sectionCount} sections, ~${Math.round(out.length / 1024)} KB`);
}

// ─── Generate All ────────────────────────────────────────────────
console.log("Generating course data...\n");

// Clean output directory
for (const course of courses) {
  const courseDir = path.join(outDir, course.id);
  if (fs.existsSync(courseDir)) {
    fs.rmSync(courseDir, { recursive: true });
  }
}

// Generate all 5 courses
courses.forEach(genCourse);

// Generate index.ts
const idx = `import { CourseRegistry, Course } from "./types";
import { htmlCourse } from "./html";
import { cssCourse } from "./css";
import { javascriptCourse } from "./javascript";
import { pythonCourse } from "./python";
import { csCourse } from "./cs";

const allCourses: Course[] = [
  htmlCourse,
  cssCourse,
  javascriptCourse,
  pythonCourse,
  csCourse,
];

export const courseRegistry: CourseRegistry = {
  courses: allCourses,
  getCourse(id: string): Course | undefined {
    return allCourses.find((c) => c.id === id);
  },
  getChapter(courseId: string, chapterId: string) {
    const course = this.getCourse(courseId);
    return course?.chapters.find((ch) => ch.id === chapterId);
  },
};
`;
fs.writeFileSync(path.join(outDir, "index.ts"), idx);
console.log("✓ Generated index.ts");

const totalChapters = courses.reduce((s, c) => s + c.chapters.length, 0);
console.log(`\n✅ All courses generated! ${totalChapters} total chapters across ${courses.length} courses.`);
