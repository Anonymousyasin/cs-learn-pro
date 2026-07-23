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
    desc: "Master HTML from the ground up. Learn to structure web pages with semantic elements, create forms, embed media, and build accessible, well-formed documents — from basic tags to advanced modern APIs.",
    icon: "FileCode", color: "#f97316", difficulty: 1, hours: 70,
    chapters: [
      // ─── Part 1: HTML Basics (14 chapters) ───
      "HTML Introduction","HTML Editors & Tools","HTML Document Structure","HTML Elements & Tags",
      "HTML Attributes","HTML Headings & Hierarchy","HTML Paragraphs & Text","HTML Comments",
      "HTML Formatting Elements","HTML Quotations & Citations","HTML Colors (Named, Hex, RGB)","HTML Styles (Inline CSS)",
      "HTML Links & Hyperlinks","HTML Images & Alt Text",

      // ─── Part 2: HTML Structure (14 chapters) ───
      "HTML Lists (Ordered, Unordered, Description)","HTML Tables (Rows, Cols, Headers)","HTML Table Styling & Accessibility",
      "HTML Divs & Spans","HTML Block & Inline Elements","HTML Classes for Styling","HTML IDs for Uniqueness",
      "HTML Iframes & Embeds","HTML File Paths (Absolute vs Relative)","HTML Head Meta Tags","HTML Layout Elements (Header, Nav, Main)",
      "HTML Semantic Elements (Article, Section, Aside)","HTML Style Guide & Conventions","HTML Responsive Meta Viewport",

      // ─── Part 3: HTML Text & Encoding (8 chapters) ───
      "HTML Entities & Special Characters","HTML Symbols & Icons","HTML Emojis & UTF-8","HTML Charset Declaration",
      "HTML URL Encoding","HTML Language Attributes","HTML Bidirectional Text","HTML Code & Pre Elements",

      // ─── Part 4: HTML Forms (14 chapters) ───
      "HTML Forms Overview","HTML Form Attributes (Action, Method)","HTML Form Elements (Input, Select, Textarea)",
      "HTML Input Types (Text, Password, Email)","HTML Input Types (Number, Range, Date)","HTML Input Types (Checkbox, Radio, File)",
      "HTML Input Attributes (Placeholder, Required, Pattern)","HTML Select Menus & Options","HTML Textareas & Multi-line Input",
      "HTML Form Validation (Client-Side)","HTML Form Styling & UX","HTML Fieldset & Legend","HTML Datalist & Autocomplete",
      "HTML Form Security & Best Practices",

      // ─── Part 5: HTML Graphics (8 chapters) ───
      "HTML Canvas: Drawing Shapes","HTML Canvas: Paths & Text","HTML Canvas: Transformations & Animation",
      "HTML SVG: Scalable Vector Graphics","HTML SVG: Shapes, Paths, Filters","HTML SVG: Animation & Interactivity",
      "HTML MathML for Mathematical Notation","HTML Image Maps & Clickable Regions",

      // ─── Part 6: HTML Media (8 chapters) ───
      "HTML Video Element & Attributes","HTML Video: Formats, Codecs, Captions","HTML Audio Element & Attributes",
      "HTML Embedded YouTube & Vimeo","HTML Picture Element & Responsive Images","HTML Source & Track Elements",
      "HTML Object & Embed (Legacy Plugins)","HTML Media Events & JavaScript Control",

      // ─── Part 7: HTML Web APIs (14 chapters) ───
      "HTML Drag & Drop API","HTML Web Storage (LocalStorage, SessionStorage)","HTML Web Workers (Background Threads)",
      "HTML Server-Sent Events (SSE)","HTML Geolocation API","HTML History API (PushState, PopState)",
      "HTML Notification API","HTML Clipboard API","HTML Fullscreen API","HTML Page Visibility API",
      "HTML Network Information API","HTML Battery & Device APIs","HTML Pointer Lock API","HTML Speech Synthesis & Recognition",

      // ─── Part 8: HTML Advanced & Modern (14 chapters) ───
      "HTML Templates & Slots","HTML Web Components: Custom Elements","HTML Shadow DOM",
      "HTML Microdata & Structured Data","HTML ARIA: Roles & Properties","HTML ARIA: Live Regions & States",
      "HTML Accessibility (WCAG Guidelines)","HTML SEO Best Practices","HTML Performance: Critical Rendering Path",
      "HTML Progressive Web Apps (Manifest)","HTML Dialog & Modal Elements","HTML Details & Summary (Disclosure)",
      "HTML Popover API","HTML Search & Inline Find",

      // ─── Part 9: HTML Mastery (6 chapters) ───
      "HTML Security: XSS, CSP, CORS","HTML Testing & Validation Tools","HTML Email Coding (Tables, Inline Styles)",
      "HTML Preprocessors (Pug, Haml)","HTML Best Practices: Code Organization","HTML Future: What's New in HTML?",
    ]
  },
  {
    id: "css", title: "CSS", fullTitle: "CSS — Styling the Web",
    desc: "From selectors to animations, learn to craft beautiful, responsive layouts with modern CSS including Flexbox, Grid, custom properties, container queries, and design systems.",
    icon: "Palette", color: "#38bdf8", difficulty: 1, hours: 75,
    chapters: [
      // ─── Part 1: CSS Fundamentals (14 chapters) ───
      "CSS Introduction","CSS Syntax & Structure","CSS Selectors (Element, Class, ID)","CSS How To Add (Inline, Internal, External)",
      "CSS Comments & Organization","CSS Colors (Named, Hex, RGB, HSL)","CSS Backgrounds & Background Images",
      "CSS Borders (Width, Style, Color, Radius)","CSS Margins & Collapsing Margins","CSS Padding & Content Spacing",
      "CSS Height, Width & Max-Width","CSS Box Model (Content, Padding, Border, Margin)","CSS Box Sizing (Border-Box vs Content-Box)",
      "CSS Outline & Accessibility Focus",

      // ─── Part 2: CSS Typography & Text (10 chapters) ───
      "CSS Text Properties (Align, Decoration, Transform)","CSS Font Families & Web Safe Fonts",
      "CSS @font-face & Web Fonts (Google Fonts)","CSS Font Size, Weight, Style & Variant",
      "CSS Line Height & Vertical Align","CSS Text Overflow & White Space","CSS Word Break & Hyphenation",
      "CSS Text Shadows & Effects","CSS Icons (Font Awesome, Material)","CSS Columns & Multi-column Layout",

      // ─── Part 3: CSS Layout (18 chapters) ───
      "CSS Display: Block, Inline, Inline-Block, None","CSS Position: Static, Relative, Absolute",
      "CSS Position: Fixed & Sticky","CSS Z-Index & Stacking Context","CSS Overflow: Visible, Hidden, Scroll, Auto",
      "CSS Float & Clear","CSS Flexbox: Container Properties","CSS Flexbox: Item Properties (Grow, Shrink, Basis)",
      "CSS Flexbox: Alignment & Distribution","CSS Flexbox: Real-World Layouts","CSS Grid: Container & Template Columns/Rows",
      "CSS Grid: Item Placement & Spanning","CSS Grid: Named Areas & Lines","CSS Grid: Auto Flow & Dense Packing",
      "CSS Grid: Alignment & Gaps","CSS Grid: Responsive Layouts","CSS Grid: Subgrid Deep Dive",
      "CSS Multi-Column Layout (Columns, Gap, Rule)",

      // ─── Part 4: CSS Advanced Selectors & Effects (12 chapters) ───
      "CSS Combinators (Descendant, Child, Sibling)","CSS Attribute Selectors (Presence, Value, Substring)",
      "CSS Pseudo-Classes: Structural (:nth-child, :first-of-type)","CSS Pseudo-Classes: UI States (:hover, :focus, :disabled)",
      "CSS Pseudo-Elements (::before, ::after, ::selection)","CSS Opacity & RGBA/HSLA Alpha Channels",
      "CSS Gradients (Linear, Radial, Conic)","CSS Box Shadows & Drop Shadows","CSS Background: Size, Position, Repeat, Attachment",
      "CSS Filter Effects (Blur, Grayscale, Brightness)","CSS Backdrop Filter (Frosted Glass Effect)","CSS Masking & Clipping (Clip-Path)",

      // ─── Part 5: CSS Responsive & Modern (14 chapters) ───
      "CSS Units: px, em, rem, vw, vh, %, ch","CSS Specificity & The Cascade","CSS !important & When to Avoid",
      "CSS Inheritance & Initial/Unset/Inherit","CSS Custom Properties (Variables)","CSS @property: Typed Custom Properties",
      "CSS calc(), min(), max(), clamp()","CSS Media Queries: Breakpoints","CSS Media Queries: Feature Detection",
      "CSS Container Queries & Container Units","CSS Viewport Units (dvh, svh, lvh)","CSS Logical Properties (Inset, Margin-Block)",
      "CSS Color Functions (color-mix, relative colors)","CSS Nesting (Native CSS Nesting)",

      // ─── Part 6: CSS Animations & Transforms (10 chapters) ───
      "CSS 2D Transforms (Translate, Rotate, Scale, Skew)","CSS 3D Transforms & Perspective",
      "CSS Transitions: Properties & Timing Functions","CSS Transitions: Delays & Events","CSS Animations: @keyframes & Animation Properties",
      "CSS Animation: Timing, Direction, Fill Mode","CSS Animation: Steps & Multiple Animations","CSS Scroll-Driven Animations",
      "CSS View Transitions API","CSS Performance: Will-Change & Hardware Acceleration",

      // ─── Part 7: CSS Architecture & Tools (8 chapters) ───
      "CSS Frameworks (Tailwind, Bootstrap)","CSS Preprocessors (Sass/SCSS)","CSS Methodologies (BEM, ITCSS, SMACSS)",
      "CSS Cascade Layers (@layer)","CSS Design Systems & Tokens","CSS Custom Properties for Theming",
      "CSS Debugging & DevTools","CSS Best Practices: Organization & Maintainability",

      // ─── Part 8: CSS Advanced Topics (8 chapters) ───
      "CSS Forms Styling & UX","CSS Image Sprites & Optimization","CSS Counters & Numbered Lists",
      "CSS Scroll Snap","CSS Print Stylesheets (@page)","CSS Feature Queries (@supports)",
      "CSS Houdini: Paint API & Custom Worklets","CSS Has Selector (:has — The Parent Selector)",
    ]
  },
  {
    id: "javascript", title: "JavaScript", fullTitle: "JavaScript — Bringing Pages to Life",
    desc: "The world's most versatile programming language. From variables and closures to async/await, modules, and the complete browser API — beginner to advanced.",
    icon: "Code2", color: "#eab308", difficulty: 2, hours: 90,
    chapters: [
      // ─── Part 1: JavaScript Fundamentals (14 chapters) ───
      "JS Introduction & History","JS Where To (Script Tags, External Files)","JS Output (Console, Alert, Document)",
      "JS Syntax & Statements","JS Comments","JS Variables (var, let, const)","JS Data Types (Primitives, Objects)",
      "JS Type Coercion & Conversion","JS Numbers & Number Methods","JS Strings & Template Literals",
      "JS String Methods (Slice, Replace, Split)","JS Boolean Logic & Truthy/Falsy","JS Operators (Arithmetic, Assignment, Comparison)",
      "JS Operator Precedence & Associativity",

      // ─── Part 2: Control Flow & Functions (14 chapters) ───
      "JS If/Else & Conditional Statements","JS Switch Statement","JS Ternary Operator",
      "JS For Loop (Classic, For-In, For-Of)","JS While & Do-While Loops","JS Break, Continue & Labels",
      "JS Functions: Declaration vs Expression","JS Parameters: Default, Rest, Arguments","JS Return Values & Pure Functions",
      "JS Arrow Functions","JS Scope: Global, Function, Block","JS Hoisting (var, let, const, function)",
      "JS Closures & Lexical Scoping","JS Immediately Invoked Function Expressions (IIFE)",

      // ─── Part 3: Objects, Arrays & Collections (14 chapters) ───
      "JS Object Literals & Properties","JS Object Methods & This","JS Constructors & The New Keyword",
      "JS Prototypes & Prototypal Inheritance","JS Classes (ES6)","JS Class Inheritance (Extends, Super)",
      "JS Getters, Setters & Static Methods","JS Private Fields & Methods","JS Arrays: Creation & Access",
      "JS Array Methods: Push, Pop, Shift, Unshift, Splice","JS Array Methods: Map, Filter, Reduce, ForEach",
      "JS Array Search: IndexOf, Find, Includes","JS Array Sort: Custom Comparators & Stability","JS Sets, Maps, WeakMaps & WeakSets",

      // ─── Part 4: Advanced JavaScript (14 chapters) ───
      "JS Destructuring: Arrays & Objects","JS Spread & Rest Operators","JS Modules: Export & Import",
      "JS Dynamic Imports & Lazy Loading","JS Error Handling: Try, Catch, Finally","JS Custom Errors & Stack Traces",
      "JS This Keyword: Binding & Context","JS Bind, Call & Apply","JS JSON: Parse, Stringify, Serialization",
      "JS Symbols & Well-Known Symbols","JS Iterables & Iterators","JS Generators (Yield, Next, Delegation)",
      "JS Proxies & Reflect API","JS Temporal API (Dates & Times)",

      // ─── Part 5: Async JavaScript (12 chapters) ───
      "JS Callbacks & Callback Hell","JS Promises: States & Chaining","JS Promise Combinators (All, Race, AllSettled, Any)",
      "JS Async/Await: Syntax & Error Handling","JS The Event Loop (Call Stack, Task Queue)","JS Microtasks vs Macrotasks",
      "JS Timing: setTimeout, setInterval, requestAnimationFrame","JS Timers & Closures (The Loop Problem)",
      "JS Web Workers & Message Passing","JS Service Workers: Lifecycle & Caching","JS Service Workers: Push Notifications & Sync",
      "JS IndexedDB: Client-Side Database",

      // ─── Part 6: DOM & Browser APIs (14 chapters) ───
      "JS DOM: Document Object Model Overview","JS DOM Selectors (QuerySelector, GetElementById)",
      "JS DOM Manipulation (Create, Append, Remove)","JS DOM Traversal (Parent, Children, Siblings)",
      "JS DOM Attributes & Data Attributes","JS DOM Classes (ClassList, Toggle)","JS DOM Styling (Style Property, Computed Styles)",
      "JS Events: AddEventListener & RemoveEventListener","JS Event Object & Properties","JS Event Propagation: Bubbling & Capturing",
      "JS Event Delegation & Performance","JS Custom Events & Dispatch","JS Form Events & Validation",
      "JS Window, Document & Navigator Objects",

      // ─── Part 7: Modern JS APIs (12 chapters) ───
      "JS Fetch API: GET, POST, Headers","JS Fetch: Error Handling & AbortController","JS LocalStorage & SessionStorage",
      "JS Cookies: Read, Write, Delete","JS Geolocation API","JS Canvas 2D Drawing API",
      "JS WebSockets: Real-Time Communication","JS Intersection Observer (Lazy Loading, Infinite Scroll)",
      "JS Mutation Observer (DOM Change Detection)","JS Resize Observer (Element Size Changes)",
      "JS Clipboard & File APIs","JS History API: SPA Routing",

      // ─── Part 8: JS Tooling & Best Practices (10 chapters) ───
      "JS Debugging: DevTools, Breakpoints, Source Maps","JS Testing: Unit Tests with Vitest/Jest",
      "JS Performance: Memory Leaks & Profiling","JS Security: XSS, CSRF, CSP","JS Bundlers: Webpack, Vite, ESBuild",
      "JS Linting (ESLint) & Formatting (Prettier)","JS TypeScript: Types, Interfaces, Generics",
      "JS Design Patterns (Module, Observer, Singleton)","JS Functional Programming (Curry, Compose, Immutability)",
      "JS Best Practices: Code Quality & Conventions",

      // ─── Part 9: Node.js & Beyond (6 chapters) ───
      "JS Node.js: Modules (CommonJS vs ESM)","JS Node.js: File System & Path","JS Node.js: HTTP & Express Basics",
      "JS NPM: Packages, Scripts, Semantic Versioning","JS Environment Variables & Config","JS Modern Features: What's Next in ECMAScript",
    ]
  },
  {
    id: "python", title: "Python", fullTitle: "Python — Power and Simplicity",
    desc: "Python for everyone. Learn syntax, data structures, OOP, file handling, standard library, async, testing, and essential packages — from zero to production-ready.",
    icon: "Terminal", color: "#22c55e", difficulty: 2, hours: 80,
    chapters: [
      // ─── Part 1: Python Fundamentals (12 chapters) ───
      "Python Introduction & Philosophy","Python Installation & Setup","Python Syntax & Indentation",
      "Python Comments & Docstrings","Python Variables & Assignment","Python Data Types (int, float, str, bool, None)",
      "Python Numbers & Math Operations","Python Type Conversion (Casting)","Python Strings: Creation & Escaping",
      "Python String Indexing & Slicing","Python String Methods (Split, Join, Replace, Find)","Python F-Strings & Formatting",

      // ─── Part 2: Control Flow & Data Structures (16 chapters) ───
      "Python Booleans & Comparison Operators","Python Logical Operators (and, or, not)","Python If/Elif/Else & Conditional Logic",
      "Python Match/Case (Structural Pattern Matching)","Python While Loops","Python For Loops & Range",
      "Python Break, Continue & Else in Loops","Python Lists: Creation, Indexing, Slicing","Python List Methods (Append, Insert, Remove, Sort)",
      "Python List Comprehension & Generator Expressions","Python Tuples: Immutable Sequences","Python Sets: Unordered Unique Collections",
      "Python Dictionaries: Key-Value Pairs","Python Dictionary Methods & Comprehension","Python Collections Module (Deque, Counter, DefaultDict)",
      "Python Itertools: Chain, Cycle, Combinations, Permutations",

      // ─── Part 3: Functions & Modules (12 chapters) ───
      "Python Functions: Def & Return","Python Parameters: Positional, Keyword, Default, *args, **kwargs",
      "Python Lambda Functions","Python Scope: LEGB Rule (Local, Enclosing, Global, Built-in)",
      "Python Global & Nonlocal Statements","Python Modules: Import & From","Python Packages & __init__.py",
      "Python Standard Library Overview","Python PIP & Virtual Environments","Python Requirements & Dependency Management",
      "Python __name__ == '__main__' Pattern","Python Type Hints & Annotations",

      // ─── Part 4: Object-Oriented Python (14 chapters) ───
      "Python Classes & Objects","Python __init__ & Constructor","Python Instance, Class & Static Methods",
      "Python Attributes: Instance, Class, Private","Python Property Decorators (@property, @setter)","Python Inheritance & Super()",
      "Python Method Overriding & MRO","Python Abstract Base Classes (ABC)","Python Dataclasses (@dataclass)",
      "Python Magic Methods: __str__, __repr__, __len__","Python Magic Methods: __eq__, __hash__, __lt__",
      "Python Magic Methods: __getitem__, __setitem__, __iter__","Python Operator Overloading","Python Polymorphism & Duck Typing",

      // ─── Part 5: Error Handling & File I/O (10 chapters) ───
      "Python Exceptions: Try, Except, Finally","Python Multiple Except Blocks & Exception Hierarchy",
      "Python Raising Exceptions (Raise, Assert)","Python Custom Exception Classes","Python File Reading (Open, Read, Readlines)",
      "Python File Writing & Appending","Python Context Managers (With Statement)","Python Contextlib & Custom Context Managers",
      "Python Working with JSON","Python Working with CSV Files",

      // ─── Part 6: Python Standard Library (14 chapters) ───
      "Python Datetime: Dates, Times, Timedeltas","Python OS Module: Files, Paths, Environment","Python Sys Module: Arguments, Path, Exit",
      "Python Re: Regular Expressions (Match, Search, Sub)","Python Math & Statistics Modules","Python Random: Seeds, Choices, Shuffle",
      "Python Argparse: Building CLI Tools","Python Logging: Logger, Handler, Formatter","Python Subprocess: Running Shell Commands",
      "Python Threading: Concurrent Execution","Python Multiprocessing: Parallel CPU Work","Python Pathlib: Modern Path Handling",
      "Python Enum: Named Constants","Python Hashlib & HMAC: Cryptographic Hashing",

      // ─── Part 7: Advanced Python (12 chapters) ───
      "Python Decorators: Function & Class Decorators","Python Decorators with Arguments","Python Generators: Yield, Send, Throw",
      "Python Generator Pipelines & Coroutines","Python Iterators: __iter__ & __next__","Python Descriptors: __get__, __set__, __delete__",
      "Python Metaclasses: Type & Custom Metaclasses","Python Slots: Memory Optimization","Python Weak References & WeakRef",
      "Python Pickle & Serialization","Python Functools: Partial, LRU Cache, Wraps","Python Typing: Generics, Union, Optional, Protocol",

      // ─── Part 8: Async Python (6 chapters) ───
      "Python Asyncio: Event Loop & Coroutines","Python Async/Await Syntax","Python Async Context Managers & Async Iterators",
      "Python Asyncio: Tasks, Futures, Gather","Python Aiohttp: Async HTTP Client/Server","Python Async File I/O & Databases",

      // ─── Part 9: Testing, Data & Best Practices (8 chapters) ───
      "Python Unittest: TestCase, Asserts, Fixtures","Python Pytest: Functions, Fixtures, Parametrize","Python Pytest: Mocking & Monkeypatch",
      "Python NumPy: Arrays, Operations, Broadcasting","Python Pandas: Series, DataFrames, GroupBy","Python Matplotlib: Plots, Charts, Figures",
      "Python SQLite: Databases in Python","Python Best Practices: PEP 8, Type Hints, Documentation",
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

// ─── Project Definitions ─────────────────────────────────────────
// 20+ hands-on projects per programming language to reinforce learning


const htmlProjects = [
  { id:"html-hello", title:"My First Web Page", difficulty:1, order:1, estMin:20, xp:30,
    desc:"Create your first HTML page from scratch — learn document structure, headings, paragraphs, and basic text formatting.",
    objectives:["Set up a proper HTML document structure (<!DOCTYPE>, <html>, <head>, <body>)","Use heading tags (<h1>-<h6>) to create a hierarchy","Write paragraphs and format text with <strong>, <em>, <br>","Add comments to document your code"],
    requirements:["Valid HTML5 document with doctype declaration","Page title in the <head> section","At least one <h1> heading and two subheadings","Two paragraphs of text with some formatted words","HTML comments explaining each section"],
    hints:["Type <!DOCTYPE html> first — every HTML page needs it","<h1> is the main heading, only use one per page","Use <strong> for bold and <em> for italic text","<!-- comment --> for HTML comments"],
    concepts:["html-ch1","html-ch2","html-ch3","html-ch4","html-ch7","html-ch8"] },
  { id:"html-links-nav", title:"Navigation & Links", difficulty:1, order:2, estMin:25, xp:35,
    desc:"Build a multi-page website navigation system using links, anchors, images, and file paths.",
    objectives:["Create absolute and relative links with <a>","Use images with proper alt text for accessibility","Link to sections within the same page using IDs","Organize files with correct relative paths"],
    requirements:["At least 3 linked pages (index.html, about.html, contact.html)","Navigation bar with links to all pages on every page","An image with descriptive alt text","A link that opens in a new tab","An anchor link that jumps to a section on the page"],
    hints:["<a href=\"page.html\">Link text</a> for relative links","target=\"_blank\" opens in a new tab","<a href=\"#section-id\"> jumps to an element with that id","Always add alt=\"description\" to <img> for accessibility"],
    concepts:["html-ch13","html-ch14","html-ch28","html-ch29","html-ch30"] },
  { id:"html-recipe", title:"Recipe Page (Semantic HTML)", difficulty:1, order:3, estMin:30, xp:40,
    desc:"Build a beautiful recipe page using semantic HTML elements — learning proper content structure and accessibility.",
    objectives:["Use semantic elements (<article>, <section>, <header>, <footer>, <nav>, <aside>)","Structure content logically for screen readers","Create ordered and unordered lists for ingredients and steps"],
    requirements:["Uses <article> for the recipe content","<header> with recipe title, image, and metadata","Unordered list for ingredients","Ordered list for step-by-step instructions","<aside> with serving tips or nutritional info","<footer> with attribution"],
    hints:["<article> wraps the entire recipe — it's self-contained content","Use <ul> for unordered (bullet) lists and <ol> for numbered steps","<time datetime=\"\"> for prep/cook time","Semantic HTML helps SEO and accessibility"],
    concepts:["html-ch3","html-ch7","html-ch9","html-ch21","html-ch29","html-ch32"] },
  { id:"html-schedule", title:"Weekly Schedule Table", difficulty:1, order:4, estMin:25, xp:35,
    desc:"Create a weekly timetable using HTML tables — mastering rows, columns, spanning, and table accessibility.",
    objectives:["Build tables with <table>, <tr>, <th>, <td>","Merge cells with colspan and rowspan","Add captions and scope attributes for accessibility"],
    requirements:["Table with days of week as columns and time slots as rows","Use colspan to span activities across multiple hours","Use rowspan for activities spanning multiple days","<caption> describing the table","scope attribute on header cells"],
    hints:["<table> → <thead>/<tbody> → <tr> → <th>/<td>","colspan=\"2\" merges 2 columns, rowspan=\"3\" merges 3 rows","scope=\"col\" on <th> helps screen readers","<caption>Schedule</caption> goes right after <table>"],
    concepts:["html-ch22","html-ch23","html-ch30","html-ch52"] },
  { id:"html-portfolio", title:"Personal Portfolio Page", difficulty:1, order:5, estMin:35, xp:45,
    desc:"Build a personal portfolio page using divs, spans, classes, and IDs for layout and styling hooks.",
    objectives:["Use <div> and <span> for layout grouping","Apply classes for reusable styling hooks","Use IDs for unique page elements","Organize content with a clear visual hierarchy"],
    requirements:["Header with name and tagline","About section with bio paragraph","Skills section using <span> badges","Projects section with at least 3 project cards","Contact section with email link","Use classes consistently for styling hooks"],
    hints:["<div> creates block-level containers for sections","<span> is inline — use it for badges, inline highlights","class=\"project-card\" lets you style all cards together","id=\"about\" creates a unique anchor point"],
    concepts:["html-ch24","html-ch25","html-ch26","html-ch27","html-ch31","html-ch33"] },
  { id:"html-blog-layout", title:"Blog Page Layout", difficulty:2, order:6, estMin:30, xp:40,
    desc:"Build a complete blog page using HTML layout elements — header, nav, main, article, aside, footer.",
    objectives:["Implement a full page layout with semantic HTML5 elements","Create a responsive meta viewport for mobile","Use <iframe> to embed external content"],
    requirements:["<header> with site logo and navigation","<main> with at least 2 blog post <article>s","<aside> sidebar with categories or recent posts","<footer> with copyright and links","Responsive viewport meta tag","Embed a video or map using <iframe>"],
    hints:["<header>, <nav>, <main>, <article>, <aside>, <footer> are the key layout elements","<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> for mobile","<iframe src=\"url\"> for embedding YouTube or maps"],
    concepts:["html-ch31","html-ch32","html-ch28","html-ch34","html-ch35"] },
  { id:"html-entity-page", title:"HTML Entities & Special Characters", difficulty:1, order:7, estMin:20, xp:25,
    desc:"Create a reference page for HTML entities, special characters, symbols, and emoji — mastering character encoding.",
    objectives:["Use HTML entities for reserved characters","Insert symbols and icons with entity codes","Add emoji using UTF-8 encoding","Declare charset properly"],
    requirements:["Table listing common entities (&amp;, &lt;, &gt;, &quot;, &nbsp;)","Section showing currency symbols (&pound;, &euro;, &yen;)","Mathematical symbols section (&sum;, &pi;, &alpha;)","Emoji section with multiple emoji characters","UTF-8 charset declared in <head>"],
    hints:["HTML entities start with & and end with ;","&amp; renders as &, &lt; renders as <","Emoji work when <meta charset=\"UTF-8\"> is set","Use &nbsp; for non-breaking space"],
    concepts:["html-ch36","html-ch37","html-ch38","html-ch39","html-ch42"] },
  { id:"html-contact-form", title:"Contact Form", difficulty:2, order:8, estMin:35, xp:45,
    desc:"Build a complete, accessible contact form with various input types, validation, and proper form structure.",
    objectives:["Create forms with various input types (text, email, tel, textarea, select)","Implement client-side validation with required and pattern attributes","Group related fields with <fieldset> and <legend>","Add autocomplete and placeholder hints"],
    requirements:["Name field (text input)","Email field with type=\"email\" and validation","Subject dropdown (<select> with <option>s)","Message textarea","Phone field with pattern validation","Submit and reset buttons","<fieldset> grouping for personal info and message sections"],
    hints:["<input type=\"email\"> auto-validates email format","required attribute makes a field mandatory","pattern=\"[0-9]{10}\" validates phone format","<fieldset><legend>Section Title</legend>...</fieldset> groups fields"],
    concepts:["html-ch44","html-ch45","html-ch46","html-ch47","html-ch48","html-ch50","html-ch52","html-ch53"] },
  { id:"html-survey", title:"Survey & Poll Form", difficulty:2, order:9, estMin:30, xp:40,
    desc:"Build an interactive survey form with checkboxes, radio buttons, range sliders, and file uploads.",
    objectives:["Use radio buttons for single-choice questions","Use checkboxes for multi-select questions","Implement range sliders and number inputs","Add file upload capability"],
    requirements:["Radio button group for rating (1-5)","Checkboxes for selecting multiple options","Range input for satisfaction level (1-10)","Number input for age with min/max","File upload for profile picture","Datalist with autocomplete suggestions"],
    hints:["Radio buttons with same name attribute = only one selectable","Checkboxes can have different names for independent selection","<input type=\"range\" min=\"1\" max=\"10\"> creates a slider","<input type=\"file\"> for file uploads","<datalist> provides autocomplete suggestions for <input>"],
    concepts:["html-ch48","html-ch49","html-ch51","html-ch54","html-ch55"] },
  { id:"html-canvas-art", title:"Canvas Drawing Art", difficulty:2, order:10, estMin:40, xp:50,
    desc:"Create artistic drawings using the HTML Canvas API — shapes, paths, gradients, colors, and animation.",
    objectives:["Draw basic shapes (rectangles, circles, lines) on canvas","Use paths and bezier curves for complex shapes","Apply gradients and patterns as fills","Create a simple animation loop"],
    requirements:["At least 3 different shapes drawn on canvas","A gradient fill (linear or radial)","A complex shape created with paths (bezier curve)","Text drawn on the canvas","A simple animation (moving ball or rotating shape)"],
    hints:["Get canvas context: canvas.getContext('2d')","fillRect(x,y,w,h) for rectangles, arc() for circles","beginPath() → moveTo() → lineTo() → closePath() → fill() for custom shapes","createLinearGradient() for gradient fills","requestAnimationFrame(animate) for smooth animation"],
    concepts:["html-ch56","html-ch57","html-ch58","html-ch63"] },
  { id:"html-svg-icons", title:"SVG Icon Set", difficulty:2, order:11, estMin:30, xp:40,
    desc:"Build a custom SVG icon set — understanding scalable vector graphics, shapes, filters, and responsive design.",
    objectives:["Create SVG elements directly in HTML","Draw basic SVG shapes (circle, rect, path, polygon)","Apply SVG filters for visual effects","Make SVG responsive with viewBox"],
    requirements:["At least 5 custom SVG icons (home, search, user, settings, heart)","Icons use <path>, <circle>, <rect> elements","At least one SVG filter (drop shadow, blur)","Responsive: icons scale with viewBox, not fixed size","Icons should be different colors"],
    hints:["<svg viewBox=\"0 0 24 24\"> makes icons scalable","<path d=\"M...\"> is the most powerful SVG element","<filter> with <feDropShadow> or <feGaussianBlur> for effects","SVGs can be inlined directly in HTML — no <img> needed"],
    concepts:["html-ch59","html-ch60","html-ch61","html-ch63"] },
  { id:"html-media-player", title:"Media Player Page", difficulty:2, order:12, estMin:30, xp:40,
    desc:"Build a media page with video and audio players, captions, and responsive images using the picture element.",
    objectives:["Embed video with multiple formats and captions","Embed audio with controls and fallback text","Use the <picture> element for responsive images","Handle media events"],
    requirements:["Video element with at least one source and controls","Video has <track> captions/subtitles","Audio element with controls","<picture> element serving different images for mobile/desktop","Fallback content for browsers that don't support the format"],
    hints:["<video controls><source src=\"vid.mp4\" type=\"video/mp4\">Fallback</video>","<track kind=\"captions\" src=\"captions.vtt\" srclang=\"en\"> for subtitles","<picture> → <source media=\"(min-width: 768px)\"> → <img>","Always provide fallback text between opening/closing tags"],
    concepts:["html-ch64","html-ch65","html-ch66","html-ch67","html-ch68","html-ch69","html-ch71"] },
  { id:"html-drag-drop", title:"Drag & Drop To-Do", difficulty:3, order:13, estMin:50, xp:65,
    desc:"Build a drag-and-drop task organizer using the HTML Drag & Drop API — a hands-on introduction to interactive HTML APIs.",
    objectives:["Implement HTML5 Drag and Drop events","Use localStorage to persist task state","Create a visual todo/kanban board"],
    requirements:["Three columns: To Do, In Progress, Done","Add new tasks with a text input","Drag tasks between columns","Delete tasks with a button","Tasks persist across page refreshes"],
    hints:["Events: dragstart, dragover, drop on the right elements","draggable=\"true\" attribute on draggable items","e.dataTransfer.setData() and getData() to pass data","localStorage.setItem() and getItem() for persistence"],
    concepts:["html-ch72","html-ch73","html-ch84"] },
  { id:"html-geolocation", title:"Geolocation Explorer", difficulty:3, order:14, estMin:35, xp:50,
    desc:"Build a geolocation explorer that shows the user's position, nearby places, and location history using the Geolocation API.",
    objectives:["Use the Geolocation API to get user position","Display coordinates and map link","Handle geolocation errors and permission states","Track position changes over time"],
    requirements:["Get user's current position on button click","Display latitude, longitude, and accuracy","Show a link to OpenStreetMap/Google Maps with coordinates","Watch position and update display as user moves","Gracefully handle denied permission or unavailable GPS"],
    hints:["navigator.geolocation.getCurrentPosition(success, error)","Position object: coords.latitude, coords.longitude, coords.accuracy","navigator.geolocation.watchPosition() for continuous updates","Error codes: 1=permission denied, 2=unavailable, 3=timeout"],
    concepts:["html-ch76","html-ch84","html-ch86"] },
  { id:"html-storage-app", title:"Notes App (Web Storage)", difficulty:2, order:15, estMin:35, xp:45,
    desc:"Build a persistent notes application using Web Storage API — saving, editing, and deleting notes in the browser.",
    objectives:["Use localStorage and sessionStorage for data persistence","Implement CRUD operations on stored data","Differentiate between localStorage (persistent) and sessionStorage (session-only)"],
    requirements:["Create new notes with title and content","Display all saved notes in a list","Click a note to view/edit its content","Delete individual notes","Show data saved in both localStorage and sessionStorage","Notes persist after page refresh"],
    hints:["localStorage.setItem(key, JSON.stringify(data)) to save","localStorage.getItem(key) then JSON.parse() to load","Each note needs a unique ID (use Date.now())","sessionStorage works the same but clears when tab closes"],
    concepts:["html-ch73","html-ch84","html-ch89"] },
  { id:"html-web-worker", title:"Prime Calculator (Web Worker)", difficulty:3, order:16, estMin:45, xp:60,
    desc:"Build a prime number calculator that runs heavy computation in a background Web Worker — keeping the UI responsive.",
    objectives:["Create and communicate with a Web Worker","Move CPU-intensive tasks off the main thread","Handle worker messages and errors"],
    requirements:["Input field for number range","Button to start calculation in main thread (shows UI freeze)","Button to start calculation in Web Worker (UI stays responsive)","Display progress updates from the worker","Show results without freezing the page"],
    hints:["new Worker('worker.js') creates a worker","worker.postMessage(data) sends data to worker","self.onmessage in worker.js receives messages","self.postMessage(result) sends result back","Workers can't access DOM — they only do computation"],
    concepts:["html-ch74","html-ch84"] },
  { id:"html-history-spa", title:"SPA Router (History API)", difficulty:3, order:17, estMin:50, xp:65,
    desc:"Build a simple single-page application router using the History API — navigating between views without page reload.",
    objectives:["Use history.pushState() to change URL without reload","Handle popstate event for back/forward navigation","Dynamically render content based on current route"],
    requirements:["At least 3 views: Home, About, Contact","Navigation links use history.pushState() instead of href","Browser back/forward buttons navigate between views","Page content updates without full reload","Active nav link is highlighted based on current URL"],
    hints:["history.pushState({page: 1}, '', '/about') changes URL","window.addEventListener('popstate', handler) handles back/forward","Parse location.pathname to determine current route","Use <a href='/about' data-link> with click handler preventing default"],
    concepts:["html-ch77","html-ch84","html-ch86"] },
  { id:"html-notification", title:"Notification Scheduler", difficulty:2, order:18, estMin:30, xp:40,
    desc:"Build a browser notification scheduler using the Notification API and Page Visibility API.",
    objectives:["Request and manage notification permissions","Send browser notifications with the Notification API","Pause/resume notifications based on page visibility"],
    requirements:["Request notification permission on load","Schedule a notification with custom title and body","Input for delay time before notification fires","Pause scheduled notifications when page is visible (user is here)","Resume when user leaves the tab"],
    hints:["Notification.permission checks current state","Notification.requestPermission() asks the user","new Notification('Title', { body: '...' }) sends a notification","document.addEventListener('visibilitychange', handler) detects tab switches"],
    concepts:["html-ch79","html-ch81","html-ch84"] },
  { id:"html-modal-dialog", title:"Dialog & Modal System", difficulty:2, order:19, estMin:30, xp:40,
    desc:"Build a reusable dialog/modal component using the HTML <dialog> element and Popover API.",
    objectives:["Use the native HTML <dialog> element","Implement modal and non-modal dialogs","Use the Popover API for tooltips and popovers"],
    requirements:["Modal dialog with backdrop (prevent outside click)","Non-modal dialog for notifications","Custom alert/confirm dialog","Popover tooltip on hover using Popover API","Animate open/close transitions"],
    hints:["<dialog> is built-in — no JavaScript needed for basic functionality","dialog.showModal() opens modal, dialog.show() opens non-modal","dialog.close() to close","popover attribute: <div popover> for popover content","::backdrop pseudo-element styles the modal backdrop"],
    concepts:["html-ch90","html-ch91","html-ch92"] },
  { id:"html-web-component", title:"Custom Web Component", difficulty:3, order:20, estMin:55, xp:70,
    desc:"Build a custom HTML element using Web Components — Custom Elements, Shadow DOM, and HTML Templates.",
    objectives:["Define a custom HTML element with CustomElementRegistry","Use Shadow DOM for style encapsulation","Use <template> and <slot> for reusable content"],
    requirements:["Custom <user-card> element with name, avatar, and bio","Shadow DOM isolates component styles from page styles","<template> used for the component's HTML structure","<slot> for customizable content areas","Component responds to attribute changes"],
    hints:["class MyElement extends HTMLElement {}","customElements.define('user-card', MyElement)","this.attachShadow({mode: 'open'}) creates Shadow DOM","<template id='card-tmpl'> holds reusable markup","<slot name='title'> allows content projection"],
    concepts:["html-ch85","html-ch86","html-ch87","html-ch88"] },
  { id:"html-aria-app", title:"Accessible Form (ARIA)", difficulty:3, order:21, estMin:45, xp:60,
    desc:"Build a fully accessible form with ARIA roles, states, live regions, and keyboard navigation — meeting WCAG standards.",
    objectives:["Apply ARIA roles and properties for screen readers","Use ARIA live regions for dynamic content updates","Implement keyboard navigation","Follow WCAG accessibility guidelines"],
    requirements:["All form inputs have associated <label> elements","aria-required and aria-invalid on required fields","aria-live region for error/success messages","Skip navigation link for keyboard users","Focus management: auto-focus first field, trap focus in modal","Test with tab key navigation"],
    hints:["Every <input> needs a <label> with for=\"id\"","role=\"alert\" on error messages for screen readers","aria-live=\"polite\" announces dynamic updates","tabindex=\"0\" makes divs focusable","Use :focus-visible for keyboard focus styles"],
    concepts:["html-ch51","html-ch89","html-ch90","html-ch52"] },
  { id:"html-seo-page", title:"SEO-Optimized Page", difficulty:3, order:22, estMin:35, xp:50,
    desc:"Build an SEO-optimized web page with proper meta tags, structured data (microdata), Open Graph, and performance best practices.",
    objectives:["Implement SEO meta tags (description, keywords, robots)","Add Open Graph and Twitter Card meta tags for social sharing","Use microdata (itemscope, itemtype) for structured data","Optimize critical rendering path"],
    requirements:["Complete <head> with title, description, canonical URL","Open Graph tags for Facebook sharing","Twitter Card tags","Microdata/structured data for a product or article","SEO-friendly heading hierarchy (one h1, proper nesting)","Sitemap-style navigation with descriptive link text"],
    hints:["<meta property=\"og:title\" content=\"...\"> for Facebook","<meta name=\"twitter:card\" content=\"summary_large_image\">","itemscope itemtype=\"https://schema.org/Product\" adds structured data","Only one <h1> per page, nest headings hierarchically","Descriptive link text helps SEO (avoid 'click here')"],
    concepts:["html-ch30","html-ch42","html-ch82","html-ch88","html-ch89"] },
  { id:"html-pwa-manifest", title:"PWA Landing Page", difficulty:3, order:23, estMin:50, xp:65,
    desc:"Build a Progressive Web App landing page with a web app manifest, service worker registration, and offline support.",
    objectives:["Create a web app manifest.json for installable PWA","Register a service worker for offline support","Implement a basic cache-first strategy"],
    requirements:["manifest.json with name, short_name, icons, start_url, display, theme_color","<link> to manifest in HTML head","Service worker registration script","Service worker caches app shell on install","Page displays 'Offline' notice when network is unavailable"],
    hints:["manifest.json: { name, short_name, icons: [{src, sizes, type}], start_url, display: 'standalone' }","navigator.serviceWorker.register('/sw.js')","self.addEventListener('install', event => { event.waitUntil(caches.open(...)) })","self.addEventListener('fetch', event => { event.respondWith(caches.match(...)) })"],
    concepts:["html-ch91","html-ch74","html-ch84","html-ch96"] },
  { id:"html-email", title:"HTML Email Newsletter", difficulty:2, order:24, estMin:40, xp:50,
    desc:"Build an HTML email newsletter using table-based layout, inline styles, and email-compatible coding practices.",
    objectives:["Use table-based layout for email clients","Write inline CSS (email clients strip <style> tags)","Follow email coding best practices and accessibility"],
    requirements:["Table-based layout (no div layouts)","All styles are inline (no <style> block)","Header with logo/image","Main content section with text and links","Footer with unsubscribe link and company info","Works in plain text fallback mode"],
    hints:["Use <table> with width=\"100%\" and cellpadding/cellspacing attributes","Avoid background images, JavaScript, and complex CSS","Inline styles: <td style=\"color: #333; font-family: Arial\">","Always include a plain text version for accessibility","Test with Litmus or Email on Acid for client compatibility"],
    concepts:["html-ch22","html-ch23","html-ch24","html-ch97","html-ch99"] },
  { id:"html-accessibility-audit", title:"Accessibility Audit Tool", difficulty:3, order:25, estMin:50, xp:65,
    desc:"Build an HTML page that demonstrates and tests key accessibility features — ARIA, semantic HTML, color contrast, and keyboard navigation.",
    objectives:["Create a reference page demonstrating all WCAG accessibility principles","Build interactive test cases for color contrast, focus indicators, and screen reader output","Test and document accessibility violations and fixes"],
    requirements:["Sections for each: semantic HTML, ARIA, color contrast, keyboard navigation, forms","Demonstrate GOOD and BAD examples side by side","Use <details>/<summary> to show/hide accessibility explanations","Skip navigation link at the top","All interactive elements are keyboard accessible"],
    hints:["Show bad then good: <div onclick=\"...\"> vs <button onclick=\"...\">","Use <details><summary>Hint</summary>Explanation</details> for expandable tips","color contrast: dark text on light backgrounds (4.5:1 ratio minimum)",":focus-visible outlines on all interactive elements","role and aria-* attributes demonstrate screen reader behavior"],
    concepts:["html-ch89","html-ch90","html-ch88","html-ch52","html-ch92","html-ch93"] },
];

const jsProjects = [
  { id:"js-hello", title:"Hello World Console", difficulty:1, order:1, estMin:15, xp:25,
    desc:"Write your first JavaScript program — output 'Hello, World!' to the console and explore basic syntax.",
    objectives:["Set up a JavaScript runtime (Node.js or browser console)","Use console.log() for output","Understand basic JavaScript syntax"],
    requirements:["Output 'Hello, World!' to the console","Output your name on a separate line","Add a comment explaining what the program does"],
    hints:["Use console.log() to print text","Comments start with //","Strings go in quotes"],
    concepts:["js-introduction","js-syntax","js-output"] },
  { id:"js-counter", title:"Simple Counter", difficulty:1, order:2, estMin:20, xp:30,
    desc:"Build a counter that increments, decrements, and resets — learning variables and basic DOM manipulation.",
    objectives:["Use let and const for variables","Attach click event listeners","Update the DOM dynamically"],
    requirements:["Display a number that starts at 0","+ button increments the count","- button decrements the count","Reset button sets count back to 0"],
    hints:["Store the count in a let variable","Use document.getElementById() to select elements","Update innerText after each change"],
    concepts:["js-variables","js-let","js-const","js-dom-selectors","js-dom-manipulation","js-events"] },
  { id:"js-temp-converter", title:"Temperature Converter", difficulty:1, order:3, estMin:25, xp:35,
    desc:"Create a tool that converts between Celsius, Fahrenheit, and Kelvin — practicing functions and math.",
    objectives:["Write and call functions","Use mathematical expressions","Handle user input from form fields"],
    requirements:["Input field for temperature value","Dropdown or radio buttons for input scale (C/F/K)","Display converted values for all three scales","Handle invalid input gracefully"],
    hints:["C to F: (C × 9/5) + 32","F to C: (F - 32) × 5/9","Use parseFloat() to convert string input to number","Add .toFixed(1) for nice output"],
    concepts:["js-functions","js-arithmetic","js-comparison","js-forms"] },
  { id:"js-number-game", title:"Number Guessing Game", difficulty:1, order:4, estMin:30, xp:40,
    desc:"The computer picks a random number — you guess until you get it right. Learn loops and conditionals.",
    objectives:["Generate random numbers with Math.random()","Use while loops for repeated guessing","Provide feedback (too high / too low)"],
    requirements:["Computer picks a random number between 1-100","Player enters guesses in an input field","Tell the player if guess is too high, too low, or correct","Count and display the number of attempts","Limit to 10 attempts — game over if exceeded"],
    hints:["Math.floor(Math.random() * 100) + 1 generates 1-100","Track attempts with a let variable","Compare guess vs target with if/else"],
    concepts:["js-random","js-math","js-if-else","js-loops","js-while-loop"] },
  { id:"js-todo-cli", title:"To-Do List (CLI)", difficulty:1, order:5, estMin:25, xp:35,
    desc:"Build a command-line to-do list manager using Node.js — practicing arrays, functions, and user input.",
    objectives:["Work with arrays and array methods","Read user input from the command line","Build a simple menu-driven interface"],
    requirements:["Add items to the list","View all items with numbered list","Mark items as complete (toggle)","Delete items by number","Quit the program cleanly"],
    hints:["Use process.stdin or readline-sync for input","Use arrays to store items","Use .splice() to remove items"],
    concepts:["js-arrays","js-array-methods","js-functions","js-scope"] },
  { id:"js-calc-dom", title:"Calculator (DOM)", difficulty:2, order:6, estMin:40, xp:50,
    desc:"Build a fully functional calculator with a nice UI — addition, subtraction, multiplication, division.",
    objectives:["Handle complex user interactions","Build a button-based input system","Implement order of operations"],
    requirements:["Number buttons 0-9 and decimal point","Operations: +, -, ×, ÷","= button evaluates the expression","Clear (C) button resets","Display shows the current input and result"],
    hints:["Store current value, operator, and previous value as variables","Build the expression as a string and evaluate","Be careful with floating-point precision"],
    concepts:["js-functions","js-arithmetic","js-events","js-dom-manipulation","js-string-methods"] },
  { id:"js-color-flipper", title:"Color Flipper", difficulty:1, order:7, estMin:20, xp:25,
    desc:"Click a button to change the background color randomly — a simple introduction to arrays and events.",
    objectives:["Work with arrays of values","Use Math.random() for randomization","Modify CSS styles through JavaScript"],
    requirements:["List of predefined colors","Button generates a random color from the list","Background color changes immediately","Display the current color name/hex on screen"],
    hints:["Store colors in an array","Generate random index: Math.floor(Math.random() * colors.length)","Use element.style.backgroundColor = '...'"],
    concepts:["js-arrays","js-random","js-dom-styling","js-events"] },
  { id:"js-digital-clock", title:"Digital Clock", difficulty:1, order:8, estMin:20, xp:30,
    desc:"Display a live digital clock that updates every second — learn timing functions and Date object.",
    objectives:["Use setInterval() for repeated execution","Work with the Date object","Format time for display"],
    requirements:["Display current time (HH:MM:SS)","Update every second automatically","Display current date below the clock","12-hour or 24-hour toggle button"],
    hints:["new Date() gets current date/time","getHours(), getMinutes(), getSeconds()","setInterval(updateClock, 1000) calls update every second","Use padStart(2, '0') for two-digit formatting"],
    concepts:["js-dates","js-timing","js-string-methods","js-dom-manipulation"] },
  { id:"js-rps", title:"Rock Paper Scissors", difficulty:2, order:9, estMin:30, xp:40,
    desc:"Play Rock Paper Scissors against the computer — game logic, randomization, and UI state management.",
    objectives:["Implement game logic with conditionals","Track and display game state (score)","Provide visual feedback for choices"],
    requirements:["Three clickable buttons for Rock, Paper, Scissors","Computer makes random choice","Display both choices with icons","Show who wins each round","Track and display score (Player vs Computer)"],
    hints:["Map choices to numbers: 0=Rock, 1=Paper, 2=Scissors","Computer choice: Math.floor(Math.random() * 3)","Rock beats Scissors, Scissors beats Paper, Paper beats Rock"],
    concepts:["js-if-else","js-objects","js-events","js-dom-manipulation","js-random"] },
  { id:"js-memory-game", title:"Memory Card Game", difficulty:2, order:10, estMin:50, xp:60,
    desc:"Build the classic memory matching game — flip cards to find pairs. Tests arrays, timing, and game state management.",
    objectives:["Manage complex game state","Use setTimeout for delayed actions","Implement game logic with arrays"],
    requirements:["Grid of facedown cards (4×4 = 16 cards, 8 pairs)","Click to flip a card","Match two flipped cards — they stay face up or flip back","Track number of moves and matches","Victory screen when all pairs found"],
    hints:["Create pairs using an array and shuffle with .sort(() => Math.random() - 0.5)","Use dataset to store card IDs","setTimeout for delay before flipping back"],
    concepts:["js-arrays","js-array-sort","js-events","js-dom-manipulation","js-timing","js-classes"] },
  { id:"js-weather", title:"Weather Dashboard", difficulty:3, order:11, estMin:60, xp:75,
    desc:"Build a weather app that fetches real data from a weather API — mastering async JavaScript and API integration.",
    objectives:["Make API calls with fetch() and async/await","Handle loading and error states","Display dynamic data from external sources"],
    requirements:["Search by city name","Display: temperature, conditions, humidity, wind speed","Show a 5-day forecast","Handle API errors gracefully (invalid city, network issues)"],
    hints:["Use OpenWeatherMap free API","Store API key in a variable (don't commit to GitHub)","await fetch(url) then await response.json()","Use try/catch for error handling"],
    concepts:["js-fetch-api","js-async","js-async-await","js-promises","js-json","js-error-handling"] },
  { id:"js-quiz", title:"Quiz Application", difficulty:2, order:12, estMin:45, xp:55,
    desc:"Create a quiz app with multiple-choice questions, scoring, and feedback — using objects and interactive UI.",
    objectives:["Structure data with objects and arrays","Manage application state","Provide user feedback and scoring"],
    requirements:["Array of question objects with choices and correct answer","Display one question at a time","Show progress (question 3 of 10)","Highlight correct/incorrect answers after selection","Show final score at the end","Option to restart the quiz"],
    hints:["Each question: { question: '', options: [], correct: '' }","Track currentQuestion index and score","Use a results screen vs quiz screen toggle"],
    concepts:["js-objects","js-arrays","js-classes","js-dom-manipulation","js-events"] },
  { id:"js-expense-tracker", title:"Expense Tracker", difficulty:2, order:13, estMin:55, xp:65,
    desc:"Track your income and expenses with local persistence — learning CRUD operations and localStorage.",
    objectives:["Implement full CRUD (Create, Read, Update, Delete)","Persist data with localStorage","Calculate and display summaries"],
    requirements:["Add transactions with description, amount, and type (income/expense)","List all transactions with delete functionality","Display balance, total income, and total expenses","Data persists across page refreshes"],
    hints:["Store transactions as an array in localStorage","JSON.stringify() to save, JSON.parse() to load","Use .filter() to remove transactions","Calculate totals with .reduce()"],
    concepts:["js-localstorage","js-array-methods","js-json","js-dom-manipulation","js-classes"] },
  { id:"js-countdown", title:"Countdown Timer", difficulty:2, order:14, estMin:30, xp:40,
    desc:"Build a countdown timer that counts down to a specific date/time — working with Date objects and intervals.",
    objectives:["Calculate time differences with Date objects","Format time components","Handle timer states (running, paused, complete)"],
    requirements:["Input for target date and time","Start and pause buttons","Display days, hours, minutes, seconds remaining","Alert/visual indicator when countdown reaches zero"],
    hints:["Difference = targetDate - new Date()","Convert ms to days/hours/minutes/seconds","Use setInterval(fn, 1000) for updates","clearInterval() to pause"],
    concepts:["js-dates","js-date-formats","js-timing","js-dom-manipulation"] },
  { id:"js-typing-test", title:"Typing Speed Test", difficulty:3, order:15, estMin:45, xp:60,
    desc:"Measure your typing speed and accuracy — a practical exercise in event handling and performance measurement.",
    objectives:["Measure elapsed time accurately","Compare user input against target text","Calculate WPM and accuracy metrics"],
    requirements:["Display a passage of text to type","Highlight the current character being typed","Track correct and incorrect keystrokes","Calculate WPM (words per minute) and accuracy %","Show results when typing is complete"],
    hints:["Track start time when user types first character","Compare each keystroke against the expected character","WPM = (correctChars / 5) / (elapsedMinutes)","Use keydown/keyup events to track input"],
    concepts:["js-events","js-dom-manipulation","js-dates","js-string-methods"] },
  { id:"js-carousel", title:"Image Carousel", difficulty:2, order:16, estMin:35, xp:45,
    desc:"Build an image slideshow/carousel with navigation controls — DOM manipulation and event delegation.",
    objectives:["Implement navigation controls (prev/next/dots)","Use event delegation for efficient listeners","Add auto-play with timing controls"],
    requirements:["Display one image at a time with navigation arrows","Dot indicators show current slide position","Auto-play that cycles every 3 seconds","Pause auto-play on hover","Swipe support for mobile (bonus)"],
    hints:["Track current slide index","Use transform: translateX() for smooth transitions","setInterval for auto-play, clearInterval on hover","Event delegation: one listener on the container"],
    concepts:["js-dom-manipulation","js-events","js-timing","js-dom-selectors"] },
  { id:"js-tic-tac-toe", title:"Tic-Tac-Toe Game", difficulty:2, order:17, estMin:45, xp:55,
    desc:"Build the classic Tic-Tac-Toe game with a simple AI opponent — game logic, arrays, and algorithm basics.",
    objectives:["Implement win-detection algorithm","Build a simple AI using minimax or heuristics","Manage turn-based game state"],
    requirements:["3×3 grid for gameplay","Two-player mode (local) and vs AI mode","Display which player's turn it is","Detect and announce winner or draw","Reset game button"],
    hints:["Use a 2D array or flat array of 9 for game state","Check rows, columns, and diagonals for matches","Simple AI: try to win, block opponent, take center","Use dataset row/col on each cell"],
    concepts:["js-arrays","js-classes","js-dom-manipulation","js-events","js-functions"] },
  { id:"js-password-gen", title:"Password Generator", difficulty:1, order:18, estMin:25, xp:30,
    desc:"Generate secure random passwords with customizable options — string manipulation and randomness.",
    objectives:["Generate cryptographically random values","Handle user preferences (length, character types)","Implement copy-to-clipboard functionality"],
    requirements:["Slider or input for password length (8-64)","Checkboxes for: uppercase, lowercase, numbers, symbols","Generate button creates a random password","One-click copy to clipboard","Display password strength indicator"],
    hints:["Use separate strings of each character type","Build character pool based on selections","Use for loop to pick random characters","navigator.clipboard.writeText() for copy"],
    concepts:["js-strings","js-string-methods","js-random","js-dom-manipulation","js-events"] },
  { id:"js-notes", title:"Note Taking App", difficulty:2, order:19, estMin:50, xp:60,
    desc:"A full note-taking application with localStorage persistence — CRUD, timestamps, and search.",
    objectives:["Build a complete CRUD application","Implement search/filter functionality","Work with timestamps and sorting"],
    requirements:["Create notes with title and body text","Display all notes as cards in a grid","Edit existing notes","Delete notes with confirmation","Search/filter notes by title or content","Notes show creation/last-modified date"],
    hints:["Each note: { id, title, content, createdAt, updatedAt }","Store in localStorage as JSON array","Use .filter() for search, .sort() for ordering","Use Date.now() or new Date().toISOString() for timestamps"],
    concepts:["js-localstorage","js-array-methods","js-json","js-dates","js-dom-manipulation"] },
  { id:"js-movie-search", title:"Movie Search App", difficulty:3, order:20, estMin:55, xp:70,
    desc:"Search for movies using the OMDB API — debounced search, results grid, and detail views.",
    objectives:["Implement debounced search for performance","Navigate between list and detail views","Handle API pagination and error states"],
    requirements:["Search input with live results (debounced)","Display movie poster, title, year in a grid","Click for detail view with full info (plot, rating, cast)","Loading spinner during API calls","Handle no-results and error states"],
    hints:["Use setTimeout/clearTimeout for debounce (300ms delay)","Free OMDB API: http://www.omdbapi.com/","Fetch with async/await, cache recent results","Dynamic routing: show detail on click, back button to list"],
    concepts:["js-fetch-api","js-async-await","js-promises","js-dom-manipulation","js-events","js-json"] },
  { id:"js-pomodoro", title:"Pomodoro Timer", difficulty:2, order:21, estMin:40, xp:50,
    desc:"Build a Pomodoro productivity timer with focus/break intervals and session tracking.",
    objectives:["Manage timer state with start/pause/reset","Implement work/break interval cycling","Track completed sessions"],
    requirements:["25-minute work timer with countdown","5-minute short break timer","Display current session type (Work/Break)","Start, pause, and reset controls","Track number of completed pomodoros"],
    hints:["Use setInterval with 1-second updates","Store timer state: { mode, timeLeft, isRunning, sessions }","Use localStorage to persist session count","Play notification sound when timer completes"],
    concepts:["js-timing","js-dates","js-localstorage","js-dom-manipulation","js-events"] },
  { id:"js-markdown-preview", title:"Markdown Preview", difficulty:3, order:22, estMin:45, xp:60,
    desc:"Build a live Markdown editor with a preview panel — learn about dynamic rendering and text parsing.",
    objectives:["Implement live text-to-HTML conversion","Handle textarea input events","Render formatted output safely"],
    requirements:["Split screen: editor on left, preview on right","Editor is a textarea where user types Markdown","Preview updates in real-time as user types","Support: headings, bold, italic, lists, links, code blocks","Tab key inserts spaces in the editor"],
    hints:["Parse text with regex for each Markdown feature","Convert **bold** → <strong>, *italic* → <em>","Use dangerouslySetInnerHTML or build DOM nodes","Sanitize HTML to prevent XSS (DOMPurify)"],
    concepts:["js-string-methods","js-regex","js-dom-manipulation","js-events"] },
  { id:"js-spa-router", title:"Simple SPA Router", difficulty:3, order:23, estMin:50, xp:65,
    desc:"Build a client-side router for a single-page app — learning the History API and dynamic view switching.",
    objectives:["Use the History API (pushState, popState)","Implement client-side route matching","Dynamically render views without page reload"],
    requirements:["Define routes with path → view mappings","Navigate between views without full page reload","Browser back/forward buttons work correctly","Highlight active navigation link","Support dynamic route params (e.g., /user/:id)"],
    hints:["window.addEventListener('popstate', handler)","history.pushState({}, '', path) updates URL","Parse routes with regex for dynamic segments","Each route maps to a function that renders content"],
    concepts:["js-history-api","js-dom-manipulation","js-objects","js-events"] },
  { id:"js-drag-tasks", title:"Task Manager with Drag & Drop", difficulty:3, order:24, estMin:60, xp:80,
    desc:"Build a Kanban-style task board with drag-and-drop columns — mastering the Drag & Drop API.",
    objectives:["Implement HTML5 Drag and Drop","Manage complex state across columns","Persist board state"],
    requirements:["Three columns: To Do, In Progress, Done","Create new task cards with text input","Drag cards between columns","Edit/delete cards","Board state persists across refreshes"],
    hints:["dragstart, dragover, drop events on elements","event.dataTransfer.setData() / getData()","Drop zone: prevent default on dragover","Save board as nested object in localStorage"],
    concepts:["js-drag-drop","js-events","js-localstorage","js-classes","js-array-methods"] },
  { id:"js-chat-app", title:"Chat Application (Bonus)", difficulty:3, order:25, estMin:70, xp:90,
    desc:"Build a real-time chat application using WebSockets — a capstone project integrating everything you've learned.",
    objectives:["Establish WebSocket connection for real-time messaging","Handle multiple concurrent users","Build a polished chat UI"],
    requirements:["Username entry on connection","Message input with send button and Enter key","Display messages with username and timestamp","Auto-scroll to latest message","Show online user list","Typing indicator"],
    hints:["Use a public WebSocket echo server or set up a simple Node.js server","WebSocket events: onopen, onmessage, onclose, onerror","Messages formatted as JSON: { user, text, timestamp }","Use CSS for message bubbles and layout"],
    concepts:["js-websockets","js-fetch-api","js-async","js-dom-manipulation","js-events","js-json"] },
];

const pyProjects = [
  { id:"py-hello", title:"Hello World", difficulty:1, order:1, estMin:10, xp:15,
    desc:"Write and run your first Python program. Learn basic syntax, the print() function, and how to run Python scripts.",
    objectives:["Install Python and run a script","Use print() for output","Understand basic Python syntax"],
    requirements:["Print 'Hello, World!' to the console","Print your name and age on separate lines","Add a comment explaining each line"],
    hints:["print() displays text to the console","Comments start with #","Strings go in quotes (single or double)"],
    concepts:["python-introduction","python-getting-started","python-syntax","python-comments"] },
  { id:"py-bmi", title:"BMI Calculator", difficulty:1, order:2, estMin:20, xp:25,
    desc:"Calculate Body Mass Index from user input — practicing functions, math operations, and user input.",
    objectives:["Define and call functions","Use input() to accept user input","Perform arithmetic operations"],
    requirements:["Ask for weight (kg) and height (m)","Calculate BMI = weight / height²","Display BMI category: Underweight (<18.5), Normal, Overweight (25-30), Obese (>30)"],
    hints:["def calculate_bmi(weight, height):","Use float(input()) for numeric input","Use if/elif/else for BMI categories"],
    concepts:["python-functions","python-math","python-if-else","python-user-input"] },
  { id:"py-number-game", title:"Number Guessing Game", difficulty:1, order:3, estMin:25, xp:30,
    desc:"The computer picks a random number — guess it with hints. Learn loops, conditionals, and the random module.",
    objectives:["Use the random module","Implement game loops with while","Provide feedback with if/elif/else"],
    requirements:["Random number between 1-100","Player enters guesses","Hint: too high / too low","Show attempt count","Max 10 attempts"],
    hints:["import random, target = random.randint(1, 100)","while True for game loop with break","int(input()) to read guess"],
    concepts:["python-random","python-while","python-if-else","python-functions"] },
  { id:"py-word-count", title:"Word Counter", difficulty:1, order:4, estMin:20, xp:25,
    desc:"Count words, characters, and sentences in user-provided text — mastering string methods.",
    objectives:["Use string methods for text analysis","Split and join strings","Count occurrences"],
    requirements:["Accept multi-line text input","Count: words, characters (with/without spaces), sentences","Display results in a formatted output"],
    hints:["Use .split() to get words","len() for counting","Count sentences by splitting on '.', '!', '?'"],
    concepts:["python-strings","python-string-methods","python-functions"] },
  { id:"py-password-gen", title:"Password Generator", difficulty:2, order:5, estMin:25, xp:35,
    desc:"Generate secure random passwords with customizable options — strings, randomness, and lists.",
    objectives:["Random selection from character pools","Build strings with loops","Handle user preferences"],
    requirements:["Choose password length (8-32)","Options for uppercase, lowercase, digits, symbols","Generate and display the password","Generate multiple passwords at once"],
    hints:["import string for ascii_letters, digits, punctuation","random.choice() picks one random character","List comprehension: [random.choice(pool) for _ in range(n)]"],
    concepts:["python-random","python-strings","python-string-methods","python-loops","python-modules"] },
  { id:"py-hangman", title:"Hangman Game", difficulty:2, order:6, estMin:40, xp:45,
    desc:"Build the classic word-guessing game Hangman — lists, strings, and game loop logic.",
    objectives:["Work with lists and string manipulation","Implement game state tracking","Design a simple text-based UI"],
    requirements:["Random word from a predefined list","Display blanks for unguessed letters (_ _ _ _ _)","Show guessed letters and remaining attempts","ASCII art showing the hangman progress","Win/lose detection"],
    hints:["Use list('word') to work with individual letters","Track guessed: set() stores guessed letters","Display: ' '.join('_' if l not in guessed else l for l in word)"],
    concepts:["python-lists","python-strings","python-random","python-functions","python-loops"] },
  { id:"py-todo-file", title:"To-Do List Manager", difficulty:2, order:7, estMin:35, xp:40,
    desc:"Build a persistent to-do list using file I/O — reading, writing, and managing data in files.",
    objectives:["Read and write text files","Parse structured data","Build a menu-driven CLI application"],
    requirements:["Add, view, complete, and delete tasks","Tasks persist in a text file","Numbered menu with options","Save on every change"],
    hints:["Store tasks as lines in a .txt file","with open('todos.txt', 'r') as f: for reading","Use .strip() to clean lines","Each line: task_number|task_text|completed"],
    concepts:["python-file-read","python-file-write","python-functions","python-loops"] },
  { id:"py-mad-libs", title:"Mad Libs Generator", difficulty:1, order:8, estMin:20, xp:25,
    desc:"Create a Mad Libs word game — collect words from the user and insert them into a story template.",
    objectives:["Collect and store user input","Use string formatting effectively","Build a template-based story generator"],
    requirements:["Ask for words (noun, verb, adjective, etc.)","Insert words into a story template","Display the complete funny story","Allow replay with different words"],
    hints:["Use f-strings for template: f'The {adj} {noun} {verb}.'","Store user inputs in a dict","Create multiple story templates"],
    concepts:["python-strings","python-string-methods","python-functions","python-dictionaries"] },
  { id:"py-rps", title:"Rock Paper Scissors", difficulty:1, order:9, estMin:25, xp:30,
    desc:"Play Rock Paper Scissors against the computer — conditionals, random choices, and score tracking.",
    objectives:["Use random selection","Implement game rules with conditionals","Track scores across rounds"],
    requirements:["Player picks Rock, Paper, or Scissors","Computer picks randomly","Determine winner each round","Best of 5 rounds","Display final winner"],
    hints:["Use random.choice(['rock', 'paper', 'scissors'])","Create a dict mapping choice → beats","Use while rounds < 5 for the game loop"],
    concepts:["python-if-else","python-random","python-while","python-dictionaries"] },
  { id:"py-caesar", title:"Caesar Cipher", difficulty:2, order:10, estMin:30, xp:40,
    desc:"Implement the Caesar cipher encryption and decryption — string manipulation and algorithmic thinking.",
    objectives:["Implement a substitution cipher","Work with character codes (ord/char)","Handle wrap-around in a circular alphabet"],
    requirements:["Input: message and shift value","Encrypt: shift each letter by the shift amount","Decrypt: reverse the shift","Preserve case and non-letter characters","Brute-force decrypt by trying all 26 shifts"],
    hints:["ord('a') → 97, chr(97) → 'a'","Shift: (ord(c) - 97 + shift) % 26 + 97","Preserve case by checking .isupper() / .islower()"],
    concepts:["python-strings","python-string-methods","python-loops","python-functions"] },
  { id:"py-quiz", title:"Quiz Game", difficulty:2, order:11, estMin:35, xp:45,
    desc:"Build a multiple-choice quiz game using dictionaries and lists — data-driven programming.",
    objectives:["Structure quiz data with dicts and lists","Implement scoring and feedback","Randomize question order"],
    requirements:["10+ questions with 4 options each","Shuffle question order each game","Display score after each answer","Show final score and percentage","Option to replay"],
    hints:["questions = [{ 'q': '...', 'options': [...], 'correct': 2 }]","random.shuffle(questions) for order","Use enumerate() for numbered options"],
    concepts:["python-dictionaries","python-lists","python-random","python-functions","python-loops"] },
  { id:"py-contacts", title:"Contact Book", difficulty:2, order:12, estMin:40, xp:50,
    desc:"Build a contact book that saves to JSON — CRUD operations and data serialization.",
    objectives:["Implement CRUD operations","Serialize/deserialize with JSON","Build a user-friendly CLI"],
    requirements:["Add contacts (name, phone, email)","View all contacts as a list","Search contacts by name","Update existing contacts","Delete contacts","Persist to contacts.json"],
    hints:["Use json.dump() / json.load() for persistence","Each contact: { 'id': 1, 'name': '...', 'phone': '...', 'email': '...' }","Use .lower() for case-insensitive search"],
    concepts:["python-json","python-file-read","python-file-write","python-dictionaries","python-functions"] },
  { id:"py-weather-cli", title:"Weather CLI", difficulty:3, order:13, estMin:45, xp:60,
    desc:"Fetch real weather data from a public API and display it in the terminal — learning HTTP requests.",
    objectives:["Make HTTP requests with the requests library","Parse JSON responses","Handle API errors gracefully"],
    requirements:["Input a city name","Fetch current weather from OpenWeatherMap API","Display temperature, conditions, humidity, wind","Handle network errors and invalid cities"],
    hints:["pip install requests","Use requests.get(url).json()","Store API key in an environment variable","Use try/except for connection errors"],
    concepts:["python-modules","python-pip","python-json","python-exceptions","python-functions"] },
  { id:"py-expense-tracker", title:"Expense Tracker", difficulty:2, order:14, estMin:40, xp:50,
    desc:"Track expenses and generate summaries — CSV file handling and data analysis basics.",
    objectives:["Read/write CSV files","Calculate summaries with aggregation","Display formatted reports"],
    requirements:["Add expenses (date, category, amount, description)","View all expenses","Filter by category","Show totals per category and overall","Export summary as CSV"],
    hints:["import csv — use csv.writer() and csv.reader()","Store expenses as a list of dicts","Use collections.defaultdict for category sums"],
    concepts:["python-csv","python-dictionaries","python-functions","python-exceptions"] },
  { id:"py-web-scraper", title:"Web Scraper", difficulty:3, order:15, estMin:50, xp:65,
    desc:"Scrape and extract data from web pages — learning BeautifulSoup and HTML parsing.",
    objectives:["Send HTTP requests and parse HTML","Extract structured data from web pages","Handle pagination and rate limiting"],
    requirements:["Fetch web page content with requests","Parse HTML with BeautifulSoup","Extract specific elements (titles, links, prices)","Save results to a CSV file","Handle errors for missing elements"],
    hints:["pip install beautifulsoup4 requests","Use soup.find_all('tag', class_='cls') for selection","Save extracted data as list of dicts","Add time.sleep(1) between requests to be polite"],
    concepts:["python-modules","python-pip","python-csv","python-loops","python-functions"] },
  { id:"py-tic-tac-toe", title:"Tic-Tac-Toe (CLI)", difficulty:2, order:16, estMin:40, xp:50,
    desc:"Build Tic-Tac-Toe for the terminal — 2D arrays, game logic, and simple AI opponent.",
    objectives:["Work with 2D arrays/list of lists","Implement win-condition checking","Build a simple AI"],
    requirements:["3×3 board displayed in terminal","Two-player mode","AI opponent mode","Win/draw detection","Play again option"],
    hints:["Board: [[' ' for _ in range(3)] for _ in range(3)]","Check rows, columns, diagonals for 3 in a row","Simple AI: pick random empty cell as fallback"],
    concepts:["python-lists","python-loops","python-functions","python-random"] },
  { id:"py-markdown-html", title:"Markdown to HTML Converter", difficulty:3, order:17, estMin:45, xp:55,
    desc:"Convert Markdown text to HTML — a practical exercise in text parsing and regex.",
    objectives:["Use regular expressions for pattern matching","Implement a text-to-HTML pipeline","Output valid HTML"],
    requirements:["Read Markdown from a file or input","Convert: # heading, **bold**, *italic*, - lists, [links]()","Output valid HTML","Save output to .html file"],
    hints:["import re for regex substitutions","r'^#{1,6} (.*)' matches headings","re.sub(pattern, replacement, text) for replacement"],
    concepts:["python-regex","python-strings","python-string-methods","python-file-read","python-file-write"] },
  { id:"py-snake-game", title:"Snake Game", difficulty:3, order:18, estMin:60, xp:80,
    desc:"Build the classic Snake game using Pygame — game loops, collision detection, and event handling.",
    objectives:["Use Pygame for graphics and input","Implement a game loop with fixed FPS","Handle collision detection"],
    requirements:["Snake moves continuously in 4 directions","Arrow keys change direction","Food spawns randomly — eating grows the snake","Game over on wall/self collision","Score display"],
    hints:["pip install pygame","Snake as list of (x, y) segments","Game loop: handle_input → update → draw","Use pygame.time.Clock().tick(10) for speed"],
    concepts:["python-modules","python-pip","python-loops","python-classes","python-functions"] },
  { id:"py-url-shortener", title:"URL Shortener (Flask)", difficulty:3, order:19, estMin:60, xp:75,
    desc:"Build a URL shortener web app with Flask — web development, routing, and database storage.",
    objectives:["Create a Flask web application","Handle HTTP routes (GET/POST)","Use SQLite for persistent storage"],
    requirements:["Home page with input for long URL","Generate a short, unique code for each URL","Redirect short URL to the original","Track visit count for each link","List all shortened URLs"],
    hints:["pip install flask","Use string.ascii_letters + digits for short codes","import sqlite3 for database","Store URLs in a table: id, original, short_code, visits, created"],
    concepts:["python-modules","python-functions","python-sqlite","python-json"] },
  { id:"py-password-manager", title:"Password Manager", difficulty:3, order:20, estMin:55, xp:70,
    desc:"Build a secure password manager with encryption — security, hashing, and file I/O.",
    objectives:["Hash passwords with hashlib","Encrypt/decrypt data with cryptography","Build a master-password-protected vault"],
    requirements:["Master password authentication (SHA-256 hashed)","Add service credentials (service, username, password)","View saved credentials","Copy password to clipboard","Encrypt stored passwords"],
    hints:["import hashlib; hashlib.sha256(pw.encode()).hexdigest()","from cryptography.fernet import Fernet for encryption","Store vault as encrypted JSON file","Use getpass for hidden password entry"],
    concepts:["python-hashlib","python-json","python-functions","python-file-read","python-file-write"] },
  { id:"py-data-analyzer", title:"Data Analyzer", difficulty:3, order:21, estMin:60, xp:75,
    desc:"Analyze a real dataset using Pandas and create visualizations with Matplotlib — data science foundations.",
    objectives:["Load and explore datasets with Pandas","Filter, group, and aggregate data","Create visualizations with Matplotlib"],
    requirements:["Load a CSV dataset (e.g., Titanic, Iris, or custom)","Display basic statistics (mean, median, count)","Filter data by conditions","Create at least 2 charts (bar, scatter, histogram)","Export analysis summary"],
    hints:["pip install pandas matplotlib","df = pd.read_csv('data.csv')","df.describe() for statistics","plt.bar(), plt.scatter(), plt.hist() for charts"],
    concepts:["python-modules","python-pip","python-functions","python-csv","python-pandas"] },
  { id:"py-rest-client", title:"REST API Client", difficulty:3, order:22, estMin:45, xp:60,
    desc:"Build a CLI tool that interacts with REST APIs — making requests, handling responses, and formatting output.",
    objectives:["Use the requests library for HTTP methods","Handle JSON request/response bodies","Build a practical command-line tool"],
    requirements:["GET, POST, PUT, DELETE operations","Set headers and body in requests","Display formatted JSON responses","Save responses to files"],
    hints:["import requests; resp = requests.get(url)","resp.json() parses JSON response","Use argparse for CLI arguments","import json; print(json.dumps(data, indent=2))"],
    concepts:["python-modules","python-json","python-functions","python-exceptions"] },
  { id:"py-blog-cli", title:"Blog CLI Tool", difficulty:3, order:23, estMin:55, xp:70,
    desc:"Build a blog management tool with SQLite — full CRUD, search, and structured data storage.",
    objectives:["Design a SQLite database schema","Execute SQL queries from Python","Build a complete CLI application"],
    requirements:["Create new blog posts (title, content, tags, date)","List all posts (show title, date, tags)","View a single post by ID","Edit existing posts","Delete posts","Search posts by title or tag"],
    hints:["import sqlite3; conn = sqlite3.connect('blog.db')","Create table: id, title, content, tags, created_at","Use ? placeholders in SQL to prevent injection","Use argparse for command/subcommand routing"],
    concepts:["python-sqlite","python-functions","python-loops","python-datetime"] },
  { id:"py-chat-server", title:"Chat Server", difficulty:3, order:24, estMin:65, xp:85,
    desc:"Build a multi-client chat server using sockets — networking, threading, and real-time communication.",
    objectives:["Create a TCP server with Python sockets","Handle multiple clients with threading","Broadcast messages to all connected clients"],
    requirements:["Server accepts multiple client connections","Clients choose a username on connect","Messages broadcast to all connected clients","Server logs all activity","Graceful disconnection handling"],
    hints:["import socket, threading","Server: socket.socket(), bind(), listen(), accept()","Each client runs in its own thread","Use .encode()/.decode() for string↔bytes"],
    concepts:["python-modules","python-threading","python-functions","python-exceptions"] },
  { id:"py-automation", title:"File Organizer (Bonus)", difficulty:2, order:25, estMin:40, xp:50,
    desc:"Build a tool that automatically organizes files into folders by type — practical automation with the OS module.",
    objectives:["Navigate the file system with os/pathlib","Read and move files programmatically","Build a useful real-world tool"],
    requirements:["Scan a directory for all files","Categorize files by extension (images, docs, audio, etc.)","Create category folders if they don't exist","Move files into appropriate folders","Report: 'Moved 15 files across 5 categories'"],
    hints:["import os; os.listdir('path') for files","from pathlib import Path for cleaner paths","Create dict mapping extensions to folders","Use shutil.move(src, dst) to move files"],
    concepts:["python-os-module","python-pathlib","python-dictionaries","python-functions","python-exceptions"] },
];

const csProjects = [
  { id:"cs-bin2dec", title:"Binary to Decimal Converter", difficulty:1, order:1, estMin:20, xp:25,
    desc:"Build a tool that converts between binary, decimal, and hexadecimal — understanding number systems.",
    objectives:["Understand positional number systems","Implement base conversion algorithms","Handle string-to-number conversion"],
    requirements:["Convert binary string to decimal","Convert decimal to binary string","Convert hex to/from decimal","Validate input (only valid digits for the base)"],
    hints:["bin(n) and int(s, 2) for built-in conversion","Manual: sum(int(digit) * 2**pos for pos, digit in enumerate(reversed(bits)))","Hex: A=10, B=11, C=12, D=13, E=14, F=15"],
    concepts:["cs-data-representation","cs-binary","cs-hexadecimal","cs-functions"] },
  { id:"cs-logic-gates", title:"Logic Gate Simulator", difficulty:2, order:2, estMin:35, xp:40,
    desc:"Simulate basic logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) and build truth tables.",
    objectives:["Understand Boolean logic operations","Implement truth tables programmatically","Build compound circuits from basic gates"],
    requirements:["Implement AND, OR, NOT, NAND, NOR, XOR, XNOR gates","Display truth table for any gate","Build a half-adder from AND and XOR gates","Interactive mode: user selects gate and inputs"],
    hints:["Each gate is a function returning True/False","Half adder: sum = A XOR B, carry = A AND B","Store gates in a dict: { 'and': lambda a,b: a and b, ... }"],
    concepts:["cs-boolean-algebra","cs-logic-gates","cs-digital-circuits","cs-functions"] },
  { id:"cs-sorting-viz", title:"Sorting Algorithm Visualizer", difficulty:2, order:3, estMin:45, xp:55,
    desc:"Visualize sorting algorithms (bubble, selection, insertion, merge, quick) step by step.",
    objectives:["Implement 5+ sorting algorithms","Visualize algorithm progress","Analyze algorithm performance"],
    requirements:["Implement Bubble, Selection, Insertion, Merge, Quick sort","Display array as vertical bars at each step","Show comparisons and swaps count","Adjustable array size and speed"],
    hints:["Use ASCII art or a simple graphics library","Each algorithm yields array state after each operation","Track comparisons vs swaps for analysis"],
    concepts:["cs-algorithms-sorting","cs-big-o","cs-asymptotic","cs-performance"] },
  { id:"cs-linked-list", title:"Linked List Implementation", difficulty:2, order:4, estMin:35, xp:40,
    desc:"Implement a singly and doubly linked list from scratch — understanding pointers and dynamic data structures.",
    objectives:["Implement Node and LinkedList classes","Understand pointer/reference semantics","Implement common operations manually"],
    requirements:["Singly linked list: append, prepend, delete, search, traverse","Doubly linked list with prev pointer","Reverse a linked list in-place","Detect cycle (Floyd's algorithm)"],
    hints:["Node class: value + next (and prev for doubly)","Traverse: while current: process; current = current.next","Reverse: prev, current, next pointer manipulation"],
    concepts:["cs-linked-list","cs-data-structures","cs-arrays","cs-pointers"] },
  { id:"cs-bst", title:"Binary Search Tree", difficulty:2, order:5, estMin:40, xp:50,
    desc:"Build a Binary Search Tree with insertion, deletion, traversal (in/pre/post-order), and search.",
    objectives:["Implement tree data structures","Handle recursive tree operations","Understand traversal orders"],
    requirements:["Insert values maintaining BST property","Delete nodes (handle 0, 1, 2 children)","Search for a value (return path)","In-order, pre-order, post-order traversal","Find min, max, height, and size"],
    hints:["Node: value, left, right","Insert/delete are recursive: base case + recursive calls","In-order: left → root → right (gives sorted order)","For delete: find successor (smallest in right subtree) when node has 2 children"],
    concepts:["cs-trees","cs-binary-tree","cs-binary-search-tree","cs-recursion"] },
  { id:"cs-pathfinder", title:"Pathfinder (BFS/DFS)", difficulty:3, order:6, estMin:50, xp:65,
    desc:"Visualize BFS and DFS pathfinding on a grid — understanding graph traversal algorithms.",
    objectives:["Implement BFS and DFS graph traversal","Visualize algorithm exploration order","Understand BFS vs DFS properties"],
    requirements:["Grid-based map with obstacles","Click to set start and end points","BFS finds shortest path","DFS finds a path (not necessarily shortest)","Visualize exploration order with colors","Show final path"],
    hints:["Queue for BFS (FIFO), Stack for DFS (LIFO)","Track visited nodes and parent map","Reconstruct path from parent map","Use grid where 0=open, 1=wall"],
    concepts:["cs-queue","cs-stack","cs-graph","cs-bfs","cs-dfs"] },
  { id:"cs-simple-shell", title:"Simple Shell", difficulty:3, order:7, estMin:55, xp:70,
    desc:"Build a minimal Unix shell — process creation, command execution, and job control.",
    objectives:["Understand process creation with fork/exec","Implement command parsing","Handle I/O redirection and pipes"],
    requirements:["Read commands from stdin","Parse command and arguments","Execute commands using fork+exec","Support cd, exit built-in commands","Support | pipe between commands"],
    hints:["os.fork() creates child process, os.execvp() replaces it","os.waitpid() waits for child","Pipe: os.pipe() then connect stdin/stdout","Use shlex.split() for command parsing"],
    concepts:["cs-process-management","cs-operating-systems","cs-memory-management","cs-factorial"] },
  { id:"cs-lru-cache", title:"LRU Cache Implementation", difficulty:3, order:8, estMin:35, xp:50,
    desc:"Implement an LRU (Least Recently Used) cache — hash map + doubly linked list combination.",
    objectives:["Understand cache replacement policies","Combine data structures (hash map + linked list)","Implement O(1) get and put operations"],
    requirements:["get(key): return value or -1, mark as recently used","put(key, value): insert/update, evict LRU if at capacity","All operations in O(1) time","Support configurable capacity"],
    hints:["HashMap maps key → node in doubly linked list","Linked list maintains usage order (most recent at head)","On get: move node to head. On put: add to head, evict tail if needed"],
    concepts:["cs-data-structures","cs-hash-tables","cs-linked-list","cs-cache-memory"] },
  { id:"cs-http-server", title:"HTTP Server", difficulty:3, order:9, estMin:55, xp:70,
    desc:"Build a basic HTTP/1.1 server from scratch — understanding the HTTP protocol and server architecture.",
    objectives:["Implement TCP socket server","Parse HTTP request messages","Serve static files over HTTP"],
    requirements:["Listen on a configurable port","Parse HTTP GET requests (method, path, headers)","Serve static files from a public directory","Return proper status codes (200, 404, 500)","Handle concurrent connections"],
    hints:["socket.socket(), bind(), listen(), accept() loop","Parse request lines by splitting on CRLF\\r\\n","Set Content-Type based on file extension","Thread per connection or select() for concurrency"],
    concepts:["cs-tcp-ip","cs-http","cs-socket-programming","cs-networking"] },
  { id:"cs-huffman", title:"File Compression (Huffman Coding)", difficulty:3, order:10, estMin:55, xp:70,
    desc:"Implement Huffman coding for lossless data compression — priority queues, binary trees, and bit manipulation.",
    objectives:["Build a Huffman tree from character frequencies","Generate prefix-free codes","Compress and decompress files"],
    requirements:["Count character frequencies in input","Build Huffman tree using a priority queue","Generate binary codes for each character","Encode input to compressed bit stream","Decode back to original text"],
    hints:["Use heapq for priority queue","Huffman tree: merge two lowest frequency nodes iteratively","Left edge = 0, right edge = 1","Use bitarray or manual bit packing for compression"],
    concepts:["cs-algorithm-analysis","cs-greedy","cs-huffman","cs-binary-tree","cs-priority-queue"] },
  { id:"cs-chat-app", title:"Chat Application (Networking)", difficulty:3, order:11, estMin:60, xp:80,
    desc:"Build a multi-client chat application with a server — networking, threading, and protocol design.",
    objectives:["Design a simple application protocol","Handle concurrent connections","Implement message broadcasting"],
    requirements:["Central server accepting multiple clients","Clients connect with username","Text messages broadcast to all clients","Server logs all activity","Graceful disconnect handling"],
    hints:["Design a simple protocol: USER|name, MSG|text, QUIT","select.select() for non-blocking I/O","Prefix message length for framing","Handle partial sends with buffering"],
    concepts:["cs-socket-programming","cs-networking","cs-tcp-ip","cs-protocols"] },
  { id:"cs-shunting-yard", title:"Calculator (Shunting Yard)", difficulty:3, order:12, estMin:40, xp:55,
    desc:"Implement a scientific calculator using the Shunting Yard algorithm — parsing, stacks, and operator precedence.",
    objectives:["Implement the Shunting Yard algorithm","Use a stack for operator parsing","Evaluate postfix (RPN) expressions"],
    requirements:["Support +, -, *, /, ^ (exponent)","Handle parentheses","Implement sin, cos, tan, sqrt functions","Support decimal numbers","Show step-by-step evaluation"],
    hints:["Shunting Yard: output queue + operator stack","Precedence: +- (1), */ (2), ^ (3)","Functions pop one argument from stack","Evaluation: operand stack, apply operators"],
    concepts:["cs-queue","cs-stack","cs-parsing","cs-abstract-syntax-tree"] },
  { id:"cs-expression-evaluator", title:"Expression Evaluator (AST)", difficulty:3, order:13, estMin:50, xp:65,
    desc:"Build a recursive descent parser that constructs and evaluates an Abstract Syntax Tree — compiler fundamentals.",
    objectives:["Implement a lexer (tokenizer)","Build a recursive descent parser","Construct and evaluate an AST"],
    requirements:["Lexer tokenizes input into tokens (NUMBER, PLUS, MINUS, etc.)","Parser builds AST from tokens","Eval traverses AST to compute result","Support variables and assignment","Error reporting for syntax errors"],
    hints:["Token types: NUMBER, IDENTIFIER, OPERATOR, LPAREN, RPAREN","Grammar: expr → term (('+'|'-') term)*","AST nodes: BinOp, Num, Var, Assign","Eval recursively evaluates child nodes"],
    concepts:["cs-lexical-analysis","cs-parsing","cs-abstract-syntax-tree","cs-code-generation"] },
  { id:"cs-n-queens", title:"N-Queens Solver", difficulty:3, order:14, estMin:35, xp:50,
    desc:"Solve the N-Queens puzzle using backtracking — understanding constraint satisfaction and recursion.",
    objectives:["Implement backtracking search","Visualize the solution","Analyze algorithm complexity"],
    requirements:["Place N queens on N×N board without attacks","Find and display one solution","Find and count ALL solutions","Visualize board state during search"],
    hints:["Use recursion: place queen in column c, recurse for c+1","Check if position is safe: same row, diagonal (abs(row1-row2)==abs(col1-col2))","Backtrack by removing queen and trying next row","Use a 1D array where index=col, value=row"],
    concepts:["cs-backtracking","cs-recursion","cs-algorithm-analysis","cs-branch-and-bound"] },
  { id:"cs-task-scheduler", title:"Task Scheduler (Priority Queue)", difficulty:2, order:15, estMin:30, xp:40,
    desc:"Build a task scheduler using a priority queue — understanding scheduling algorithms and heaps.",
    objectives:["Implement a priority queue with heapq","Simulate scheduling algorithms","Analyze scheduling metrics"],
    requirements:["Add tasks with priority and duration","Schedule: always run highest priority task","Support preemptive (can be interrupted)","Calculate: turnaround time, waiting time","Compare FCFS vs Priority scheduling"],
    hints:["import heapq; heapq.heappush() and heapq.heappop()","Priority = (priority, arrival_time, task_id)","Track remaining time for preemptive scheduling"],
    concepts:["cs-priority-queue","cs-scheduling","cs-operating-systems","cs-data-structures"] },
  { id:"cs-dns-lookup", title:"DNS Lookup Tool", difficulty:2, order:16, estMin:25, xp:35,
    desc:"Build a command-line DNS lookup tool — understanding how domain names resolve to IP addresses.",
    objectives:["Use socket functions for DNS resolution","Understand DNS record types","Implement reverse DNS lookup"],
    requirements:["Look up A, AAAA, MX, NS, CNAME records","Display all resolved IP addresses","Show TTL for each record","Reverse lookup: IP → hostname","Handle lookup failures"],
    hints:["socket.getaddrinfo() and socket.gethostbyname_ex()","import dns.resolver for advanced queries (needs dnspython)","socket.gethostbyaddr() for reverse lookup"],
    concepts:["cs-dns","cs-networking","cs-tcp-ip","cs-osi-model"] },
  { id:"cs-btree", title:"Simple Database (B-tree)", difficulty:3, order:17, estMin:65, xp:85,
    desc:"Implement a minimal database with a B-tree index — storage, indexing, and query execution.",
    objectives:["Implement B-tree insertion and search","Design a simple storage format","Execute basic queries on stored data"],
    requirements:["Store records with integer key and string value","B-tree stores keys in sorted order for fast lookup","Insert new key-value pairs","Search by key (exact and range)","Display tree structure (level by level)"],
    hints:["B-tree node: list of keys + list of children pointers","Insert: find leaf, insert sorted, split if overfull","Search: binary search within node, recurse to child","Degree t: each node has t-1 to 2t-1 keys"],
    concepts:["cs-b-tree","cs-databases","cs-indexing","cs-data-structures"] },
  { id:"cs-crypto-tool", title:"Cryptography Tool", difficulty:3, order:18, estMin:50, xp:65,
    desc:"Build a cryptography toolkit implementing classic and modern ciphers — encryption, decryption, and cryptanalysis.",
    objectives:["Implement symmetric encryption algorithms","Understand key exchange concepts","Implement frequency analysis"],
    requirements:["Caesar cipher (encrypt/decrypt/brute force)","Vigenère cipher","AES encryption/decryption (using a library)","Base64 encoding/decoding","Frequency analysis to break substitution ciphers"],
    hints:["Use cryptography library for AES","Frequency analysis: letter frequency maps to likely substitutions","AES: requires key and initialization vector (IV)"],
    concepts:["cs-encryption","cs-aes","cs-cryptography","cs-hash-functions"] },
  { id:"cs-markov-text", title:"Markov Chain Text Generator", difficulty:2, order:19, estMin:35, xp:45,
    desc:"Generate realistic-sounding text using Markov chains — probability, state machines, and text analysis.",
    objectives:["Build a Markov chain model from training text","Generate new text from the model","Understand probabilistic generation"],
    requirements:["Read training text from a file","Build Markov model: prefix → list of possible next words","Generate text of specified length","Support different prefix lengths (2-gram, 3-gram)","Compare output quality with different orders"],
    hints:["Use dict mapping (word1, word2) → [next_words]","Random selection weighted by frequency","Higher order = more coherent but more repetitive","Seed with random start from training text"],
    concepts:["cs-probability","cs-data-structures","cs-algorithm-analysis","cs-strings"] },
  { id:"cs-web-crawler", title:"Web Crawler", difficulty:3, order:20, estMin:55, xp:70,
    desc:"Build a web crawler that discovers and indexes web pages — graph traversal, politeness, and storage.",
    objectives:["Implement BFS on the web graph","Extract links and content from pages","Respect robots.txt and rate limiting"],
    requirements:["Start from a seed URL","Extract all links from each page","Build a sitemap/index of discovered pages","Avoid revisiting URLs","Respect robots.txt exclusions"],
    hints:["Use requests + BeautifulSoup for parsing","Track visited URLs in a set","BFS queue for frontier","Check robots.txt: from urllib.robotparser import RobotFileParser"],
    concepts:["cs-bfs","cs-networking","cs-http","cs-data-structures"] },
  { id:"cs-load-balancer", title:"Load Balancer Simulator", difficulty:3, order:21, estMin:50, xp:70,
    desc:"Simulate a load balancer distributing requests across servers — understanding distributed systems concepts.",
    objectives:["Implement load balancing algorithms","Simulate server health monitoring","Understand distributed system trade-offs"],
    requirements:["Multiple backend servers with configurable capacity","Round-robin, least-connections, random strategies","Server health check (remove unhealthy servers)","Track: requests per server, response time, error rate","Display real-time dashboard"],
    hints:["Round-robin: track next server index","Least-connections: track active connection count per server","Use random module for random strategy","Simulate load with configurable request arrival rate"],
    concepts:["cs-distributed-systems","cs-load-balancing","cs-networking","cs-scheduling"] },
  { id:"cs-raft-kv", title:"Key-Value Store (Raft Consensus) — Bonus", difficulty:4, order:22, estMin:90, xp:120,
    desc:"Build a distributed key-value store using the Raft consensus algorithm — the ultimate CS capstone.",
    objectives:["Implement Raft leader election","Replicate log entries across nodes","Handle network partitions"],
    requirements:["Multiple server nodes communicate over TCP","Leader election when current leader fails","Log replication from leader to followers","Client can set and get values","Handle node failures gracefully"],
    hints:["Raft has three states: Follower, Candidate, Leader","Election timeout (150-300ms randomized) triggers new election","Majority (quorum) needed for decisions","Log entries committed when majority replicate"],
    concepts:["cs-raft","cs-distributed-systems","cs-consensus","cs-fault-tolerance"] },
];

// Map course IDs to their project arrays
const courseProjects = {
  html: htmlProjects,
  javascript: jsProjects,
  python: pyProjects,
  cs: csProjects,
};

// ─── Chapter Content Generators ─────────────────────────────────
// Each generates 10–14 sections with real educational content

function genHtmlSections(chName, idx) {
  const cat = htmlCategory(chName);
  const s = [];
  const descs = {
    fundamentals: "the core building blocks that make HTML work — from document structure to writing your first tags",
    elements: "individual HTML tags and how they define content meaning, from text to images to links",
    structure: "ways to organize HTML content into meaningful page layouts using semantic and structural elements",
    encoding: "how HTML handles text representation, special characters, and internationalization",
    forms: "interactive elements that collect user input and send data to servers",
    graphics: "how HTML supports drawing, vector graphics, and mathematical notation directly in the browser",
    media: "embedding and controlling video, audio, and rich media content on web pages",
    apis: "browser APIs accessible from HTML that enable rich client-side functionality",
    modern: "cutting-edge HTML features including Web Components, accessibility, and modern interaction patterns",
    mastery: "advanced best practices, security, testing, and what's coming next in HTML",
    general: "essential HTML knowledge",
  };
  const desc = descs[cat] || "HTML concepts";

  // Intro
  s.push({ type: "text", content: `## What is ${chName}?\n\n${chName} is an important part of web development — ${desc}. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines.` });
  s.push({ type: "key-points", points: [
    `${chName} plays a key role in structuring web content semantically`,
    `Proper use improves accessibility, SEO, and maintainability`,
    `HTML5 introduced many new semantic and interactive elements`,
  ]});

  // Topic-specific code examples
  if (["fundamentals", "elements"].includes(cat)) {
    s.push({ type: "code", language: "html", caption: `${chName} — Basic syntax:`, content: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>${chName} — Example</title>\n</head>\n<body>\n  <!-- Your ${chName} content goes here -->\n  <main>\n    <h1>Learning ${chName}</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>` });
  } else if (["structure", "encoding"].includes(cat)) {
    s.push({ type: "code", language: "html", caption: `${chName} — Semantic structure:`, content: `<header role="banner">\n  <nav aria-label="Main navigation">\n    <ul>\n      <li><a href="/">Home</a></li>\n      <li><a href="/about">About</a></li>\n      <li><a href="/contact">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>${chName}</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>` });
  } else if (["forms"].includes(cat)) {
    s.push({ type: "code", language: "html", caption: `${chName} — Form example:`, content: `<form action="/submit" method="POST" novalidate>\n  <fieldset>\n    <legend>Your Details</legend>\n    <label for="name">Full Name:</label>\n    <input type="text" id="name" name="name" required minlength="2" placeholder="Enter your name">\n    \n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" required placeholder="you@example.com">\n    \n    <label for="country">Country:</label>\n    <select id="country" name="country">\n      <option value="">Select...</option>\n      <option value="us">United States</option>\n      <option value="uk">United Kingdom</option>\n    </select>\n    \n    <button type="submit">Submit</button>\n  </fieldset>\n</form>` });
  } else if (["graphics", "media"].includes(cat)) {
    s.push({ type: "code", language: "html", caption: `${chName} — Media element:`, content: `<figure>\n  <!-- ${chName} element -->\n  <video controls width="640" poster="thumbnail.jpg">\n    <source src="video.mp4" type="video/mp4">\n    <source src="video.webm" type="video/webm">\n    <track kind="captions" src="captions.vtt" srclang="en" label="English">\n    <p>Your browser does not support the video element.</p>\n  </video>\n  <figcaption>${chName} — A media demonstration</figcaption>\n</figure>` });
  } else if (["apis", "modern"].includes(cat)) {
    s.push({ type: "code", language: "html", caption: `${chName} — Modern HTML API:`, content: `<!-- ${chName} — Web Component Example -->\n<template id="my-component">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name="title">Default Title</slot>\n  <div part="content">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot="title">${chName}</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>` });
  } else {
    s.push({ type: "code", language: "html", caption: `${chName} — Practical example:`, content: `<!-- ${chName} — Example -->\n<section aria-labelledby="ch-title">\n  <h2 id="ch-title">${chName}</h2>\n  <p>This demonstrates practical usage of ${chName}.</p>\n  <ul>\n    <li>Understand the syntax and structure</li>\n    <li>Apply best practices for accessibility</li>\n    <li>Test across different browsers</li>\n  </ul>\n</section>` });
  }

  s.push({ type: "text", content: `## Understanding ${chName}\n\n${desc.charAt(0).toUpperCase() + desc.slice(1)}. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates.` });

  // Topic-specific callouts
  if (["fundamentals", "elements", "structure"].includes(cat)) {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions.` });
  } else if (["forms"].includes(cat)) {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Always associate labels with inputs using the "for" attribute matching the input's "id". This improves accessibility — clicking the label focuses the input. Use "fieldset" and "legend" to group related form controls.` });
  } else if (["apis", "modern"].includes(cat)) {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform.` });
  } else {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** When working with ${chName}, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient.` });
  }

  if (["fundamentals", "elements", "structure"].includes(cat)) {
    s.push({ type: "text", content: `## Key Techniques\n\nMaster these patterns for ${chName}:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS` });
  } else if (["forms"].includes(cat)) {
    s.push({ type: "text", content: `## Form Best Practices\n\nFollow these guidelines for forms:\n\n1. **Label every input** — Use proper <label> elements with "for" attributes\n2. **Provide helpful validation** — Use HTML5 validation attributes (required, pattern, min, max)\n3. **Show clear error messages** — Place errors inline near the relevant field\n4. **Use appropriate input types** — type="email", type="tel", type="url" trigger correct mobile keyboards\n5. **Design for errors** — Form submissions fail. Re-populate fields, highlight errors, keep the user's data` });
  } else if (["graphics", "media"].includes(cat)) {
    s.push({ type: "text", content: `## Best Practices for Embedded Content\n\nFollow these guidelines:\n\n1. **Provide fallbacks** — Always include fallback content between element tags\n2. **Use multiple formats** — Provide WebM and MP4 for video, different image resolutions\n3. **Add captions and subtitles** — Use <track> elements for accessibility\n4. **Optimize file sizes** — Compress media, use responsive images with srcset\n5. **Set dimensions** — Width and height prevent layout shifts (Cumulative Layout Shift)` });
  } else {
    s.push({ type: "text", content: `## Key Techniques\n\nMaster these patterns for ${chName}:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard` });
  }

  if (idx % 2 === 0) {
    s.push({ type: "list", ordered: false, items: [
      `${chName} forms a key part of modern web development`,
      `Always use the most specific semantic HTML element`,
      `Validate your HTML with the W3C validator regularly`,
      "Keep accessibility in mind from the start",
      "Use ARIA attributes when semantic HTML alone is insufficient",
    ]});
  } else {
    s.push({ type: "comparison", title: `${chName} — Best Practice vs Anti-Pattern`, headers: ["Aspect", "Best Practice", "Anti-Pattern"], rows: [
      ["Structure", "Semantic elements (<article>, <nav>)", "Generic <div> soup"],
      ["Accessibility", "ARIA labels + semantic HTML", "No accessible naming"],
      ["SEO", "Proper heading hierarchy", "Skipping levels (h1→h3)"],
      ["Performance", "Minimal nesting, lazy media", "Deeply nested <div> chains"],
      ["Validation", "Regular W3C validation", "No validation until QA"],
    ]});
  }

  s.push({ type: "callout", style: "warning", content: `⚠️ **Common Pitfall:** ${["forms"].includes(cat) ? "A frequent mistake with forms is forgetting to associate labels with inputs, or using placeholder text instead of labels. Placeholders disappear when the user types, making it hard to remember what a field is for." : "A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"}` });

  // Topic-specific resources
  if (["fundamentals", "elements", "structure"].includes(cat)) {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides` });
  } else if (["forms"].includes(cat)) {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **MDN: HTML Forms Guide** — Comprehensive form element documentation\n2. **A11y Project: Form Accessibility** — Accessible form patterns\n3. **Smashing Magazine: Form Design** — UX best practices for forms\n4. **WebAIM: Creating Accessible Forms** — Screen reader-friendly form design\n5. **HTML Spec: Forms** — The official forms specification` });
  } else {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for ${chName}\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features` });
  }

  s.push({ type: "callout", style: "important", content: `📌 **Remember:** HTML is the foundation of the web. ${chName} is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays.` });

  return s;
}

function genCssSections(chName, idx) {
  const cat = cssCategory(chName);
  const s = [];
  const descs = {
    fundamentals: "the core rules of CSS — selectors, properties, values, and how the box model works",
    typography: "how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy",
    layout: "CSS layout systems like Flexbox and Grid that position and size elements on the page",
    effects: "visual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows",
    responsive: "making designs work at every screen size using media queries, container queries, and modern units",
    animations: "bringing interfaces to life with CSS transitions, transforms, and keyframe animations",
    architecture: "organizing CSS at scale — methodologies, custom properties, design systems, and preprocessors",
    advanced: "specialized CSS features like scroll snap, Houdini, print styles, and the :has() selector",
    general: "essential CSS styling knowledge",
  };
  const desc = descs[cat] || "CSS concepts";

  s.push({ type: "text", content: `## Understanding ${chName}\n\n${chName} is ${desc}. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively.` });
  s.push({ type: "key-points", points: [
    `${chName} is fundamental to modern web styling`,
    `Controls how elements appear and respond to different screen sizes`,
    `Modern CSS offers powerful tools for complex layouts and animations`,
    `Understanding this enables responsive, accessible, beautiful designs`,
  ]});

  // Topic-specific code examples
  if (["fundamentals"].includes(cat)) {
    s.push({ type: "code", language: "css", caption: `${chName} — Basic syntax:`, content: `/* ${chName} — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}` });
  } else if (["layout"].includes(cat)) {
    s.push({ type: "code", language: "css", caption: `${chName} — Modern layout with Grid:`, content: `/* ${chName} — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    "header header"\n    "sidebar main"\n    "footer footer";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      "header"\n      "main"\n      "footer";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }` });
  } else if (["typography", "effects"].includes(cat)) {
    s.push({ type: "code", language: "css", caption: `${chName} — Styling example:`, content: `/* ${chName} — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }` });
  } else if (["animations"].includes(cat)) {
    s.push({ type: "code", language: "css", caption: `${chName} — CSS Animation example:`, content: `/* ${chName} — Keyframe Animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n.animated-card {\n  animation: fadeInUp 0.6s ease-out both;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.animated-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.12);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated-card {\n    animation: none;\n    transition: none;\n  }\n}` });
  } else if (["responsive"].includes(cat)) {
    s.push({ type: "code", language: "css", caption: `${chName} — Responsive design with container queries:`, content: `/* ${chName} — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }` });
  } else if (["architecture"].includes(cat)) {
    s.push({ type: "code", language: "css", caption: `${chName} — CSS Architecture with Cascade Layers:`, content: `/* ${chName} — Cascade Layers for organized CSS */\n@layer reset, base, components, utilities;\n\n/* Reset — normalize browser defaults */\n@layer reset {\n  *, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n/* Base — element-level styles */\n@layer base {\n  body { font-family: system-ui, sans-serif; line-height: 1.6; }\n}\n\n/* Components — reusable patterns */\n@layer components {\n  .btn { /* button styles */ }\n  .card { /* card styles */ }\n}\n\n/* Utilities — high-specificity helpers */\n@layer utilities {\n  .mt-4 { margin-top: 1rem; }\n}\n\n/* Custom properties: design tokens */\n:root {\n  --color-primary: #38bdf8;\n  --color-surface: #ffffff;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 2rem;\n  --radius: 8px;\n}` });
  } else {
    s.push({ type: "code", language: "css", caption: `${chName} — Example:`, content: `/* ${chName} — Practical Example */\n.element {\n  /* Your styles here */\n  \n  /* Modern CSS best practices */\n  display: block;\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 1rem;\n  \n  /* Visual design */\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  \n  /* Interaction */\n  transition: all 0.2s ease;\n}\n\n.element:hover {\n  border-color: #38bdf8;\n  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.15);\n}` });
  }

  s.push({ type: "text", content: `## How ${chName} Works\n\n${desc.charAt(0).toUpperCase() + desc.slice(1)}. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS.` });

  if (["fundamentals", "typography", "layout"].includes(cat)) {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The "Styles" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well.` });
  } else if (["animations"].includes(cat)) {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Always respect prefers-reduced-motion. Some users have vestibular disorders — large animations can cause nausea. Use @media (prefers-reduced-motion: reduce) to disable or minimize animations. Keep UI animations under 300ms for best UX.` });
  } else if (["responsive"].includes(cat)) {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement.` });
  } else {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The "Computed" tab shows the final styles after the cascade. Use the ":hover" checkbox in the Styles pane to inspect hover states.` });
  }

  if (["fundamentals", "typography", "layout"].includes(cat)) {
    s.push({ type: "text", content: `## Common Patterns\n\nMaster these patterns for ${chName}:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties` });
  } else if (["animations", "effects"].includes(cat)) {
    s.push({ type: "text", content: `## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval` });
  } else {
    s.push({ type: "text", content: `## Common Patterns\n\nMaster these patterns for ${chName}:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules` });
  }

  if (idx % 2 === 0) {
    s.push({ type: "list", ordered: false, items: [
      `${chName} is essential for modern web design`,
      "Master the cascade and specificity rules early",
      "Learn Flexbox before Grid (conceptual stepping stone)",
      "Use CSS custom properties for maintainable themes",
      "Test responsive layouts on real devices, not just DevTools",
    ]});
  } else {
    s.push({ type: "comparison", title: `${chName} — Modern vs Classic Approach`, headers: ["Aspect", "Modern Approach", "Classic Approach"], rows: [
      ["Layout", "Flexbox + Grid", "Float + Clearfix"],
      ["Responsive", "Container Queries + Clamp()", "Media queries only"],
      ["Variables", "Custom Properties", "Preprocessor variables (Sass)"],
      ["Colors", "OKLCH / color-mix()", "Hex codes only"],
      ["Theming", "Light-Dark() / prefers-color-scheme", "Separate stylesheets"],
    ]});
  }

  s.push({ type: "callout", style: "warning", content: `⚠️ **Common Pitfall:** ${["layout"].includes(cat) ? "Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border." : "Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."}` });

  s.push({ type: "text", content: `## Best Practices\n\nFollow these guidelines for ${chName}:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools` });

  // Topic-specific resources
  if (["layout"].includes(cat)) {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series` });
  } else if (["animations"].includes(cat)) {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **MDN: CSS Animations** — The official guide\n2. **Animista** — Pre-made CSS animation library\n3. **CSS-Tricks: Animation Performance** — Best practices for smooth animations\n4. **Google Web Dev: Animations Guide** — Performance-focused animation advice\n5. **Cubic Bezier Generator** — Fine-tune your animation timing functions` });
  } else {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support` });
  }

  s.push({ type: "callout", style: "important", content: `📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint.` });

  return s;
}

function genJsSections(chName, idx) {
  const cat = jsCategory(chName);
  const s = [];
  const descs = {
    basics: "the foundational building blocks of JavaScript — variables, types, operators, and core syntax",
    "control-flow": "how JavaScript controls program execution with conditionals and loops",
    functions: "how JavaScript functions work — from declarations to closures, scope to context",
    objects: "JavaScript's object model — prototypes, classes, collections, and inheritance",
    advanced: "advanced JavaScript features — modules, error handling, proxies, generators, and symbol",
    async: "asynchronous JavaScript — callbacks, promises, async/await, and the event loop",
    dom: "how JavaScript interacts with the browser's Document Object Model",
    "web-apis": "browser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more",
    tooling: "JavaScript tooling, testing, performance, and best practices for production code",
    general: "essential JavaScript knowledge",
  };
  const desc = descs[cat] || "JavaScript concepts";

  s.push({ type: "text", content: `## Understanding ${chName}\n\n${chName} is ${desc}. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with ${chName} effectively.` });
  s.push({ type: "key-points", points: [
    `${chName} is fundamental to JavaScript development`,
    `Understanding it helps prevent common bugs and errors`,
    `Modern JavaScript (ES6+) offers cleaner syntax for this concept`,
    `Master this to write more maintainable and performant code`,
  ]});

  // Topic-specific code examples
  if (["basics"].includes(cat)) {
    s.push({ type: "code", language: "javascript", caption: `${chName} — Variables and types:`, content: `// ${chName} — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = "JavaScript";\nlet version = 2026;\n\n// Primitive types\nconst str = "Hello";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol("id");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // "string"\nconsole.log(typeof num);     // "number"\nconsole.log(typeof bool);    // "boolean"\nconsole.log(typeof null);    // "object" (legacy bug!)` });
  } else if (["control-flow"].includes(cat)) {
    s.push({ type: "code", language: "javascript", caption: `${chName} — Control flow:`, content: `// ${chName} — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = ["a", "b", "c"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(\`\${index}: \${item}\`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? "Anonymous";` });
  } else if (["functions"].includes(cat)) {
    s.push({ type: "code", language: "javascript", caption: `${chName} — Functions and closures:`, content: `// ${chName} — Functions in Depth\n\n// Arrow function — concise, no own 'this'\nconst double = (n) => n * 2;\n\n// Default parameters\nfunction greet(name = "Guest") {\n  return \`Hello, \${name}!\`;\n}\n\n// Rest parameters + arrow\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\n\n// Closure — function remembers its scope\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n\n// IIFE — immediately invoked\nconst config = (() => {\n  const secret = "not exported";\n  return { mode: "production" };\n})();` });
  } else if (["objects"].includes(cat)) {
    s.push({ type: "code", language: "javascript", caption: `${chName} — Modern class syntax:`, content: `// ${chName} — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin("Alice", "alice@x.com", "admin");` });
  } else if (["async"].includes(cat)) {
    s.push({ type: "code", language: "javascript", caption: `${chName} — Async/await pattern:`, content: `// ${chName} — Modern Async Patterns\n\n// Sequential with error handling\nasync function fetchUserData(userId) {\n  try {\n    const response = await fetch(\`/api/users/\${userId}\`);\n    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);\n    return await response.json();\n  } catch (error) {\n    console.error("Fetch failed:", error);\n    throw new Error(\"USER_FETCH_FAILED\");\n  }\n}\n\n// Parallel with Promise.all\nasync function loadDashboard(userId) {\n  const [user, posts, notifications] = await Promise.all([\n    fetchUserData(userId),\n    fetch(\`/api/users/\${userId}/posts\`).then(r => r.json()),\n    fetch(\`/api/users/\${userId}/notifications\`).then(r => r.json()),\n  ]);\n  return { user, posts, notifications };\n}` });
  } else if (["dom", "web-apis"].includes(cat)) {
    s.push({ type: "code", language: "javascript", caption: `${chName} — DOM and browser APIs:`, content: `// ${chName} — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);` });
  } else {
    s.push({ type: "code", language: "javascript", caption: `${chName} — Example:`, content: `// ${chName} — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: "Invalid input" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error("Processing failed:", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}` });
  }

  s.push({ type: "text", content: `## Deep Dive into ${chName}\n\n${desc.charAt(0).toUpperCase() + desc.slice(1)}. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code` });

  if (["basics", "control-flow", "functions"].includes(cat)) {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes.` });
  } else if (["async"].includes(cat)) {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Always handle promise rejections. Unhandled rejections crash Node.js processes and create silent failures in browsers. Use try/catch around await, and add a global unhandledrejection handler as a safety net.` });
  } else if (["dom", "web-apis"].includes(cat)) {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory.` });
  } else {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code.` });
  }

  if (["basics", "control-flow"].includes(cat)) {
    s.push({ type: "comparison", title: `${chName} — Old vs Modern JavaScript`, headers: ["Aspect", "Old Way (ES5)", "Modern Way (ES6+)"], rows: [
      ["Declaration", "var x = 1", "let/const x = 1"],
      ["Function", "function() {}", "() => {}"],
      ["String concat", "'a' + b", "\`a \${b}\`"],
      ["Object clone", "Object.assign", "{...obj}"],
      ["Array copy", "arr.slice()", "[...arr]"],
    ]});
  } else if (["objects", "advanced"].includes(cat)) {
    s.push({ type: "comparison", title: `${chName} — Approach Comparison`, headers: ["Aspect", "Class-based", "Prototype-based"], rows: [
      ["Definition", "class Foo {}", "function Foo() {}"],
      ["Inheritance", "extends", "Object.create()"],
      ["Method", "method() {}", "Foo.prototype.method"],
      ["Private", "#field", "WeakMap / closure"],
      ["Static", "static method()", "Foo.method = function"],
    ]});
  } else {
    s.push({ type: "list", ordered: false, items: [
      `${chName} is essential for all JavaScript developers`,
      "Modern syntax reduces boilerplate and bugs",
      "Always use const by default, let when needed",
      "Avoid var in modern code — it has confusing scoping rules",
      "Use === instead of == to avoid type coercion surprises",
    ]});
  }

  s.push({ type: "callout", style: "warning", content: `⚠️ **Common Pitfall:** ${["async"].includes(cat) ? "Forgetting that .forEach() does NOT work with async functions — it fires all callbacks concurrently without waiting. Use a for...of loop with await for sequential async execution, or Promise.all() for parallel." : "JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."}` });

  // Topic-specific resources
  if (["basics", "control-flow", "functions"].includes(cat)) {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals` });
  } else if (["async"].includes(cat)) {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **MDN: Async JavaScript** — Official async/await and Promise guide\n2. **Jake Archibald: In The Loop** — Definitive talk on the event loop\n3. **JavaScript.info: Async** — Comprehensive async tutorials\n4. **Node.js Event Loop Guide** — Official Node.js event loop documentation\n5. **Promisees (Nicolas Bevacqua)** — Interactive Promise visualization tool` });
  } else if (["dom", "web-apis"].includes(cat)) {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features` });
  } else {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights` });
  }

  s.push({ type: "callout", style: "important", content: `📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code.` });

  return s;
}

