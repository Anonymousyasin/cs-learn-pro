// Auto-generated course data - do not edit directly
import { Course, Chapter, Section, ExamQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, CodeOrderQuestion, MatchPairsQuestion } from "../types";

const javascriptChapters: Chapter[] = [
  {
    id: "javascript-ch1",
    courseId: "javascript",
    title: "JS Introduction",
    order: 1,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Introduction\n\nJS Introduction is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Introduction effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Introduction is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Introduction — Basic example:",
              "content": "// JS Introduction — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Introduction\n\nJavaScript's treatment of JS Introduction has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Introduction — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Introduction:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch1-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js introduction?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch1-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js introduction.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch1-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js introduction)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch1-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch1-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js introduction?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: [],
    keyPoints: ["JS Introduction is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch2",
    courseId: "javascript",
    title: "JS Where To",
    order: 2,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Where To\n\nJS Where To is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Where To effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Where To is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Where To — Practical usage:",
              "content": "// JS Where To — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Where To\n\nJavaScript's treatment of JS Where To has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Where To is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Where To:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch2-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js where to?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch2-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js where to.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch2-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js where to)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch2-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch2-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js where to?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch1"],
    keyPoints: ["JS Where To is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch3",
    courseId: "javascript",
    title: "JS Output",
    order: 3,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Output\n\nJS Output is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Output effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Output is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Output — Basic example:",
              "content": "// JS Output — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Output\n\nJavaScript's treatment of JS Output has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Output Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Output:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch3-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js output?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch3-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js output.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch3-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js output)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch3-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch3-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js output?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch2"],
    keyPoints: ["JS Output is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch4",
    courseId: "javascript",
    title: "JS Syntax",
    order: 4,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Syntax\n\nJS Syntax is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Syntax effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Syntax is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Syntax — Practical usage:",
              "content": "// JS Syntax — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Syntax\n\nJavaScript's treatment of JS Syntax has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Syntax — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Syntax:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch4-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js syntax?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch4-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js syntax.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch4-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js syntax)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch4-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch4-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js syntax?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch3"],
    keyPoints: ["JS Syntax is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch5",
    courseId: "javascript",
    title: "JS Statements",
    order: 5,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Statements\n\nJS Statements is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Statements effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Statements is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Statements — Basic example:",
              "content": "// JS Statements — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Statements\n\nJavaScript's treatment of JS Statements has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Statements is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Statements:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch5-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js statements?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch5-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js statements.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch5-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js statements)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch5-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch5-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js statements?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch4"],
    keyPoints: ["JS Statements is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch6",
    courseId: "javascript",
    title: "JS Comments",
    order: 6,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Comments\n\nJS Comments is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Comments effectively in real-world projects."
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
              "caption": "JS Comments — Practical usage:",
              "content": "// JS Comments — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Comments\n\nJavaScript's treatment of JS Comments has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Comments Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Comments:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch6-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js comments?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch6-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js comments.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch6-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js comments)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch6-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch6-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js comments?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["javascript-ch5"],
    keyPoints: ["JS Comments is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch7",
    courseId: "javascript",
    title: "JS Variables",
    order: 7,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Variables\n\nJS Variables is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Variables effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Variables is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Variables — Basic example:",
              "content": "// JS Variables — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Variables\n\nJavaScript's treatment of JS Variables has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Variables — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Variables:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch7-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js variables?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch7-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js variables.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch7-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js variables)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch7-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch7-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js variables?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["javascript-ch6"],
    keyPoints: ["JS Variables is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch8",
    courseId: "javascript",
    title: "JS Let",
    order: 8,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Let\n\nJS Let is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Let effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Let is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Let — Practical usage:",
              "content": "// JS Let — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Let\n\nJavaScript's treatment of JS Let has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Let is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Let:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch8-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js let?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch8-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js let.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch8-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js let)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch8-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch8-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js let?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["javascript-ch7"],
    keyPoints: ["JS Let is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch9",
    courseId: "javascript",
    title: "JS Const",
    order: 9,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Const\n\nJS Const is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Const effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Const is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Const — Basic example:",
              "content": "// JS Const — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Const\n\nJavaScript's treatment of JS Const has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Const Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Const:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch9-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js const?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch9-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js const.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch9-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js const)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch9-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch9-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js const?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["javascript-ch8"],
    keyPoints: ["JS Const is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch10",
    courseId: "javascript",
    title: "JS Operators",
    order: 10,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Operators\n\nJS Operators is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Operators effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Operators is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Operators — Practical usage:",
              "content": "// JS Operators — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Operators\n\nJavaScript's treatment of JS Operators has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Operators — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Operators:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch10-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js operators?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch10-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js operators.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch10-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js operators)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch10-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch10-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js operators?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["javascript-ch9"],
    keyPoints: ["JS Operators is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch11",
    courseId: "javascript",
    title: "JS Arithmetic",
    order: 11,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Arithmetic\n\nJS Arithmetic is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Arithmetic effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Arithmetic is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Arithmetic — Basic example:",
              "content": "// JS Arithmetic — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Arithmetic\n\nJavaScript's treatment of JS Arithmetic has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Arithmetic is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Arithmetic:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch11-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js arithmetic?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch11-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js arithmetic.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch11-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js arithmetic)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch11-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch11-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js arithmetic?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["javascript-ch10"],
    keyPoints: ["JS Arithmetic is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch12",
    courseId: "javascript",
    title: "JS Assignment",
    order: 12,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Assignment\n\nJS Assignment is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Assignment effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Assignment is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Assignment — Practical usage:",
              "content": "// JS Assignment — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Assignment\n\nJavaScript's treatment of JS Assignment has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Assignment Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Assignment:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch12-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js assignment?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch12-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js assignment.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch12-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js assignment)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch12-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch12-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js assignment?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["javascript-ch11"],
    keyPoints: ["JS Assignment is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch13",
    courseId: "javascript",
    title: "JS Comparison",
    order: 13,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Comparison\n\nJS Comparison is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Comparison effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Comparison is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Comparison — Basic example:",
              "content": "// JS Comparison — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Comparison\n\nJavaScript's treatment of JS Comparison has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Comparison — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Comparison:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch13-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js comparison?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch13-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js comparison.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch13-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js comparison)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch13-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch13-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js comparison?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["javascript-ch12"],
    keyPoints: ["JS Comparison is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch14",
    courseId: "javascript",
    title: "JS Logical",
    order: 14,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Logical\n\nJS Logical is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Logical effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Logical is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Logical — Practical usage:",
              "content": "// JS Logical — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Logical\n\nJavaScript's treatment of JS Logical has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Logical is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Logical:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch14-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js logical?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch14-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js logical.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch14-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js logical)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch14-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch14-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js logical?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["javascript-ch13"],
    keyPoints: ["JS Logical is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch15",
    courseId: "javascript",
    title: "JS If Else",
    order: 15,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS If Else\n\nJS If Else is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS If Else effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS If Else is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS If Else — Basic example:",
              "content": "// JS If Else — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS If Else\n\nJavaScript's treatment of JS If Else has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS If Else Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS If Else:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch15-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js if else?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch15-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js if else.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch15-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js if else)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch15-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch15-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js if else?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["javascript-ch14"],
    keyPoints: ["JS If Else is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch16",
    courseId: "javascript",
    title: "JS Switch",
    order: 16,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Switch\n\nJS Switch is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Switch effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Switch is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Switch — Practical usage:",
              "content": "// JS Switch — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Switch\n\nJavaScript's treatment of JS Switch has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Switch — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Switch:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch16-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js switch?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch16-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js switch.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch16-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js switch)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch16-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch16-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js switch?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["javascript-ch15"],
    keyPoints: ["JS Switch is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch17",
    courseId: "javascript",
    title: "JS Booleans",
    order: 17,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Booleans\n\nJS Booleans is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Booleans effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Booleans is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Booleans — Basic example:",
              "content": "// JS Booleans — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Booleans\n\nJavaScript's treatment of JS Booleans has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Booleans is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Booleans:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch17-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js booleans?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch17-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js booleans.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch17-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js booleans)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch17-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch17-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js booleans?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch16"],
    keyPoints: ["JS Booleans is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch18",
    courseId: "javascript",
    title: "JS Loops",
    order: 18,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Loops\n\nJS Loops is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Loops effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Loops is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Loops — Practical usage:",
              "content": "// JS Loops — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Loops\n\nJavaScript's treatment of JS Loops has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Loops Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Loops:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch18-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js loops?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch18-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js loops.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch18-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js loops)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch18-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch18-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js loops?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch17"],
    keyPoints: ["JS Loops is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch19",
    courseId: "javascript",
    title: "JS For Loop",
    order: 19,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS For Loop\n\nJS For Loop is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS For Loop effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS For Loop is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS For Loop — Basic example:",
              "content": "// JS For Loop — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS For Loop\n\nJavaScript's treatment of JS For Loop has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS For Loop — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS For Loop:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch19-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js for loop?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch19-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js for loop.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch19-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js for loop)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch19-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch19-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js for loop?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch18"],
    keyPoints: ["JS For Loop is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch20",
    courseId: "javascript",
    title: "JS While Loop",
    order: 20,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS While Loop\n\nJS While Loop is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS While Loop effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS While Loop is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS While Loop — Practical usage:",
              "content": "// JS While Loop — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS While Loop\n\nJavaScript's treatment of JS While Loop has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS While Loop is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS While Loop:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch20-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js while loop?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch20-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js while loop.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch20-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js while loop)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch20-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch20-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js while loop?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch19"],
    keyPoints: ["JS While Loop is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch21",
    courseId: "javascript",
    title: "JS Break Continue",
    order: 21,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Break Continue\n\nJS Break Continue is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Break Continue effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Break Continue is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Break Continue — Basic example:",
              "content": "// JS Break Continue — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Break Continue\n\nJavaScript's treatment of JS Break Continue has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Break Continue Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Break Continue:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch21-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js break continue?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch21-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js break continue.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch21-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js break continue)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch21-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch21-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js break continue?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["javascript-ch20"],
    keyPoints: ["JS Break Continue is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch22",
    courseId: "javascript",
    title: "JS Data Types",
    order: 22,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Data Types\n\nJS Data Types is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Data Types effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Data Types is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Data Types — Practical usage:",
              "content": "// JS Data Types — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Data Types\n\nJavaScript's treatment of JS Data Types has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Data Types — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Data Types:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch22-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js data types?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch22-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js data types.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch22-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js data types)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch22-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch22-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js data types?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["javascript-ch21"],
    keyPoints: ["JS Data Types is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch23",
    courseId: "javascript",
    title: "JS Functions",
    order: 23,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Functions\n\nJS Functions is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Functions effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Functions is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Functions — Basic example:",
              "content": "// JS Functions — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Functions\n\nJavaScript's treatment of JS Functions has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Functions is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Functions:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch23-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js functions?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch23-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js functions.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch23-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js functions)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch23-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch23-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js functions?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["javascript-ch22"],
    keyPoints: ["JS Functions is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch24",
    courseId: "javascript",
    title: "JS Arrow Functions",
    order: 24,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Arrow Functions\n\nJS Arrow Functions is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Arrow Functions effectively in real-world projects."
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
              "caption": "JS Arrow Functions — Practical usage:",
              "content": "// JS Arrow Functions — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Arrow Functions\n\nJavaScript's treatment of JS Arrow Functions has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Arrow Functions Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Arrow Functions:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch24-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js arrow functions?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch24-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js arrow functions.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch24-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js arrow functions)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch24-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch24-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js arrow functions?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
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
    title: "JS Scope",
    order: 25,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Scope\n\nJS Scope is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Scope effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Scope is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Scope — Basic example:",
              "content": "// JS Scope — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Scope\n\nJavaScript's treatment of JS Scope has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Scope — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Scope:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch25-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js scope?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch25-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js scope.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch25-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js scope)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch25-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch25-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js scope?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["javascript-ch24"],
    keyPoints: ["JS Scope is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch26",
    courseId: "javascript",
    title: "JS Hoisting",
    order: 26,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Hoisting\n\nJS Hoisting is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Hoisting effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Hoisting is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Hoisting — Practical usage:",
              "content": "// JS Hoisting — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Hoisting\n\nJavaScript's treatment of JS Hoisting has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Hoisting is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Hoisting:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch26-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js hoisting?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch26-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js hoisting.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch26-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js hoisting)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch26-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch26-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js hoisting?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["javascript-ch25"],
    keyPoints: ["JS Hoisting is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch27",
    courseId: "javascript",
    title: "JS Strings",
    order: 27,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Strings\n\nJS Strings is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Strings effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Strings is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Strings — Basic example:",
              "content": "// JS Strings — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Strings\n\nJavaScript's treatment of JS Strings has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Strings Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Strings:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch27-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js strings?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch27-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js strings.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch27-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js strings)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch27-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch27-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js strings?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["javascript-ch26"],
    keyPoints: ["JS Strings is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch28",
    courseId: "javascript",
    title: "JS String Methods",
    order: 28,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS String Methods\n\nJS String Methods is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS String Methods effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS String Methods is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS String Methods — Practical usage:",
              "content": "// JS String Methods — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS String Methods\n\nJavaScript's treatment of JS String Methods has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS String Methods — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS String Methods:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch28-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js string methods?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch28-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js string methods.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch28-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js string methods)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch28-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch28-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js string methods?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["javascript-ch27"],
    keyPoints: ["JS String Methods is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch29",
    courseId: "javascript",
    title: "JS String Search",
    order: 29,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS String Search\n\nJS String Search is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS String Search effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS String Search is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS String Search — Basic example:",
              "content": "// JS String Search — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS String Search\n\nJavaScript's treatment of JS String Search has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS String Search is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS String Search:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch29-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js string search?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch29-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js string search.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch29-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js string search)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch29-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch29-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js string search?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["javascript-ch28"],
    keyPoints: ["JS String Search is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch30",
    courseId: "javascript",
    title: "JS Numbers",
    order: 30,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Numbers\n\nJS Numbers is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Numbers effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Numbers is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Numbers — Practical usage:",
              "content": "// JS Numbers — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Numbers\n\nJavaScript's treatment of JS Numbers has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Numbers Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Numbers:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch30-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js numbers?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch30-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js numbers.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch30-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js numbers)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch30-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch30-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js numbers?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["javascript-ch29"],
    keyPoints: ["JS Numbers is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch31",
    courseId: "javascript",
    title: "JS Number Methods",
    order: 31,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Number Methods\n\nJS Number Methods is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Number Methods effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Number Methods is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Number Methods — Basic example:",
              "content": "// JS Number Methods — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Number Methods\n\nJavaScript's treatment of JS Number Methods has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Number Methods — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Number Methods:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch31-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js number methods?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch31-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js number methods.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch31-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js number methods)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch31-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch31-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js number methods?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["javascript-ch30"],
    keyPoints: ["JS Number Methods is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch32",
    courseId: "javascript",
    title: "JS Arrays",
    order: 32,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Arrays\n\nJS Arrays is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Arrays effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Arrays is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Arrays — Practical usage:",
              "content": "// JS Arrays — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Arrays\n\nJavaScript's treatment of JS Arrays has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Arrays is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Arrays:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch32-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js arrays?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch32-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js arrays.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch32-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js arrays)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch32-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch32-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js arrays?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch31"],
    keyPoints: ["JS Arrays is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch33",
    courseId: "javascript",
    title: "JS Array Methods",
    order: 33,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Array Methods\n\nJS Array Methods is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Array Methods effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Array Methods is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Array Methods — Basic example:",
              "content": "// JS Array Methods — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Array Methods\n\nJavaScript's treatment of JS Array Methods has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Array Methods Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Array Methods:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch33-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js array methods?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch33-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js array methods.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch33-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js array methods)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch33-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch33-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js array methods?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch32"],
    keyPoints: ["JS Array Methods is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch34",
    courseId: "javascript",
    title: "JS Array Search",
    order: 34,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Array Search\n\nJS Array Search is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Array Search effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Array Search is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Array Search — Practical usage:",
              "content": "// JS Array Search — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Array Search\n\nJavaScript's treatment of JS Array Search has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Array Search — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Array Search:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch34-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js array search?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch34-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js array search.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch34-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js array search)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch34-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch34-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js array search?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch33"],
    keyPoints: ["JS Array Search is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch35",
    courseId: "javascript",
    title: "JS Array Sort",
    order: 35,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Array Sort\n\nJS Array Sort is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Array Sort effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Array Sort is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Array Sort — Basic example:",
              "content": "// JS Array Sort — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Array Sort\n\nJavaScript's treatment of JS Array Sort has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Array Sort is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Array Sort:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch35-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js array sort?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch35-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js array sort.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch35-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js array sort)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch35-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch35-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js array sort?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch34"],
    keyPoints: ["JS Array Sort is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch36",
    courseId: "javascript",
    title: "JS Array Iteration",
    order: 36,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Array Iteration\n\nJS Array Iteration is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Array Iteration effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Array Iteration is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Array Iteration — Practical usage:",
              "content": "// JS Array Iteration — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Array Iteration\n\nJavaScript's treatment of JS Array Iteration has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Array Iteration Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Array Iteration:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch36-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js array iteration?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch36-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js array iteration.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch36-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js array iteration)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch36-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch36-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js array iteration?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["javascript-ch35"],
    keyPoints: ["JS Array Iteration is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch37",
    courseId: "javascript",
    title: "JS Dates",
    order: 37,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Dates\n\nJS Dates is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Dates effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Dates is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Dates — Basic example:",
              "content": "// JS Dates — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Dates\n\nJavaScript's treatment of JS Dates has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Dates — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Dates:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch37-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js dates?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch37-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js dates.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch37-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js dates)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch37-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch37-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js dates?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["javascript-ch36"],
    keyPoints: ["JS Dates is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch38",
    courseId: "javascript",
    title: "JS Date Formats",
    order: 38,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Date Formats\n\nJS Date Formats is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Date Formats effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Date Formats is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Date Formats — Practical usage:",
              "content": "// JS Date Formats — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Date Formats\n\nJavaScript's treatment of JS Date Formats has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Date Formats is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Date Formats:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch38-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js date formats?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch38-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js date formats.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch38-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js date formats)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch38-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch38-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js date formats?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["javascript-ch37"],
    keyPoints: ["JS Date Formats is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch39",
    courseId: "javascript",
    title: "JS Math",
    order: 39,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Math\n\nJS Math is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Math effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Math is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Math — Basic example:",
              "content": "// JS Math — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Math\n\nJavaScript's treatment of JS Math has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Math Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Math:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch39-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js math?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch39-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js math.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch39-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js math)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch39-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch39-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js math?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["javascript-ch38"],
    keyPoints: ["JS Math is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch40",
    courseId: "javascript",
    title: "JS Random",
    order: 40,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Random\n\nJS Random is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Random effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Random is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Random — Practical usage:",
              "content": "// JS Random — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Random\n\nJavaScript's treatment of JS Random has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Random — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Random:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch40-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js random?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch40-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js random.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch40-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js random)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch40-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch40-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js random?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["javascript-ch39"],
    keyPoints: ["JS Random is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch41",
    courseId: "javascript",
    title: "JS Type Conversion",
    order: 41,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Type Conversion\n\nJS Type Conversion is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Type Conversion effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Type Conversion is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Type Conversion — Basic example:",
              "content": "// JS Type Conversion — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Type Conversion\n\nJavaScript's treatment of JS Type Conversion has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Type Conversion is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Type Conversion:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch41-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js type conversion?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch41-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js type conversion.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch41-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js type conversion)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch41-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch41-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js type conversion?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["javascript-ch40"],
    keyPoints: ["JS Type Conversion is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch42",
    courseId: "javascript",
    title: "JS Destructuring",
    order: 42,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Destructuring\n\nJS Destructuring is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Destructuring effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Destructuring is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Destructuring — Practical usage:",
              "content": "// JS Destructuring — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Destructuring\n\nJavaScript's treatment of JS Destructuring has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Destructuring Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Destructuring:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch42-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js destructuring?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch42-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js destructuring.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch42-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js destructuring)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch42-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch42-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js destructuring?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["javascript-ch41"],
    keyPoints: ["JS Destructuring is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch43",
    courseId: "javascript",
    title: "JS Spread",
    order: 43,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Spread\n\nJS Spread is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Spread effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Spread is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Spread — Basic example:",
              "content": "// JS Spread — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Spread\n\nJavaScript's treatment of JS Spread has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Spread — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Spread:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch43-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js spread?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch43-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js spread.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch43-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js spread)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch43-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch43-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js spread?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["javascript-ch42"],
    keyPoints: ["JS Spread is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch44",
    courseId: "javascript",
    title: "JS Errors",
    order: 44,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Errors\n\nJS Errors is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Errors effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Errors is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Errors — Practical usage:",
              "content": "// JS Errors — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Errors\n\nJavaScript's treatment of JS Errors has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Errors is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Errors:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch44-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js errors?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch44-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js errors.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch44-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js errors)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch44-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch44-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js errors?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["javascript-ch43"],
    keyPoints: ["JS Errors is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch45",
    courseId: "javascript",
    title: "JS Try Catch",
    order: 45,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Try Catch\n\nJS Try Catch is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Try Catch effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Try Catch is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Try Catch — Basic example:",
              "content": "// JS Try Catch — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Try Catch\n\nJavaScript's treatment of JS Try Catch has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Try Catch Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Try Catch:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch45-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js try catch?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch45-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js try catch.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch45-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js try catch)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch45-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch45-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js try catch?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["javascript-ch44"],
    keyPoints: ["JS Try Catch is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch46",
    courseId: "javascript",
    title: "JS This",
    order: 46,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS This\n\nJS This is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS This effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS This is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS This — Practical usage:",
              "content": "// JS This — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS This\n\nJavaScript's treatment of JS This has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS This — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS This:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch46-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js this?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch46-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js this.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch46-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js this)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch46-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch46-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js this?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["javascript-ch45"],
    keyPoints: ["JS This is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch47",
    courseId: "javascript",
    title: "JS Classes",
    order: 47,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Classes\n\nJS Classes is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Classes effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Classes is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Classes — Basic example:",
              "content": "// JS Classes — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Classes\n\nJavaScript's treatment of JS Classes has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Classes is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Classes:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch47-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js classes?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch47-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js classes.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch47-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js classes)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch47-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch47-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js classes?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch46"],
    keyPoints: ["JS Classes is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch48",
    courseId: "javascript",
    title: "JS Class Inheritance",
    order: 48,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Class Inheritance\n\nJS Class Inheritance is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Class Inheritance effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Class Inheritance is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Class Inheritance — Practical usage:",
              "content": "// JS Class Inheritance — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Class Inheritance\n\nJavaScript's treatment of JS Class Inheritance has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Class Inheritance Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Class Inheritance:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch48-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js class inheritance?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch48-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js class inheritance.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch48-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js class inheritance)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch48-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch48-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js class inheritance?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch47"],
    keyPoints: ["JS Class Inheritance is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch49",
    courseId: "javascript",
    title: "JS Static",
    order: 49,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Static\n\nJS Static is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Static effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Static is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Static — Basic example:",
              "content": "// JS Static — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Static\n\nJavaScript's treatment of JS Static has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Static — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Static:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch49-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js static?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch49-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js static.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch49-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js static)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch49-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch49-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js static?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch48"],
    keyPoints: ["JS Static is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch50",
    courseId: "javascript",
    title: "JS Private",
    order: 50,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Private\n\nJS Private is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Private effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Private is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Private — Practical usage:",
              "content": "// JS Private — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Private\n\nJavaScript's treatment of JS Private has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Private is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Private:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch50-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js private?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch50-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js private.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch50-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js private)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch50-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch50-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js private?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch49"],
    keyPoints: ["JS Private is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch51",
    courseId: "javascript",
    title: "JS Modules",
    order: 51,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Modules\n\nJS Modules is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Modules effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Modules is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Modules — Basic example:",
              "content": "// JS Modules — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Modules\n\nJavaScript's treatment of JS Modules has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Modules Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Modules:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch51-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js modules?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch51-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js modules.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch51-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js modules)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch51-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch51-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js modules?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["javascript-ch50"],
    keyPoints: ["JS Modules is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch52",
    courseId: "javascript",
    title: "JS JSON",
    order: 52,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS JSON\n\nJS JSON is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS JSON effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS JSON is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS JSON — Practical usage:",
              "content": "// JS JSON — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS JSON\n\nJavaScript's treatment of JS JSON has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS JSON — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS JSON:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch52-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js json?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch52-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js json.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch52-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js json)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch52-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch52-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js json?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["javascript-ch51"],
    keyPoints: ["JS JSON is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch53",
    courseId: "javascript",
    title: "JS DOM Intro",
    order: 53,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS DOM Intro\n\nJS DOM Intro is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS DOM Intro effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS DOM Intro is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS DOM Intro — Basic example:",
              "content": "// JS DOM Intro — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS DOM Intro\n\nJavaScript's treatment of JS DOM Intro has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS DOM Intro is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS DOM Intro:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch53-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js dom intro?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch53-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js dom intro.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch53-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js dom intro)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch53-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch53-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js dom intro?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["javascript-ch52"],
    keyPoints: ["JS DOM Intro is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch54",
    courseId: "javascript",
    title: "JS DOM Selectors",
    order: 54,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS DOM Selectors\n\nJS DOM Selectors is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS DOM Selectors effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS DOM Selectors is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS DOM Selectors — Practical usage:",
              "content": "// JS DOM Selectors — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS DOM Selectors\n\nJavaScript's treatment of JS DOM Selectors has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS DOM Selectors Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS DOM Selectors:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch54-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js dom selectors?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch54-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js dom selectors.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch54-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js dom selectors)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch54-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch54-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js dom selectors?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["javascript-ch53"],
    keyPoints: ["JS DOM Selectors is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch55",
    courseId: "javascript",
    title: "JS DOM Manipulation",
    order: 55,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS DOM Manipulation\n\nJS DOM Manipulation is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS DOM Manipulation effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS DOM Manipulation is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS DOM Manipulation — Basic example:",
              "content": "// JS DOM Manipulation — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS DOM Manipulation\n\nJavaScript's treatment of JS DOM Manipulation has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS DOM Manipulation — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS DOM Manipulation:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch55-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js dom manipulation?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch55-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js dom manipulation.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch55-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js dom manipulation)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch55-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch55-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js dom manipulation?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["javascript-ch54"],
    keyPoints: ["JS DOM Manipulation is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch56",
    courseId: "javascript",
    title: "JS DOM Events",
    order: 56,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS DOM Events\n\nJS DOM Events is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS DOM Events effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS DOM Events is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS DOM Events — Practical usage:",
              "content": "// JS DOM Events — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS DOM Events\n\nJavaScript's treatment of JS DOM Events has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS DOM Events is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS DOM Events:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch56-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js dom events?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch56-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js dom events.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch56-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js dom events)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch56-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch56-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js dom events?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["javascript-ch55"],
    keyPoints: ["JS DOM Events is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch57",
    courseId: "javascript",
    title: "JS Event Listener",
    order: 57,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Event Listener\n\nJS Event Listener is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Event Listener effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Event Listener is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Event Listener — Basic example:",
              "content": "// JS Event Listener — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Event Listener\n\nJavaScript's treatment of JS Event Listener has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Event Listener Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Event Listener:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch57-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js event listener?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch57-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js event listener.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch57-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js event listener)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch57-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch57-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js event listener?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["javascript-ch56"],
    keyPoints: ["JS Event Listener is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch58",
    courseId: "javascript",
    title: "JS Event Bubbling",
    order: 58,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Event Bubbling\n\nJS Event Bubbling is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Event Bubbling effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Event Bubbling is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Event Bubbling — Practical usage:",
              "content": "// JS Event Bubbling — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Event Bubbling\n\nJavaScript's treatment of JS Event Bubbling has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Event Bubbling — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Event Bubbling:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch58-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js event bubbling?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch58-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js event bubbling.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch58-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js event bubbling)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch58-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch58-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js event bubbling?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["javascript-ch57"],
    keyPoints: ["JS Event Bubbling is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch59",
    courseId: "javascript",
    title: "JS Timing",
    order: 59,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Timing\n\nJS Timing is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Timing effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Timing is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Timing — Basic example:",
              "content": "// JS Timing — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Timing\n\nJavaScript's treatment of JS Timing has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Timing is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Timing:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch59-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js timing?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch59-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js timing.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch59-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js timing)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch59-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch59-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js timing?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["javascript-ch58"],
    keyPoints: ["JS Timing is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch60",
    courseId: "javascript",
    title: "JS Cookies",
    order: 60,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Cookies\n\nJS Cookies is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Cookies effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Cookies is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Cookies — Practical usage:",
              "content": "// JS Cookies — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Cookies\n\nJavaScript's treatment of JS Cookies has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Cookies Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Cookies:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch60-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js cookies?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch60-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js cookies.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch60-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js cookies)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch60-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch60-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js cookies?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["javascript-ch59"],
    keyPoints: ["JS Cookies is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch61",
    courseId: "javascript",
    title: "JS Fetch API",
    order: 61,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Fetch API\n\nJS Fetch API is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Fetch API effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Fetch API is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Fetch API — Basic example:",
              "content": "// JS Fetch API — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Fetch API\n\nJavaScript's treatment of JS Fetch API has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Fetch API — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Fetch API:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch61-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js fetch api?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch61-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js fetch api.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch61-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js fetch api)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch61-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch61-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js fetch api?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["javascript-ch60"],
    keyPoints: ["JS Fetch API is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch62",
    courseId: "javascript",
    title: "JS Async",
    order: 62,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Async\n\nJS Async is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Async effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Async is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Async — Practical usage:",
              "content": "// JS Async — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Async\n\nJavaScript's treatment of JS Async has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Async is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Async:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch62-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js async?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch62-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js async.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch62-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js async)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch62-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch62-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js async?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch61"],
    keyPoints: ["JS Async is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch63",
    courseId: "javascript",
    title: "JS Promises",
    order: 63,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Promises\n\nJS Promises is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Promises effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Promises is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Promises — Basic example:",
              "content": "// JS Promises — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Promises\n\nJavaScript's treatment of JS Promises has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Promises Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Promises:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch63-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js promises?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch63-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js promises.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch63-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js promises)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch63-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch63-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js promises?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch62"],
    keyPoints: ["JS Promises is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch64",
    courseId: "javascript",
    title: "JS Async Await",
    order: 64,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Async Await\n\nJS Async Await is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Async Await effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Async Await is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Async Await — Practical usage:",
              "content": "// JS Async Await — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Async Await\n\nJavaScript's treatment of JS Async Await has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Async Await — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Async Await:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch64-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js async await?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch64-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js async await.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch64-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js async await)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch64-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch64-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js async await?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch63"],
    keyPoints: ["JS Async Await is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch65",
    courseId: "javascript",
    title: "JS Sets",
    order: 65,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Sets\n\nJS Sets is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Sets effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Sets is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Sets — Basic example:",
              "content": "// JS Sets — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Sets\n\nJavaScript's treatment of JS Sets has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Sets is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Sets:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch65-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js sets?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch65-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js sets.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch65-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js sets)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch65-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch65-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js sets?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch64"],
    keyPoints: ["JS Sets is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch66",
    courseId: "javascript",
    title: "JS Maps",
    order: 66,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Maps\n\nJS Maps is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Maps effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Maps is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Maps — Practical usage:",
              "content": "// JS Maps — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Maps\n\nJavaScript's treatment of JS Maps has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Maps Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Maps:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch66-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js maps?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch66-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js maps.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch66-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js maps)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch66-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch66-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js maps?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["javascript-ch65"],
    keyPoints: ["JS Maps is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch67",
    courseId: "javascript",
    title: "JS Symbols",
    order: 67,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Symbols\n\nJS Symbols is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Symbols effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Symbols is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Symbols — Basic example:",
              "content": "// JS Symbols — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Symbols\n\nJavaScript's treatment of JS Symbols has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Symbols — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Symbols:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch67-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js symbols?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch67-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js symbols.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch67-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js symbols)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch67-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch67-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js symbols?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["javascript-ch66"],
    keyPoints: ["JS Symbols is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch68",
    courseId: "javascript",
    title: "JS Iterables",
    order: 68,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Iterables\n\nJS Iterables is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Iterables effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Iterables is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Iterables — Practical usage:",
              "content": "// JS Iterables — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Iterables\n\nJavaScript's treatment of JS Iterables has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Iterables is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Iterables:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch68-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js iterables?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch68-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js iterables.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch68-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js iterables)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch68-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch68-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js iterables?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["javascript-ch67"],
    keyPoints: ["JS Iterables is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch69",
    courseId: "javascript",
    title: "JS Generators",
    order: 69,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Generators\n\nJS Generators is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Generators effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Generators is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Generators — Basic example:",
              "content": "// JS Generators — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Generators\n\nJavaScript's treatment of JS Generators has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Generators Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Generators:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch69-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js generators?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch69-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js generators.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch69-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js generators)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch69-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch69-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js generators?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["javascript-ch68"],
    keyPoints: ["JS Generators is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch70",
    courseId: "javascript",
    title: "JS Proxies",
    order: 70,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Proxies\n\nJS Proxies is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Proxies effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Proxies is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Proxies — Practical usage:",
              "content": "// JS Proxies — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Proxies\n\nJavaScript's treatment of JS Proxies has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Proxies — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Proxies:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch70-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js proxies?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch70-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js proxies.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch70-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js proxies)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch70-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch70-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js proxies?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["javascript-ch69"],
    keyPoints: ["JS Proxies is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch71",
    courseId: "javascript",
    title: "JS Best Practices",
    order: 71,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Best Practices\n\nJS Best Practices is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Best Practices effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Best Practices is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Best Practices — Basic example:",
              "content": "// JS Best Practices — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Best Practices\n\nJavaScript's treatment of JS Best Practices has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Best Practices is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Best Practices:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch71-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js best practices?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch71-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js best practices.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch71-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js best practices)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch71-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch71-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js best practices?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["javascript-ch70"],
    keyPoints: ["JS Best Practices is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch72",
    courseId: "javascript",
    title: "JS Performance",
    order: 72,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Performance\n\nJS Performance is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Performance effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Performance is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Performance — Practical usage:",
              "content": "// JS Performance — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Performance\n\nJavaScript's treatment of JS Performance has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Performance Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Performance:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch72-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js performance?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch72-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js performance.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch72-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js performance)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch72-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch72-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js performance?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["javascript-ch71"],
    keyPoints: ["JS Performance is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch73",
    courseId: "javascript",
    title: "JS Security",
    order: 73,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Security\n\nJS Security is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Security effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Security is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Security — Basic example:",
              "content": "// JS Security — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Security\n\nJavaScript's treatment of JS Security has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Security — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Security:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch73-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js security?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch73-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js security.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch73-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js security)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch73-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch73-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js security?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["javascript-ch72"],
    keyPoints: ["JS Security is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch74",
    courseId: "javascript",
    title: "JS Testing",
    order: 74,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Testing\n\nJS Testing is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Testing effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Testing is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Testing — Practical usage:",
              "content": "// JS Testing — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Testing\n\nJavaScript's treatment of JS Testing has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Testing is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Testing:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch74-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js testing?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch74-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js testing.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch74-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js testing)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch74-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch74-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js testing?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["javascript-ch73"],
    keyPoints: ["JS Testing is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch75",
    courseId: "javascript",
    title: "JS Modules Advanced",
    order: 75,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Modules Advanced\n\nJS Modules Advanced is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Modules Advanced effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Modules Advanced is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Modules Advanced — Basic example:",
              "content": "// JS Modules Advanced — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Modules Advanced\n\nJavaScript's treatment of JS Modules Advanced has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS Modules Advanced Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Modules Advanced:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch75-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js modules advanced?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch75-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js modules advanced.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch75-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js modules advanced)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch75-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch75-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js modules advanced?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["javascript-ch74"],
    keyPoints: ["JS Modules Advanced is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch76",
    courseId: "javascript",
    title: "JS Web APIs",
    order: 76,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Web APIs\n\nJS Web APIs is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Web APIs effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Web APIs is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Web APIs — Practical usage:",
              "content": "// JS Web APIs — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Web APIs\n\nJavaScript's treatment of JS Web APIs has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS Web APIs — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Web APIs:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch76-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js web apis?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch76-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js web apis.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch76-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js web apis)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch76-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch76-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js web apis?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["javascript-ch75"],
    keyPoints: ["JS Web APIs is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch77",
    courseId: "javascript",
    title: "JS Service Workers",
    order: 77,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Service Workers\n\nJS Service Workers is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Service Workers effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Service Workers is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Service Workers — Basic example:",
              "content": "// JS Service Workers — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Service Workers\n\nJavaScript's treatment of JS Service Workers has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Service Workers is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Service Workers:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch77-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js service workers?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch77-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js service workers.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch77-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js service workers)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch77-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch77-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js service workers?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["javascript-ch76"],
    keyPoints: ["JS Service Workers is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch78",
    courseId: "javascript",
    title: "JS IndexedDB",
    order: 78,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS IndexedDB\n\nJS IndexedDB is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS IndexedDB effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS IndexedDB is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS IndexedDB — Practical usage:",
              "content": "// JS IndexedDB — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS IndexedDB\n\nJavaScript's treatment of JS IndexedDB has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "exercise",
              "title": "JS IndexedDB Practice",
              "description": "Apply what you've learned:",
              "instructions": [
                  "Write a function that demonstrates this concept",
                  "Add appropriate error handling",
                  "Test with both expected and edge case inputs",
                  "Refactor to use modern JavaScript syntax"
              ],
              "hint": "Start simple, then add sophistication gradually."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** JavaScript's type coercion can lead to surprising results. Always use strict equality (===) and explicit type conversion (Number(), String(), Boolean()) for predictable behavior."
          },
          {
              "type": "text",
              "content": "## Debugging Tips\n\nWhen troubleshooting JS IndexedDB:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch78-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js indexeddb?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch78-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js indexeddb.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch78-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js indexeddb)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch78-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch78-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js indexeddb?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["javascript-ch77"],
    keyPoints: ["JS IndexedDB is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch79",
    courseId: "javascript",
    title: "JS WebSockets",
    order: 79,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS WebSockets\n\nJS WebSockets is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS WebSockets effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS WebSockets is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS WebSockets — Basic example:",
              "content": "// JS WebSockets — Getting Started\nfunction demonstrateConcept() {\n  const data = [\"learn\", \"code\", \"build\"];\n  \n  // Modern array methods\n  const transformed = data\n    .map(item => item.toUpperCase())\n    .filter(item => item.length > 3);\n  \n  console.log(\"Result:\", transformed);\n  // Output: [\"LEARN\", \"CODE\", \"BUILD\"]\n}\n\ndemonstrateConcept();"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS WebSockets\n\nJavaScript's treatment of JS WebSockets has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the browser's debugger (F12 → Sources tab) to step through JavaScript code line by line. Set breakpoints, inspect variables, and watch the call stack. This is the single most effective way to understand how your code actually executes."
          },
          {
              "type": "comparison",
              "title": "JS WebSockets — Approach Comparison",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS WebSockets:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch79-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js websockets?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch79-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js websockets.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch79-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js websockets)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch79-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch79-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js websockets?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["javascript-ch78"],
    keyPoints: ["JS WebSockets is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
  {
    id: "javascript-ch80",
    courseId: "javascript",
    title: "JS Modern Features",
    order: 80,
    sections: [
          {
              "type": "text",
              "content": "## Understanding JS Modern Features\n\nJS Modern Features is a core JavaScript concept that every developer must understand to write effective code. JavaScript is a dynamic, loosely-typed language that runs in the browser, on servers (Node.js), and increasingly on embedded devices.\n\nThis chapter covers the essential patterns and practices for working with JS Modern Features effectively in real-world projects."
          },
          {
              "type": "key-points",
              "points": [
                  "JS Modern Features is fundamental to JavaScript development",
                  "Understanding it helps prevent common bugs and errors",
                  "Modern JavaScript (ES6+) offers cleaner syntax for this concept",
                  "Master this to write more maintainable and performant code"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "JS Modern Features — Practical usage:",
              "content": "// JS Modern Features — Real-World Pattern\nclass ConceptManager {\n  #privateData = new Map();\n  \n  constructor(options = {}) {\n    this.options = options;\n  }\n  \n  async initialize() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    this.#privateData.set('loaded', data);\n    return this;\n  }\n  \n  get data() {\n    return this.#privateData.get('loaded') ?? [];\n  }\n}\n\nexport { ConceptManager };"
          },
          {
              "type": "text",
              "content": "## Deep Dive into JS Modern Features\n\nJavaScript's treatment of JS Modern Features has evolved significantly. ES6 introduced cleaner syntax and more intuitive behavior. Let's explore the nuances:\n\n1. **How it works** — The engine processes this in a specific order\n2. **Edge cases** — Understanding the boundaries prevents bugs\n3. **Performance** — Some approaches are faster than others\n4. **Best practices** — Industry-standard patterns for production code"
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
                  "JS Modern Features is essential for all JavaScript developers",
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
              "content": "## Debugging Tips\n\nWhen troubleshooting JS Modern Features:\n\n1. Use console.log() strategically to track values\n2. Set breakpoints in the browser DevTools\n3. Watch expressions to see how values change\n4. Use the Call Stack to trace execution flow\n5. Check for undefined and null values at each step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** JavaScript is single-threaded but asynchronous. Understanding the event loop, microtasks, and macrotasks is crucial for predicting execution order with promises, timeouts, and async/await."
          }
      ],
    examPool: [
        {
          "id": "javascript-ch80-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you declare a variable in modern JavaScript for js modern features?",
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
          "explanation": "const and let are the modern way to declare variables in JavaScript (ES6+). var has function scoping issues, and int/string are not valid JS keywords."
        },
        {
          "id": "javascript-ch80-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "JavaScript is a statically-typed language when using js modern features.",
          "correctAnswer": false,
          "explanation": "JavaScript is dynamically-typed — variable types are determined at runtime. TypeScript adds static typing as a superset."
        },
        {
          "id": "javascript-ch80-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What does === mean in JavaScript (relevant for js modern features)?",
          "options": [
            {
              "id": "a",
              "text": "Strict equality — compares value AND type"
            },
            {
              "id": "b",
              "text": "Loose equality — compares value only"
            },
            {
              "id": "c",
              "text": "Assignment operator"
            },
            {
              "id": "d",
              "text": "Not equal"
            }
          ],
          "correctAnswer": "a",
          "explanation": "=== is strict equality (checks both value and type). == is loose equality (type coercion). = is assignment. !== is strict not-equal."
        },
        {
          "id": "javascript-ch80-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The method to add an element to the end of an array is: ___.___()",
          "correctAnswer": "push",
          "explanation": "array.push() adds elements to the end. pop() removes from the end. unshift() adds to the beginning. shift() removes from the beginning."
        },
        {
          "id": "javascript-ch80-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What prevents this JavaScript code from causing unexpected behavior with js modern features?",
          "options": [
            {
              "id": "a",
              "text": "Using strict mode ('use strict') and proper error handling"
            },
            {
              "id": "b",
              "text": "Using only global variables"
            },
            {
              "id": "c",
              "text": "Avoiding functions altogether"
            },
            {
              "id": "d",
              "text": "Using eval() for dynamic code"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Strict mode catches common errors, prevents global leaks, and throws exceptions for unsafe actions. Global variables, avoiding functions, and eval() are all bad practices."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["javascript-ch79"],
    keyPoints: ["JS Modern Features is fundamental to JavaScript development","Understanding it helps prevent common bugs and errors","Modern JavaScript (ES6+) offers cleaner syntax for this concept","Master this to write more maintainable and performant code"],
  },
];

export const javascriptCourse: Course = {
  id: "javascript",
  title: "JavaScript",
  fullTitle: "JavaScript — Bringing Pages to Life",
  description: "The most versatile programming language. From variables to async/await, closures to classes, DOM manipulation to modern ES modules.",
  icon: "Code2",
  color: "#eab308",
  difficulty: 2,
  chapters: javascriptChapters,
  totalXP: 1360,
  estimatedHours: 55,
};
