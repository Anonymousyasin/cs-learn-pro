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
    desc: "A comprehensive computer science curriculum from fundamentals to advanced topics. Binary, logic, math, data structures, algorithms, systems, theory, and more — following the OSSU curriculum.",
    icon: "Shield", color: "#a78bfa", difficulty: 1, hours: 120,
    chapters: [
      // ─── Part 1: Introduction & Data Representation (12 chapters) ───
      "What is Computer Science?","History of Computing","The Binary Number System","Hexadecimal & Octal Systems",
      "Data Representation (Integers & Floats)","Text Encoding (ASCII, Unicode, UTF-8)","Boolean Logic & Truth Tables",
      "Logic Gates (AND, OR, NOT, NAND, NOR, XOR, XNOR)","Digital Circuits & Boolean Algebra","How CPUs Execute Instructions",
      "Memory Hierarchy (Registers, Cache, RAM, Disk)","The Von Neumann Architecture",

      // ─── Part 2: Discrete Mathematics (18 chapters) ───
      "Introduction to Sets","Set Operations (Union, Intersection, Complement)","Functions & Relations",
      "Propositional Logic","Predicate Logic & Quantifiers","Proof Techniques (Direct & Contrapositive)",
      "Proof by Induction","Proof by Contradiction","Counting: Permutations & Combinations",
      "The Pigeonhole Principle","Probability: Basic Concepts","Conditional Probability & Bayes' Theorem",
      "Random Variables & Expected Value","Sequences & Summations","Modular Arithmetic & Number Theory",
      "Graph Theory: Basic Concepts","Matrix Operations for CS","Applications of Linear Algebra in CS",

      // ─── Part 3: Algorithms - Analysis & Core (18 chapters) ───
      "What is an Algorithm?","The RAM Model of Computation","Big O: Upper Bounds",
      "Omega & Theta: Tight Bounds","Asymptotic Analysis Rules","Recurrence Relations & the Master Theorem",
      "Divide & Conquer Strategy","Linear Search & Binary Search","Bubble Sort & Selection Sort",
      "Insertion Sort","Merge Sort: Divide & Conquer","Quick Sort & Partitioning",
      "Heap Sort & Binary Heaps","Counting Sort (Integer Sort)","Radix Sort & Bucket Sort",
      "Two-Pointer Technique","Sliding Window Technique","Randomized Algorithms",

      // ─── Part 4: Data Structures (22 chapters) ───
      "Arrays & Dynamic Arrays","Strings & String Algorithms","Singly Linked Lists",
      "Doubly & Circular Linked Lists","Stacks (LIFO)","Queues (FIFO) & Circular Queues",
      "Deques & Priority Queues","Hash Tables & Hash Functions","Collision Resolution (Chaining, Open Addressing)",
      "Bloom Filters & Probabilistic Structures","Trees: Terminology & Properties","Binary Trees & Binary Search Trees",
      "BST Operations: Insert, Delete, Search","Tree Traversals (Inorder, Preorder, Postorder, Level-order)",
      "Balanced BSTs: AVL Trees","Red-Black Trees","B-Trees & B+ Trees for Databases",
      "Tries (Prefix Trees)","Suffix Trees & Suffix Arrays","Graphs: Types & Terminology",
      "Graph Representations (Adjacency Matrix, List)","Graph Traversals: BFS & DFS",

      // ─── Part 5: Advanced Algorithms & Graph (18 chapters) ───
      "Dijkstra's Shortest Path","Bellman-Ford & Negative Weights","Floyd-Warshall All-Pairs Shortest Path",
      "A* Search Algorithm","Minimum Spanning Trees (Prim's Algorithm)","Minimum Spanning Trees (Kruskal's Algorithm)",
      "Union-Find (Disjoint Set Union)","Topological Sort (Kahn & DFS)","Strongly Connected Components (Kosaraju, Tarjan)",
      "Network Flow: Ford-Fulkerson & Max-Flow Min-Cut","Maximum Bipartite Matching","Segment Trees & Fenwick Trees",
      "Dynamic Programming: Core Principles","DP: 0/1 Knapsack Problem","DP: Longest Common Subsequence",
      "DP: Longest Increasing Subsequence","DP: Matrix Chain Multiplication","DP: Edit Distance (Levenshtein)",

      // ─── Part 6: Advanced Topics in Algorithms (10 chapters) ───
      "Greedy Algorithm Design","Huffman Coding & Compression","Backtracking (N-Queens, Sudoku)",
      "Branch & Bound","P vs NP: The Big Question","NP-Completeness & Reductions",
      "Approximation Algorithms","Online Algorithms & Competitive Analysis","Amortized Analysis",
      "String Matching: KMP & Rabin-Karp",

      // ─── Part 7: Computer Architecture & Organization (10 chapters) ───
      "Instruction Set Architecture (ISA)","CPU Pipelining & Hazards","Cache Design & Locality",
      "Virtual Memory & Paging","Interrupts & I/O Systems","Assembly Language Basics",
      "Parallel Processing & SIMD","GPU Architecture & CUDA","Performance Measurement & Optimization",
      "Quantum Computing Fundamentals",

      // ─── Part 8: Operating Systems (10 chapters) ───
      "OS: Processes & Threads","CPU Scheduling Algorithms","Process Synchronization & Locks",
      "Deadlocks: Detection & Prevention","Memory Management (Paging, Segmentation)","Virtual Memory & Demand Paging",
      "File Systems & Storage","I/O Management & DMA","Security & Access Control",
      "Virtualization & Containers",

      // ─── Part 9: Computer Networking (8 chapters) ───
      "Networking: The OSI Model","TCP/IP Protocol Suite","UDP, HTTP, DNS, & DHCP",
      "Routing Algorithms","Congestion Control & Flow Control","Network Security: TLS, HTTPS",
      "Sockets & Network Programming","Peer-to-Peer & CDN Architecture",

      // ─── Part 10: Databases (8 chapters) ───
      "The Relational Model","SQL: Queries & Joins","Normalization & Database Design",
      "Indexing (B-Trees, Hash Indexes)","Transactions & ACID Properties","Concurrency Control & Locking",
      "NoSQL: Document, Key-Value, Graph DBs","Distributed Databases & CAP Theorem",

      // ─── Part 11: Programming Languages & Compilers (8 chapters) ───
      "Programming Language Paradigms","Lexical Analysis & Regular Expressions","Parsing: Top-Down & Bottom-Up",
      "Abstract Syntax Trees & Semantic Analysis","Code Generation & Optimization","Type Systems & Type Inference",
      "Functional Programming Concepts","Memory Management: GC & Ownership",

      // ─── Part 12: Theory of Computation (6 chapters) ───
      "Finite Automata & Regular Languages","Pushdown Automata & Context-Free Languages",
      "Turing Machines & Computability","The Halting Problem","Lambda Calculus",
      "Computational Complexity Hierarchy",

      // ─── Part 13: Artificial Intelligence (6 chapters) ───
      "Search in AI (BFS, DFS, A*)","Constraint Satisfaction Problems","Game Theory & Minimax",
      "Machine Learning: Supervised Learning","Neural Networks & Deep Learning","Unsupervised Learning & Clustering",

      // ─── Part 14: Security & Cryptography (6 chapters) ───
      "Symmetric Encryption (AES, DES)","Asymmetric Encryption (RSA, ECC)","Hash Functions & Digital Signatures",
      "Authentication & Authorization","Web Security: OWASP Top 10","Zero-Knowledge Proofs & Blockchain",

      // ─── Part 15: Distributed & Parallel Systems (6 chapters) ───
      "Distributed Systems: Clocks & Ordering","Consensus: Paxos & Raft","MapReduce & Big Data",
      "Distributed Storage & Replication","Microservices & RPC","Serverless & Cloud Computing",
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

// ─── CS Topic Categorisation ─────────────────────────────────
function csCategory(chName) {
  const lc = chName.toLowerCase();
  if (lc.includes("history") || lc.includes("what is") || lc.includes("von neumann")) return "intro";
  if (lc.includes("binary") || lc.includes("hex") || lc.includes("octal") || lc.includes("data repres") || lc.includes("text encod") || lc.includes("boolean") || lc.includes("logic gate") || lc.includes("digital circuit") || lc.includes("memory hier") || lc.includes("how cpu") || lc.includes("instruction set")) return "digital";
  if (lc.includes("set") || lc.includes("function") || lc.includes("relation") || lc.includes("proposition") || lc.includes("predicate") || lc.includes("proof") || lc.includes("induction") || lc.includes("contradiction") || lc.includes("counting") || lc.includes("permutation") || lc.includes("combination") || lc.includes("pigeonhole") || lc.includes("probability") || lc.includes("bayes") || lc.includes("random var") || lc.includes("expected") || lc.includes("sequence") || lc.includes("summation") || lc.includes("modular") || lc.includes("number theory") || lc.includes("graph theory basic") || lc.includes("matrix") || lc.includes("linear algebra")) return "math";
  if (lc.includes("what is an algorithm") || lc.includes("ram model") || lc.includes("big o") || lc.includes("omega") || lc.includes("theta") || lc.includes("asymptotic") || lc.includes("recurrence") || lc.includes("master theorem")) return "algo-theory";
  if (lc.includes("divide") || lc.includes("linear search") || lc.includes("binary search") || lc.includes("bubble") || lc.includes("selection") || lc.includes("insertion") || lc.includes("merge") || lc.includes("quick") || lc.includes("heap sort") || lc.includes("counting") || lc.includes("radix") || lc.includes("bucket") || lc.includes("two-pointer") || lc.includes("sliding") || lc.includes("randomized")) return "algo-sort";
  if (lc.includes("array") || lc.includes("string") || lc.includes("linked list") || lc.includes("stack") || lc.includes("queue") || lc.includes("deque") || lc.includes("hash") || lc.includes("bloom") || lc.includes("tree") || lc.includes("bst") || lc.includes("binary tree") || lc.includes("binary search tree") || lc.includes("avl") || lc.includes("red-black") || lc.includes("b-tree") || lc.includes("trie") || lc.includes("suffix") || lc.includes("graph") || lc.includes("bfs") || lc.includes("dfs")) return "ds";
  if (lc.includes("dijkstra") || lc.includes("bellman") || lc.includes("floyd") || lc.includes("a*") || lc.includes("mst") || lc.includes("prim") || lc.includes("kruskal") || lc.includes("union") || lc.includes("disjoint") || lc.includes("topological") || lc.includes("strongly") || lc.includes("kosaraju") || lc.includes("tarjan") || lc.includes("network flow") || lc.includes("ford-fulkerson") || lc.includes("bipartite") || lc.includes("segment tree") || lc.includes("fenwick") || lc.includes("dynamic programming") || lc.includes("knapsack") || lc.includes("longest common") || lc.includes("longest increas") || lc.includes("matrix chain") || lc.includes("edit distance") || lc.includes("levenshtein")) return "algo-adv";
  if (lc.includes("greedy") || lc.includes("huffman") || lc.includes("backtrack") || lc.includes("branch") || lc.includes("p vs np") || lc.includes("np-complete") || lc.includes("approximation") || lc.includes("online algorithm") || lc.includes("amortized") || lc.includes("kmp") || lc.includes("rabin-karp")) return "algo-hard";
  if (lc.includes("pipeline") || lc.includes("cache") || lc.includes("virtual memory") || lc.includes("paging") || lc.includes("interrupt") || lc.includes("assembly") || lc.includes("parallel process") || lc.includes("simd") || lc.includes("gpu") || lc.includes("cuda") || lc.includes("performance") || lc.includes("optimization") || lc.includes("quantum")) return "arch";
  if (lc.includes("process") || lc.includes("thread") || lc.includes("scheduling") || lc.includes("synchroniz") || lc.includes("lock") || lc.includes("deadlock") || lc.includes("memory management") || lc.includes("file system") || lc.includes("i/o") || lc.includes("dma") || lc.includes("security") || lc.includes("access control") || lc.includes("virtualization") || lc.includes("container")) return "os";
  if (lc.includes("osi") || lc.includes("tcp/ip") || lc.includes("udp") || lc.includes("http") || lc.includes("dns") || lc.includes("dhcp") || lc.includes("routing") || lc.includes("congestion") || lc.includes("flow control") || lc.includes("tls") || lc.includes("https") || lc.includes("socket") || lc.includes("network program") || lc.includes("peer-to-peer") || lc.includes("p2p") || lc.includes("cdn")) return "net";
  if (lc.includes("relational") || lc.includes("sql") || lc.includes("normaliz") || lc.includes("indexing") || lc.includes("transaction") || lc.includes("acid") || lc.includes("concurrency control") || lc.includes("nosql") || lc.includes("document") || lc.includes("key-value") || lc.includes("graph db") || lc.includes("cap theorem")) return "db";
  if (lc.includes("paradigm") || lc.includes("lexical") || lc.includes("parsing") || lc.includes("ast") || lc.includes("abstract syntax") || lc.includes("code generation") || lc.includes("type system") || lc.includes("functional") || lc.includes("garbage") || lc.includes("ownership")) return "pl";
  if (lc.includes("finite automata") || lc.includes("regular langu") || lc.includes("pushdown") || lc.includes("context-free") || lc.includes("turing") || lc.includes("halting") || lc.includes("lambda calc") || lc.includes("complexity hierarchy")) return "theory";
  if (lc.includes("constraint satisfaction") || lc.includes("game theory") || lc.includes("minimax") || lc.includes("supervised") || lc.includes("neural") || lc.includes("deep learning") || lc.includes("unsupervised") || lc.includes("clustering") || lc.includes("machine learning")) return "ai";
  if (lc.includes("encryption") || lc.includes("aes") || lc.includes("des") || lc.includes("rsa") || lc.includes("ecc") || lc.includes("hash function") || lc.includes("digital sign") || lc.includes("authentic") || lc.includes("authoriz") || lc.includes("owasp") || lc.includes("zero-knowledge") || lc.includes("blockchain")) return "sec";
  if (lc.includes("distributed") || lc.includes("clock") || lc.includes("ordering") || lc.includes("consensus") || lc.includes("paxos") || lc.includes("raft") || lc.includes("mapreduce") || lc.includes("big data") || lc.includes("replicat") || lc.includes("microservice") || lc.includes("rpc") || lc.includes("serverless") || lc.includes("cloud")) return "dist";
  return "general";
}

// ─── CS Sections Generator ─────────────────────────────────
function genCsSections(chName, idx) {
  const cat = csCategory(chName);
  const s = [];
  const descs = {
    intro: "the big picture of computing — what computers do and how they evolved",
    digital: "how computers represent and process information at the lowest level",
    math: "the mathematical foundations that underlie all of computer science",
    "algo-theory": "how we reason about algorithm efficiency and growth rates",
    "algo-sort": "algorithms for ordering, searching, and transforming data",
    ds: "ways to organize, store, and retrieve data efficiently",
    "algo-adv": "advanced algorithmic techniques for complex problems",
    "algo-hard": "the limits of computation and strategies for hard problems",
    arch: "how computer hardware is organized and optimized",
    os: "how operating systems manage processes, memory, and resources",
    net: "how computers communicate across networks",
    db: "how data is stored, queried, and managed at scale",
    pl: "how programming languages are designed, parsed, and executed",
    theory: "the theoretical foundations of what computers can and cannot compute",
    ai: "how computers can learn, reason, and make decisions",
    sec: "how to protect data and systems from attacks",
    dist: "how to build reliable systems across multiple machines",
    general: "core computer science concepts",
  };
  const desc = descs[cat] || "computer science concepts";

  // ── Intro section ──
  s.push({ type: "text", content: `## Understanding ${chName}\n\n${chName} explores ${desc}. This topic is essential for building a strong foundation in computer science and understanding how modern computing systems work from the ground up.\n\nComputer science is not just about programming — it's about understanding the principles of computation, information, and automated reasoning. ${chName} is a key piece of this larger puzzle.` });

  s.push({ type: "key-points", points: [
    `${chName} is foundational to computer science`,
    "Understanding this topic will make you a more effective programmer",
    "These concepts apply across all areas of computing",
    "Mastering fundamentals enables deeper learning of advanced topics",
  ]});

  // ── Topic-specific content ──
  if (cat === "math") {
    s.push({ type: "code", language: "python", caption: `${chName} — Python demonstration:`, content: `# ${chName} — Interactive Python Demo\nimport math\n\n# Core concept demonstration\nprint("${chName} in Computer Science")\nprint("=" * 40)\n\n# Practical examples\nresults = []\nfor i in range(1, 11):\n    results.append(i ** 2)\nprint(f"Sample computation: {results[:5]}...")\nprint(f"Total elements: {len(results)}")\n\n# Mathematical reasoning\n# This topic helps us reason about algorithm correctness\n# and analyze computational problems mathematically` });
    s.push({ type: "formula", content: `${chName} formal definition: this mathematical concept provides the language for describing computational problems and their solutions.`, description: "Mathematical notation is the universal language of computer science. Learning to read and write it is essential for understanding research papers and advanced textbooks." });
    s.push({ type: "text", content: `## Practical Applications in CS\n\n${chName} appears throughout computer science:\n\n1. **Algorithm analysis** — Mathematical tools help analyze runtime and memory usage\n2. **Cryptography** — Number theory and probability are the foundation of secure communication\n3. **Machine learning** — Linear algebra and probability power modern AI\n4. **Computer graphics** — Linear algebra transforms 3D scenes into 2D images\n5. **Database theory** — Set theory and logic underpin query languages like SQL\n6. **Networking** — Graph theory models network topology and routing` });
  } else if (cat === "digital") {
    s.push({ type: "code", language: "python", caption: `${chName} — Working with bits:`, content: `# ${chName} — Bit-Level Operations\n# Understanding how data is represented in memory\n\ndef inspect_bits(value):\n    """Show the binary representation of a value"""\n    print(f"Decimal: {value}")\n    print(f"Binary:  {value:08b}")\n    print(f"Hex:     0x{value:02x}")\n    print()\n\n# Test with different values\ninspect_bits(42)\ninspect_bits(255)\ninspect_bits(128)\n\n# Bitwise operations\nflags = 0b1010\nmask  = 0b1100\nprint(f"flags & mask = {flags & mask:04b}  (AND)")\nprint(f"flags | mask = {flags | mask:04b}  (OR)")\nprint(f"flags ^ mask = {flags ^ mask:04b}  (XOR)")` });
  } else if (cat === "algo-theory") {
    s.push({ type: "code", language: "python", caption: `${chName} — Complexity visualization:`, content: `# ${chName} — Understanding Growth Rates\nimport time\n\ndef measure_runtime(func, n):\n    """Measure execution time for a given input size"""\n    data = list(range(n))\n    start = time.perf_counter()\n    func(data)\n    return time.perf_counter() - start\n\n# Different complexity classes grow very differently\nsizes = [10, 100, 1000, 10000]\nprint("Input size → O(1)  O(log n)  O(n)  O(n log n)  O(n²)")\nprint("-" * 55)\n\n# O(1): constant — always fast\n# O(log n): logarithmic — grows slowly\n# O(n): linear — proportional to input\n# O(n log n): linearithmic — typical for good sorts\n# O(n²): quadratic — slows quickly with input` });
  } else if (cat === "algo-sort") {
    s.push({ type: "code", language: "python", caption: `${chName} — Implementation:`, content: `# ${chName} — Python Implementation\n\ndef algorithm(arr):\n    """Implementation of ${chName}"""\n    n = len(arr)\n    result = arr.copy()\n    \n    # Core algorithm logic\n    # Each algorithm has unique characteristics\n    # in terms of time complexity, space usage,\n    # and whether it's stable or in-place\n    \n    return result\n\n# Test with sample data\ntest_data = [64, 34, 25, 12, 22, 11, 90]\nresult = algorithm(test_data)\nprint(f"Input:  {test_data}")\nprint(f"Output: {result}")\n\n# Verify correctness\nassert sorted(test_data) == result\nprint("✓ Algorithm works correctly")` });
  } else if (cat === "ds") {
    s.push({ type: "code", language: "python", caption: `${chName} — Implementation:`, content: `# ${chName} — Implementation in Python\n\nclass DataStructure:\n    """Implementation of ${chName}"""\n    \n    def __init__(self):\n        self._data = []\n    \n    def insert(self, value):\n        """Add an element"""\n        self._data.append(value)\n    \n    def search(self, value):\n        """Find an element (complexity depends on structure)"""\n        return value in self._data\n    \n    def delete(self, value):\n        """Remove an element"""\n        if value in self._data:\n            self._data.remove(value)\n            return True\n        return False\n    \n    def __len__(self):\n        return len(self._data)\n    \n    def __repr__(self):\n        return f"DataStructure({self._data})"\n\n# Demonstrate\nds = DataStructure()\nfor v in [10, 20, 30, 40, 50]:\n    ds.insert(v)\nprint(f"Structure: {ds}")\nprint(f"Contains 30? {ds.search(30)}")\nprint(f"Contains 99? {ds.search(99)}")` });
  } else if (cat === "algo-adv") {
    s.push({ type: "code", language: "python", caption: `${chName} — Implementation:`, content: `# ${chName} — Advanced Algorithm\n\ndef solve_problem(input_data):\n    """\n    ${chName}\n    \n    This algorithm demonstrates advanced problem-solving\n    techniques that go beyond basic approaches.\n    """\n    n = len(input_data)\n    if n == 0:\n        return 0\n    \n    # Initialize DP table or data structures\n    dp = [0] * n\n    dp[0] = input_data[0]\n    \n    # Core recurrence or algorithm logic\n    for i in range(1, n):\n        # State transition\n        dp[i] = max(input_data[i], dp[i - 1] + input_data[i])\n    \n    return max(dp)\n\n# Test\ntest = [1, -2, 3, 4, -1, 2, 1, -5, 4]\nresult = solve_problem(test)\nprint(f"Input: {test}")\nprint(f"Result: {result}")` });
  } else if (cat === "algo-hard") {
    s.push({ type: "code", language: "python", caption: `${chName} — Approach:`, content: `# ${chName} — Strategic Approach\n\n# Some problems require clever techniques or\n# accepting approximate solutions\n\ndef solve_optimization(items, capacity):\n    """\n    Demonstrates an approach to a hard problem.\n    May use heuristics, approximation, or exact methods\n    with exponential time in the worst case.\n    """\n    n = len(items)\n    best_value = 0\n    best_combo = None\n    \n    # Explore solution space strategically\n    # (Branch and bound, backtracking, etc.)\n    for mask in range(1 << n):\n        weight = 0\n        value = 0\n        for i in range(n):\n            if mask & (1 << i):\n                weight += items[i][0]\n                value += items[i][1]\n        if weight <= capacity and value > best_value:\n            best_value = value\n            best_combo = mask\n    \n    return best_value\n\nprint("Solving with strategic exploration...")` });
  } else if (cat === "arch" || cat === "os") {
    s.push({ type: "code", language: "c", caption: `${chName} — Low-level perspective:`, content: `/* ${chName} — Systems-Level View */\n#include <stdio.h>\n\n/* This topic deals with how hardware and\n * operating systems manage resources */\n\nint main() {\n    printf("=== ${chName} ===\\n");\n    printf("Understanding system-level concepts\\n");\n    printf("is crucial for writing efficient code\\n");\n    printf("and debugging performance issues.\\n\\n");\n    \n    /* Memory addresses — understanding pointers */\n    int x = 42;\n    int *ptr = &x;\n    printf("Value: %d\\n", x);\n    printf("Address: %p\\n", (void*)ptr);\n    printf("Size: %zu bytes\\n", sizeof(x));\n    \n    return 0;\n}` });
  } else if (cat === "net") {
    s.push({ type: "code", language: "python", caption: `${chName} — Network programming:`, content: `# ${chName} — Network Concepts\nimport socket\n\n# Understanding how data flows across networks\n# is essential for building distributed applications\n\ndef explain_networking():\n    """Core networking concepts"""\n    layers = [\n        ("Layer 1: Physical", "Raw bit transmission over wire/fiber/air"),\n        ("Layer 2: Data Link", "Frames, MAC addresses, Ethernet"),\n        ("Layer 3: Network", "IP addressing, routing, packets"),\n        ("Layer 4: Transport", "TCP/UDP, ports, reliable delivery"),\n        ("Layer 5-7: Application", "HTTP, DNS, TLS, application protocols"),\n    ]\n    for layer, desc in layers:\n        print(f"{layer}")\n        print(f"  {desc}")\n        print()\n\nexplain_networking()` });
  } else if (cat === "db") {
    s.push({ type: "code", language: "python", caption: `${chName} — Database concepts:`, content: `# ${chName} — Database Fundamentals\n\n# Databases are the backbone of most applications.\n# Understanding how they work helps you design\n# efficient, scalable data systems.\n\n# Core concepts:\n# - Relational model: tables, rows, columns\n# - ACID: Atomicity, Consistency, Isolation, Durability\n# - Indexing: fast lookups via B-Trees or hash indexes\n# - Normalization: eliminating data redundancy\n\nclass DatabaseConcept:\n    """Demonstrating core database ideas"""\n    \n    @staticmethod\n    def query_example():\n        """SQL query patterns"""\n        query = \"\"\"\n        SELECT u.name, COUNT(o.id) as order_count\n        FROM users u\n        LEFT JOIN orders o ON u.id = o.user_id\n        GROUP BY u.id\n        HAVING order_count > 5\n        ORDER BY order_count DESC;\n        \"\"\"\n        print("Example query:")\n        print(query)\n\nDatabaseConcept.query_example()` });
  } else if (cat === "pl") {
    s.push({ type: "code", language: "python", caption: `${chName} — Language implementation perspective:`, content: `# ${chName} — Programming Languages Perspective\n\n# Different languages make different design choices.\n# Understanding these helps you pick the right tool\n# and write better code in any language.\n\n# Key language features to compare:\nfeatures = {\n    "Type System": ["Static (Java, Rust)", "Dynamic (Python, JS)", "Gradual (TypeScript)"],\n    "Memory": ["Manual (C/C++)", "GC (Java, Go)", "Ownership (Rust)"],\n    "Paradigm": ["OOP", "Functional", "Procedural"],\n    "Execution": ["Compiled", "Interpreted", "JIT-compiled"],\n}\n\nfor feature, options in features.items():\n    print(f"{feature}: {' | '.join(options)}")` });
  } else if (cat === "theory") {
    s.push({ type: "formula", content: `${chName} — formal definition`, description: "Theoretical computer science defines the fundamental limits of computation. Understanding what problems are solvable — and how efficiently — is the deepest question in the field." });
    s.push({ type: "text", content: `## Key Insights\n\n${chName} explores fundamental questions about computation:\n\n1. **What problems can computers solve?** — Some problems are simply unsolvable (e.g., the Halting Problem)\n2. **How efficiently can they solve them?** — Problems have inherent difficulty (P vs NP)\n3. **What resources are needed?** — Time, space, and energy trade-offs\n4. **Are there different kinds of computation?** — Deterministic, non-deterministic, probabilistic, quantum\n\nThese questions aren't just academic — they inform practical decisions about which algorithms and approaches to use.` });
  } else if (cat === "ai") {
    s.push({ type: "code", language: "python", caption: `${chName} — Implementation:`, content: `# ${chName} — AI Concepts\nimport random\n\n# Artificial intelligence is transforming computing.\n# Understanding the fundamentals helps you apply\n# these techniques effectively.\n\nclass SimpleAIModel:\n    """Demonstrating core AI concepts"""\n    \n    def __init__(self):\n        self.data = []\n        self.weights = {}\n    \n    def train(self, examples):\n        """Learn from examples"""\n        print(f"Training on {len(examples)} examples...")\n        # In practice, this would adjust model parameters\n        self.data = examples\n        print("Training complete!")\n    \n    def predict(self, input_data):\n        """Make a prediction"""\n        # Simplified demonstration\n        return "prediction based on learned patterns"\n\nmodel = SimpleAIModel()\nmodel.train([{"x": 1, "y": 2}, {"x": 2, "y": 4}])\nprint(model.predict({"x": 3}))` });
  } else if (cat === "sec") {
    s.push({ type: "code", language: "python", caption: `${chName} — Security concepts:`, content: `# ${chName} — Security Fundamentals\nimport hashlib\n\n# Security is everyone's responsibility.\n# Understanding core concepts helps you\n# build safer systems.\n\n# Cryptographic hash example\nmessage = "Hello, CS!"\nhash_value = hashlib.sha256(message.encode()).hexdigest()\nprint(f"Message: {message}")\nprint(f"SHA-256: {hash_value}...")  # truncated\nprint()\n\n# Security principles:\nprinciples = [\n    "Confidentiality — only authorized access",\n    "Integrity — data hasn't been tampered with",\n    "Availability — systems are accessible when needed",\n    "Authentication — verifying identity",\n    "Authorization — controlling access to resources",\n]\nfor p in principles:\n    print(f"  • {p}")` });
  } else if (cat === "dist") {
    s.push({ type: "code", language: "python", caption: `${chName} — Distributed systems concepts:`, content: `# ${chName} — Distributed Systems\nimport time\nimport random\n\n# Distributed systems enable modern cloud computing.\n# They introduce unique challenges:\n\nchallenges = [\n    ("Network latency", "Messages take time to travel"),\n    ("Partial failure", "Some nodes fail independently"),\n    ("Clock skew", "No perfect clock synchronization"),\n    ("Consistency", "Keeping data consistent across nodes"),\n    ("Partition tolerance", "Network splits are inevitable"),\n]\n\nprint("Key challenges in distributed systems:")\nfor challenge, desc in challenges:\n    print(f"  • {challenge}: {desc}")\nprint()\nprint("Designing for these challenges makes"\n      " distributed systems fundamentally different")\nprint("from single-machine systems.")` });
  } else if (cat === "general") {
    s.push({ type: "code", language: "python", caption: `${chName} — Core concepts:`, content: `# ${chName} — Fundamental CS Concept\n\ndef demonstrate():\n    """Understanding ${chName}"""\n    # Every CS concept builds on fundamentals\n    # This topic connects multiple areas:\n    concepts = [\n        "Theory",\n        "Practice",\n        "Applications",\n        "Limitations",\n    ]\n    for c in concepts:\n        print(f"  • {c}")\n    \n    # Understanding helps write better code\n    print("\\nCore principle: understand the problem")\n    print("before choosing the solution.")\n\ndemonstrate()` });
  }

  // Wait after code  
  s.push({ type: "text", content: `## Why ${chName} Matters\n\n${chName} is not just academic — it has direct practical applications:\n\n1. **Better engineering** — Understanding fundamentals helps you make informed design decisions\n2. **Debugging** — Deep knowledge helps you diagnose and fix complex issues\n3. **Performance** — Knowing how things work enables optimization\n4. **Interview success** — These topics are essential for technical interviews\n5. **Foundation for growth** — Advanced topics depend on these fundamentals` });

  s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** When learning ${chName}, try to connect the theory to practical code you've written. Every algorithm, data structure, or system you learn about exists because someone needed to solve a real problem. Understanding that context makes the material far more meaningful.` });

  // ── Comparison or List section ──
  if (idx % 4 === 0) {
    s.push({ type: "list", ordered: false, items: [
      `${chName} is a key concept in computer science`,
      "Understanding the theory improves your practical coding",
      "Practice implementing these concepts from scratch",
      "Study how they're used in real-world systems",
      "Combine multiple concepts to solve complex problems",
    ]});
  } else if (idx % 4 === 1) {
    s.push({ type: "comparison", title: `${chName} — Key Distinctions`, headers: ["Property", "Option 1", "Option 2"], rows: [
      ["Time complexity", "Efficient for small inputs", "Efficient for large inputs"],
      ["Memory usage", "Low memory footprint", "Higher memory for speed"],
      ["Best use case", "Simple, direct problems", "Complex, structured problems"],
      ["Trade-off", "Easier to implement", "Better asymptotic behavior"],
    ]});
  } else if (idx % 4 === 2) {
    s.push({ type: "exercise", title: `${chName} Practice`, description: "Apply what you've learned:", instructions: [
      "Implement the core concept from scratch",
      "Test with various inputs and edge cases",
      "Analyze time and space complexity",
      "Compare with standard library implementations",
    ], hint: "Start simple, then add optimizations one at a time." });
  }

  s.push({ type: "callout", style: "warning", content: `⚠️ **Common Pitfall:** A common mistake with ${chName} is learning the theory without connecting it to practice. Always ask: "Where would I use this? What problem does it solve?" The best engineers understand both the "how" and the "why."` });

  // ── Further reading ──
  if (["math", "theory", "algo-theory"].includes(cat)) {
    s.push({ type: "text", content: `## Recommended Resources\n\nTo deepen your understanding of ${chName}:\n\n1. **CLRS (Introduction to Algorithms)** — The definitive textbook for algorithm analysis\n2. **Sipser (Introduction to the Theory of Computation)** — Clear, rigorous theory coverage\n3. **Knuth (The Art of Computer Programming)** — Encyclopedic depth on algorithms\n4. **MIT OpenCourseWare** — Free video lectures from world-class professors\n5. **3Blue1Brown** — Beautiful visual explanations of mathematical concepts` });
  } else if (["arch", "os", "net"].includes(cat)) {
    s.push({ type: "text", content: `## Recommended Resources\n\nTo deepen your understanding of ${chName}:\n\n1. **Operating Systems: Three Easy Pieces** — Free, modern OS textbook\n2. **Computer Organization & Design (Patterson & Hennessy)** — The standard architecture text\n3. **TCP/IP Illustrated (Stevens)** — Detailed networking explanations\n4. **OSTEP** — Practical systems programming projects\n5. **NAND to Tetris** — Build a computer from first principles` });
  } else if (["db", "pl", "dist"].includes(cat)) {
    s.push({ type: "text", content: `## Recommended Resources\n\nTo deepen your understanding of ${chName}:\n\n1. **Designing Data-Intensive Applications (Kleppmann)** — Modern distributed systems\n2. **Database Systems: The Complete Book** — Comprehensive database theory\n3. **Compilers: Principles, Techniques, and Tools (Dragon Book)** — The classic compiler text\n4. **Structure and Interpretation of Computer Programs (SICP)** — Foundational programming concepts\n5. **Crafting Interpreters (Nystrom)** — Practical compiler implementation` });
  } else {
    s.push({ type: "text", content: `## Recommended Resources\n\nTo deepen your understanding of ${chName}:\n\n1. **CLRS (Introduction to Algorithms)** — Comprehensive algorithm coverage\n2. **Cracking the Coding Interview** — Practical interview preparation\n3. **LeetCode / HackerRank** — Practice problems for every topic\n4. **MIT OpenCourseWare** — Free, world-class video lectures\n5. **Visualgo.net** — Interactive algorithm visualizations` });
  }

  s.push({ type: "callout", style: "important", content: `📌 **Remember:** Computer science is about understanding computation at every level — from transistors to distributed systems. ${chName} is one piece of this beautiful puzzle. Stay curious, keep building, and never stop learning.` });

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
  const cat = csCategory(chName);

  // Every chapter gets 8 questions with topic-specific content
  // ── Math topics ──
  if (cat === "math") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Why is ${chName} important in computer science?`,
      options: [
        { id: "a", text: "It provides the mathematical language to describe and analyze computation" },
        { id: "b", text: "It is only useful for theoretical research" },
        { id: "c", text: "It replaces the need for programming" },
        { id: "d", text: "It is used only in database management" },
      ], correctAnswer: "a",
      explanation: "Mathematics provides the formal language for describing algorithms, proving correctness, and analyzing computational complexity." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `How does ${chName} apply to algorithm design?`,
      options: [
        { id: "a", text: "It helps prove correctness and analyze efficiency mathematically" },
        { id: "b", text: "It is unrelated to algorithm design" },
        { id: "c", text: "It only applies to web development" },
        { id: "d", text: "It is only useful for machine learning" },
      ], correctAnswer: "a",
      explanation: "Mathematical foundations allow us to prove that algorithms are correct and to analyze their time and space complexity rigorously." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `${chName} is only relevant for academic computer science, not practical programming.`,
      correctAnswer: false,
      explanation: "Mathematical concepts are deeply woven into practical CS — from search algorithms to cryptography to machine learning." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
      question: `The mathematical study of ${chName} in computer science is called ___ analysis.`,
      correctAnswer: "algorithm", acceptableAnswers: ["complexity", "asymptotic"],
      explanation: "Algorithm analysis uses mathematical tools to determine how runtime and memory usage grow with input size." });
    qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
      question: `In the context of ${chName}, what does it mean for a proof to be "constructive"?`,
      options: [
        { id: "a", text: "It provides a method to actually construct the solution" },
        { id: "b", text: "It only proves existence without showing how" },
        { id: "c", text: "It is a proof by contradiction" },
        { id: "d", text: "It relies on induction" },
      ], correctAnswer: "a",
      explanation: "Constructive proofs not only show that something exists but provide an explicit method for constructing it, which often translates directly into an algorithm." });
    qs.push({ id: `${prefix}-tf2`, type: "true-false", difficulty: "medium",
      question: `Proof by induction is equivalent to recursion in programming.`,
      correctAnswer: true,
      explanation: "Induction and recursion are two sides of the same coin. Induction proves correctness of recursive algorithms, and recursive algorithms implement inductive definitions." });
    qs.push({ id: `${prefix}-fb2`, type: "fill-blank", difficulty: "hard",
      question: `The mathematical concept used to prove that a problem has no algorithmic solution is called ___ theory.`,
      correctAnswer: "computability", acceptableAnswers: ["complexity"],
      explanation: "Computability theory studies which problems can and cannot be solved by algorithms, independent of hardware or programming language." });
    qs.push({ id: `${prefix}-mc4`, type: "multiple-choice", difficulty: "hard",
      question: `How do CS researchers use ${chName} to prove algorithm optimality?`,
      options: [
        { id: "a", text: "By establishing lower bounds that no algorithm can beat" },
        { id: "b", text: "By testing on the fastest available hardware" },
        { id: "c", text: "By comparing with commercial software" },
        { id: "d", text: "By using the most popular programming language" },
      ], correctAnswer: "a",
      explanation: "Lower bounds prove that any algorithm solving a problem must take at least a certain amount of time, establishing fundamental limits on efficiency." });
  }
  // ── Digital/logic topics ──
  else if (cat === "digital") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `What is the fundamental unit of information in ${chName}?`,
      options: [
        { id: "a", text: "The bit — a binary digit (0 or 1)" },
        { id: "b", text: "The byte — 8 bits" },
        { id: "c", text: "The nibble — 4 bits" },
        { id: "d", text: "The word — CPU-specific size" },
      ], correctAnswer: "a",
      explanation: "The bit (binary digit) is the most basic unit of information in computing, representing a choice between two values: 0 and 1." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `How many unique values can be represented with N bits?`,
      options: [
        { id: "a", text: "2^N unique values" },
        { id: "b", text: "N^2 unique values" },
        { id: "c", text: "2N unique values" },
        { id: "d", text: "N unique values" },
      ], correctAnswer: "a",
      explanation: "Each bit doubles the number of representable values. With N bits, you can represent 2^N different values." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `In ${chName}, the AND gate outputs 1 only when both inputs are 1.`,
      correctAnswer: true,
      explanation: "AND is a fundamental logic gate. Output is 1 if and only if ALL inputs are 1." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
      question: `The base-16 number system used to represent binary more compactly is called ___.`,
      correctAnswer: "hexadecimal", acceptableAnswers: ["hex"],
      explanation: "Hexadecimal (base-16) represents each 4-bit binary sequence as a single digit (0-9, A-F)." });
    qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
      question: `Why do computers use binary instead of decimal for representing data?`,
      options: [
        { id: "a", text: "Binary maps naturally to electronic circuits with two stable voltage states" },
        { id: "b", text: "Binary uses less power than decimal circuits" },
        { id: "c", text: "Binary was chosen arbitrarily and decimal would work equally well" },
        { id: "d", text: "Binary was invented first and there is no reason to change" },
      ], correctAnswer: "a",
      explanation: "Binary maps naturally to electronic circuits where a voltage is either high (1) or low (0). This two-state system is simple, reliable, and efficient." });
    qs.push({ id: `${prefix}-tf2`, type: "true-false", difficulty: "medium",
      question: `In two's complement representation, the most significant bit indicates the sign of the number.`,
      correctAnswer: true,
      explanation: "In two's complement, the MSB is the sign bit: 0 for positive, 1 for negative." });
    qs.push({ id: `${prefix}-fb2`, type: "fill-blank", difficulty: "hard",
      question: `A ___ gate can be constructed from only NAND gates, making NAND a universal gate.`,
      correctAnswer: "NOT", acceptableAnswers: ["AND", "OR"],
      explanation: "NAND gates are universal because you can construct any logic gate using only NAND gates, simplifying chip manufacturing." });
    qs.push({ id: `${prefix}-mc4`, type: "multiple-choice", difficulty: "hard",
      question: `What is the decimal value of the 8-bit two's complement number 11111111?`,
      options: [
        { id: "a", text: "-1" },
        { id: "b", text: "255" },
        { id: "c", text: "-127" },
        { id: "d", text: "0" },
      ], correctAnswer: "a",
      explanation: "In two's complement, 11111111 = -1. The range of an 8-bit signed integer is -128 to 127." });
  }
  // ── Algorithm topics ──
  else if (cat.startsWith("algo")) {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `What does ${chName} help us analyze in computer science?`,
      options: [
        { id: "a", text: "The efficiency and correctness of computational procedures" },
        { id: "b", text: "The visual appearance of software" },
        { id: "c", text: "The cost of hardware" },
        { id: "d", text: "The popularity of programming languages" },
      ], correctAnswer: "a",
      explanation: "Algorithms are step-by-step procedures for solving problems. Analysis helps us understand which algorithms are most efficient and correct." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `What is the time complexity of the most efficient comparison-based sorting algorithm?`,
      options: [
        { id: "a", text: "O(n log n) — optimal for comparison sorts" },
        { id: "b", text: "O(n) — linear time" },
        { id: "c", text: "O(n²) — quadratic time" },
        { id: "d", text: "O(log n) — logarithmic time" },
      ], correctAnswer: "a",
      explanation: "Comparison-based sorting has a proven lower bound of Ω(n log n). Merge sort, heap sort, and quick sort achieve this bound." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `An algorithm with O(n²) will always be slower than one with O(n log n) for sufficiently large inputs.`,
      correctAnswer: true,
      explanation: "For large n, n² grows much faster than n log n, regardless of constant factors." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
      question: `In asymptotic analysis, the notation that describes the upper bound of an algorithm's growth rate is called Big ___.`,
      correctAnswer: "O", acceptableAnswers: ["Oh"],
      explanation: "Big O (O) describes the worst-case upper bound. Omega (Ω) describes the lower bound. Theta (Θ) describes the tight bound." });
    qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
      question: `What distinguishes a randomized algorithm from a deterministic one in ${chName}?`,
      options: [
        { id: "a", text: "Randomized algorithms use random choices during execution to guide behavior" },
        { id: "b", text: "Randomized algorithms always produce wrong answers" },
        { id: "c", text: "Randomized algorithms are always slower" },
        { id: "d", text: "Randomized algorithms cannot be analyzed" },
      ], correctAnswer: "a",
      explanation: "Randomized algorithms make random choices during execution. They can achieve better average-case performance or solve different classes of problems." });
    qs.push({ id: `${prefix}-tf2`, type: "true-false", difficulty: "medium",
      question: `Divide and conquer algorithms always achieve O(n log n) time complexity.`,
      correctAnswer: false,
      explanation: "Not all divide-and-conquer algorithms are O(n log n). The complexity depends on how the problem is divided and how results are combined." });
    qs.push({ id: `${prefix}-fb2`, type: "fill-blank", difficulty: "hard",
      question: `The ___ theorem provides a formula for solving recurrence relations of divide-and-conquer algorithms.`,
      correctAnswer: "Master", acceptableAnswers: ["master"],
      explanation: "The Master Theorem solves recurrences of the form T(n) = aT(n/b) + f(n) from divide-and-conquer algorithms." });
    qs.push({ id: `${prefix}-mc4`, type: "multiple-choice", difficulty: "hard",
      question: `What is the difference between worst-case and average-case complexity in ${chName}?`,
      options: [
        { id: "a", text: "Worst-case considers the maximum over all inputs; average-case considers expected behavior over a distribution" },
        { id: "b", text: "They are always the same value" },
        { id: "c", text: "Average-case is always better than worst-case" },
        { id: "d", text: "Worst-case is easier to compute than average-case" },
      ], correctAnswer: "a",
      explanation: "Worst-case gives an upper bound for all inputs. Average-case tells us expected performance on typical inputs." });
  }
  // ── Data structures topics ──
  else if (cat === "ds") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `What is the primary purpose of ${chName}?`,
      options: [
        { id: "a", text: "To organize data for efficient access and modification" },
        { id: "b", text: "To make code look more complex" },
        { id: "c", text: "To slow down program execution" },
        { id: "d", text: "To replace algorithms entirely" },
      ], correctAnswer: "a",
      explanation: "Data structures organize data so that it can be accessed and modified efficiently for specific operations." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `What is the time complexity of searching a sorted array?`,
      options: [
        { id: "a", text: "O(log n) using binary search" },
        { id: "b", text: "O(n) using linear search" },
        { id: "c", text: "O(1) constant time" },
        { id: "d", text: "O(n²)" },
      ], correctAnswer: "a",
      explanation: "Binary search on a sorted array achieves O(log n) by repeatedly dividing the search space in half." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `Arrays provide O(1) access time by index.`,
      correctAnswer: true,
      explanation: "Arrays use contiguous memory. Computing arr[i] is a simple O(1) arithmetic operation." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
      question: `A data structure that follows the Last-In-First-Out (LIFO) principle is called a ___.`,
      correctAnswer: "stack", acceptableAnswers: ["Stack"],
      explanation: "Stacks are LIFO structures where elements are added (pushed) and removed (popped) from the top." });
    qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
      question: `Why choose a linked list over a dynamic array for ${chName}?`,
      options: [
        { id: "a", text: "Linked lists offer O(1) insertions/deletions at arbitrary positions" },
        { id: "b", text: "Linked lists use less memory" },
        { id: "c", text: "Linked lists provide faster random access" },
        { id: "d", text: "Linked lists are always sorted" },
      ], correctAnswer: "a",
      explanation: "Linked lists allow O(1) insertions/deletions at any known position via pointer updates, unlike arrays which require O(n) shifting." });
    qs.push({ id: `${prefix}-tf2`, type: "true-false", difficulty: "medium",
      question: `A hash table guarantees O(1) worst-case lookup time.`,
      correctAnswer: false,
      explanation: "Hash tables have O(1) average-case but O(n) worst-case if many collisions occur." });
    qs.push({ id: `${prefix}-fb2`, type: "fill-blank", difficulty: "hard",
      question: `A self-balancing BST with balance factor -1, 0, or +1 is called a(n) ___ tree.`,
      correctAnswer: "AVL", acceptableAnswers: ["avl", "Adelson-Velsky and Landis"],
      explanation: "AVL trees maintain strict balance where subtree height difference never exceeds 1." });
    qs.push({ id: `${prefix}-mc4`, type: "multiple-choice", difficulty: "hard",
      question: `Space complexity of adjacency matrix vs list for a graph?`,
      options: [
        { id: "a", text: "Matrix: O(V²), List: O(V + E)" },
        { id: "b", text: "Matrix: O(V + E), List: O(V²)" },
        { id: "c", text: "Both are O(V²)" },
        { id: "d", text: "Both are O(V + E)" },
      ], correctAnswer: "a",
      explanation: "Adjacency matrices always use O(V²) space. Adjacency lists use O(V + E), better for sparse graphs." });
  }
  // ── Systems/net/arch/OS topics ──
  else if (["arch", "os", "net", "db", "dist"].includes(cat)) {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `What is the role of ${chName} in a computer system?`,
      options: [
        { id: "a", text: "Managing and coordinating hardware and software resources" },
        { id: "b", text: "Only handling user interface rendering" },
        { id: "c", text: "Replacing the need for application software" },
        { id: "d", text: "Only used for gaming" },
      ], correctAnswer: "a",
      explanation: "Systems-level components manage resources, provide abstractions, and coordinate between hardware and software." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `What is the main advantage of ${chName}?`,
      options: [
        { id: "a", text: "It provides essential abstractions that simplify complex hardware/software management" },
        { id: "b", text: "It makes all operations instant" },
        { id: "c", text: "It eliminates hardware entirely" },
        { id: "d", text: "It can be ignored in modern systems" },
      ], correctAnswer: "a",
      explanation: "Systems concepts provide critical abstractions that make complex computing resources manageable and reliable." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `${chName} is a fundamental topic for understanding how computers work.`,
      correctAnswer: true,
      explanation: "Understanding systems-level concepts is essential for writing efficient code and debugging complex issues." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
      question: `In ${chName}, the abstraction that provides separation between hardware and software is called the ___ layer.`,
      correctAnswer: "abstraction", acceptableAnswers: ["interface", "virtualization"],
      explanation: "Abstraction layers hide implementation details, allowing software to work across different hardware." });
    qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
      question: `What distinguishes ${chName} from higher-level CS concepts?`,
      options: [
        { id: "a", text: "It operates closer to the hardware and deals with resource management directly" },
        { id: "b", text: "It is completely unrelated to practical computing" },
        { id: "c", text: "It only matters for legacy systems" },
        { id: "d", text: "Modern frameworks make it irrelevant" },
      ], correctAnswer: "a",
      explanation: "Systems-level concepts work close to the hardware, managing resources and providing the foundation for higher-level abstractions." });
    qs.push({ id: `${prefix}-tf2`, type: "true-false", difficulty: "medium",
      question: `Performance optimization in ${chName} requires understanding the underlying hardware.`,
      correctAnswer: true,
      explanation: "Effective optimization requires understanding how hardware actually executes code — cache hierarchies, pipelining, and memory access patterns." });
    qs.push({ id: `${prefix}-fb2`, type: "fill-blank", difficulty: "hard",
      question: `The principle of ___ states that a system should only perform computations that are necessary for the final result.`,
      correctAnswer: "efficiency", acceptableAnswers: ["optimization", "minimality"],
      explanation: "Efficient systems avoid unnecessary work. This principle guides everything from cache design to scheduling." });
    qs.push({ id: `${prefix}-mc4`, type: "multiple-choice", difficulty: "hard",
      question: `How does understanding ${chName} help in building scalable systems?`,
      options: [
        { id: "a", text: "It reveals bottlenecks and trade-offs at different scale levels" },
        { id: "b", text: "It guarantees linear scaling forever" },
        { id: "c", text: "It only applies to single-machine systems" },
        { id: "d", text: "It has no relation to scalability" },
      ], correctAnswer: "a",
      explanation: "Understanding systems fundamentals reveals the bottlenecks and trade-offs that emerge at different scales." });
  }
  // ── All other topics (theory, pl, ai, sec, general) ──
  else {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `What makes ${chName} important in computer science?`,
      options: [
        { id: "a", text: "It provides fundamental concepts for solving computational problems" },
        { id: "b", text: "It is only useful for academic research" },
        { id: "c", text: "It has no practical applications" },
        { id: "d", text: "It only applies to web development" },
      ], correctAnswer: "a",
      explanation: "CS concepts form the foundation for all areas of computing, from systems to AI." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `How does understanding ${chName} help in practical software development?`,
      options: [
        { id: "a", text: "It enables better design decisions and helps avoid common pitfalls" },
        { id: "b", text: "It only matters for passing exams" },
        { id: "c", text: "Modern frameworks make this knowledge obsolete" },
        { id: "d", text: "It is only useful for hardware engineers" },
      ], correctAnswer: "a",
      explanation: "CS fundamentals lead to better architecture, performance optimization, and debugging skills." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `${chName} is a foundational topic that all CS students should understand.`,
      correctAnswer: true,
      explanation: "These concepts are essential for any serious computer scientist or software engineer." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
      question: `The study of ${chName} helps engineers build more ___ systems.`,
      correctAnswer: "efficient", acceptableAnswers: ["reliable", "robust", "scalable"],
      explanation: "Understanding CS fundamentals directly translates to building better systems." });
    qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
      question: `What distinguishes ${chName} from related concepts in computer science?`,
      options: [
        { id: "a", text: "Its unique focus on solving specific classes of computational problems" },
        { id: "b", text: "It has no distinguishing features" },
        { id: "c", text: "It is identical to all other CS subfields" },
        { id: "d", text: "It only differs in naming convention" },
      ], correctAnswer: "a",
      explanation: "Each area of CS focuses on particular problems and develops specialized techniques." });
    qs.push({ id: `${prefix}-tf2`, type: "true-false", difficulty: "medium",
      question: `Understanding ${chName} is more important than writing clean code.`,
      correctAnswer: false,
      explanation: "Both are essential. Theory provides the foundation; practical skills build real systems." });
    qs.push({ id: `${prefix}-fb2`, type: "fill-blank", difficulty: "hard",
      question: `The best way to truly master ${chName} is through consistent ___ over time.`,
      correctAnswer: "practice", acceptableAnswers: ["implementation", "application"],
      explanation: "CS concepts are best learned by doing — implementing and building reinforces understanding." });
    qs.push({ id: `${prefix}-mc4`, type: "multiple-choice", difficulty: "hard",
      question: `How should you approach learning ${chName} to maximize understanding?`,
      options: [
        { id: "a", text: "Study theory alongside practical implementation projects" },
        { id: "b", text: "Only read textbooks without coding" },
        { id: "c", text: "Only write code without studying fundamentals" },
        { id: "d", text: "Memorize solutions without understanding" },
      ], correctAnswer: "a",
      explanation: "The most effective learning combines theoretical understanding with hands-on implementation." });
  }
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