function genPythonSections(chName, idx) {
  const cat = pythonCategory(chName);
  const s = [];
  const descs = {
    basics: "the foundational building blocks of Python — syntax, variables, types, strings, and formatting",
    "control-flow": "how Python controls program flow with conditionals, loops, and pattern matching",
    "data-structures": "Python's built-in data structures — lists, tuples, sets, dicts, and the collections module",
    functions: "how Python functions work — parameters, scope, modules, packages, and type hints",
    oop: "object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses",
    "io-errors": "how Python handles errors and file I/O — exceptions, context managers, and serialization",
    stdlib: "the Python standard library — datetime, OS, sys, regex, logging, threading, and more",
    advanced: "advanced Python features — decorators, generators, descriptors, metaclasses, and functools",
    async: "asynchronous Python with asyncio — coroutines, tasks, and async I/O",
    "testing-data": "testing, data science libraries, and best practices in Python",
    general: "essential Python knowledge",
  };
  const desc = descs[cat] || "Python concepts";

  s.push({ type: "text", content: `## Understanding ${chName}\n\n${chName} is ${desc}. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: "Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex." This chapter explores ${chName} following these principles.` });
  s.push({ type: "key-points", points: [
    `${chName} follows Python's philosophy of simplicity and readability`,
    "Python's design emphasizes clear, explicit code over clever tricks",
    `Mastering ${chName} helps prevent common Python pitfalls`,
    "Apply these patterns to write more idiomatic, Pythonic code",
  ]});

  // Topic-specific code examples
  if (["basics"].includes(cat)) {
    s.push({ type: "code", language: "python", caption: `${chName} — Python basics:`, content: `# ${chName} — Python Fundamentals\n"\"\""${chName} — learning the basics of Python."\"\""\n\n# Variables — no type declaration needed\nname = "Python"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f"Welcome to {name} {version}!")\n\n# Type conversion\nage = "25"\nage_num = int(age)  # "25" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print("No result yet")` });
  } else if (["control-flow"].includes(cat)) {
    s.push({ type: "code", language: "python", caption: `${chName} — Control flow:`, content: `# ${chName} — Python Control Flow\n\n# 1. If/elif/else with 'in' operator\nstatus = "active"\nif status not in ("active", "pending"):\n    print("Account disabled")\nelif status == "active":\n    print("Welcome back!")\nelse:\n    print("Please verify your email")\n\n# 2. For loop with enumerate\nfruits = ["apple", "banana", "cherry"]\nfor i, fruit in enumerate(fruits, start=1):\n    print(f"{i}. {fruit}")\n\n# 3. While loop with else (runs if no break)\nn = 0\nwhile n < 3:\n    print(n)\n    n += 1\nelse:\n    print("Loop completed normally")\n\n# 4. Match/case (Python 3.10+)\nmatch command.split():\n    case ["quit"]: exit()\n    case ["hello", name]: print(f"Hi, {name}")\n    case _: print("Unknown command")` });
  } else if (["data-structures"].includes(cat)) {
    s.push({ type: "code", language: "python", caption: `${chName} — Data structures:`, content: `# ${chName} — Python Data Structures\n\n# List comprehension — Pythonic\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in ["hello", "world"]}\n# {"hello": 5, "world": 5}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # Union: {1,2,3,4,5,6}\nprint(a & b)  # Intersection: {3,4}\nprint(a - b)  # Difference: {1,2}\n\n# Collections module\nfrom collections import Counter, defaultdict\ntext = "hello world"\nchar_count = Counter(text)\n# Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})` });
  } else if (["functions"].includes(cat)) {
    s.push({ type: "code", language: "python", caption: `${chName} — Functions:`, content: `# ${chName} — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = "Hello") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == "__main__":\n    print(greet("World"))` });
  } else if (["oop"].includes(cat)) {
    s.push({ type: "code", language: "python", caption: `${chName} — Python OOP:`, content: `# ${chName} — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f"{self.name}: \${self.price:.2f} ({self.quantity})"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product("Widget", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f"Total: \${discount.apply(product.total_value):.2f}")` });
  } else if (["io-errors"].includes(cat)) {
    s.push({ type: "code", language: "python", caption: `${chName} — Error handling and files:`, content: `# ${chName} — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open("data.txt", "r", encoding="utf-8") as f:\n    content = f.read()\n    \n# Write to file\nwith open("output.txt", "w", encoding="utf-8") as f:\n    f.write("Hello, World!\\n")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f"{field}: {message}")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print("User file not found")\nexcept ValidationError as e:\n    print(f"Validation failed for {e.field}: {e.message}")\nelse:\n    print(f"Loaded user: {user_data.name}")\nfinally:\n    cleanup_resources()` });
  } else if (["async"].includes(cat)) {
    s.push({ type: "code", language: "python", caption: `${chName} — Async Python:`, content: `# ${chName} — Async/Await in Python\nimport asyncio\nimport aiohttp\n\nasync def fetch_url(session: aiohttp.ClientSession, url: str) -> dict:\n    \"\"\"Fetch a URL asynchronously.\"\"\"\n    async with session.get(url) as response:\n        return await response.json()\n\nasync def main():\n    urls = [\n        "https://api.example.com/users",\n        "https://api.example.com/posts",\n    ]\n    async with aiohttp.ClientSession() as session:\n        tasks = [fetch_url(session, url) for url in urls]\n        results = await asyncio.gather(*tasks)\n        for result in results:\n            print(f"Fetched {len(result)} items")\n\n# Python 3.7+ — simple entry point\nasyncio.run(main())` });
  } else {
    s.push({ type: "code", language: "python", caption: `${chName} — Example:`, content: `# ${chName} — Python Example\n\"\"\"Demonstration of ${chName} in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {"count": 0, "unique": 0, "summary": "empty"}\n    \n    return {\n        "count": len(items),\n        "unique": len(set(items)),\n        "summary": f"Processed {len(items)} items"\n    }\n\n# Usage\nresult = process_items(["a", "b", "a", "c"])\nprint(result)  # {"count": 4, "unique": 3, ...}` });
  }

  s.push({ type: "text", content: `## Pythonic Approach to ${chName}\n\n${desc.charAt(0).toUpperCase() + desc.slice(1)}. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability` });

  if (["basics", "control-flow", "data-structures"].includes(cat)) {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation.` });
  } else if (["oop", "advanced"].includes(cat)) {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage.` });
  } else if (["async"].includes(cat)) {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Not everything needs to be async. Use async I/O for network and file operations. CPU-bound work should use multiprocessing or threading. Mixing sync and async requires careful design — use asyncio.to_thread() for sync functions in async code.` });
  } else {
    s.push({ type: "callout", style: "tip", content: `💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively.` });
  }

  if (["basics", "control-flow"].includes(cat)) {
    s.push({ type: "comparison", title: `${chName} — Python Idioms`, headers: ["Anti-Pattern", "Pythonic Way", "Why"], rows: [
      ["for i in range(len(list))", "for item in list:", "Direct iteration is cleaner"],
      ["if x == True:", "if x:", "Implicit boolean check"],
      ["if len(list) > 0:", "if list:", "Empty collections are falsy"],
      ["x = x + 1", "x += 1", "Augmented assignment"],
      ["s = 'a' + ',' + 'b'", "s = ','.join(['a','b'])", "String join is faster"],
    ]});
  } else if (["data-structures", "functions"].includes(cat)) {
    s.push({ type: "comparison", title: `${chName} — Python vs Other Languages`, headers: ["Feature", "Python", "JavaScript/Java"], rows: [
      ["Block scope", "Indentation", "Braces {}"],
      ["Type system", "Dynamic + type hints", "Static or dynamic"],
      ["Lists", "list (mutable)", "Array/ArrayList"],
      ["Dictionary", "dict", "Map/HashMap"],
      ["Error handling", "try/except", "try/catch"],
    ]});
  } else {
    s.push({ type: "list", ordered: false, items: [
      `Python's ${chName} follows the principle of least surprise`,
      "Use type hints for better code documentation and IDE support",
      "Prefer list comprehensions over map/filter for readability",
      "Context managers (with statements) handle resources cleanly",
      "Write tests with pytest for reliable, maintainable code",
    ]});
  }

  s.push({ type: "callout", style: "warning", content: `⚠️ **Common Pitfall:** ${["io-errors"].includes(cat) ? "Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly." : "Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."}` });

  // Topic-specific resources
  if (["basics", "control-flow", "data-structures"].includes(cat)) {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step` });
  } else if (["oop", "advanced"].includes(cat)) {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts` });
  } else {
    s.push({ type: "text", content: `## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools` });
  }

  s.push({ type: "callout", style: "important", content: `📌 **Remember:** Python's "batteries included" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself.` });

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

