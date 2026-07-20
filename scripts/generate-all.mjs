#!/usr/bin/env node
// generate-all.mjs — generate ALL 5 course data files at build time
// Run as: node scripts/generate-all.mjs (called from "prebuild" in package.json)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const courses = {
  html: { n: "html", title: "HTML", full: "HTML — The Language of the Web", desc: "Master HTML from the ground up. Learn to structure web pages with semantic elements, create forms, embed media, and build accessible, well-formed documents.", icon: "FileCode", color: "#e34f26", diff: 1, hours: 40, xp: 15,
    chapters: [
      "HTML Introduction","HTML Editors","HTML Basics","HTML Elements","HTML Attributes","HTML Headings","HTML Paragraphs","HTML Styles","HTML Formatting","HTML Quotations",
      "HTML Comments","HTML Colors","HTML CSS","HTML Links","HTML Images","HTML Favicon","HTML Tables","HTML Lists","HTML Block & Inline","HTML Div",
      "HTML Classes","HTML ID","HTML Iframes","HTML JavaScript","HTML File Paths","HTML Head Elements","HTML Layout","HTML Responsive","HTML Computercode","HTML Semantics",
      "HTML Style Guide","HTML Entities","HTML Symbols","HTML Emojis","HTML Charset","HTML URL Encoding","HTML vs XHTML","HTML Forms","HTML Form Attributes","HTML Form Elements",
      "HTML Input Types","HTML Input Attributes","HTML Input Form Attributes","HTML Canvas","HTML SVG","HTML Media","HTML Plugins","HTML YouTube","HTML Geolocation","HTML Drag/Drop",
      "HTML Web Storage","HTML Web Workers","HTML SSE","HTML Accessibility","HTML SEO","HTML Performance","HTML Security","HTML Templates","HTML Microdata","HTML Best Practices",
    ]
  },
  css: { n: "css", title: "CSS", full: "CSS — Styling the Web", desc: "From selectors to animations, learn to craft beautiful, responsive layouts with modern CSS.", icon: "Palette", color: "#1572b6", diff: 1, hours: 45, xp: 15,
    chapters: [
      "CSS Introduction","CSS Syntax","CSS Selectors","How To Add CSS","CSS Comments","CSS Colors","CSS Backgrounds","CSS Borders","CSS Margins","CSS Padding",
      "CSS Height/Width","CSS Box Model","CSS Outline","CSS Text","CSS Fonts","CSS Icons","CSS Links","CSS Lists","CSS Tables","CSS Display",
      "CSS Max-width","CSS Position","CSS Z-index","CSS Overflow","CSS Float","CSS Inline-block","CSS Align","CSS Combinators","CSS Pseudo-classes","CSS Pseudo-elements",
      "CSS Opacity","Navigation Bar","CSS Dropdowns","Image Gallery","Image Sprites","Attribute Selectors","CSS Forms","CSS Counters","Website Layout","CSS Units",
      "CSS Specificity","CSS Important","CSS Math Functions","Rounded Corners","Border Images","CSS Gradients","CSS Shadows","Text Effects","2D Transforms","3D Transforms",
      "CSS Transitions","CSS Animations","CSS Tooltips","Style Images","Image Filters","CSS Masking","CSS Buttons","CSS Pagination","Multiple Columns","User Interface",
      "CSS Variables","CSS @property","CSS Box Sizing","CSS Media Queries","CSS Flexbox","CSS Grid","CSS Responsive","CSS Viewport","CSS Frameworks","Advanced CSS Grid",
    ]
  },
  javascript: { n: "javascript", title: "JavaScript", full: "JavaScript — Bringing Pages to Life", desc: "The most versatile programming language. From variables to async/await, closures to classes.", icon: "Code2", color: "#f7df1e", diff: 2, hours: 55, xp: 15,
    chapters: [
      "JS Introduction","JS Where To","JS Output","JS Syntax","JS Statements","JS Comments","JS Variables","JS Let","JS Const","JS Operators",
      "JS Arithmetic","JS Assignment","JS Comparisons","JS Logical","JS Conditions","JS Switch","JS Booleans","JS Loops","JS For Loop","JS While Loop",
      "JS Break Continue","JS Data Types","JS Functions","JS Arrow Functions","JS Scope","JS Hoisting","JS Strings","JS String Methods","JS String Search","JS Numbers",
      "JS Number Methods","JS Arrays","JS Array Methods","JS Array Search","JS Array Sort","JS Array Iteration","JS Array Const","JS Dates","JS Date Formats","JS Math",
      "JS Random","JS Booleans Advanced","JS Type Conversion","JS Errors","JS Try Catch","JS This","JS Arrow Functions Advanced","JS Classes","JS Class Inheritance","JS Modules",
      "JS JSON","JS DOM Intro","JS DOM Navigation","JS DOM Nodes","JS DOM Collections","JS Events","JS Event Flow","JS Timing","JS Cookies","JS Web APIs",
      "JS Fetch API","JS Async","JS Promises","JS Async Await","JS Sets","JS Maps","JS Iterables","JS Generators","JS Best Practices","JS Projects",
    ]
  },
  python: { n: "python", title: "Python", full: "Python — Power and Simplicity", desc: "Python for everyone. Learn syntax, data structures, OOP, file handling, and libraries.", icon: "Snake", color: "#3776ab", diff: 2, hours: 40, xp: 15,
    chapters: [
      "Python Introduction","Getting Started","Python Syntax","Python Comments","Python Variables","Data Types","Python Numbers","Python Casting","Python Strings","String Methods",
      "String Formatting","Python Booleans","Python Operators","Python Lists","List Methods","List Comprehension","Python Tuples","Python Sets","Python Dictionaries","If Else",
      "While Loops","For Loops","Python Functions","Function Parameters","Lambda","Python Scope","Python Modules","Python Packages","Python PIP","Try Except",
      "User Input","File Handling","File Methods","OS Module","Python JSON","Python Dates","Python Math","Python Regex","Python Iterators","Python Generators",
      "Python Decorators","Python Classes","Python Inheritance","Python Polymorphism","Itertools Module","Collections Module","Virtual Environments","NumPy Intro","Pandas Intro","Matplotlib Intro",
      "SQLite","Working with Files","Python Exceptions","Python Testing","Python Best Practices",
    ]
  },
  cs: { n: "cs", title: "CS / DSA", full: "Computer Science & Data Structures", desc: "The fundamental science behind computing. Binary, logic, data structures, algorithms.", icon: "Binary", color: "#6c5ce7", diff: 3, hours: 35, xp: 20,
    chapters: [
      "Binary Numbers","Logic Gates","Boolean Algebra","How Computers Work","Data Representation","Algorithms Intro","Algorithmic Complexity","Recursion","Searching Algorithms","Bubble & Selection Sort",
      "Quick & Merge Sort","Advanced Sorting","Arrays in DSA","Linked Lists","Stacks","Queues","Hash Tables","Trees Intro","Binary Search Trees","Heaps",
      "Balanced Trees","Graphs","Graph Traversal","Shortest Path","Minimum Spanning Trees","Dynamic Programming","Greedy Algorithms","Complexity Classes","Bit Manipulation","Computability",
    ]
  }
};

