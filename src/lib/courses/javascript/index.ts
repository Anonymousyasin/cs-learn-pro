// Auto-generated course data - do not edit directly
import { Course, Chapter, Section, ExamQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, CodeOrderQuestion, MatchPairsQuestion } from "../types";

const javascriptChapters: Chapter[] = [
  {
    id: "javascript-ch1",
    courseId: "javascript",
    title: "JS Introduction & History",
    order: 1,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Introduction & History\n\nJS Introduction & History is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Introduction & History effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Introduction & History is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Introduction & History — Variables and types:",
              "content": "// JS Introduction & History — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Introduction & History\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Introduction & History — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch1-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch1-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch1-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch1-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch1-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: [],
    keyPoints: ["JS Introduction & History is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch2",
    courseId: "javascript",
    title: "JS Where To (Script Tags, External Files)",
    order: 2,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Where To (Script Tags, External Files)\n\nJS Where To (Script Tags, External Files) is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Where To (Script Tags, External Files) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Where To (Script Tags, External Files) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Where To (Script Tags, External Files) — Variables and types:",
              "content": "// JS Where To (Script Tags, External Files) — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Where To (Script Tags, External Files)\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Where To (Script Tags, External Files) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch2-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch2-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch2-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch2-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch2-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch1"],
    keyPoints: ["JS Where To (Script Tags, External Files) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch3",
    courseId: "javascript",
    title: "JS Output (Console, Alert, Document)",
    order: 3,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Output (Console, Alert, Document)\n\nJS Output (Console, Alert, Document) is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Output (Console, Alert, Document) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Output (Console, Alert, Document) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Output (Console, Alert, Document) — Variables and types:",
              "content": "// JS Output (Console, Alert, Document) — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Output (Console, Alert, Document)\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Output (Console, Alert, Document) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch3-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch3-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch3-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch3-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch3-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch2"],
    keyPoints: ["JS Output (Console, Alert, Document) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch4",
    courseId: "javascript",
    title: "JS Syntax & Statements",
    order: 4,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Syntax & Statements\n\nJS Syntax & Statements is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Syntax & Statements effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Syntax & Statements is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Syntax & Statements — Variables and types:",
              "content": "// JS Syntax & Statements — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Syntax & Statements\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Syntax & Statements — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch4-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch4-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch4-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch4-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch4-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch3"],
    keyPoints: ["JS Syntax & Statements is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch5",
    courseId: "javascript",
    title: "JS Comments",
    order: 5,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Comments\n\nJS Comments is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Comments effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Comments is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Comments — Variables and types:",
              "content": "// JS Comments — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Comments\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Comments — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch5-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch5-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch5-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch5-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch5-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch4"],
    keyPoints: ["JS Comments is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch6",
    courseId: "javascript",
    title: "JS Variables (var, let, const)",
    order: 6,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Variables (var, let, const)\n\nJS Variables (var, let, const) is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Variables (var, let, const) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Variables (var, let, const) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Variables (var, let, const) — Variables and types:",
              "content": "// JS Variables (var, let, const) — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Variables (var, let, const)\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Variables (var, let, const) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch6-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch6-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch6-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch6-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch6-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["javascript-ch5"],
    keyPoints: ["JS Variables (var, let, const) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch7",
    courseId: "javascript",
    title: "JS Data Types (Primitives, Objects)",
    order: 7,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Data Types (Primitives, Objects)\n\nJS Data Types (Primitives, Objects) is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Data Types (Primitives, Objects) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Data Types (Primitives, Objects) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Data Types (Primitives, Objects) — Variables and types:",
              "content": "// JS Data Types (Primitives, Objects) — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Data Types (Primitives, Objects)\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Data Types (Primitives, Objects) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch7-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch7-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch7-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch7-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch7-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["javascript-ch6"],
    keyPoints: ["JS Data Types (Primitives, Objects) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch8",
    courseId: "javascript",
    title: "JS Type Coercion & Conversion",
    order: 8,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Type Coercion & Conversion\n\nJS Type Coercion & Conversion is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Type Coercion & Conversion effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Type Coercion & Conversion is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Type Coercion & Conversion — Variables and types:",
              "content": "// JS Type Coercion & Conversion — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Type Coercion & Conversion\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Type Coercion & Conversion — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch8-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch8-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch8-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch8-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch8-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["javascript-ch7"],
    keyPoints: ["JS Type Coercion & Conversion is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch9",
    courseId: "javascript",
    title: "JS Numbers & Number Methods",
    order: 9,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Numbers & Number Methods\n\nJS Numbers & Number Methods is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Numbers & Number Methods effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Numbers & Number Methods is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Numbers & Number Methods — Variables and types:",
              "content": "// JS Numbers & Number Methods — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Numbers & Number Methods\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Numbers & Number Methods — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch9-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch9-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch9-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch9-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch9-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["javascript-ch8"],
    keyPoints: ["JS Numbers & Number Methods is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch10",
    courseId: "javascript",
    title: "JS Strings & Template Literals",
    order: 10,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Strings & Template Literals\n\nJS Strings & Template Literals is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Strings & Template Literals effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Strings & Template Literals is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Strings & Template Literals — Variables and types:",
              "content": "// JS Strings & Template Literals — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Strings & Template Literals\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Strings & Template Literals — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch10-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch10-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch10-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch10-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch10-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["javascript-ch9"],
    keyPoints: ["JS Strings & Template Literals is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch11",
    courseId: "javascript",
    title: "JS String Methods (Slice, Replace, Split)",
    order: 11,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS String Methods (Slice, Replace, Split)\n\nJS String Methods (Slice, Replace, Split) is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS String Methods (Slice, Replace, Split) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS String Methods (Slice, Replace, Split) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS String Methods (Slice, Replace, Split) — Variables and types:",
              "content": "// JS String Methods (Slice, Replace, Split) — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS String Methods (Slice, Replace, Split)\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS String Methods (Slice, Replace, Split) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch11-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch11-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch11-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch11-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch11-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["javascript-ch10"],
    keyPoints: ["JS String Methods (Slice, Replace, Split) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch12",
    courseId: "javascript",
    title: "JS Boolean Logic & Truthy/Falsy",
    order: 12,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Boolean Logic & Truthy/Falsy\n\nJS Boolean Logic & Truthy/Falsy is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Boolean Logic & Truthy/Falsy effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Boolean Logic & Truthy/Falsy is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Boolean Logic & Truthy/Falsy — Variables and types:",
              "content": "// JS Boolean Logic & Truthy/Falsy — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Boolean Logic & Truthy/Falsy\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Boolean Logic & Truthy/Falsy — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch12-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch12-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch12-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch12-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch12-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["javascript-ch11"],
    keyPoints: ["JS Boolean Logic & Truthy/Falsy is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch13",
    courseId: "javascript",
    title: "JS Operators (Arithmetic, Assignment, Comparison)",
    order: 13,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Operators (Arithmetic, Assignment, Comparison)\n\nJS Operators (Arithmetic, Assignment, Comparison) is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Operators (Arithmetic, Assignment, Comparison) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Operators (Arithmetic, Assignment, Comparison) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Operators (Arithmetic, Assignment, Comparison) — Variables and types:",
              "content": "// JS Operators (Arithmetic, Assignment, Comparison) — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Operators (Arithmetic, Assignment, Comparison)\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Operators (Arithmetic, Assignment, Comparison) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch13-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch13-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch13-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch13-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch13-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["javascript-ch12"],
    keyPoints: ["JS Operators (Arithmetic, Assignment, Comparison) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch14",
    courseId: "javascript",
    title: "JS Operator Precedence & Associativity",
    order: 14,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Operator Precedence & Associativity\n\nJS Operator Precedence & Associativity is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Operator Precedence & Associativity effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Operator Precedence & Associativity is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Operator Precedence & Associativity — Variables and types:",
              "content": "// JS Operator Precedence & Associativity — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Operator Precedence & Associativity\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Operator Precedence & Associativity — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch14-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch14-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch14-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch14-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch14-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["javascript-ch13"],
    keyPoints: ["JS Operator Precedence & Associativity is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch15",
    courseId: "javascript",
    title: "JS If/Else & Conditional Statements",
    order: 15,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS If/Else & Conditional Statements\n\nJS If/Else & Conditional Statements is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS If/Else & Conditional Statements effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS If/Else & Conditional Statements is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS If/Else & Conditional Statements — Variables and types:",
              "content": "// JS If/Else & Conditional Statements — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS If/Else & Conditional Statements\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS If/Else & Conditional Statements — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch15-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch15-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch15-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch15-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch15-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["javascript-ch14"],
    keyPoints: ["JS If/Else & Conditional Statements is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch16",
    courseId: "javascript",
    title: "JS Switch Statement",
    order: 16,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Switch Statement\n\nJS Switch Statement is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Switch Statement effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Switch Statement is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Switch Statement — Variables and types:",
              "content": "// JS Switch Statement — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Switch Statement\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Switch Statement — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch16-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch16-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch16-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch16-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch16-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["javascript-ch15"],
    keyPoints: ["JS Switch Statement is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch17",
    courseId: "javascript",
    title: "JS Ternary Operator",
    order: 17,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Ternary Operator\n\nJS Ternary Operator is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Ternary Operator effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Ternary Operator is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Ternary Operator — Variables and types:",
              "content": "// JS Ternary Operator — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Ternary Operator\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Ternary Operator — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch17-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch17-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch17-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch17-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch17-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch16"],
    keyPoints: ["JS Ternary Operator is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch18",
    courseId: "javascript",
    title: "JS For Loop (Classic, For-In, For-Of)",
    order: 18,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS For Loop (Classic, For-In, For-Of)\n\nJS For Loop (Classic, For-In, For-Of) is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS For Loop (Classic, For-In, For-Of) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS For Loop (Classic, For-In, For-Of) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS For Loop (Classic, For-In, For-Of) — Control flow:",
              "content": "// JS For Loop (Classic, For-In, For-Of) — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS For Loop (Classic, For-In, For-Of)\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS For Loop (Classic, For-In, For-Of) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch18-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch18-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch18-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch18-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch18-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch17"],
    keyPoints: ["JS For Loop (Classic, For-In, For-Of) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch19",
    courseId: "javascript",
    title: "JS While & Do-While Loops",
    order: 19,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS While & Do-While Loops\n\nJS While & Do-While Loops is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS While & Do-While Loops effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS While & Do-While Loops is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS While & Do-While Loops — Control flow:",
              "content": "// JS While & Do-While Loops — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS While & Do-While Loops\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS While & Do-While Loops — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch19-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch19-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch19-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch19-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch19-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch18"],
    keyPoints: ["JS While & Do-While Loops is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch20",
    courseId: "javascript",
    title: "JS Break, Continue & Labels",
    order: 20,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Break, Continue & Labels\n\nJS Break, Continue & Labels is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Break, Continue & Labels effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Break, Continue & Labels is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Break, Continue & Labels — Control flow:",
              "content": "// JS Break, Continue & Labels — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Break, Continue & Labels\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Break, Continue & Labels — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch20-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch20-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch20-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch20-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch20-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch19"],
    keyPoints: ["JS Break, Continue & Labels is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch21",
    courseId: "javascript",
    title: "JS Functions: Declaration vs Expression",
    order: 21,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Functions: Declaration vs Expression\n\nJS Functions: Declaration vs Expression is how JavaScript functions work — from declarations to closures, scope to context. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Functions: Declaration vs Expression effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Functions: Declaration vs Expression is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Functions: Declaration vs Expression — Functions and closures:",
              "content": "// JS Functions: Declaration vs Expression — Functions in Depth\n\n// Arrow function — concise, no own 'this'\nconst double = (n) => n * 2;\n\n// Default parameters\nfunction greet(name = \"Guest\") {\n  return `Hello, ${name}!`;\n}\n\n// Rest parameters + arrow\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\n\n// Closure — function remembers its scope\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n\n// IIFE — immediately invoked\nconst config = (() => {\n  const secret = \"not exported\";\n  return { mode: \"production\" };\n})();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Functions: Declaration vs Expression\n\nHow JavaScript functions work — from declarations to closures, scope to context. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Functions: Declaration vs Expression is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch21-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch21-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch21-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch21-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch21-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["javascript-ch20"],
    keyPoints: ["JS Functions: Declaration vs Expression is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch22",
    courseId: "javascript",
    title: "JS Parameters: Default, Rest, Arguments",
    order: 22,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Parameters: Default, Rest, Arguments\n\nJS Parameters: Default, Rest, Arguments is how JavaScript functions work — from declarations to closures, scope to context. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Parameters: Default, Rest, Arguments effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Parameters: Default, Rest, Arguments is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Parameters: Default, Rest, Arguments — Functions and closures:",
              "content": "// JS Parameters: Default, Rest, Arguments — Functions in Depth\n\n// Arrow function — concise, no own 'this'\nconst double = (n) => n * 2;\n\n// Default parameters\nfunction greet(name = \"Guest\") {\n  return `Hello, ${name}!`;\n}\n\n// Rest parameters + arrow\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\n\n// Closure — function remembers its scope\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n\n// IIFE — immediately invoked\nconst config = (() => {\n  const secret = \"not exported\";\n  return { mode: \"production\" };\n})();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Parameters: Default, Rest, Arguments\n\nHow JavaScript functions work — from declarations to closures, scope to context. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Parameters: Default, Rest, Arguments is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch22-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch22-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch22-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch22-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch22-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["javascript-ch21"],
    keyPoints: ["JS Parameters: Default, Rest, Arguments is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch23",
    courseId: "javascript",
    title: "JS Return Values & Pure Functions",
    order: 23,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Return Values & Pure Functions\n\nJS Return Values & Pure Functions is how JavaScript functions work — from declarations to closures, scope to context. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Return Values & Pure Functions effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Return Values & Pure Functions is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Return Values & Pure Functions — Functions and closures:",
              "content": "// JS Return Values & Pure Functions — Functions in Depth\n\n// Arrow function — concise, no own 'this'\nconst double = (n) => n * 2;\n\n// Default parameters\nfunction greet(name = \"Guest\") {\n  return `Hello, ${name}!`;\n}\n\n// Rest parameters + arrow\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\n\n// Closure — function remembers its scope\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n\n// IIFE — immediately invoked\nconst config = (() => {\n  const secret = \"not exported\";\n  return { mode: \"production\" };\n})();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Return Values & Pure Functions\n\nHow JavaScript functions work — from declarations to closures, scope to context. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Return Values & Pure Functions is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch23-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch23-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch23-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch23-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch23-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["javascript-ch22"],
    keyPoints: ["JS Return Values & Pure Functions is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch24",
    courseId: "javascript",
    title: "JS Arrow Functions",
    order: 24,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Arrow Functions\n\nJS Arrow Functions is how JavaScript functions work — from declarations to closures, scope to context. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Arrow Functions effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Arrow Functions is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Arrow Functions — Functions and closures:",
              "content": "// JS Arrow Functions — Functions in Depth\n\n// Arrow function — concise, no own 'this'\nconst double = (n) => n * 2;\n\n// Default parameters\nfunction greet(name = \"Guest\") {\n  return `Hello, ${name}!`;\n}\n\n// Rest parameters + arrow\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\n\n// Closure — function remembers its scope\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n\n// IIFE — immediately invoked\nconst config = (() => {\n  const secret = \"not exported\";\n  return { mode: \"production\" };\n})();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Arrow Functions\n\nHow JavaScript functions work — from declarations to closures, scope to context. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Arrow Functions is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch24-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch24-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch24-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch24-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch24-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["javascript-ch23"],
    keyPoints: ["JS Arrow Functions is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch25",
    courseId: "javascript",
    title: "JS Scope: Global, Function, Block",
    order: 25,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Scope: Global, Function, Block\n\nJS Scope: Global, Function, Block is how JavaScript functions work — from declarations to closures, scope to context. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Scope: Global, Function, Block effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Scope: Global, Function, Block is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Scope: Global, Function, Block — Functions and closures:",
              "content": "// JS Scope: Global, Function, Block — Functions in Depth\n\n// Arrow function — concise, no own 'this'\nconst double = (n) => n * 2;\n\n// Default parameters\nfunction greet(name = \"Guest\") {\n  return `Hello, ${name}!`;\n}\n\n// Rest parameters + arrow\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\n\n// Closure — function remembers its scope\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n\n// IIFE — immediately invoked\nconst config = (() => {\n  const secret = \"not exported\";\n  return { mode: \"production\" };\n})();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Scope: Global, Function, Block\n\nHow JavaScript functions work — from declarations to closures, scope to context. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Scope: Global, Function, Block is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch25-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch25-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch25-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch25-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch25-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["javascript-ch24"],
    keyPoints: ["JS Scope: Global, Function, Block is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch26",
    courseId: "javascript",
    title: "JS Hoisting (var, let, const, function)",
    order: 26,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Hoisting (var, let, const, function)\n\nJS Hoisting (var, let, const, function) is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Hoisting (var, let, const, function) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Hoisting (var, let, const, function) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Hoisting (var, let, const, function) — Variables and types:",
              "content": "// JS Hoisting (var, let, const, function) — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Hoisting (var, let, const, function)\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Hoisting (var, let, const, function) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch26-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch26-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch26-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch26-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch26-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["javascript-ch25"],
    keyPoints: ["JS Hoisting (var, let, const, function) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch27",
    courseId: "javascript",
    title: "JS Closures & Lexical Scoping",
    order: 27,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Closures & Lexical Scoping\n\nJS Closures & Lexical Scoping is how JavaScript functions work — from declarations to closures, scope to context. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Closures & Lexical Scoping effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Closures & Lexical Scoping is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Closures & Lexical Scoping — Functions and closures:",
              "content": "// JS Closures & Lexical Scoping — Functions in Depth\n\n// Arrow function — concise, no own 'this'\nconst double = (n) => n * 2;\n\n// Default parameters\nfunction greet(name = \"Guest\") {\n  return `Hello, ${name}!`;\n}\n\n// Rest parameters + arrow\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\n\n// Closure — function remembers its scope\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n\n// IIFE — immediately invoked\nconst config = (() => {\n  const secret = \"not exported\";\n  return { mode: \"production\" };\n})();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Closures & Lexical Scoping\n\nHow JavaScript functions work — from declarations to closures, scope to context. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Closures & Lexical Scoping is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch27-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch27-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch27-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch27-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch27-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["javascript-ch26"],
    keyPoints: ["JS Closures & Lexical Scoping is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch28",
    courseId: "javascript",
    title: "JS Immediately Invoked Function Expressions (IIFE)",
    order: 28,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Immediately Invoked Function Expressions (IIFE)\n\nJS Immediately Invoked Function Expressions (IIFE) is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Immediately Invoked Function Expressions (IIFE) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Immediately Invoked Function Expressions (IIFE) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Immediately Invoked Function Expressions (IIFE) — Control flow:",
              "content": "// JS Immediately Invoked Function Expressions (IIFE) — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Immediately Invoked Function Expressions (IIFE)\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Immediately Invoked Function Expressions (IIFE) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch28-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch28-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch28-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch28-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch28-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["javascript-ch27"],
    keyPoints: ["JS Immediately Invoked Function Expressions (IIFE) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch29",
    courseId: "javascript",
    title: "JS Object Literals & Properties",
    order: 29,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Object Literals & Properties\n\nJS Object Literals & Properties is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Object Literals & Properties effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Object Literals & Properties is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Object Literals & Properties — Modern class syntax:",
              "content": "// JS Object Literals & Properties — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Object Literals & Properties\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Object Literals & Properties — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch29-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch29-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch29-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch29-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch29-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["javascript-ch28"],
    keyPoints: ["JS Object Literals & Properties is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch30",
    courseId: "javascript",
    title: "JS Object Methods & This",
    order: 30,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Object Methods & This\n\nJS Object Methods & This is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Object Methods & This effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Object Methods & This is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Object Methods & This — Modern class syntax:",
              "content": "// JS Object Methods & This — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Object Methods & This\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Object Methods & This — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch30-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch30-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch30-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch30-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch30-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["javascript-ch29"],
    keyPoints: ["JS Object Methods & This is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch31",
    courseId: "javascript",
    title: "JS Constructors & The New Keyword",
    order: 31,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Constructors & The New Keyword\n\nJS Constructors & The New Keyword is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Constructors & The New Keyword effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Constructors & The New Keyword is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Constructors & The New Keyword — Variables and types:",
              "content": "// JS Constructors & The New Keyword — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Constructors & The New Keyword\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Constructors & The New Keyword — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch31-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch31-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch31-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch31-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch31-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["javascript-ch30"],
    keyPoints: ["JS Constructors & The New Keyword is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch32",
    courseId: "javascript",
    title: "JS Prototypes & Prototypal Inheritance",
    order: 32,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Prototypes & Prototypal Inheritance\n\nJS Prototypes & Prototypal Inheritance is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Prototypes & Prototypal Inheritance effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Prototypes & Prototypal Inheritance is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Prototypes & Prototypal Inheritance — Variables and types:",
              "content": "// JS Prototypes & Prototypal Inheritance — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Prototypes & Prototypal Inheritance\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Prototypes & Prototypal Inheritance — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch32-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch32-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch32-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch32-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch32-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch31"],
    keyPoints: ["JS Prototypes & Prototypal Inheritance is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch33",
    courseId: "javascript",
    title: "JS Classes (ES6)",
    order: 33,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Classes (ES6)\n\nJS Classes (ES6) is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Classes (ES6) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Classes (ES6) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Classes (ES6) — Modern class syntax:",
              "content": "// JS Classes (ES6) — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Classes (ES6)\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Classes (ES6) — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch33-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch33-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch33-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch33-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch33-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch32"],
    keyPoints: ["JS Classes (ES6) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch34",
    courseId: "javascript",
    title: "JS Class Inheritance (Extends, Super)",
    order: 34,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Class Inheritance (Extends, Super)\n\nJS Class Inheritance (Extends, Super) is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Class Inheritance (Extends, Super) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Class Inheritance (Extends, Super) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Class Inheritance (Extends, Super) — Modern class syntax:",
              "content": "// JS Class Inheritance (Extends, Super) — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Class Inheritance (Extends, Super)\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Class Inheritance (Extends, Super) — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch34-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch34-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch34-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch34-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch34-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch33"],
    keyPoints: ["JS Class Inheritance (Extends, Super) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch35",
    courseId: "javascript",
    title: "JS Getters, Setters & Static Methods",
    order: 35,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Getters, Setters & Static Methods\n\nJS Getters, Setters & Static Methods is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Getters, Setters & Static Methods effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Getters, Setters & Static Methods is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Getters, Setters & Static Methods — Modern class syntax:",
              "content": "// JS Getters, Setters & Static Methods — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Getters, Setters & Static Methods\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Getters, Setters & Static Methods — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch35-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch35-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch35-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch35-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch35-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch34"],
    keyPoints: ["JS Getters, Setters & Static Methods is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch36",
    courseId: "javascript",
    title: "JS Private Fields & Methods",
    order: 36,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Private Fields & Methods\n\nJS Private Fields & Methods is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Private Fields & Methods effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Private Fields & Methods is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Private Fields & Methods — Modern class syntax:",
              "content": "// JS Private Fields & Methods — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Private Fields & Methods\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Private Fields & Methods — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch36-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch36-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch36-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch36-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch36-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["javascript-ch35"],
    keyPoints: ["JS Private Fields & Methods is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch37",
    courseId: "javascript",
    title: "JS Arrays: Creation & Access",
    order: 37,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Arrays: Creation & Access\n\nJS Arrays: Creation & Access is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Arrays: Creation & Access effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Arrays: Creation & Access is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Arrays: Creation & Access — Modern class syntax:",
              "content": "// JS Arrays: Creation & Access — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Arrays: Creation & Access\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Arrays: Creation & Access — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch37-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch37-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch37-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch37-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch37-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["javascript-ch36"],
    keyPoints: ["JS Arrays: Creation & Access is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch38",
    courseId: "javascript",
    title: "JS Array Methods: Push, Pop, Shift, Unshift, Splice",
    order: 38,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Array Methods: Push, Pop, Shift, Unshift, Splice\n\nJS Array Methods: Push, Pop, Shift, Unshift, Splice is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Array Methods: Push, Pop, Shift, Unshift, Splice effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Array Methods: Push, Pop, Shift, Unshift, Splice is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Array Methods: Push, Pop, Shift, Unshift, Splice — Control flow:",
              "content": "// JS Array Methods: Push, Pop, Shift, Unshift, Splice — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Array Methods: Push, Pop, Shift, Unshift, Splice\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Array Methods: Push, Pop, Shift, Unshift, Splice — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch38-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch38-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch38-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch38-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch38-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["javascript-ch37"],
    keyPoints: ["JS Array Methods: Push, Pop, Shift, Unshift, Splice is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch39",
    courseId: "javascript",
    title: "JS Array Methods: Map, Filter, Reduce, ForEach",
    order: 39,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Array Methods: Map, Filter, Reduce, ForEach\n\nJS Array Methods: Map, Filter, Reduce, ForEach is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Array Methods: Map, Filter, Reduce, ForEach effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Array Methods: Map, Filter, Reduce, ForEach is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Array Methods: Map, Filter, Reduce, ForEach — Control flow:",
              "content": "// JS Array Methods: Map, Filter, Reduce, ForEach — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Array Methods: Map, Filter, Reduce, ForEach\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Array Methods: Map, Filter, Reduce, ForEach — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch39-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch39-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch39-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch39-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch39-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["javascript-ch38"],
    keyPoints: ["JS Array Methods: Map, Filter, Reduce, ForEach is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch40",
    courseId: "javascript",
    title: "JS Array Search: IndexOf, Find, Includes",
    order: 40,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Array Search: IndexOf, Find, Includes\n\nJS Array Search: IndexOf, Find, Includes is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Array Search: IndexOf, Find, Includes effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Array Search: IndexOf, Find, Includes is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Array Search: IndexOf, Find, Includes — Modern class syntax:",
              "content": "// JS Array Search: IndexOf, Find, Includes — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Array Search: IndexOf, Find, Includes\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Array Search: IndexOf, Find, Includes — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch40-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch40-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch40-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch40-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch40-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["javascript-ch39"],
    keyPoints: ["JS Array Search: IndexOf, Find, Includes is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch41",
    courseId: "javascript",
    title: "JS Array Sort: Custom Comparators & Stability",
    order: 41,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Array Sort: Custom Comparators & Stability\n\nJS Array Sort: Custom Comparators & Stability is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Array Sort: Custom Comparators & Stability effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Array Sort: Custom Comparators & Stability is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Array Sort: Custom Comparators & Stability — Modern class syntax:",
              "content": "// JS Array Sort: Custom Comparators & Stability — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Array Sort: Custom Comparators & Stability\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Array Sort: Custom Comparators & Stability — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch41-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch41-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch41-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch41-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch41-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["javascript-ch40"],
    keyPoints: ["JS Array Sort: Custom Comparators & Stability is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch42",
    courseId: "javascript",
    title: "JS Sets, Maps, WeakMaps & WeakSets",
    order: 42,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Sets, Maps, WeakMaps & WeakSets\n\nJS Sets, Maps, WeakMaps & WeakSets is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Sets, Maps, WeakMaps & WeakSets effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Sets, Maps, WeakMaps & WeakSets is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Sets, Maps, WeakMaps & WeakSets — Modern class syntax:",
              "content": "// JS Sets, Maps, WeakMaps & WeakSets — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Sets, Maps, WeakMaps & WeakSets\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Sets, Maps, WeakMaps & WeakSets — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch42-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch42-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch42-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch42-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch42-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["javascript-ch41"],
    keyPoints: ["JS Sets, Maps, WeakMaps & WeakSets is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch43",
    courseId: "javascript",
    title: "JS Destructuring: Arrays & Objects",
    order: 43,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Destructuring: Arrays & Objects\n\nJS Destructuring: Arrays & Objects is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Destructuring: Arrays & Objects effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Destructuring: Arrays & Objects is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Destructuring: Arrays & Objects — Modern class syntax:",
              "content": "// JS Destructuring: Arrays & Objects — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Destructuring: Arrays & Objects\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Destructuring: Arrays & Objects — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch43-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch43-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch43-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch43-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch43-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["javascript-ch42"],
    keyPoints: ["JS Destructuring: Arrays & Objects is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch44",
    courseId: "javascript",
    title: "JS Spread & Rest Operators",
    order: 44,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Spread & Rest Operators\n\nJS Spread & Rest Operators is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Spread & Rest Operators effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Spread & Rest Operators is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Spread & Rest Operators — Variables and types:",
              "content": "// JS Spread & Rest Operators — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Spread & Rest Operators\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Spread & Rest Operators — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch44-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch44-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch44-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch44-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch44-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["javascript-ch43"],
    keyPoints: ["JS Spread & Rest Operators is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch45",
    courseId: "javascript",
    title: "JS Modules: Export & Import",
    order: 45,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Modules: Export & Import\n\nJS Modules: Export & Import is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Modules: Export & Import effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Modules: Export & Import is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Modules: Export & Import — Example:",
              "content": "// JS Modules: Export & Import — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Modules: Export & Import\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Modules: Export & Import — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch45-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch45-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch45-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch45-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch45-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["javascript-ch44"],
    keyPoints: ["JS Modules: Export & Import is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch46",
    courseId: "javascript",
    title: "JS Dynamic Imports & Lazy Loading",
    order: 46,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Dynamic Imports & Lazy Loading\n\nJS Dynamic Imports & Lazy Loading is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Dynamic Imports & Lazy Loading effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Dynamic Imports & Lazy Loading is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Dynamic Imports & Lazy Loading — Example:",
              "content": "// JS Dynamic Imports & Lazy Loading — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Dynamic Imports & Lazy Loading\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Dynamic Imports & Lazy Loading — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch46-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch46-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch46-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch46-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch46-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["javascript-ch45"],
    keyPoints: ["JS Dynamic Imports & Lazy Loading is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch47",
    courseId: "javascript",
    title: "JS Error Handling: Try, Catch, Finally",
    order: 47,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Error Handling: Try, Catch, Finally\n\nJS Error Handling: Try, Catch, Finally is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Error Handling: Try, Catch, Finally effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Error Handling: Try, Catch, Finally is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Error Handling: Try, Catch, Finally — Example:",
              "content": "// JS Error Handling: Try, Catch, Finally — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Error Handling: Try, Catch, Finally\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Error Handling: Try, Catch, Finally — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch47-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch47-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch47-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch47-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch47-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch46"],
    keyPoints: ["JS Error Handling: Try, Catch, Finally is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch48",
    courseId: "javascript",
    title: "JS Custom Errors & Stack Traces",
    order: 48,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Custom Errors & Stack Traces\n\nJS Custom Errors & Stack Traces is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Custom Errors & Stack Traces effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Custom Errors & Stack Traces is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Custom Errors & Stack Traces — Example:",
              "content": "// JS Custom Errors & Stack Traces — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Custom Errors & Stack Traces\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Custom Errors & Stack Traces — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch48-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch48-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch48-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch48-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch48-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch47"],
    keyPoints: ["JS Custom Errors & Stack Traces is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch49",
    courseId: "javascript",
    title: "JS This Keyword: Binding & Context",
    order: 49,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS This Keyword: Binding & Context\n\nJS This Keyword: Binding & Context is how JavaScript functions work — from declarations to closures, scope to context. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS This Keyword: Binding & Context effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS This Keyword: Binding & Context is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS This Keyword: Binding & Context — Functions and closures:",
              "content": "// JS This Keyword: Binding & Context — Functions in Depth\n\n// Arrow function — concise, no own 'this'\nconst double = (n) => n * 2;\n\n// Default parameters\nfunction greet(name = \"Guest\") {\n  return `Hello, ${name}!`;\n}\n\n// Rest parameters + arrow\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\n\n// Closure — function remembers its scope\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n\n// IIFE — immediately invoked\nconst config = (() => {\n  const secret = \"not exported\";\n  return { mode: \"production\" };\n})();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS This Keyword: Binding & Context\n\nHow JavaScript functions work — from declarations to closures, scope to context. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS This Keyword: Binding & Context is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch49-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch49-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch49-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch49-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch49-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch48"],
    keyPoints: ["JS This Keyword: Binding & Context is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch50",
    courseId: "javascript",
    title: "JS Bind, Call & Apply",
    order: 50,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Bind, Call & Apply\n\nJS Bind, Call & Apply is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Bind, Call & Apply effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Bind, Call & Apply is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Bind, Call & Apply — Example:",
              "content": "// JS Bind, Call & Apply — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Bind, Call & Apply\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Bind, Call & Apply — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch50-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch50-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch50-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch50-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch50-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch49"],
    keyPoints: ["JS Bind, Call & Apply is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch51",
    courseId: "javascript",
    title: "JS JSON: Parse, Stringify, Serialization",
    order: 51,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS JSON: Parse, Stringify, Serialization\n\nJS JSON: Parse, Stringify, Serialization is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS JSON: Parse, Stringify, Serialization effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS JSON: Parse, Stringify, Serialization is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS JSON: Parse, Stringify, Serialization — Variables and types:",
              "content": "// JS JSON: Parse, Stringify, Serialization — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS JSON: Parse, Stringify, Serialization\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS JSON: Parse, Stringify, Serialization — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch51-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch51-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch51-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch51-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch51-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["javascript-ch50"],
    keyPoints: ["JS JSON: Parse, Stringify, Serialization is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch52",
    courseId: "javascript",
    title: "JS Symbols & Well-Known Symbols",
    order: 52,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Symbols & Well-Known Symbols\n\nJS Symbols & Well-Known Symbols is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Symbols & Well-Known Symbols effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Symbols & Well-Known Symbols is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Symbols & Well-Known Symbols — Example:",
              "content": "// JS Symbols & Well-Known Symbols — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Symbols & Well-Known Symbols\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Symbols & Well-Known Symbols — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch52-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch52-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch52-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch52-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch52-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["javascript-ch51"],
    keyPoints: ["JS Symbols & Well-Known Symbols is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch53",
    courseId: "javascript",
    title: "JS Iterables & Iterators",
    order: 53,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Iterables & Iterators\n\nJS Iterables & Iterators is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Iterables & Iterators effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Iterables & Iterators is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Iterables & Iterators — Example:",
              "content": "// JS Iterables & Iterators — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Iterables & Iterators\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Iterables & Iterators — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch53-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch53-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch53-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch53-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch53-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["javascript-ch52"],
    keyPoints: ["JS Iterables & Iterators is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch54",
    courseId: "javascript",
    title: "JS Generators (Yield, Next, Delegation)",
    order: 54,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Generators (Yield, Next, Delegation)\n\nJS Generators (Yield, Next, Delegation) is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Generators (Yield, Next, Delegation) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Generators (Yield, Next, Delegation) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Generators (Yield, Next, Delegation) — Example:",
              "content": "// JS Generators (Yield, Next, Delegation) — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Generators (Yield, Next, Delegation)\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Generators (Yield, Next, Delegation) — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch54-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch54-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch54-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch54-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch54-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["javascript-ch53"],
    keyPoints: ["JS Generators (Yield, Next, Delegation) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch55",
    courseId: "javascript",
    title: "JS Proxies & Reflect API",
    order: 55,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Proxies & Reflect API\n\nJS Proxies & Reflect API is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Proxies & Reflect API effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Proxies & Reflect API is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Proxies & Reflect API — Example:",
              "content": "// JS Proxies & Reflect API — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Proxies & Reflect API\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Proxies & Reflect API — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch55-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch55-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch55-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch55-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch55-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["javascript-ch54"],
    keyPoints: ["JS Proxies & Reflect API is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch56",
    courseId: "javascript",
    title: "JS Temporal API (Dates & Times)",
    order: 56,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Temporal API (Dates & Times)\n\nJS Temporal API (Dates & Times) is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Temporal API (Dates & Times) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Temporal API (Dates & Times) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Temporal API (Dates & Times) — Example:",
              "content": "// JS Temporal API (Dates & Times) — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Temporal API (Dates & Times)\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Temporal API (Dates & Times) — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch56-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch56-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch56-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch56-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch56-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["javascript-ch55"],
    keyPoints: ["JS Temporal API (Dates & Times) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch57",
    courseId: "javascript",
    title: "JS Callbacks & Callback Hell",
    order: 57,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Callbacks & Callback Hell\n\nJS Callbacks & Callback Hell is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Callbacks & Callback Hell effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Callbacks & Callback Hell is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Callbacks & Callback Hell — Example:",
              "content": "// JS Callbacks & Callback Hell — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Callbacks & Callback Hell\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Callbacks & Callback Hell — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch57-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch57-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch57-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch57-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch57-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["javascript-ch56"],
    keyPoints: ["JS Callbacks & Callback Hell is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch58",
    courseId: "javascript",
    title: "JS Promises: States & Chaining",
    order: 58,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Promises: States & Chaining\n\nJS Promises: States & Chaining is asynchronous JavaScript — callbacks, promises, async/await, and the event loop. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Promises: States & Chaining effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Promises: States & Chaining is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Promises: States & Chaining — Async/await pattern:",
              "content": "// JS Promises: States & Chaining — Modern Async Patterns\n\n// Sequential with error handling\nasync function fetchUserData(userId) {\n  try {\n    const response = await fetch(`/api/users/${userId}`);\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    return await response.json();\n  } catch (error) {\n    console.error(\"Fetch failed:\", error);\n    throw new Error(\"USER_FETCH_FAILED\");\n  }\n}\n\n// Parallel with Promise.all\nasync function loadDashboard(userId) {\n  const [user, posts, notifications] = await Promise.all([\n    fetchUserData(userId),\n    fetch(`/api/users/${userId}/posts`).then(r => r.json()),\n    fetch(`/api/users/${userId}/notifications`).then(r => r.json()),\n  ]);\n  return { user, posts, notifications };\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Promises: States & Chaining\n\nAsynchronous JavaScript — callbacks, promises, async/await, and the event loop. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always handle promise rejections. Unhandled rejections crash Node.js processes and create silent failures in browsers. Use try/catch around await, and add a global unhandledrejection handler as a safety net."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Promises: States & Chaining is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting that .forEach() does NOT work with async functions — it fires all callbacks concurrently without waiting. Use a for...of loop with await for sequential async execution, or Promise.all() for parallel."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Async JavaScript** — Official async/await and Promise guide\n2. **Jake Archibald: In The Loop** — Definitive talk on the event loop\n3. **JavaScript.info: Async** — Comprehensive async tutorials\n4. **Node.js Event Loop Guide** — Official Node.js event loop documentation\n5. **Promisees (Nicolas Bevacqua)** — Interactive Promise visualization tool"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch58-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is a Promise in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "An object representing the eventual completion/failure of an async operation"
            },
            {
              "id": "b",
              "text": "A function that runs synchronously"
            },
            {
              "id": "c",
              "text": "A callback queue management system"
            },
            {
              "id": "d",
              "text": "A method for error handling"
            }
          ],
          "correctAnswer": "a",
          "explanation": "A Promise is an object representing the eventual result of an asynchronous operation. It has three states: pending, fulfilled, rejected."
        },
        {
          "id": "javascript-ch58-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "await can only be used inside functions marked with async.",
          "correctAnswer": true,
          "explanation": "The await keyword is only valid inside async functions. Top-level await is supported in ES modules."
        },
        {
          "id": "javascript-ch58-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does Promise.all() do when one of its promises rejects?",
          "options": [
            {
              "id": "a",
              "text": "It rejects immediately with that error"
            },
            {
              "id": "b",
              "text": "It waits for all promises to settle, then reports all errors"
            },
            {
              "id": "c",
              "text": "It ignores the rejected promise and continues"
            },
            {
              "id": "d",
              "text": "It retries the rejected promise automatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Promise.all() fails fast — it rejects immediately when any input promise rejects. Use Promise.allSettled() to wait for all regardless of outcome."
        },
        {
          "id": "javascript-ch58-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch58-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["javascript-ch57"],
    keyPoints: ["JS Promises: States & Chaining is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch59",
    courseId: "javascript",
    title: "JS Promise Combinators (All, Race, AllSettled, Any)",
    order: 59,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Promise Combinators (All, Race, AllSettled, Any)\n\nJS Promise Combinators (All, Race, AllSettled, Any) is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Promise Combinators (All, Race, AllSettled, Any) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Promise Combinators (All, Race, AllSettled, Any) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Promise Combinators (All, Race, AllSettled, Any) — Modern class syntax:",
              "content": "// JS Promise Combinators (All, Race, AllSettled, Any) — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Promise Combinators (All, Race, AllSettled, Any)\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Promise Combinators (All, Race, AllSettled, Any) — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch59-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch59-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch59-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch59-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch59-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["javascript-ch58"],
    keyPoints: ["JS Promise Combinators (All, Race, AllSettled, Any) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch60",
    courseId: "javascript",
    title: "JS Async/Await: Syntax & Error Handling",
    order: 60,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Async/Await: Syntax & Error Handling\n\nJS Async/Await: Syntax & Error Handling is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Async/Await: Syntax & Error Handling effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Async/Await: Syntax & Error Handling is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Async/Await: Syntax & Error Handling — Variables and types:",
              "content": "// JS Async/Await: Syntax & Error Handling — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Async/Await: Syntax & Error Handling\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Async/Await: Syntax & Error Handling — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch60-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch60-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch60-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch60-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch60-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["javascript-ch59"],
    keyPoints: ["JS Async/Await: Syntax & Error Handling is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch61",
    courseId: "javascript",
    title: "JS The Event Loop (Call Stack, Task Queue)",
    order: 61,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS The Event Loop (Call Stack, Task Queue)\n\nJS The Event Loop (Call Stack, Task Queue) is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS The Event Loop (Call Stack, Task Queue) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS The Event Loop (Call Stack, Task Queue) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS The Event Loop (Call Stack, Task Queue) — Control flow:",
              "content": "// JS The Event Loop (Call Stack, Task Queue) — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS The Event Loop (Call Stack, Task Queue)\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS The Event Loop (Call Stack, Task Queue) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch61-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch61-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch61-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch61-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch61-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["javascript-ch60"],
    keyPoints: ["JS The Event Loop (Call Stack, Task Queue) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch62",
    courseId: "javascript",
    title: "JS Microtasks vs Macrotasks",
    order: 62,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Microtasks vs Macrotasks\n\nJS Microtasks vs Macrotasks is asynchronous JavaScript — callbacks, promises, async/await, and the event loop. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Microtasks vs Macrotasks effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Microtasks vs Macrotasks is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Microtasks vs Macrotasks — Async/await pattern:",
              "content": "// JS Microtasks vs Macrotasks — Modern Async Patterns\n\n// Sequential with error handling\nasync function fetchUserData(userId) {\n  try {\n    const response = await fetch(`/api/users/${userId}`);\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    return await response.json();\n  } catch (error) {\n    console.error(\"Fetch failed:\", error);\n    throw new Error(\"USER_FETCH_FAILED\");\n  }\n}\n\n// Parallel with Promise.all\nasync function loadDashboard(userId) {\n  const [user, posts, notifications] = await Promise.all([\n    fetchUserData(userId),\n    fetch(`/api/users/${userId}/posts`).then(r => r.json()),\n    fetch(`/api/users/${userId}/notifications`).then(r => r.json()),\n  ]);\n  return { user, posts, notifications };\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Microtasks vs Macrotasks\n\nAsynchronous JavaScript — callbacks, promises, async/await, and the event loop. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always handle promise rejections. Unhandled rejections crash Node.js processes and create silent failures in browsers. Use try/catch around await, and add a global unhandledrejection handler as a safety net."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Microtasks vs Macrotasks is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting that .forEach() does NOT work with async functions — it fires all callbacks concurrently without waiting. Use a for...of loop with await for sequential async execution, or Promise.all() for parallel."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Async JavaScript** — Official async/await and Promise guide\n2. **Jake Archibald: In The Loop** — Definitive talk on the event loop\n3. **JavaScript.info: Async** — Comprehensive async tutorials\n4. **Node.js Event Loop Guide** — Official Node.js event loop documentation\n5. **Promisees (Nicolas Bevacqua)** — Interactive Promise visualization tool"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch62-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is a Promise in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "An object representing the eventual completion/failure of an async operation"
            },
            {
              "id": "b",
              "text": "A function that runs synchronously"
            },
            {
              "id": "c",
              "text": "A callback queue management system"
            },
            {
              "id": "d",
              "text": "A method for error handling"
            }
          ],
          "correctAnswer": "a",
          "explanation": "A Promise is an object representing the eventual result of an asynchronous operation. It has three states: pending, fulfilled, rejected."
        },
        {
          "id": "javascript-ch62-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "await can only be used inside functions marked with async.",
          "correctAnswer": true,
          "explanation": "The await keyword is only valid inside async functions. Top-level await is supported in ES modules."
        },
        {
          "id": "javascript-ch62-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does Promise.all() do when one of its promises rejects?",
          "options": [
            {
              "id": "a",
              "text": "It rejects immediately with that error"
            },
            {
              "id": "b",
              "text": "It waits for all promises to settle, then reports all errors"
            },
            {
              "id": "c",
              "text": "It ignores the rejected promise and continues"
            },
            {
              "id": "d",
              "text": "It retries the rejected promise automatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Promise.all() fails fast — it rejects immediately when any input promise rejects. Use Promise.allSettled() to wait for all regardless of outcome."
        },
        {
          "id": "javascript-ch62-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch62-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch61"],
    keyPoints: ["JS Microtasks vs Macrotasks is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch63",
    courseId: "javascript",
    title: "JS Timing: setTimeout, setInterval, requestAnimationFrame",
    order: 63,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Timing: setTimeout, setInterval, requestAnimationFrame\n\nJS Timing: setTimeout, setInterval, requestAnimationFrame is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Timing: setTimeout, setInterval, requestAnimationFrame effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Timing: setTimeout, setInterval, requestAnimationFrame is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Timing: setTimeout, setInterval, requestAnimationFrame — Modern class syntax:",
              "content": "// JS Timing: setTimeout, setInterval, requestAnimationFrame — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Timing: setTimeout, setInterval, requestAnimationFrame\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Timing: setTimeout, setInterval, requestAnimationFrame — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch63-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch63-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch63-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch63-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch63-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch62"],
    keyPoints: ["JS Timing: setTimeout, setInterval, requestAnimationFrame is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch64",
    courseId: "javascript",
    title: "JS Timers & Closures (The Loop Problem)",
    order: 64,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Timers & Closures (The Loop Problem)\n\nJS Timers & Closures (The Loop Problem) is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Timers & Closures (The Loop Problem) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Timers & Closures (The Loop Problem) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Timers & Closures (The Loop Problem) — Control flow:",
              "content": "// JS Timers & Closures (The Loop Problem) — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Timers & Closures (The Loop Problem)\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Timers & Closures (The Loop Problem) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch64-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch64-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch64-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch64-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch64-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch63"],
    keyPoints: ["JS Timers & Closures (The Loop Problem) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch65",
    courseId: "javascript",
    title: "JS Web Workers & Message Passing",
    order: 65,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Web Workers & Message Passing\n\nJS Web Workers & Message Passing is asynchronous JavaScript — callbacks, promises, async/await, and the event loop. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Web Workers & Message Passing effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Web Workers & Message Passing is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Web Workers & Message Passing — Async/await pattern:",
              "content": "// JS Web Workers & Message Passing — Modern Async Patterns\n\n// Sequential with error handling\nasync function fetchUserData(userId) {\n  try {\n    const response = await fetch(`/api/users/${userId}`);\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    return await response.json();\n  } catch (error) {\n    console.error(\"Fetch failed:\", error);\n    throw new Error(\"USER_FETCH_FAILED\");\n  }\n}\n\n// Parallel with Promise.all\nasync function loadDashboard(userId) {\n  const [user, posts, notifications] = await Promise.all([\n    fetchUserData(userId),\n    fetch(`/api/users/${userId}/posts`).then(r => r.json()),\n    fetch(`/api/users/${userId}/notifications`).then(r => r.json()),\n  ]);\n  return { user, posts, notifications };\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Web Workers & Message Passing\n\nAsynchronous JavaScript — callbacks, promises, async/await, and the event loop. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always handle promise rejections. Unhandled rejections crash Node.js processes and create silent failures in browsers. Use try/catch around await, and add a global unhandledrejection handler as a safety net."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Web Workers & Message Passing is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting that .forEach() does NOT work with async functions — it fires all callbacks concurrently without waiting. Use a for...of loop with await for sequential async execution, or Promise.all() for parallel."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Async JavaScript** — Official async/await and Promise guide\n2. **Jake Archibald: In The Loop** — Definitive talk on the event loop\n3. **JavaScript.info: Async** — Comprehensive async tutorials\n4. **Node.js Event Loop Guide** — Official Node.js event loop documentation\n5. **Promisees (Nicolas Bevacqua)** — Interactive Promise visualization tool"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch65-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is a Promise in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "An object representing the eventual completion/failure of an async operation"
            },
            {
              "id": "b",
              "text": "A function that runs synchronously"
            },
            {
              "id": "c",
              "text": "A callback queue management system"
            },
            {
              "id": "d",
              "text": "A method for error handling"
            }
          ],
          "correctAnswer": "a",
          "explanation": "A Promise is an object representing the eventual result of an asynchronous operation. It has three states: pending, fulfilled, rejected."
        },
        {
          "id": "javascript-ch65-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "await can only be used inside functions marked with async.",
          "correctAnswer": true,
          "explanation": "The await keyword is only valid inside async functions. Top-level await is supported in ES modules."
        },
        {
          "id": "javascript-ch65-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does Promise.all() do when one of its promises rejects?",
          "options": [
            {
              "id": "a",
              "text": "It rejects immediately with that error"
            },
            {
              "id": "b",
              "text": "It waits for all promises to settle, then reports all errors"
            },
            {
              "id": "c",
              "text": "It ignores the rejected promise and continues"
            },
            {
              "id": "d",
              "text": "It retries the rejected promise automatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Promise.all() fails fast — it rejects immediately when any input promise rejects. Use Promise.allSettled() to wait for all regardless of outcome."
        },
        {
          "id": "javascript-ch65-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch65-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch64"],
    keyPoints: ["JS Web Workers & Message Passing is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch66",
    courseId: "javascript",
    title: "JS Service Workers: Lifecycle & Caching",
    order: 66,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Service Workers: Lifecycle & Caching\n\nJS Service Workers: Lifecycle & Caching is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Service Workers: Lifecycle & Caching effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Service Workers: Lifecycle & Caching is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Service Workers: Lifecycle & Caching — Control flow:",
              "content": "// JS Service Workers: Lifecycle & Caching — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Service Workers: Lifecycle & Caching\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Service Workers: Lifecycle & Caching — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch66-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch66-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch66-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch66-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch66-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["javascript-ch65"],
    keyPoints: ["JS Service Workers: Lifecycle & Caching is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch67",
    courseId: "javascript",
    title: "JS Service Workers: Push Notifications & Sync",
    order: 67,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Service Workers: Push Notifications & Sync\n\nJS Service Workers: Push Notifications & Sync is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Service Workers: Push Notifications & Sync effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Service Workers: Push Notifications & Sync is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Service Workers: Push Notifications & Sync — Control flow:",
              "content": "// JS Service Workers: Push Notifications & Sync — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Service Workers: Push Notifications & Sync\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Service Workers: Push Notifications & Sync — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch67-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch67-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch67-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch67-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch67-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["javascript-ch66"],
    keyPoints: ["JS Service Workers: Push Notifications & Sync is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch68",
    courseId: "javascript",
    title: "JS IndexedDB: Client-Side Database",
    order: 68,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS IndexedDB: Client-Side Database\n\nJS IndexedDB: Client-Side Database is asynchronous JavaScript — callbacks, promises, async/await, and the event loop. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS IndexedDB: Client-Side Database effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS IndexedDB: Client-Side Database is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS IndexedDB: Client-Side Database — Async/await pattern:",
              "content": "// JS IndexedDB: Client-Side Database — Modern Async Patterns\n\n// Sequential with error handling\nasync function fetchUserData(userId) {\n  try {\n    const response = await fetch(`/api/users/${userId}`);\n    if (!response.ok) throw new Error(`HTTP ${response.status}`);\n    return await response.json();\n  } catch (error) {\n    console.error(\"Fetch failed:\", error);\n    throw new Error(\"USER_FETCH_FAILED\");\n  }\n}\n\n// Parallel with Promise.all\nasync function loadDashboard(userId) {\n  const [user, posts, notifications] = await Promise.all([\n    fetchUserData(userId),\n    fetch(`/api/users/${userId}/posts`).then(r => r.json()),\n    fetch(`/api/users/${userId}/notifications`).then(r => r.json()),\n  ]);\n  return { user, posts, notifications };\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS IndexedDB: Client-Side Database\n\nAsynchronous JavaScript — callbacks, promises, async/await, and the event loop. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always handle promise rejections. Unhandled rejections crash Node.js processes and create silent failures in browsers. Use try/catch around await, and add a global unhandledrejection handler as a safety net."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS IndexedDB: Client-Side Database is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting that .forEach() does NOT work with async functions — it fires all callbacks concurrently without waiting. Use a for...of loop with await for sequential async execution, or Promise.all() for parallel."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Async JavaScript** — Official async/await and Promise guide\n2. **Jake Archibald: In The Loop** — Definitive talk on the event loop\n3. **JavaScript.info: Async** — Comprehensive async tutorials\n4. **Node.js Event Loop Guide** — Official Node.js event loop documentation\n5. **Promisees (Nicolas Bevacqua)** — Interactive Promise visualization tool"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch68-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is a Promise in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "An object representing the eventual completion/failure of an async operation"
            },
            {
              "id": "b",
              "text": "A function that runs synchronously"
            },
            {
              "id": "c",
              "text": "A callback queue management system"
            },
            {
              "id": "d",
              "text": "A method for error handling"
            }
          ],
          "correctAnswer": "a",
          "explanation": "A Promise is an object representing the eventual result of an asynchronous operation. It has three states: pending, fulfilled, rejected."
        },
        {
          "id": "javascript-ch68-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "await can only be used inside functions marked with async.",
          "correctAnswer": true,
          "explanation": "The await keyword is only valid inside async functions. Top-level await is supported in ES modules."
        },
        {
          "id": "javascript-ch68-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does Promise.all() do when one of its promises rejects?",
          "options": [
            {
              "id": "a",
              "text": "It rejects immediately with that error"
            },
            {
              "id": "b",
              "text": "It waits for all promises to settle, then reports all errors"
            },
            {
              "id": "c",
              "text": "It ignores the rejected promise and continues"
            },
            {
              "id": "d",
              "text": "It retries the rejected promise automatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Promise.all() fails fast — it rejects immediately when any input promise rejects. Use Promise.allSettled() to wait for all regardless of outcome."
        },
        {
          "id": "javascript-ch68-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch68-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["javascript-ch67"],
    keyPoints: ["JS IndexedDB: Client-Side Database is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch69",
    courseId: "javascript",
    title: "JS DOM: Document Object Model Overview",
    order: 69,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS DOM: Document Object Model Overview\n\nJS DOM: Document Object Model Overview is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS DOM: Document Object Model Overview effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS DOM: Document Object Model Overview is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS DOM: Document Object Model Overview — Modern class syntax:",
              "content": "// JS DOM: Document Object Model Overview — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS DOM: Document Object Model Overview\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS DOM: Document Object Model Overview — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch69-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch69-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch69-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch69-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch69-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["javascript-ch68"],
    keyPoints: ["JS DOM: Document Object Model Overview is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch70",
    courseId: "javascript",
    title: "JS DOM Selectors (QuerySelector, GetElementById)",
    order: 70,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS DOM Selectors (QuerySelector, GetElementById)\n\nJS DOM Selectors (QuerySelector, GetElementById) is how JavaScript interacts with the browser's Document Object Model. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS DOM Selectors (QuerySelector, GetElementById) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS DOM Selectors (QuerySelector, GetElementById) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS DOM Selectors (QuerySelector, GetElementById) — DOM and browser APIs:",
              "content": "// JS DOM Selectors (QuerySelector, GetElementById) — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS DOM Selectors (QuerySelector, GetElementById)\n\nHow JavaScript interacts with the browser's Document Object Model. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS DOM Selectors (QuerySelector, GetElementById) is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch70-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch70-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch70-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch70-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch70-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["javascript-ch69"],
    keyPoints: ["JS DOM Selectors (QuerySelector, GetElementById) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch71",
    courseId: "javascript",
    title: "JS DOM Manipulation (Create, Append, Remove)",
    order: 71,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS DOM Manipulation (Create, Append, Remove)\n\nJS DOM Manipulation (Create, Append, Remove) is how JavaScript interacts with the browser's Document Object Model. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS DOM Manipulation (Create, Append, Remove) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS DOM Manipulation (Create, Append, Remove) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS DOM Manipulation (Create, Append, Remove) — DOM and browser APIs:",
              "content": "// JS DOM Manipulation (Create, Append, Remove) — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS DOM Manipulation (Create, Append, Remove)\n\nHow JavaScript interacts with the browser's Document Object Model. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS DOM Manipulation (Create, Append, Remove) is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch71-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch71-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch71-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch71-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch71-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["javascript-ch70"],
    keyPoints: ["JS DOM Manipulation (Create, Append, Remove) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch72",
    courseId: "javascript",
    title: "JS DOM Traversal (Parent, Children, Siblings)",
    order: 72,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS DOM Traversal (Parent, Children, Siblings)\n\nJS DOM Traversal (Parent, Children, Siblings) is how JavaScript interacts with the browser's Document Object Model. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS DOM Traversal (Parent, Children, Siblings) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS DOM Traversal (Parent, Children, Siblings) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS DOM Traversal (Parent, Children, Siblings) — DOM and browser APIs:",
              "content": "// JS DOM Traversal (Parent, Children, Siblings) — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS DOM Traversal (Parent, Children, Siblings)\n\nHow JavaScript interacts with the browser's Document Object Model. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS DOM Traversal (Parent, Children, Siblings) is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch72-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch72-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch72-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch72-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch72-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["javascript-ch71"],
    keyPoints: ["JS DOM Traversal (Parent, Children, Siblings) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch73",
    courseId: "javascript",
    title: "JS DOM Attributes & Data Attributes",
    order: 73,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS DOM Attributes & Data Attributes\n\nJS DOM Attributes & Data Attributes is how JavaScript interacts with the browser's Document Object Model. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS DOM Attributes & Data Attributes effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS DOM Attributes & Data Attributes is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS DOM Attributes & Data Attributes — DOM and browser APIs:",
              "content": "// JS DOM Attributes & Data Attributes — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS DOM Attributes & Data Attributes\n\nHow JavaScript interacts with the browser's Document Object Model. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS DOM Attributes & Data Attributes is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch73-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch73-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch73-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch73-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch73-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["javascript-ch72"],
    keyPoints: ["JS DOM Attributes & Data Attributes is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch74",
    courseId: "javascript",
    title: "JS DOM Classes (ClassList, Toggle)",
    order: 74,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS DOM Classes (ClassList, Toggle)\n\nJS DOM Classes (ClassList, Toggle) is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS DOM Classes (ClassList, Toggle) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS DOM Classes (ClassList, Toggle) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS DOM Classes (ClassList, Toggle) — Modern class syntax:",
              "content": "// JS DOM Classes (ClassList, Toggle) — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS DOM Classes (ClassList, Toggle)\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS DOM Classes (ClassList, Toggle) — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch74-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch74-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch74-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch74-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch74-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["javascript-ch73"],
    keyPoints: ["JS DOM Classes (ClassList, Toggle) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch75",
    courseId: "javascript",
    title: "JS DOM Styling (Style Property, Computed Styles)",
    order: 75,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS DOM Styling (Style Property, Computed Styles)\n\nJS DOM Styling (Style Property, Computed Styles) is how JavaScript interacts with the browser's Document Object Model. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS DOM Styling (Style Property, Computed Styles) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS DOM Styling (Style Property, Computed Styles) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS DOM Styling (Style Property, Computed Styles) — DOM and browser APIs:",
              "content": "// JS DOM Styling (Style Property, Computed Styles) — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS DOM Styling (Style Property, Computed Styles)\n\nHow JavaScript interacts with the browser's Document Object Model. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS DOM Styling (Style Property, Computed Styles) is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch75-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch75-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch75-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch75-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch75-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["javascript-ch74"],
    keyPoints: ["JS DOM Styling (Style Property, Computed Styles) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch76",
    courseId: "javascript",
    title: "JS Events: AddEventListener & RemoveEventListener",
    order: 76,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Events: AddEventListener & RemoveEventListener\n\nJS Events: AddEventListener & RemoveEventListener is how JavaScript interacts with the browser's Document Object Model. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Events: AddEventListener & RemoveEventListener effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Events: AddEventListener & RemoveEventListener is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Events: AddEventListener & RemoveEventListener — DOM and browser APIs:",
              "content": "// JS Events: AddEventListener & RemoveEventListener — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Events: AddEventListener & RemoveEventListener\n\nHow JavaScript interacts with the browser's Document Object Model. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Events: AddEventListener & RemoveEventListener is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch76-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch76-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch76-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch76-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch76-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["javascript-ch75"],
    keyPoints: ["JS Events: AddEventListener & RemoveEventListener is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch77",
    courseId: "javascript",
    title: "JS Event Object & Properties",
    order: 77,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Event Object & Properties\n\nJS Event Object & Properties is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Event Object & Properties effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Event Object & Properties is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Event Object & Properties — Modern class syntax:",
              "content": "// JS Event Object & Properties — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Event Object & Properties\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Event Object & Properties — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch77-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch77-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch77-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch77-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch77-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch76"],
    keyPoints: ["JS Event Object & Properties is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch78",
    courseId: "javascript",
    title: "JS Event Propagation: Bubbling & Capturing",
    order: 78,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Event Propagation: Bubbling & Capturing\n\nJS Event Propagation: Bubbling & Capturing is how JavaScript interacts with the browser's Document Object Model. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Event Propagation: Bubbling & Capturing effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Event Propagation: Bubbling & Capturing is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Event Propagation: Bubbling & Capturing — DOM and browser APIs:",
              "content": "// JS Event Propagation: Bubbling & Capturing — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Event Propagation: Bubbling & Capturing\n\nHow JavaScript interacts with the browser's Document Object Model. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Event Propagation: Bubbling & Capturing is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch78-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch78-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch78-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch78-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch78-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch77"],
    keyPoints: ["JS Event Propagation: Bubbling & Capturing is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch79",
    courseId: "javascript",
    title: "JS Event Delegation & Performance",
    order: 79,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Event Delegation & Performance\n\nJS Event Delegation & Performance is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Event Delegation & Performance effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Event Delegation & Performance is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Event Delegation & Performance — Control flow:",
              "content": "// JS Event Delegation & Performance — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Event Delegation & Performance\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Event Delegation & Performance — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch79-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch79-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch79-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch79-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch79-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch78"],
    keyPoints: ["JS Event Delegation & Performance is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch80",
    courseId: "javascript",
    title: "JS Custom Events & Dispatch",
    order: 80,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Custom Events & Dispatch\n\nJS Custom Events & Dispatch is how JavaScript interacts with the browser's Document Object Model. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Custom Events & Dispatch effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Custom Events & Dispatch is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Custom Events & Dispatch — DOM and browser APIs:",
              "content": "// JS Custom Events & Dispatch — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Custom Events & Dispatch\n\nHow JavaScript interacts with the browser's Document Object Model. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Custom Events & Dispatch is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch80-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch80-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch80-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch80-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch80-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch79"],
    keyPoints: ["JS Custom Events & Dispatch is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch81",
    courseId: "javascript",
    title: "JS Form Events & Validation",
    order: 81,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Form Events & Validation\n\nJS Form Events & Validation is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Form Events & Validation effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Form Events & Validation is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Form Events & Validation — Control flow:",
              "content": "// JS Form Events & Validation — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Form Events & Validation\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Form Events & Validation — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch81-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch81-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch81-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch81-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch81-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["javascript-ch80"],
    keyPoints: ["JS Form Events & Validation is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch82",
    courseId: "javascript",
    title: "JS Window, Document & Navigator Objects",
    order: 82,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Window, Document & Navigator Objects\n\nJS Window, Document & Navigator Objects is JavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Window, Document & Navigator Objects effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Window, Document & Navigator Objects is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Window, Document & Navigator Objects — Modern class syntax:",
              "content": "// JS Window, Document & Navigator Objects — Modern JavaScript Classes\nclass User {\n  #password; // private field\n  static #count = 0;\n\n  constructor(name, email) {\n    this.name = name;\n    this.email = email;\n    this.#password = null;\n    User.#count++;\n  }\n\n  setPassword(pw) {\n    this.#password = pw;\n  }\n\n  get hasPassword() {\n    return this.#password !== null;\n  }\n\n  static get count() {\n    return User.#count;\n  }\n}\n\nclass Admin extends User {\n  constructor(name, email, role) {\n    super(name, email);\n    this.role = role;\n  }\n}\n\nconst admin = new Admin(\"Alice\", \"alice@x.com\", \"admin\");"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Window, Document & Navigator Objects\n\nJavaScript's object model — prototypes, classes, collections, and inheritance. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Window, Document & Navigator Objects — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch82-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch82-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch82-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch82-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch82-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["javascript-ch81"],
    keyPoints: ["JS Window, Document & Navigator Objects is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch83",
    courseId: "javascript",
    title: "JS Fetch API: GET, POST, Headers",
    order: 83,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Fetch API: GET, POST, Headers\n\nJS Fetch API: GET, POST, Headers is browser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Fetch API: GET, POST, Headers effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Fetch API: GET, POST, Headers is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Fetch API: GET, POST, Headers — DOM and browser APIs:",
              "content": "// JS Fetch API: GET, POST, Headers — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Fetch API: GET, POST, Headers\n\nBrowser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Fetch API: GET, POST, Headers is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch83-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch83-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch83-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch83-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch83-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["javascript-ch82"],
    keyPoints: ["JS Fetch API: GET, POST, Headers is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch84",
    courseId: "javascript",
    title: "JS Fetch: Error Handling & AbortController",
    order: 84,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Fetch: Error Handling & AbortController\n\nJS Fetch: Error Handling & AbortController is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Fetch: Error Handling & AbortController effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Fetch: Error Handling & AbortController is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Fetch: Error Handling & AbortController — Example:",
              "content": "// JS Fetch: Error Handling & AbortController — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Fetch: Error Handling & AbortController\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Fetch: Error Handling & AbortController — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch84-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch84-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch84-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch84-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch84-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["javascript-ch83"],
    keyPoints: ["JS Fetch: Error Handling & AbortController is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch85",
    courseId: "javascript",
    title: "JS LocalStorage & SessionStorage",
    order: 85,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS LocalStorage & SessionStorage\n\nJS LocalStorage & SessionStorage is browser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS LocalStorage & SessionStorage effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS LocalStorage & SessionStorage is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS LocalStorage & SessionStorage — DOM and browser APIs:",
              "content": "// JS LocalStorage & SessionStorage — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS LocalStorage & SessionStorage\n\nBrowser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS LocalStorage & SessionStorage is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch85-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch85-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch85-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch85-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch85-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["javascript-ch84"],
    keyPoints: ["JS LocalStorage & SessionStorage is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch86",
    courseId: "javascript",
    title: "JS Cookies: Read, Write, Delete",
    order: 86,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Cookies: Read, Write, Delete\n\nJS Cookies: Read, Write, Delete is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Cookies: Read, Write, Delete effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Cookies: Read, Write, Delete is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Cookies: Read, Write, Delete — Variables and types:",
              "content": "// JS Cookies: Read, Write, Delete — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Cookies: Read, Write, Delete\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Cookies: Read, Write, Delete — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch86-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch86-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch86-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch86-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch86-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["javascript-ch85"],
    keyPoints: ["JS Cookies: Read, Write, Delete is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch87",
    courseId: "javascript",
    title: "JS Geolocation API",
    order: 87,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Geolocation API\n\nJS Geolocation API is browser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Geolocation API effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Geolocation API is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Geolocation API — DOM and browser APIs:",
              "content": "// JS Geolocation API — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Geolocation API\n\nBrowser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Geolocation API is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch87-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch87-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch87-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch87-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch87-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["javascript-ch86"],
    keyPoints: ["JS Geolocation API is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch88",
    courseId: "javascript",
    title: "JS Canvas 2D Drawing API",
    order: 88,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Canvas 2D Drawing API\n\nJS Canvas 2D Drawing API is browser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Canvas 2D Drawing API effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Canvas 2D Drawing API is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Canvas 2D Drawing API — DOM and browser APIs:",
              "content": "// JS Canvas 2D Drawing API — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Canvas 2D Drawing API\n\nBrowser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Canvas 2D Drawing API is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch88-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch88-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch88-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch88-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch88-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["javascript-ch87"],
    keyPoints: ["JS Canvas 2D Drawing API is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch89",
    courseId: "javascript",
    title: "JS WebSockets: Real-Time Communication",
    order: 89,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS WebSockets: Real-Time Communication\n\nJS WebSockets: Real-Time Communication is browser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS WebSockets: Real-Time Communication effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS WebSockets: Real-Time Communication is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS WebSockets: Real-Time Communication — DOM and browser APIs:",
              "content": "// JS WebSockets: Real-Time Communication — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS WebSockets: Real-Time Communication\n\nBrowser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS WebSockets: Real-Time Communication is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch89-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch89-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch89-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch89-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch89-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["javascript-ch88"],
    keyPoints: ["JS WebSockets: Real-Time Communication is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch90",
    courseId: "javascript",
    title: "JS Intersection Observer (Lazy Loading, Infinite Scroll)",
    order: 90,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Intersection Observer (Lazy Loading, Infinite Scroll)\n\nJS Intersection Observer (Lazy Loading, Infinite Scroll) is browser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Intersection Observer (Lazy Loading, Infinite Scroll) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Intersection Observer (Lazy Loading, Infinite Scroll) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Intersection Observer (Lazy Loading, Infinite Scroll) — DOM and browser APIs:",
              "content": "// JS Intersection Observer (Lazy Loading, Infinite Scroll) — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Intersection Observer (Lazy Loading, Infinite Scroll)\n\nBrowser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Intersection Observer (Lazy Loading, Infinite Scroll) is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch90-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch90-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch90-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch90-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch90-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["javascript-ch89"],
    keyPoints: ["JS Intersection Observer (Lazy Loading, Infinite Scroll) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch91",
    courseId: "javascript",
    title: "JS Mutation Observer (DOM Change Detection)",
    order: 91,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Mutation Observer (DOM Change Detection)\n\nJS Mutation Observer (DOM Change Detection) is how JavaScript interacts with the browser's Document Object Model. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Mutation Observer (DOM Change Detection) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Mutation Observer (DOM Change Detection) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Mutation Observer (DOM Change Detection) — DOM and browser APIs:",
              "content": "// JS Mutation Observer (DOM Change Detection) — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Mutation Observer (DOM Change Detection)\n\nHow JavaScript interacts with the browser's Document Object Model. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Mutation Observer (DOM Change Detection) is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch91-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch91-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch91-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch91-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch91-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["javascript-ch90"],
    keyPoints: ["JS Mutation Observer (DOM Change Detection) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch92",
    courseId: "javascript",
    title: "JS Resize Observer (Element Size Changes)",
    order: 92,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Resize Observer (Element Size Changes)\n\nJS Resize Observer (Element Size Changes) is browser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Resize Observer (Element Size Changes) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Resize Observer (Element Size Changes) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Resize Observer (Element Size Changes) — DOM and browser APIs:",
              "content": "// JS Resize Observer (Element Size Changes) — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Resize Observer (Element Size Changes)\n\nBrowser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Resize Observer (Element Size Changes) is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch92-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch92-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch92-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch92-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch92-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch91"],
    keyPoints: ["JS Resize Observer (Element Size Changes) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch93",
    courseId: "javascript",
    title: "JS Clipboard & File APIs",
    order: 93,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Clipboard & File APIs\n\nJS Clipboard & File APIs is browser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Clipboard & File APIs effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Clipboard & File APIs is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Clipboard & File APIs — DOM and browser APIs:",
              "content": "// JS Clipboard & File APIs — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Clipboard & File APIs\n\nBrowser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Clipboard & File APIs is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch93-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch93-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch93-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch93-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch93-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch92"],
    keyPoints: ["JS Clipboard & File APIs is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch94",
    courseId: "javascript",
    title: "JS History API: SPA Routing",
    order: 94,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS History API: SPA Routing\n\nJS History API: SPA Routing is browser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS History API: SPA Routing effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS History API: SPA Routing is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS History API: SPA Routing — DOM and browser APIs:",
              "content": "// JS History API: SPA Routing — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS History API: SPA Routing\n\nBrowser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS History API: SPA Routing is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch94-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch94-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch94-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch94-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch94-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch93"],
    keyPoints: ["JS History API: SPA Routing is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch95",
    courseId: "javascript",
    title: "JS Debugging: DevTools, Breakpoints, Source Maps",
    order: 95,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Debugging: DevTools, Breakpoints, Source Maps\n\nJS Debugging: DevTools, Breakpoints, Source Maps is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Debugging: DevTools, Breakpoints, Source Maps effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Debugging: DevTools, Breakpoints, Source Maps is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Debugging: DevTools, Breakpoints, Source Maps — Control flow:",
              "content": "// JS Debugging: DevTools, Breakpoints, Source Maps — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Debugging: DevTools, Breakpoints, Source Maps\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Debugging: DevTools, Breakpoints, Source Maps — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch95-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch95-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch95-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch95-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch95-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch94"],
    keyPoints: ["JS Debugging: DevTools, Breakpoints, Source Maps is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch96",
    courseId: "javascript",
    title: "JS Testing: Unit Tests with Vitest/Jest",
    order: 96,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Testing: Unit Tests with Vitest/Jest\n\nJS Testing: Unit Tests with Vitest/Jest is JavaScript tooling, testing, performance, and best practices for production code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Testing: Unit Tests with Vitest/Jest effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Testing: Unit Tests with Vitest/Jest is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Testing: Unit Tests with Vitest/Jest — Example:",
              "content": "// JS Testing: Unit Tests with Vitest/Jest — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Testing: Unit Tests with Vitest/Jest\n\nJavaScript tooling, testing, performance, and best practices for production code. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Testing: Unit Tests with Vitest/Jest is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch96-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which tool adds static type checking to JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "TypeScript"
            },
            {
              "id": "b",
              "text": "Babel"
            },
            {
              "id": "c",
              "text": "Webpack"
            },
            {
              "id": "d",
              "text": "ESLint"
            }
          ],
          "correctAnswer": "a",
          "explanation": "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Babel transpiles JS features. ESLint finds code issues."
        },
        {
          "id": "javascript-ch96-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed. TypeScript adds optional static typing."
        },
        {
          "id": "javascript-ch96-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch96-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["javascript-ch95"],
    keyPoints: ["JS Testing: Unit Tests with Vitest/Jest is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch97",
    courseId: "javascript",
    title: "JS Performance: Memory Leaks & Profiling",
    order: 97,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Performance: Memory Leaks & Profiling\n\nJS Performance: Memory Leaks & Profiling is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Performance: Memory Leaks & Profiling effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Performance: Memory Leaks & Profiling is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Performance: Memory Leaks & Profiling — Control flow:",
              "content": "// JS Performance: Memory Leaks & Profiling — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Performance: Memory Leaks & Profiling\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Performance: Memory Leaks & Profiling — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch97-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch97-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch97-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch97-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch97-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["javascript-ch96"],
    keyPoints: ["JS Performance: Memory Leaks & Profiling is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch98",
    courseId: "javascript",
    title: "JS Security: XSS, CSRF, CSP",
    order: 98,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Security: XSS, CSRF, CSP\n\nJS Security: XSS, CSRF, CSP is JavaScript tooling, testing, performance, and best practices for production code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Security: XSS, CSRF, CSP effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Security: XSS, CSRF, CSP is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Security: XSS, CSRF, CSP — Example:",
              "content": "// JS Security: XSS, CSRF, CSP — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Security: XSS, CSRF, CSP\n\nJavaScript tooling, testing, performance, and best practices for production code. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Security: XSS, CSRF, CSP is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch98-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which tool adds static type checking to JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "TypeScript"
            },
            {
              "id": "b",
              "text": "Babel"
            },
            {
              "id": "c",
              "text": "Webpack"
            },
            {
              "id": "d",
              "text": "ESLint"
            }
          ],
          "correctAnswer": "a",
          "explanation": "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Babel transpiles JS features. ESLint finds code issues."
        },
        {
          "id": "javascript-ch98-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed. TypeScript adds optional static typing."
        },
        {
          "id": "javascript-ch98-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch98-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["javascript-ch97"],
    keyPoints: ["JS Security: XSS, CSRF, CSP is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch99",
    courseId: "javascript",
    title: "JS Bundlers: Webpack, Vite, ESBuild",
    order: 99,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Bundlers: Webpack, Vite, ESBuild\n\nJS Bundlers: Webpack, Vite, ESBuild is JavaScript tooling, testing, performance, and best practices for production code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Bundlers: Webpack, Vite, ESBuild effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Bundlers: Webpack, Vite, ESBuild is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Bundlers: Webpack, Vite, ESBuild — Example:",
              "content": "// JS Bundlers: Webpack, Vite, ESBuild — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Bundlers: Webpack, Vite, ESBuild\n\nJavaScript tooling, testing, performance, and best practices for production code. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Bundlers: Webpack, Vite, ESBuild is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch99-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which tool adds static type checking to JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "TypeScript"
            },
            {
              "id": "b",
              "text": "Babel"
            },
            {
              "id": "c",
              "text": "Webpack"
            },
            {
              "id": "d",
              "text": "ESLint"
            }
          ],
          "correctAnswer": "a",
          "explanation": "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Babel transpiles JS features. ESLint finds code issues."
        },
        {
          "id": "javascript-ch99-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed. TypeScript adds optional static typing."
        },
        {
          "id": "javascript-ch99-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch99-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["javascript-ch98"],
    keyPoints: ["JS Bundlers: Webpack, Vite, ESBuild is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch100",
    courseId: "javascript",
    title: "JS Linting (ESLint) & Formatting (Prettier)",
    order: 100,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Linting (ESLint) & Formatting (Prettier)\n\nJS Linting (ESLint) & Formatting (Prettier) is how JavaScript controls program execution with conditionals and loops. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Linting (ESLint) & Formatting (Prettier) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Linting (ESLint) & Formatting (Prettier) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Linting (ESLint) & Formatting (Prettier) — Control flow:",
              "content": "// JS Linting (ESLint) & Formatting (Prettier) — Control Flow Patterns\n\n// 1. Modern if/else with early returns\nfunction getDiscount(user) {\n  if (!user?.isActive) return 0;\n  if (user.loyaltyPoints > 1000) return 0.25;\n  if (user.loyaltyPoints > 500) return 0.15;\n  return 0.05;\n}\n\n// 2. For-of loop (ES6) — clean and readable\nconst items = [\"a\", \"b\", \"c\"];\nfor (const item of items) {\n  console.log(item);\n}\n\n// 3. Array iteration with forEach\nitems.forEach((item, index) => {\n  console.log(`${index}: ${item}`);\n});\n\n// 4. Short-circuit evaluation\nconst name = user?.name ?? \"Anonymous\";"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Linting (ESLint) & Formatting (Prettier)\n\nHow JavaScript controls program execution with conditionals and loops. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Linting (ESLint) & Formatting (Prettier) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch100-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch100-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch100-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch100-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch100-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["javascript-ch99"],
    keyPoints: ["JS Linting (ESLint) & Formatting (Prettier) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch101",
    courseId: "javascript",
    title: "JS TypeScript: Types, Interfaces, Generics",
    order: 101,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS TypeScript: Types, Interfaces, Generics\n\nJS TypeScript: Types, Interfaces, Generics is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS TypeScript: Types, Interfaces, Generics effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS TypeScript: Types, Interfaces, Generics is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS TypeScript: Types, Interfaces, Generics — Variables and types:",
              "content": "// JS TypeScript: Types, Interfaces, Generics — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS TypeScript: Types, Interfaces, Generics\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS TypeScript: Types, Interfaces, Generics — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch101-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch101-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch101-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch101-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch101-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["javascript-ch100"],
    keyPoints: ["JS TypeScript: Types, Interfaces, Generics is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch102",
    courseId: "javascript",
    title: "JS Design Patterns (Module, Observer, Singleton)",
    order: 102,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Design Patterns (Module, Observer, Singleton)\n\nJS Design Patterns (Module, Observer, Singleton) is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Design Patterns (Module, Observer, Singleton) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Design Patterns (Module, Observer, Singleton) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Design Patterns (Module, Observer, Singleton) — Variables and types:",
              "content": "// JS Design Patterns (Module, Observer, Singleton) — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Design Patterns (Module, Observer, Singleton)\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Design Patterns (Module, Observer, Singleton) — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch102-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch102-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch102-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch102-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch102-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["javascript-ch101"],
    keyPoints: ["JS Design Patterns (Module, Observer, Singleton) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch103",
    courseId: "javascript",
    title: "JS Functional Programming (Curry, Compose, Immutability)",
    order: 103,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Functional Programming (Curry, Compose, Immutability)\n\nJS Functional Programming (Curry, Compose, Immutability) is how JavaScript functions work — from declarations to closures, scope to context. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Functional Programming (Curry, Compose, Immutability) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Functional Programming (Curry, Compose, Immutability) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Functional Programming (Curry, Compose, Immutability) — Functions and closures:",
              "content": "// JS Functional Programming (Curry, Compose, Immutability) — Functions in Depth\n\n// Arrow function — concise, no own 'this'\nconst double = (n) => n * 2;\n\n// Default parameters\nfunction greet(name = \"Guest\") {\n  return `Hello, ${name}!`;\n}\n\n// Rest parameters + arrow\nconst sum = (...nums) => nums.reduce((a, b) => a + b, 0);\n\n// Closure — function remembers its scope\nfunction createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n\n// IIFE — immediately invoked\nconst config = (() => {\n  const secret = \"not exported\";\n  return { mode: \"production\" };\n})();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Functional Programming (Curry, Compose, Immutability)\n\nHow JavaScript functions work — from declarations to closures, scope to context. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Functional Programming (Curry, Compose, Immutability) is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch103-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which loop is best for iterating over an array in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "for...of"
            },
            {
              "id": "b",
              "text": "for...in"
            },
            {
              "id": "c",
              "text": "while"
            },
            {
              "id": "d",
              "text": "do...while"
            }
          ],
          "correctAnswer": "a",
          "explanation": "for...of iterates over iterable values (arrays, strings, Maps). for...in iterates over enumerable property keys."
        },
        {
          "id": "javascript-ch103-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript feature where an inner function retains access to its outer function's variables is called a ___.",
          "correctAnswer": "closure",
          "explanation": "A closure is created when a function retains access to its lexical scope even when executed outside that scope."
        },
        {
          "id": "javascript-ch103-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the difference between an arrow function and a regular function?",
          "options": [
            {
              "id": "a",
              "text": "Arrow functions do not have their own 'this' binding"
            },
            {
              "id": "b",
              "text": "Arrow functions have their own 'this' binding"
            },
            {
              "id": "c",
              "text": "Arrow functions cannot return values"
            },
            {
              "id": "d",
              "text": "There is no difference"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Arrow functions inherit 'this' from their enclosing scope. Regular functions have their own 'this' determined by how they are called."
        },
        {
          "id": "javascript-ch103-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch103-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["javascript-ch102"],
    keyPoints: ["JS Functional Programming (Curry, Compose, Immutability) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch104",
    courseId: "javascript",
    title: "JS Best Practices: Code Quality & Conventions",
    order: 104,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Best Practices: Code Quality & Conventions\n\nJS Best Practices: Code Quality & Conventions is JavaScript tooling, testing, performance, and best practices for production code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Best Practices: Code Quality & Conventions effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Best Practices: Code Quality & Conventions is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Best Practices: Code Quality & Conventions — Example:",
              "content": "// JS Best Practices: Code Quality & Conventions — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Best Practices: Code Quality & Conventions\n\nJavaScript tooling, testing, performance, and best practices for production code. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Best Practices: Code Quality & Conventions is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch104-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which tool adds static type checking to JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "TypeScript"
            },
            {
              "id": "b",
              "text": "Babel"
            },
            {
              "id": "c",
              "text": "Webpack"
            },
            {
              "id": "d",
              "text": "ESLint"
            }
          ],
          "correctAnswer": "a",
          "explanation": "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Babel transpiles JS features. ESLint finds code issues."
        },
        {
          "id": "javascript-ch104-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed. TypeScript adds optional static typing."
        },
        {
          "id": "javascript-ch104-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch104-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["javascript-ch103"],
    keyPoints: ["JS Best Practices: Code Quality & Conventions is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch105",
    courseId: "javascript",
    title: "JS Node.js: Modules (CommonJS vs ESM)",
    order: 105,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Node.js: Modules (CommonJS vs ESM)\n\nJS Node.js: Modules (CommonJS vs ESM) is advanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Node.js: Modules (CommonJS vs ESM) effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Node.js: Modules (CommonJS vs ESM) is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Node.js: Modules (CommonJS vs ESM) — Example:",
              "content": "// JS Node.js: Modules (CommonJS vs ESM) — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Node.js: Modules (CommonJS vs ESM)\n\nAdvanced JavaScript features — modules, error handling, proxies, generators, and symbol. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "comparison",
              "title": "JS Node.js: Modules (CommonJS vs ESM) — Approach Comparison",
              "headers": [
                  "Aspect",
                  "Class-based",
                  "Prototype-based"
              ],
              "rows": [
                  [
                      "Definition",
                      "class Foo {}",
                      "function Foo() {}"
                  ],
                  [
                      "Inheritance",
                      "extends",
                      "Object.create()"
                  ],
                  [
                      "Method",
                      "method() {}",
                      "Foo.prototype.method"
                  ],
                  [
                      "Private",
                      "#field",
                      "WeakMap / closure"
                  ],
                  [
                      "Static",
                      "static method()",
                      "Foo.method = function"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch105-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you create a class in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass { }"
            },
            {
              "id": "b",
              "text": "function MyClass() { }"
            },
            {
              "id": "c",
              "text": "MyClass = class { }"
            },
            {
              "id": "d",
              "text": "createClass('MyClass')"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The class syntax (ES6) provides a cleaner way to create constructor functions and prototype-based inheritance."
        },
        {
          "id": "javascript-ch105-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "In JavaScript, arrays and functions are objects.",
          "correctAnswer": true,
          "explanation": "Everything (except primitives) in JavaScript is an object. Arrays are array-like objects. Functions are callable objects."
        },
        {
          "id": "javascript-ch105-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What does the spread operator (...) do when used with objects?",
          "options": [
            {
              "id": "a",
              "text": "Creates a shallow copy with own enumerable properties"
            },
            {
              "id": "b",
              "text": "Creates a deep copy of all nested properties"
            },
            {
              "id": "c",
              "text": "Merges multiple objects in place"
            },
            {
              "id": "d",
              "text": "Deletes properties from the object"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The spread operator creates a shallow copy. Nested objects are still referenced. For deep copies, use structuredClone() or libraries."
        },
        {
          "id": "javascript-ch105-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch105-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["javascript-ch104"],
    keyPoints: ["JS Node.js: Modules (CommonJS vs ESM) is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch106",
    courseId: "javascript",
    title: "JS Node.js: File System & Path",
    order: 106,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Node.js: File System & Path\n\nJS Node.js: File System & Path is browser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Node.js: File System & Path effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Node.js: File System & Path is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Node.js: File System & Path — DOM and browser APIs:",
              "content": "// JS Node.js: File System & Path — Browser API Pattern\n\n// Event delegation — handle events efficiently\ndocument.querySelector('.list')?.addEventListener('click', (e) => {\n  const item = e.target.closest('.list-item');\n  if (!item) return;\n  console.log('Clicked:', item.dataset.id);\n});\n\n// Intersection Observer — lazy loading\nconst observer = new IntersectionObserver((entries) => {\n  for (const entry of entries) {\n    if (entry.isIntersecting) {\n      entry.target.src = entry.target.dataset.src;\n      observer.unobserve(entry.target);\n    }\n  }\n});\ndocument.querySelectorAll('[data-src]').forEach(\n  img => observer.observe(img)\n);"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Node.js: File System & Path\n\nBrowser APIs accessible from JavaScript — fetch, storage, geolocation, canvas, and more. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use event delegation instead of attaching listeners to individual elements. Attach one listener to a parent and use event.target to determine which child was clicked. This works for dynamically added elements and uses less memory."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Node.js: File System & Path is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: Web APIs** — Complete browser API documentation\n2. **MDN: DOM Manipulation** — DOM traversal and manipulation guide\n3. **web.dev: JavaScript** — Google's modern JS best practices\n4. **CSS-Tricks: JavaScript** — Practical JS tutorials and patterns\n5. **CanIUse.com** — Check browser support for JavaScript features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch106-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which method selects an element by its CSS selector?",
          "options": [
            {
              "id": "a",
              "text": "document.querySelector()"
            },
            {
              "id": "b",
              "text": "document.getElementById()"
            },
            {
              "id": "c",
              "text": "document.select()"
            },
            {
              "id": "d",
              "text": "document.find()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "querySelector() returns the first element matching a CSS selector. getElementById() is faster but only selects by ID."
        },
        {
          "id": "javascript-ch106-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is event delegation in JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "Attaching one parent listener to handle events from multiple children"
            },
            {
              "id": "b",
              "text": "Attaching separate listeners to each child element"
            },
            {
              "id": "c",
              "text": "Preventing events from bubbling up the DOM"
            },
            {
              "id": "d",
              "text": "Creating custom events programmatically"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Event delegation uses event bubbling — attach one listener to a parent and use event.target to determine which child triggered the event."
        },
        {
          "id": "javascript-ch106-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The browser API that allows web pages to store key-value data persistently is called ___.",
          "correctAnswer": "localStorage",
          "explanation": "localStorage stores key-value pairs in the browser with no expiration date. Data persists even after the browser is closed."
        },
        {
          "id": "javascript-ch106-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch106-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["javascript-ch105"],
    keyPoints: ["JS Node.js: File System & Path is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch107",
    courseId: "javascript",
    title: "JS Node.js: HTTP & Express Basics",
    order: 107,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Node.js: HTTP & Express Basics\n\nJS Node.js: HTTP & Express Basics is JavaScript tooling, testing, performance, and best practices for production code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Node.js: HTTP & Express Basics effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Node.js: HTTP & Express Basics is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Node.js: HTTP & Express Basics — Example:",
              "content": "// JS Node.js: HTTP & Express Basics — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Node.js: HTTP & Express Basics\n\nJavaScript tooling, testing, performance, and best practices for production code. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Node.js: HTTP & Express Basics is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch107-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which tool adds static type checking to JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "TypeScript"
            },
            {
              "id": "b",
              "text": "Babel"
            },
            {
              "id": "c",
              "text": "Webpack"
            },
            {
              "id": "d",
              "text": "ESLint"
            }
          ],
          "correctAnswer": "a",
          "explanation": "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Babel transpiles JS features. ESLint finds code issues."
        },
        {
          "id": "javascript-ch107-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed. TypeScript adds optional static typing."
        },
        {
          "id": "javascript-ch107-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch107-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch106"],
    keyPoints: ["JS Node.js: HTTP & Express Basics is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch108",
    courseId: "javascript",
    title: "JS NPM: Packages, Scripts, Semantic Versioning",
    order: 108,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS NPM: Packages, Scripts, Semantic Versioning\n\nJS NPM: Packages, Scripts, Semantic Versioning is JavaScript tooling, testing, performance, and best practices for production code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS NPM: Packages, Scripts, Semantic Versioning effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS NPM: Packages, Scripts, Semantic Versioning is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS NPM: Packages, Scripts, Semantic Versioning — Example:",
              "content": "// JS NPM: Packages, Scripts, Semantic Versioning — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS NPM: Packages, Scripts, Semantic Versioning\n\nJavaScript tooling, testing, performance, and best practices for production code. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS NPM: Packages, Scripts, Semantic Versioning is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch108-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which tool adds static type checking to JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "TypeScript"
            },
            {
              "id": "b",
              "text": "Babel"
            },
            {
              "id": "c",
              "text": "Webpack"
            },
            {
              "id": "d",
              "text": "ESLint"
            }
          ],
          "correctAnswer": "a",
          "explanation": "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Babel transpiles JS features. ESLint finds code issues."
        },
        {
          "id": "javascript-ch108-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed. TypeScript adds optional static typing."
        },
        {
          "id": "javascript-ch108-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch108-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch107"],
    keyPoints: ["JS NPM: Packages, Scripts, Semantic Versioning is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch109",
    courseId: "javascript",
    title: "JS Environment Variables & Config",
    order: 109,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Environment Variables & Config\n\nJS Environment Variables & Config is the foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Environment Variables & Config effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Environment Variables & Config is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Environment Variables & Config — Variables and types:",
              "content": "// JS Environment Variables & Config — Modern JavaScript Basics\n'use strict';\n\n// Prefer const by default, let when you need to reassign\nconst name = \"JavaScript\";\nlet version = 2026;\n\n// Primitive types\nconst str = \"Hello\";          // string\nconst num = 42;               // number\nconst bool = true;            // boolean\nconst nothing = null;         // null\nconst notDefined = undefined; // undefined\nconst sym = Symbol(\"id\");     // symbol\nconst big = 9007199254740991n; // bigint\n\n// typeof operator\nconsole.log(typeof str);     // \"string\"\nconsole.log(typeof num);     // \"number\"\nconsole.log(typeof bool);    // \"boolean\"\nconsole.log(typeof null);    // \"object\" (legacy bug!)"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Environment Variables & Config\n\nThe foundational building blocks of JavaScript — variables, types, operators, and core syntax. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Environment Variables & Config — Old vs Modern JavaScript",
              "headers": [
                  "Aspect",
                  "Old Way (ES5)",
                  "Modern Way (ES6+)"
              ],
              "rows": [
                  [
                      "Declaration",
                      "var x = 1",
                      "let/const x = 1"
                  ],
                  [
                      "Function",
                      "function() {}",
                      "() => {}"
                  ],
                  [
                      "String concat",
                      "'a' + b",
                      "`a ${b}`"
                  ],
                  [
                      "Object clone",
                      "Object.assign",
                      "{...obj}"
                  ],
                  [
                      "Array copy",
                      "arr.slice()",
                      "[...arr]"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: JavaScript Guide** — The definitive JavaScript reference\n2. **JavaScript: The Good Parts (Crockford)** — Classic book on JS best practices\n3. **Eloquent JavaScript (Haverbeke)** — Free online book with interactive exercises\n4. **JavaScript.info** — Modern, comprehensive JS tutorial\n5. **You Don't Know JS (Simpson)** — Deep dive into JS internals"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch109-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "const or let"
            },
            {
              "id": "b",
              "text": "var"
            },
            {
              "id": "c",
              "text": "int"
            },
            {
              "id": "d",
              "text": "string"
            }
          ],
          "correctAnswer": "a",
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function-scoping issues, and int/string are not JS keywords."
        },
        {
          "id": "javascript-ch109-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a dynamically-typed language.",
          "correctAnswer": true,
          "explanation": "JavaScript determines variable types at runtime. TypeScript adds optional static typing on top of JavaScript."
        },
        {
          "id": "javascript-ch109-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does the strict equality operator (===) do?",
          "options": [
            {
              "id": "a",
              "text": "Compares value AND type without coercion"
            },
            {
              "id": "b",
              "text": "Compares value only with type coercion"
            },
            {
              "id": "c",
              "text": "Assigns a value to a variable"
            },
            {
              "id": "d",
              "text": "Checks if two values are not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (coerces types before comparing)."
        },
        {
          "id": "javascript-ch109-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch109-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch108"],
    keyPoints: ["JS Environment Variables & Config is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch110",
    courseId: "javascript",
    title: "JS Modern Features: What's Next in ECMAScript",
    order: 110,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Modern Features: What's Next in ECMAScript\n\nJS Modern Features: What's Next in ECMAScript is JavaScript tooling, testing, performance, and best practices for production code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nModern JavaScript (ES6+) offers cleaner syntax and more predictable behavior. This chapter covers essential patterns and practices for working with JS Modern Features: What's Next in ECMAScript effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Modern Features: What's Next in ECMAScript is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Modern Features: What's Next in ECMAScript — Example:",
              "content": "// JS Modern Features: What's Next in ECMAScript — Practical Example\nfunction processData(input) {\n  // Guard clause for invalid input\n  if (input == null) {\n    return { success: false, error: \"Invalid input\" };\n  }\n  \n  try {\n    const result = transform(input);\n    return { success: true, data: result };\n  } catch (error) {\n    console.error(\"Processing failed:\", error);\n    return { success: false, error: error.message };\n  }\n}\n\n// Usage\nconst output = processData(userInput);\nif (!output.success) {\n  showError(output.error);\n}"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Modern Features: What's Next in ECMAScript\n\nJavaScript tooling, testing, performance, and best practices for production code. JavaScript's treatment of this has evolved significantly — ES6 introduced cleaner syntax and more intuitive behavior.\n\nKey aspects to understand:\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Write small, pure functions that do one thing well. Test them in isolation. Use functional composition (map, filter, reduce) over imperative loops for clearer, more predictable code."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "JS Modern Features: What's Next in ECMAScript is essential for all JavaScript developers",
                  "Modern syntax reduces boilerplate and bugs",
                  "Always use const by default, let when needed",
                  "Avoid var in modern code — it has confusing scoping rules",
                  "Use === instead of == to avoid type coercion surprises"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: JavaScript** — The definitive JavaScript reference\n2. **JavaScript.info** — Modern, comprehensive tutorial\n3. **TypeScript Handbook** — For static typing on top of JavaScript\n4. **Node.js Documentation** — Server-side JavaScript reference\n5. **V8 Blog** — JavaScript engine performance insights"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await. Always understand the runtime model before writing complex async code."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch110-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which tool adds static type checking to JavaScript?",
          "options": [
            {
              "id": "a",
              "text": "TypeScript"
            },
            {
              "id": "b",
              "text": "Babel"
            },
            {
              "id": "c",
              "text": "Webpack"
            },
            {
              "id": "d",
              "text": "ESLint"
            }
          ],
          "correctAnswer": "a",
          "explanation": "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Babel transpiles JS features. ESLint finds code issues."
        },
        {
          "id": "javascript-ch110-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed. TypeScript adds optional static typing."
        },
        {
          "id": "javascript-ch110-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents unexpected behavior in JavaScript production code?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode, proper error handling, and type validation"
            },
            {
              "id": "b",
              "text": "Using only global variables for simplicity"
            },
            {
              "id": "c",
              "text": "Using eval() for dynamic code execution"
            },
            {
              "id": "d",
              "text": "Avoiding functions entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, proper error handling prevents silent failures, and type validation catches type-related bugs early."
        },
        {
          "id": "javascript-ch110-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The JavaScript mechanism that handles asynchronous callbacks, microtasks, and macrotasks is called the ___ ___.",
          "correctAnswer": "event loop",
          "explanation": "The event loop continuously checks the call stack and processes pending callbacks, microtasks (Promise callbacks), and macrotasks (setTimeout, I/O)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch109"],
    keyPoints: ["JS Modern Features: What's Next in ECMAScript is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
];

export const javascriptCourse: Course = {
  id: "javascript",
  title: "JavaScript",
  fullTitle: "JavaScript — Bringing Pages to Life",
  description: "The world's most versatile programming language. From variables and closures to async/await, modules, and the complete browser API — beginner to advanced.",
  icon: "Code2",
  color: "#eab308",
  difficulty: 2,
  chapters: javascriptChapters,
  totalXP: 1870,
  estimatedHours: 90,
};