// ─── HTML Topic Categorisation ────────────────────────────────
function htmlCategory(chName) {
  const lc = chName.toLowerCase();
  if (lc.includes("intro") || lc.includes("editor") || lc.includes("what is") || lc.includes("syntax") || lc.includes("document")) return "fundamentals";
  if (lc.includes("element") || lc.includes("tag") || lc.includes("heading") || lc.includes("paragraph") || lc.includes("format") || lc.includes("quot") || lc.includes("comment") || lc.includes("color") || lc.includes("link") || lc.includes("image") || lc.includes("attrib")) return "elements";
  if (lc.includes("list") || lc.includes("table") || lc.includes("div") || lc.includes("span") || lc.includes("block") || lc.includes("inline") || lc.includes("class") || lc.includes("id") || lc.includes("iframe") || lc.includes("layout") || lc.includes("semantic") || lc.includes("head") || lc.includes("meta") || lc.includes("path") || lc.includes("style guide")) return "structure";
  if (lc.includes("entity") || lc.includes("symbol") || lc.includes("emoji") || lc.includes("charset") || lc.includes("url encod") || lc.includes("lang") || lc.includes("bidirectional") || lc.includes("code") || lc.includes("pre")) return "encoding";
  if (lc.includes("form") || lc.includes("input") || lc.includes("select") || lc.includes("textarea") || lc.includes("valid") || lc.includes("fieldset") || lc.includes("legend") || lc.includes("datalist") || lc.includes("autocomplete") || lc.includes("button")) return "forms";
  if (lc.includes("canvas") || lc.includes("svg") || lc.includes("mathml") || lc.includes("image map") || lc.includes("graphic")) return "graphics";
  if (lc.includes("video") || lc.includes("audio") || lc.includes("youtube") || lc.includes("embed") || lc.includes("picture") || lc.includes("source") || lc.includes("track") || lc.includes("media")) return "media";
  if (lc.includes("drag") || lc.includes("web storage") || lc.includes("worker") || lc.includes("sse") || lc.includes("geoloc") || lc.includes("history api") || lc.includes("notif") || lc.includes("clipboard") || lc.includes("fullscreen") || lc.includes("speech")) return "apis";
  if (lc.includes("template") || lc.includes("slot") || lc.includes("web component") || lc.includes("shadow") || lc.includes("custom element") || lc.includes("microdata") || lc.includes("aria") || lc.includes("accessib") || lc.includes("seo") || lc.includes("perform") || lc.includes("pwa") || lc.includes("manifest") || lc.includes("dialog") || lc.includes("details") || lc.includes("popover") || lc.includes("search")) return "modern";
  if (lc.includes("secur") || lc.includes("xss") || lc.includes("csp") || lc.includes("cors") || lc.includes("testing") || lc.includes("valid") || lc.includes("email") || lc.includes("pug") || lc.includes("hml") || lc.includes("future") || lc.includes("best practice") || lc.includes("what new")) return "mastery";
  return "general";
}