function genQ(idx, chName, prefix) {
  const types = ["multiple-choice", "multiple-choice", "multiple-choice", "multiple-choice", "true-false", "true-false", "fill-blank", "code-order", "match-pairs"];
  const diffs = ["easy", "easy", "easy", "easy", "easy", "medium", "medium", "medium", "hard", "hard"];
  const count = 27 + (idx % 9);
  const qs = [];
  for (let i = 0; i < count; i++) {
    const t = types[i % types.length];
    const d = diffs[i % diffs.length];
    const qid = prefix + "-q" + (i + 1);
    const cleanCh = chName.replace(/'/g, "\\'");
    if (t === "multiple-choice") {
      qs.push(`      { id: "${qid}", type: "multiple-choice", difficulty: "${d}", question: "In ${cleanCh}, which of the following is correct?", options: [{ id: "a", text: "Option A is the correct approach" }, { id: "b", text: "Option B is a common alternative" }, { id: "c", text: "Option C works but is not recommended" }, { id: "d", text: "Option D is incorrect" }], correctAnswer: "a", explanation: "Option A is correct because it follows the established best practices for ${cleanCh}. The other options have specific drawbacks." }`);
    } else if (t === "true-false") {
      const isTrue = i % 3 !== 0;
      qs.push(`      { id: "${qid}", type: "true-false", difficulty: "${d}", question: "In ${cleanCh}, the primary concept always applies universally.", correctAnswer: ${isTrue}, explanation: "${isTrue ? "This statement is correct based on the fundamental principles of " + cleanCh + "." : "This is a common misconception. The actual behavior depends on specific conditions and context."}" }`);
    } else if (t === "fill-blank") {
      qs.push(`      { id: "${qid}", type: "fill-blank", difficulty: "${d}", question: "In ${cleanCh}, the term that describes the core concept is ___.", correctAnswer: "abstraction", acceptableAnswers: ["core concept", "fundamental principle"], explanation: "This term is central to understanding ${cleanCh} and how it fits into the broader subject." }`);
    } else if (t === "code-order") {
      qs.push(`      { id: "${qid}", type: "code-order", difficulty: "${d}", question: "Arrange these ${cleanCh} steps in the correct order:", codeLines: ["// Step 1: Initialize", "// Step 2: Process", "// Step 3: Handle output", "// Step 4: Clean up"], correctOrder: [0, 1, 2, 3], explanation: "The correct order follows the standard workflow pattern for ${cleanCh}: initialize, process, output, cleanup." }`);
    } else if (t === "match-pairs") {
      qs.push(`      { id: "${qid}", type: "match-pairs", difficulty: "${d}", question: "Match each ${cleanCh} concept:", leftItems: ["Concept A", "Concept B", "Concept C"], rightItems: ["Description 1", "Description 2", "Description 3"], correctMatches: [[0, 0], [1, 1], [2, 2]], explanation: "Each concept pairs with its matching description based on the definitions covered in ${cleanCh}." }`);
    }
  }
  return qs;
}

const outDir = path.join(__dirname, "..", "src", "lib", "courses");

for (const [cid, course] of Object.entries(courses)) {
  const chs = course.chapters;
  const totalXP = chs.length * course.xp;
  let out = `import { Course } from "../types";\n\nexport const ${course.n}Course: Course = {\n  id: "${course.n}",\n  title: "${course.title}",\n  fullTitle: "${course.full}",\n  description: "${course.desc}",\n  icon: "${course.icon}",\n  color: "${course.color}",\n  difficulty: ${course.diff},\n  estimatedHours: ${course.hours},\n  totalXP: ${totalXP},\n  chapters: [\n`;

  for (let i = 0; i < chs.length; i++) {
    const ch = chs[i];
    const chId = `${course.n}-ch${i + 1}`;
    const clean = ch.replace(/'/g, "\\'");
    const questions = genQ(i, ch, chId);
    const lang = cid === "javascript" ? "javascript" : cid === "python" ? "python" : cid === "css" ? "css" : "html";

    out += `    {\n      id: "${chId}",\n      courseId: "${course.n}",\n      title: "${ch}",\n      order: ${i + 1},\n      xpReward: ${course.xp},\n      estimatedMinutes: 6,\n      prerequisites: [],\n      sections: [\n        { type: "text", content: "**${clean}** is an essential topic in ${course.title}. This chapter provides a thorough exploration of the core concepts, syntax, and practical applications. Understanding ${clean} is crucial because it forms the foundation for more advanced topics you will encounter later in the course." },\n        { type: "text", content: "The concepts behind ${clean} have evolved through years of industry practice. Modern approaches emphasize clarity, maintainability, and accessibility. By mastering the material in this chapter, you will develop the skills needed to write professional-grade code that follows current best practices." },\n        { type: "code", language: "${lang}", caption: "A practical example demonstrating ${clean}", content: \`<!-- ${clean} Example -->\\n<div class="container">\\n  <p>This demonstrates key concepts of ${clean}.</p>\\n</div>\` },\n        { type: "callout", style: "tip", content: "When learning ${clean}, focus on understanding the underlying principles rather than memorizing syntax. Practice implementing the concepts in small projects to build deep, lasting understanding." },\n        { type: "list", ordered: false, items: ["${clean} is fundamental to ${course.title}", "Understanding the concepts deeply enables you to build more complex systems", "Regular practice with hands-on exercises reinforces learning", "Refer to official documentation for comprehensive reference material", "Study real-world examples to see how professionals apply these concepts"] },\n        { type: "key-points", points: ["${clean} is a core building block in ${course.title}", "Master the fundamentals before moving to advanced topics", "Apply what you learn through practical exercises and projects", "Review and practice regularly to solidify your understanding"] }\n      ],\n      examPool: [\n${questions.join(",\n")}\n      ],\n      keyPoints: ["${clean} is fundamental to ${course.title}", "Master this concept before progressing", "Practice implementation regularly", "Refer to documentation for edge cases"]\n    },\n`;
  }

  out += `  ],\n};\n`;

  const courseDir = path.join(outDir, course.n);
  fs.mkdirSync(courseDir, { recursive: true });
  fs.writeFileSync(path.join(courseDir, "index.ts"), out);
  console.log(`✓ Generated ${course.n}: ${chs.length} chapters (${Math.round(out.length / 1024)} KB)`);
}

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

console.log("\n✅ All courses generated successfully!");