// ─── CSS Topic Categorisation ─────────────────────────────────
function cssCategory(chName) {
  const lc = chName.toLowerCase();
  if (lc.includes("intro") || lc.includes("syntax") || lc.includes("selector") || lc.includes("how to") || lc.includes("comment") || lc.includes("color") || lc.includes("background") || lc.includes("border") || lc.includes("margin") || lc.includes("padding") || lc.includes("height") || lc.includes("width") || lc.includes("box model") || lc.includes("box sizing") || lc.includes("outline")) return "fundamentals";
  if (lc.includes("text") || lc.includes("font") || lc.includes("line height") || lc.includes("white space") || lc.includes("word") || lc.includes("hyphen") || lc.includes("text shadow") || lc.includes("icon") || lc.includes("column") || lc.includes("web safe")) return "typography";
  if (lc.includes("display") || lc.includes("position") || lc.includes("z-index") || lc.includes("overflow") || lc.includes("float") || lc.includes("flexbox") || lc.includes("flex") || lc.includes("grid") || lc.includes("multi-column") || lc.includes("subgrid")) return "layout";
  if (lc.includes("combinator") || lc.includes("attribute select") || lc.includes("pseudo-class") || lc.includes("pseudo-element") || lc.includes("opacity") || lc.includes("gradient") || lc.includes("shadow") || lc.includes("filter") || lc.includes("backdrop") || lc.includes("mask") || lc.includes("clip")) return "effects";
  if (lc.includes("unit") || lc.includes("specificity") || lc.includes("cascade") || lc.includes("important") || lc.includes("inherit") || lc.includes("custom propert") || lc.includes("@property") || lc.includes("calc") || lc.includes("min()") || lc.includes("max()") || lc.includes("clamp") || lc.includes("media qu") || lc.includes("container qu") || lc.includes("viewport") || lc.includes("logical propert") || lc.includes("color function") || lc.includes("nesting")) return "responsive";
  if (lc.includes("transform") || lc.includes("2d") || lc.includes("3d") || lc.includes("perspective") || lc.includes("transit") || lc.includes("animat") || lc.includes("keyframe") || lc.includes("scroll-driv") || lc.includes("view trans") || lc.includes("will-change") || lc.includes("hardware")) return "animations";
  if (lc.includes("framework") || lc.includes("preprocessor") || lc.includes("sass") || lc.includes("methodology") || lc.includes("bem") || lc.includes("itcss") || lc.includes("layer") || lc.includes("design system") || lc.includes("theming") || lc.includes("debug") || lc.includes("best practice") || lc.includes("tool")) return "architecture";
  if (lc.includes("form") || lc.includes("sprite") || lc.includes("counter") || lc.includes("scroll snap") || lc.includes("print") || lc.includes("feature qu") || lc.includes("houdini") || lc.includes("has select")) return "advanced";
  return "general";
}

// ─── JavaScript Topic Categorisation ───────────────────────────
function jsCategory(chName) {
  const lc = chName.toLowerCase();
  if (lc.includes("intro") || lc.includes("where to") || lc.includes("output") || lc.includes("syntax") || lc.includes("statement") || lc.includes("comment") || lc.includes("variable") || lc.includes("let") || lc.includes("const") || lc.includes("type") || lc.includes("coer") || lc.includes("number") || lc.includes("string") || lc.includes("boolean") || lc.includes("operator") || lc.includes("precedence")) return "basics";
  if (lc.includes("if") || lc.includes("switch") || lc.includes("ternary") || lc.includes("for") || lc.includes("while") || lc.includes("loop") || lc.includes("break") || lc.includes("continue") || lc.includes("label")) return "control-flow";
  if (lc.includes("function") || lc.includes("arrow") || lc.includes("param") || lc.includes("return") || lc.includes("scope") || lc.includes("hoist") || lc.includes("closure") || lc.includes("iife") || lc.includes("context")) return "functions";
  if (lc.includes("object") || lc.includes("prototype") || lc.includes("class") || lc.includes("extend") || lc.includes("inherit") || lc.includes("super") || lc.includes("getter") || lc.includes("setter") || lc.includes("static") || lc.includes("private") || lc.includes("array") || lc.includes("map") || lc.includes("set") || lc.includes("weak")) return "objects";
  if (lc.includes("destructur") || lc.includes("spread") || lc.includes("rest") || lc.includes("module") || lc.includes("import") || lc.includes("export") || lc.includes("dynamic") || lc.includes("error") || lc.includes("try") || lc.includes("catch") || lc.includes("finally") || lc.includes("this") || lc.includes("bind") || lc.includes("call") || lc.includes("apply") || lc.includes("json") || lc.includes("symbol") || lc.includes("iter") || lc.includes("generator") || lc.includes("proxy") || lc.includes("reflect") || lc.includes("temporal") || lc.includes("date")) return "advanced";
  if (lc.includes("callb") || lc.includes("promise") || lc.includes("async") || lc.includes("await") || lc.includes("event loop") || lc.includes("microtask") || lc.includes("macrotask") || lc.includes("settimeout") || lc.includes("setinterval") || lc.includes("timing") || lc.includes("worker") || lc.includes("service worker") || lc.includes("indexeddb")) return "async";
  if (lc.includes("dom") || lc.includes("select") || lc.includes("manipul") || lc.includes("travers") || lc.includes("attrib") || lc.includes("data") || lc.includes("style") || lc.includes("event") || lc.includes("bubb") || lc.includes("captur") || lc.includes("deleg") || lc.includes("custom event") || lc.includes("window") || lc.includes("document") || lc.includes("navigator") || lc.includes("form event")) return "dom";
  if (lc.includes("fetch") || lc.includes("localstorage") || lc.includes("session") || lc.includes("cookie") || lc.includes("geo") || lc.includes("canvas 2d") || lc.includes("websocket") || lc.includes("intersect") || lc.includes("mutation") || lc.includes("resize") || lc.includes("clipboard") || lc.includes("file") || lc.includes("history")) return "web-apis";
  if (lc.includes("debug") || lc.includes("test") || lc.includes("perform") || lc.includes("memory") || lc.includes("secur") || lc.includes("bundle") || lc.includes("lint") || lc.includes("prettier") || lc.includes("typescript") || lc.includes("design pattern") || lc.includes("functional") || lc.includes("best practice") || lc.includes("node") || lc.includes("express") || lc.includes("npm") || lc.includes("env") || lc.includes("future") || lc.includes("ecmascript")) return "tooling";
  return "general";
}

// ─── Python Topic Categorisation ───────────────────────────────
function pythonCategory(chName) {
  const lc = chName.toLowerCase();
  if (lc.includes("intro") || lc.includes("install") || lc.includes("setup") || lc.includes("syntax") || lc.includes("indent") || lc.includes("comment") || lc.includes("docstring") || lc.includes("variable") || lc.includes("data type") || lc.includes("number") || lc.includes("math") || lc.includes("cast") || lc.includes("type conver") || lc.includes("slicing") || lc.includes("string method") || lc.includes("f-string") || lc.includes("format")) return "basics";
  if (lc.includes("bool") || lc.includes("compar") || lc.includes("logical") || lc.includes("if") || lc.includes("elif") || lc.includes("else") || lc.includes("match") || lc.includes("case") || lc.includes("while") || lc.includes("for") || lc.includes("range") || lc.includes("break") || lc.includes("continue")) return "control-flow";
  if (lc.includes("list") || lc.includes("tuple") || lc.includes("set") || lc.includes("dict") || lc.includes("dictionary") || lc.includes("comprehension") || lc.includes("deque") || lc.includes("counter") || lc.includes("defaultdict") || lc.includes("itertool") || lc.includes("chain") || lc.includes("cycle") || lc.includes("permut")) return "data-structures";
  if (lc.includes("function") || lc.includes("def") || lc.includes("return") || lc.includes("param") || lc.includes("args") || lc.includes("kwargs") || lc.includes("lambda") || lc.includes("scope") || lc.includes("global") || lc.includes("nonlocal") || lc.includes("module") || lc.includes("import") || lc.includes("package") || lc.includes("pip") || lc.includes("virtual") || lc.includes("requirement") || lc.includes("main") || lc.includes("type hint") || lc.includes("annot")) return "functions";
  if (lc.includes("class") || lc.includes("object") || lc.includes("init") || lc.includes("constructor") || lc.includes("instance") || lc.includes("method") || lc.includes("static") || lc.includes("property") || lc.includes("inheritance") || lc.includes("super") || lc.includes("abstract") || lc.includes("dataclass") || lc.includes("magic method") || lc.includes("str") || lc.includes("repr") || lc.includes("len") || lc.includes("eq") || lc.includes("hash") || lc.includes("getitem") || lc.includes("operator overload") || lc.includes("polymorph") || lc.includes("duck")) return "oop";
  if (lc.includes("except") || lc.includes("try") || lc.includes("raise") || lc.includes("assert") || lc.includes("file") || lc.includes("open") || lc.includes("read") || lc.includes("write") || lc.includes("context manage") || lc.includes("with") || lc.includes("json") || lc.includes("csv")) return "io-errors";
  if (lc.includes("datetime") || lc.includes("os module") || lc.includes("sys") || lc.includes("regex") || lc.includes("regular expression") || lc.includes("standard lib") || lc.includes("random") || lc.includes("argparse") || lc.includes("log") || lc.includes("subprocess") || lc.includes("thread") || lc.includes("multiprocess") || lc.includes("pathlib") || lc.includes("enum") || lc.includes("hashlib") || lc.includes("hmac")) return "stdlib";
  if (lc.includes("decorator") || lc.includes("generator") || lc.includes("yield") || lc.includes("send") || lc.includes("iter") || lc.includes("descriptor") || lc.includes("metaclass") || lc.includes("slot") || lc.includes("weak") || lc.includes("pickle") || lc.includes("functools") || lc.includes("lru") || lc.includes("wraps") || lc.includes("typing") || lc.includes("generic") || lc.includes("protocol")) return "advanced";
  if (lc.includes("asyncio") || lc.includes("async") || lc.includes("await") || lc.includes("coroutine") || lc.includes("future") || lc.includes("gather") || lc.includes("aiohttp")) return "async";
  if (lc.includes("test") || lc.includes("unitest") || lc.includes("pytest") || lc.includes("mock") || lc.includes("numpy") || lc.includes("pandas") || lc.includes("matplotlib") || lc.includes("sqlite") || lc.includes("best practice") || lc.includes("pep 8") || lc.includes("static analysis")) return "testing-data";
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
    const practiceId = `cs-ch${idx}-practice`;
    s.push({ type: "exercise", id: practiceId, title: `${chName} Practice`, description: "Apply what you've learned:", instructions: [
      "Implement the core concept from scratch",
      "Test with various inputs and edge cases",
      "Analyze time and space complexity",
      "Compare with standard library implementations",
    ], code: `# ${chName} Practice\n# Implement the core concept described in this chapter\n\ndef practice_solution():\n    # TODO: Implement the solution\n    pass\n\n# Test your implementation\nresult = practice_solution()\nprint(f"Result: {result}")`, correctOutput: "Result: ...", hint: "Start simple, then add optimizations one at a time." });
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
  const cat = htmlCategory(chName);

  // ── Fundamentals ──
  if (cat === "fundamentals") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `What does HTML stand for?`,
      options: [
        { id: "a", text: "HyperText Markup Language" },
        { id: "b", text: "HyperText Machine Language" },
        { id: "c", text: "Home Tool Markup Language" },
        { id: "d", text: "HyperTool Multi Language" },
      ], correctAnswer: "a", explanation: "HTML stands for HyperText Markup Language. It is the standard language for creating web pages and web applications." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `Which element defines the document type and HTML version?`,
      options: [
        { id: "a", text: "<!DOCTYPE html>" },
        { id: "b", text: "<html>" },
        { id: "c", text: "<head>" },
        { id: "d", text: "<meta>" },
      ], correctAnswer: "a", explanation: "<!DOCTYPE html> declares the document type and HTML version. It must be the first line in every HTML document." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `HTML elements can have attributes that provide additional information.`,
      correctAnswer: true, explanation: "HTML attributes provide additional information about elements, such as id, class, src, href, and alt." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
      question: `The HTML element that contains metadata about the document is called the ___ element.`,
      correctAnswer: "head", explanation: "The <head> element contains meta-information about the HTML document, such as title, links, and scripts." });
  }
  // ── Elements ──
  else if (cat === "elements") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which HTML element is used to define a hyperlink?`,
      options: [
        { id: "a", text: "<a>" },
        { id: "b", text: "<link>" },
        { id: "c", text: "<href>" },
        { id: "d", text: "<nav>" },
      ], correctAnswer: "a", explanation: "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `What is the correct HTML for inserting an image?`,
      options: [
        { id: "a", text: '<img src="image.jpg" alt="description">' },
        { id: "b", text: '<image src="image.jpg">' },
        { id: "c", text: '<img href="image.jpg">' },
        { id: "d", text: '<picture src="image.jpg">' },
      ], correctAnswer: "a", explanation: "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "easy",
      question: `The HTML element for the largest heading is ___.`,
      correctAnswer: "h1", explanation: "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest." });
  }
  // ── Structure ──
  else if (cat === "structure") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which HTML5 element is used for navigation links?`,
      options: [
        { id: "a", text: "<nav>" },
        { id: "b", text: "<menu>" },
        { id: "c", text: "<ul>" },
        { id: "d", text: "<header>" },
      ], correctAnswer: "a", explanation: "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `When should you use a <div> instead of a semantic element?`,
      options: [
        { id: "a", text: "When no semantic element adequately describes the content" },
        { id: "b", text: "Always — divs are more flexible" },
        { id: "c", text: "Never — semantic elements always should be used" },
        { id: "d", text: "When you need to apply CSS styles" },
      ], correctAnswer: "a", explanation: "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
      question: `The HTML attribute that uniquely identifies an element is called the ___ attribute.`,
      correctAnswer: "id", acceptableAnswers: ["id attribute"], explanation: "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document." });
  }
  // ── Forms ──
  else if (cat === "forms") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which attribute specifies that an input field must be filled out?`,
      options: [
        { id: "a", text: "required" },
        { id: "b", text: "mandatory" },
        { id: "c", text: "validate" },
        { id: "d", text: "must" },
      ], correctAnswer: "a", explanation: "The 'required' attribute specifies that an input field must be filled out before submitting the form." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "medium",
      question: `The 'placeholder' attribute should replace the <label> element for form accessibility.`,
      correctAnswer: false, explanation: "Placeholders disappear when users type, making them unsuitable as label replacements. Always use both label (visible) and placeholder (hint)." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "hard",
      question: `Which input type shows a date picker on mobile browsers?`,
      options: [
        { id: "a", text: 'type="date"' },
        { id: "b", text: 'type="calendar"' },
        { id: "c", text: 'type="datetime"' },
        { id: "d", text: 'type="picker"' },
      ], correctAnswer: "a", explanation: 'type="date" shows a native date picker on supported browsers and triggers the date keyboard on mobile devices.' });
  }
  // ── Media / Graphics ──
  else if (cat === "media" || cat === "graphics") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which HTML element is used to embed video content?`,
      options: [
        { id: "a", text: "<video>" },
        { id: "b", text: "<media>" },
        { id: "c", text: "<movie>" },
        { id: "d", text: "<embed>" },
      ], correctAnswer: "a", explanation: "The <video> element is used to embed video content. It supports multiple source formats via <source> elements." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "medium",
      question: `The alt attribute on images is optional and mainly used for SEO.`,
      correctAnswer: false, explanation: "The alt attribute is required for accessibility. Screen readers read it aloud, and it displays when images fail to load. It also helps SEO but its primary purpose is accessibility." });
  }
  // ── APIs / Modern ──
  else if (cat === "apis" || cat === "modern") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "medium",
      question: `Which API allows web pages to store data in the browser persistently?`,
      options: [
        { id: "a", text: "localStorage" },
        { id: "b", text: "sessionStorage" },
        { id: "c", text: "cookies" },
        { id: "d", text: "IndexedDB" },
      ], correctAnswer: "a", explanation: "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "hard",
      question: `What is the purpose of ARIA attributes in HTML?`,
      options: [
        { id: "a", text: "To improve accessibility when HTML semantics are insufficient" },
        { id: "b", text: "To add visual styling to elements" },
        { id: "c", text: "To improve page loading performance" },
        { id: "d", text: "To encrypt form data before submission" },
      ], correctAnswer: "a", explanation: "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies." });
  }
  // ── General / Default ──
  else {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `What is the correct HTML for creating a ${chName}?`,
      options: [
        { id: "a", text: "Using the appropriate semantic HTML element" },
        { id: "b", text: "Using a generic <div> with a class name" },
        { id: "c", text: "Using JavaScript to create the element dynamically" },
        { id: "d", text: "There is no correct approach in HTML" },
      ], correctAnswer: "a", explanation: "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `${chName} is only relevant for visual appearance.`,
      correctAnswer: false, explanation: "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS." });
  }

  // Standard questions for all HTML chapters
  qs.push({ id: `${prefix}-tf2`, type: "true-false", difficulty: "medium",
    question: `Using semantic HTML elements improves SEO and accessibility.`,
    correctAnswer: true, explanation: "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content." });
  qs.push({ id: `${prefix}-fb2`, type: "fill-blank", difficulty: "hard",
    question: `The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___`,
    correctAnswer: "aria-label", acceptableAnswers: ["role", "aria-labelledby", "aria"],
    explanation: "ARIA attributes enhance accessibility when native HTML semantics are insufficient." });

  return qs;
}

function genCssExamQ(chName, prefix, idx) {
  const qs = [];
  const cat = cssCategory(chName);

  // ── Fundamentals ──
  if (cat === "fundamentals") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `What does the CSS Box Model consist of?`,
      options: [
        { id: "a", text: "Content, Padding, Border, Margin" },
        { id: "b", text: "Content, Margin, Padding, Outline" },
        { id: "c", text: "Width, Height, Padding, Border" },
        { id: "d", text: "Content, Border, Outline, Margin" },
      ], correctAnswer: "a", explanation: "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.`,
      correctAnswer: true, explanation: "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
      question: `The CSS property box-sizing: border-box makes an element's width include its ___ and ___.`,
      correctAnswer: "padding and border", acceptableAnswers: ["padding, border", "border and padding"],
      explanation: "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable." });
  }
  // ── Typography ──
  else if (cat === "typography") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which CSS property changes the font of an element?`,
      options: [
        { id: "a", text: "font-family" },
        { id: "b", text: "font-style" },
        { id: "c", text: "font-weight" },
        { id: "d", text: "text-font" },
      ], correctAnswer: "a", explanation: "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `What is the difference between 'em' and 'rem' units?`,
      options: [
        { id: "a", text: "em is relative to parent font-size; rem is relative to root (html) font-size" },
        { id: "b", text: "rem is relative to parent; em is relative to root" },
        { id: "c", text: "Both are absolute units" },
        { id: "d", text: "em is for fonts only; rem is for spacing only" },
      ], correctAnswer: "a", explanation: "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues." });
  }
  // ── Layout ──
  else if (cat === "layout") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which CSS property is used for creating flexible one-dimensional layouts?`,
      options: [
        { id: "a", text: "display: flex" },
        { id: "b", text: "display: grid" },
        { id: "c", text: "display: inline-block" },
        { id: "d", text: "display: table" },
      ], correctAnswer: "a", explanation: "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?`,
      options: [
        { id: "a", text: "Creates 3 columns: middle one is twice as wide as the others" },
        { id: "b", text: "Creates 3 equal-width columns" },
        { id: "c", text: "Creates 1 column that fills 3 fractions of space" },
        { id: "d", text: "Creates 4 columns: 1fr, 2fr, 1fr, and auto" },
      ], correctAnswer: "a", explanation: "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "medium",
      question: `An element with position: absolute is positioned relative to its nearest positioned ancestor.`,
      correctAnswer: true, explanation: "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static." });
  }
  // ── Effects ──
  else if (cat === "effects") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which pseudo-class applies styles when the user hovers over an element?`,
      options: [
        { id: "a", text: ":hover" },
        { id: "b", text: ":focus" },
        { id: "c", text: ":active" },
        { id: "d", text: ":visited" },
      ], correctAnswer: "a", explanation: ":hover applies when the user's pointer is over an element. :focus applies when an element receives focus. :active applies during click." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "hard",
      question: `The CSS property that creates a frosted glass effect by blurring the background behind an element is: backdrop-___`,
      correctAnswer: "filter", explanation: "backdrop-filter: blur(10px) creates the frosted glass effect by applying filters to the area behind an element." });
  }
  // ── Responsive ──
  else if (cat === "responsive") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which CSS feature allows styles to change based on the viewport size?`,
      options: [
        { id: "a", text: "Media queries (@media)" },
        { id: "b", text: "@supports" },
        { id: "c", text: "@viewport" },
        { id: "d", text: "@import" },
      ], correctAnswer: "a", explanation: "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "hard",
      question: `What is the advantage of container queries over media queries?`,
      options: [
        { id: "a", text: "Container queries respond to the parent container's size, not the viewport" },
        { id: "b", text: "Container queries are faster to render" },
        { id: "c", text: "Container queries work on all browsers" },
        { id: "d", text: "Container queries replace the need for media queries entirely" },
      ], correctAnswer: "a", explanation: "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts." });
  }
  // ── Animations ──
  else if (cat === "animations") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which CSS property is used to create smooth transitions between states?`,
      options: [
        { id: "a", text: "transition" },
        { id: "b", text: "animation" },
        { id: "c", text: "transform" },
        { id: "d", text: "translate" },
      ], correctAnswer: "a", explanation: "The transition property enables smooth interpolation between CSS property values when a state change occurs (like hover)." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "medium",
      question: `Animating the 'width' property is more performant than animating 'transform'.`,
      correctAnswer: false, explanation: "Animating transform (and opacity) only triggers compositing — the most efficient rendering layer. Animating width triggers layout recalculation, which is expensive." });
  }
  // ── General ──
  else {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `How do you apply CSS to an HTML element?`,
      options: [
        { id: "a", text: "Using CSS selectors with property-value declarations" },
        { id: "b", text: "Using HTML attributes on the element" },
        { id: "c", text: "Using JavaScript to modify the style object" },
        { id: "d", text: "Using server-side configuration files" },
      ], correctAnswer: "a", explanation: "CSS uses selectors to target elements and property-value pairs to define styles." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `CSS styles cascade from parent to child elements by default.`,
      correctAnswer: true, explanation: "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child." });
  }

  // Standard questions for all CSS chapters
  qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
    question: `What is the best practice for organizing CSS in large projects?`,
    options: [
      { id: "a", text: "Use a methodology like BEM with cascade layers (@layer)" },
      { id: "b", text: "Use !important to ensure styles always apply" },
      { id: "c", text: "Put all styles in one file without organization" },
      { id: "d", text: "Use inline styles exclusively" },
    ], correctAnswer: "a", explanation: "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade." });
  qs.push({ id: `${prefix}-fb2`, type: "fill-blank", difficulty: "medium",
    question: `The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.`,
    correctAnswer: "property; var", acceptableAnswers: ["property; var()", "property using var"],
    explanation: "CSS custom properties (variables) are defined with --name and accessed with var(--name)." });

  return qs;
}

function genJsExamQ(chName, prefix, idx) {
  const qs = [];
  const cat = jsCategory(chName);

  // ── Basics ──
  if (cat === "basics") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `How do you declare a variable in modern JavaScript?`,
      options: [
        { id: "a", text: "const or let" },
        { id: "b", text: "var" },
        { id: "c", text: "int" },
        { id: "d", text: "string" },
      ], correctAnswer: "a", explanation: "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `JavaScript is a dynamically-typed language.`,
      correctAnswer: true, explanation: "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `What does the strict equality operator (===) do?`,
      options: [
        { id: "a", text: "Compares value AND type without coercion" },
        { id: "b", text: "Compares value only with type coercion" },
        { id: "c", text: "Assigns a value to a variable" },
        { id: "d", text: "Checks if two values are not equal" },
      ], correctAnswer: "a", explanation: "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)." });
  }
  // ── Control flow / Functions ──
  else if (cat === "control-flow" || cat === "functions") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which loop is best for iterating over an array in modern JavaScript?`,
      options: [
        { id: "a", text: "for...of" },
        { id: "b", text: "for...in" },
        { id: "c", text: "while" },
        { id: "d", text: "do...while" },
      ], correctAnswer: "a", explanation: "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
      question: `The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.`,
      correctAnswer: "closure", explanation: "A closure is created when a function retains access to its lexical scope even when executed outside that scope." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "hard",
      question: `What is the difference between an arrow function and a regular function?`,
      options: [
        { id: "a", text: "Arrow functions do not have their own 'this' binding" },
        { id: "b", text: "Arrow functions have their own 'this' binding" },
        { id: "c", text: "Arrow functions cannot return values" },
        { id: "d", text: "There is no difference" },
      ], correctAnswer: "a", explanation: "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called." });
  }
  // ── Objects / Advanced ──
  else if (cat === "objects" || cat === "advanced") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `How do you create a class in modern JavaScript?`,
      options: [
        { id: "a", text: "class MyClass { }" },
        { id: "b", text: "function MyClass() { }" },
        { id: "c", text: "MyClass = class { }" },
        { id: "d", text: "createClass('MyClass')" },
      ], correctAnswer: "a", explanation: "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "medium",
      question: `In JavaScript, arrays and functions are objects.`,
      correctAnswer: true, explanation: "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "hard",
      question: `What does the spread operator (...) do when used with objects?`,
      options: [
        { id: "a", text: "Creates a shallow copy with own enumerable properties" },
        { id: "b", text: "Creates a deep copy of all nested properties" },
        { id: "c", text: "Merges multiple objects in place" },
        { id: "d", text: "Deletes properties from the object" },
      ], correctAnswer: "a", explanation: "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries." });
  }
  // ── Async ──
  else if (cat === "async") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `What is a Promise in JavaScript?`,
      options: [
        { id: "a", text: "An object representing the eventual completion/failure of an async operation" },
        { id: "b", text: "A function that runs synchronously" },
        { id: "c", text: "A callback queue management system" },
        { id: "d", text: "A method for error handling" },
      ], correctAnswer: "a", explanation: "A Promise is an object representing the eventual result of an asynchronous operation. It has three states: pending, fulfilled, rejected." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "medium",
      question: `await can only be used inside functions marked with async.`,
      correctAnswer: true, explanation: "The await keyword is only valid inside async functions. Top-level await is supported in ES modules." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "hard",
      question: `What does Promise.all() do when one of its promises rejects?`,
      options: [
        { id: "a", text: "It rejects immediately with that error" },
        { id: "b", text: "It waits for all promises to settle, then reports all errors" },
        { id: "c", text: "It ignores the rejected promise and continues" },
        { id: "d", text: "It retries the rejected promise automatically" },
      ], correctAnswer: "a", explanation: "Promise.all() fails fast — it rejects immediately when any input promise rejects. Use Promise.allSettled() to wait for all regardless of outcome." });
  }
  // ── DOM / Web APIs ──
  else if (cat === "dom" || cat === "web-apis") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which method selects an element by its CSS selector?`,
      options: [
        { id: "a", text: "document.querySelector()" },
        { id: "b", text: "document.getElementById()" },
        { id: "c", text: "document.select()" },
        { id: "d", text: "document.find()" },
      ], correctAnswer: "a", explanation: "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `What is event delegation in JavaScript?`,
      options: [
        { id: "a", text: "Attaching one parent listener to handle events from multiple children" },
        { id: "b", text: "Attaching separate listeners to each child element" },
        { id: "c", text: "Preventing events from bubbling up the DOM" },
        { id: "d", text: "Creating custom events programmatically" },
      ], correctAnswer: "a", explanation: "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "medium",
      question: `The browser API that allows web pages to store key-value data persistently is called ___.`,
      correctAnswer: "localStorage", explanation: "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed." });
  }
  // ── Tooling / Default ──
  else {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which tool adds static type checking to JavaScript?`,
      options: [
        { id: "a", text: "TypeScript" },
        { id: "b", text: "Babel" },
        { id: "c", text: "Webpack" },
        { id: "d", text: "ESLint" },
      ], correctAnswer: "a", explanation: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Babel transpiles JS features. ESLint finds code issues." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `JavaScript is a statically-typed language.`,
      correctAnswer: false, explanation: "JavaScript is dynamically-typed. TypeScript adds optional static typing." });
  }

  // Standard JS questions
  qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
    question: `What prevents unexpected behavior in JavaScript production code?`,
    options: [
      { id: "a", text: "Using strict mode, proper error handling, and type validation" },
      { id: "b", text: "Using only global variables for simplicity" },
      { id: "c", text: "Using eval() for dynamic code execution" },
      { id: "d", text: "Avoiding functions entirely" },
    ], correctAnswer: "a", explanation: "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early." });
  qs.push({ id: `${prefix}-fb2`, type: "fill-blank", difficulty: "medium",
    question: `The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.`,
    correctAnswer: "event loop", explanation: "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)." });

  return qs;
}

function genPythonExamQ(chName, prefix, idx) {
  const qs = [];
  const cat = pythonCategory(chName);

  // ── Basics ──
  if (cat === "basics") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `How do you define a function in Python?`,
      options: [
        { id: "a", text: "def function_name():" },
        { id: "b", text: "function function_name()" },
        { id: "c", text: "func function_name():" },
        { id: "d", text: "define function_name():" },
      ], correctAnswer: "a", explanation: "Python uses the 'def' keyword followed by the function name and parentheses to define functions." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `Python uses indentation (not braces) to define code blocks.`,
      correctAnswer: true, explanation: "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "easy",
      question: `The Python function that prints output to the console is: ___()`,
      correctAnswer: "print", explanation: "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting." });
  }
  // ── Control flow / Data structures ──
  else if (cat === "control-flow" || cat === "data-structures") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which Python data structure is ordered, mutable, and allows duplicate elements?`,
      options: [
        { id: "a", text: "List" },
        { id: "b", text: "Set" },
        { id: "c", text: "Tuple" },
        { id: "d", text: "Dictionary" },
      ], correctAnswer: "a", explanation: "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs." });
    qs.push({ id: `${prefix}-mc2`, type: "multiple-choice", difficulty: "medium",
      question: `What is the Python list comprehension syntax?`,
      options: [
        { id: "a", text: "[expression for item in iterable if condition]" },
        { id: "b", text: "for item in iterable: if condition: expression" },
        { id: "c", text: "list(expression for item in iterable)" },
        { id: "d", text: "map(expression, filter(condition, iterable))" },
      ], correctAnswer: "a", explanation: "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "medium",
      question: `Dictionary keys in Python must be of an immutable type.`,
      correctAnswer: true, explanation: "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys." });
  }
  // ── Functions ──
  else if (cat === "functions") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "medium",
      question: `How do you define a function with default parameters in Python?`,
      options: [
        { id: "a", text: "def greet(name='Guest'):" },
        { id: "b", text: "def greet(name='Guest')" },
        { id: "c", text: "def greet(name = default 'Guest'):" },
        { id: "d", text: "def greet(default name='Guest'):" },
      ], correctAnswer: "a", explanation: "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time." });
    qs.push({ id: `${prefix}-fb1`, type: "fill-blank", difficulty: "hard",
      question: `The special parameter that captures excess keyword arguments is: ___`,
      correctAnswer: "**kwargs", explanation: "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple." });
  }
  // ── OOP ──
  else if (cat === "oop") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `What is the correct way to define a class in Python?`,
      options: [
        { id: "a", text: "class MyClass:" },
        { id: "b", text: "class MyClass {}" },
        { id: "c", text: "define MyClass:" },
        { id: "d", text: "MyClass = class()" },
      ], correctAnswer: "a", explanation: "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "medium",
      question: `Python supports multiple inheritance.`,
      correctAnswer: true, explanation: "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called." });
  }
  // ── I/O and errors ──
  else if (cat === "io-errors") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `Which Python keyword is used to handle exceptions (equivalent to catch)?`,
      options: [
        { id: "a", text: "except" },
        { id: "b", text: "catch" },
        { id: "c", text: "error" },
        { id: "d", text: "handle" },
      ], correctAnswer: "a", explanation: "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "medium",
      question: `The 'with' statement automatically closes files when the block exits.`,
      correctAnswer: true, explanation: "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs." });
  }
  // ── Async ──
  else if (cat === "async") {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "hard",
      question: `How do you run multiple coroutines concurrently in Python asyncio?`,
      options: [
        { id: "a", text: "asyncio.gather()" },
        { id: "b", text: "asyncio.run()" },
        { id: "c", text: "asyncio.wait_for()" },
        { id: "d", text: "asyncio.sleep()" },
      ], correctAnswer: "a", explanation: "asyncio.gather() runs multiple awaitables concurrently and returns results. asyncio.run() runs a single coroutine entry point." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "medium",
      question: `Async functions in Python are defined with the 'async def' syntax.`,
      correctAnswer: true, explanation: "Python uses 'async def' to define coroutines. Inside them, 'await' suspends execution until the awaited operation completes." });
  }
  // ── Default ──
  else {
    qs.push({ id: `${prefix}-mc1`, type: "multiple-choice", difficulty: "easy",
      question: `How do you define a function in Python?`,
      options: [
        { id: "a", text: "def function_name():" },
        { id: "b", text: "function function_name()" },
        { id: "c", text: "func function_name():" },
        { id: "d", text: "define function_name():" },
      ], correctAnswer: "a", explanation: "Python uses the 'def' keyword followed by the function name and parentheses." });
    qs.push({ id: `${prefix}-tf1`, type: "true-false", difficulty: "easy",
      question: `Python uses indentation to define code blocks.`,
      correctAnswer: true, explanation: "Python uses indentation (typically 4 spaces) instead of braces." });
  }

  // Standard Python questions
  qs.push({ id: `${prefix}-mc3`, type: "multiple-choice", difficulty: "hard",
    question: `What is the best Python practice for production code?`,
    options: [
      { id: "a", text: "Use type hints, docstrings, and comprehensive testing" },
      { id: "b", text: "Write minimal code without documentation" },
      { id: "c", text: "Use global variables for simplicity" },
      { id: "d", text: "Avoid imports to keep code self-contained" },
    ], correctAnswer: "a", explanation: "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)." });
  qs.push({ id: `${prefix}-fb2`, type: "fill-blank", difficulty: "medium",
    question: `Python's package manager used to install third-party packages is called: ___`,
    correctAnswer: "pip", explanation: "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI." });

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
  out += `import { Course, Chapter, Section, ExamQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, CodeOrderQuestion, MatchPairsQuestion, Project } from "../types";\n\n`;

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

  // Write projects
  const projs = courseProjects[id] || [];
  out += `const ${id}Projects: Project[] = [\n`;
  projs.forEach((p) => {
    out += `  {\n`;
    out += `    id: "${p.id}",\n`;
    out += `    courseId: "${id}",\n`;
    out += `    title: "${p.title.replace(/"/g, '\\"')}",\n`;
    out += `    description: ${JSON.stringify(p.desc)},\n`;
    out += `    difficulty: ${p.difficulty},\n`;
    out += `    order: ${p.order},\n`;
    out += `    learningObjectives: ${JSON.stringify(p.objectives)},\n`;
    out += `    requirements: ${JSON.stringify(p.requirements)},\n`;
    out += `    hints: ${JSON.stringify(p.hints)},\n`;
    out += `    expectedConcepts: ${JSON.stringify(p.concepts)},\n`;
    out += `    estimatedMinutes: ${p.estMin},\n`;
    out += `    xpReward: ${p.xp},\n`;
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
  out += `  projects: ${id}Projects,\n`;
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
  getProject(courseId: string, projectId: string) {
    const course = this.getCourse(courseId);
    return course?.projects.find((p) => p.id === projectId);
  },
};
`;
fs.writeFileSync(path.join(outDir, "index.ts"), idx);
console.log("✓ Generated index.ts");

const totalChapters = courses.reduce((s, c) => s + c.chapters.length, 0);
console.log(`\n✅ All courses generated! ${totalChapters} total chapters across ${courses.length} courses.`);
