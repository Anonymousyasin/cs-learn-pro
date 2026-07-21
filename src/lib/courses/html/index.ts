// Auto-generated course data - do not edit directly
import { Course, Chapter, Section, ExamQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, CodeOrderQuestion, MatchPairsQuestion, Project } from "../types";

const htmlChapters: Chapter[] = [
  {
    id: "html-ch1",
    courseId: "html",
    title: "HTML Introduction",
    order: 1,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Introduction?\n\nHTML Introduction is an important part of web development — the core building blocks that make HTML work — from document structure to writing your first tags. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Introduction plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Introduction — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Introduction — Example</title>\n</head>\n<body>\n  <!-- Your HTML Introduction content goes here -->\n  <main>\n    <h1>Learning HTML Introduction</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Introduction\n\nThe core building blocks that make HTML work — from document structure to writing your first tags. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Introduction:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Introduction forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Introduction is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch1-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does HTML stand for?",
          "options": [
            {
              "id": "a",
              "text": "HyperText Markup Language"
            },
            {
              "id": "b",
              "text": "HyperText Machine Language"
            },
            {
              "id": "c",
              "text": "Home Tool Markup Language"
            },
            {
              "id": "d",
              "text": "HyperTool Multi Language"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML stands for HyperText Markup Language. It is the standard language for creating web pages and web applications."
        },
        {
          "id": "html-ch1-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which element defines the document type and HTML version?",
          "options": [
            {
              "id": "a",
              "text": "<!DOCTYPE html>"
            },
            {
              "id": "b",
              "text": "<html>"
            },
            {
              "id": "c",
              "text": "<head>"
            },
            {
              "id": "d",
              "text": "<meta>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<!DOCTYPE html> declares the document type and HTML version. It must be the first line in every HTML document."
        },
        {
          "id": "html-ch1-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML elements can have attributes that provide additional information.",
          "correctAnswer": true,
          "explanation": "HTML attributes provide additional information about elements, such as id, class, src, href, and alt."
        },
        {
          "id": "html-ch1-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element that contains metadata about the document is called the ___ element.",
          "correctAnswer": "head",
          "explanation": "The <head> element contains meta-information about the HTML document, such as title, links, and scripts."
        },
        {
          "id": "html-ch1-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch1-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: [],
    keyPoints: ["HTML Introduction plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch2",
    courseId: "html",
    title: "HTML Editors & Tools",
    order: 2,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Editors & Tools?\n\nHTML Editors & Tools is an important part of web development — the core building blocks that make HTML work — from document structure to writing your first tags. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Editors & Tools plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Editors & Tools — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Editors & Tools — Example</title>\n</head>\n<body>\n  <!-- Your HTML Editors & Tools content goes here -->\n  <main>\n    <h1>Learning HTML Editors & Tools</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Editors & Tools\n\nThe core building blocks that make HTML work — from document structure to writing your first tags. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Editors & Tools:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Editors & Tools — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Editors & Tools is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch2-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does HTML stand for?",
          "options": [
            {
              "id": "a",
              "text": "HyperText Markup Language"
            },
            {
              "id": "b",
              "text": "HyperText Machine Language"
            },
            {
              "id": "c",
              "text": "Home Tool Markup Language"
            },
            {
              "id": "d",
              "text": "HyperTool Multi Language"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML stands for HyperText Markup Language. It is the standard language for creating web pages and web applications."
        },
        {
          "id": "html-ch2-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which element defines the document type and HTML version?",
          "options": [
            {
              "id": "a",
              "text": "<!DOCTYPE html>"
            },
            {
              "id": "b",
              "text": "<html>"
            },
            {
              "id": "c",
              "text": "<head>"
            },
            {
              "id": "d",
              "text": "<meta>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<!DOCTYPE html> declares the document type and HTML version. It must be the first line in every HTML document."
        },
        {
          "id": "html-ch2-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML elements can have attributes that provide additional information.",
          "correctAnswer": true,
          "explanation": "HTML attributes provide additional information about elements, such as id, class, src, href, and alt."
        },
        {
          "id": "html-ch2-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element that contains metadata about the document is called the ___ element.",
          "correctAnswer": "head",
          "explanation": "The <head> element contains meta-information about the HTML document, such as title, links, and scripts."
        },
        {
          "id": "html-ch2-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch2-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["html-ch1"],
    keyPoints: ["HTML Editors & Tools plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch3",
    courseId: "html",
    title: "HTML Document Structure",
    order: 3,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Document Structure?\n\nHTML Document Structure is an important part of web development — the core building blocks that make HTML work — from document structure to writing your first tags. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Document Structure plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Document Structure — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Document Structure — Example</title>\n</head>\n<body>\n  <!-- Your HTML Document Structure content goes here -->\n  <main>\n    <h1>Learning HTML Document Structure</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Document Structure\n\nThe core building blocks that make HTML work — from document structure to writing your first tags. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Document Structure:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Document Structure forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Document Structure is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch3-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does HTML stand for?",
          "options": [
            {
              "id": "a",
              "text": "HyperText Markup Language"
            },
            {
              "id": "b",
              "text": "HyperText Machine Language"
            },
            {
              "id": "c",
              "text": "Home Tool Markup Language"
            },
            {
              "id": "d",
              "text": "HyperTool Multi Language"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML stands for HyperText Markup Language. It is the standard language for creating web pages and web applications."
        },
        {
          "id": "html-ch3-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which element defines the document type and HTML version?",
          "options": [
            {
              "id": "a",
              "text": "<!DOCTYPE html>"
            },
            {
              "id": "b",
              "text": "<html>"
            },
            {
              "id": "c",
              "text": "<head>"
            },
            {
              "id": "d",
              "text": "<meta>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<!DOCTYPE html> declares the document type and HTML version. It must be the first line in every HTML document."
        },
        {
          "id": "html-ch3-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML elements can have attributes that provide additional information.",
          "correctAnswer": true,
          "explanation": "HTML attributes provide additional information about elements, such as id, class, src, href, and alt."
        },
        {
          "id": "html-ch3-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element that contains metadata about the document is called the ___ element.",
          "correctAnswer": "head",
          "explanation": "The <head> element contains meta-information about the HTML document, such as title, links, and scripts."
        },
        {
          "id": "html-ch3-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch3-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["html-ch2"],
    keyPoints: ["HTML Document Structure plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch4",
    courseId: "html",
    title: "HTML Elements & Tags",
    order: 4,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Elements & Tags?\n\nHTML Elements & Tags is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Elements & Tags plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Elements & Tags — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Elements & Tags — Example</title>\n</head>\n<body>\n  <!-- Your HTML Elements & Tags content goes here -->\n  <main>\n    <h1>Learning HTML Elements & Tags</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Elements & Tags\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Elements & Tags:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Elements & Tags — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Elements & Tags is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch4-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch4-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch4-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch4-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch4-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["html-ch3"],
    keyPoints: ["HTML Elements & Tags plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch5",
    courseId: "html",
    title: "HTML Attributes",
    order: 5,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Attributes?\n\nHTML Attributes is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Attributes plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Attributes — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Attributes — Example</title>\n</head>\n<body>\n  <!-- Your HTML Attributes content goes here -->\n  <main>\n    <h1>Learning HTML Attributes</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Attributes\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Attributes:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Attributes forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Attributes is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch5-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch5-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch5-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch5-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch5-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["html-ch4"],
    keyPoints: ["HTML Attributes plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch6",
    courseId: "html",
    title: "HTML Headings & Hierarchy",
    order: 6,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Headings & Hierarchy?\n\nHTML Headings & Hierarchy is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Headings & Hierarchy plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Headings & Hierarchy — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Headings & Hierarchy — Example</title>\n</head>\n<body>\n  <!-- Your HTML Headings & Hierarchy content goes here -->\n  <main>\n    <h1>Learning HTML Headings & Hierarchy</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Headings & Hierarchy\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Headings & Hierarchy:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Headings & Hierarchy — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Headings & Hierarchy is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch6-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch6-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch6-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch6-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch6-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["html-ch5"],
    keyPoints: ["HTML Headings & Hierarchy plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch7",
    courseId: "html",
    title: "HTML Paragraphs & Text",
    order: 7,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Paragraphs & Text?\n\nHTML Paragraphs & Text is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Paragraphs & Text plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Paragraphs & Text — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Paragraphs & Text — Example</title>\n</head>\n<body>\n  <!-- Your HTML Paragraphs & Text content goes here -->\n  <main>\n    <h1>Learning HTML Paragraphs & Text</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Paragraphs & Text\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Paragraphs & Text:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Paragraphs & Text forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Paragraphs & Text is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch7-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch7-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch7-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch7-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch7-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["html-ch6"],
    keyPoints: ["HTML Paragraphs & Text plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch8",
    courseId: "html",
    title: "HTML Comments",
    order: 8,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Comments?\n\nHTML Comments is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Comments plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Comments — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Comments — Example</title>\n</head>\n<body>\n  <!-- Your HTML Comments content goes here -->\n  <main>\n    <h1>Learning HTML Comments</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Comments\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Comments:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Comments — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Comments is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch8-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch8-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch8-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch8-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch8-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["html-ch7"],
    keyPoints: ["HTML Comments plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch9",
    courseId: "html",
    title: "HTML Formatting Elements",
    order: 9,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Formatting Elements?\n\nHTML Formatting Elements is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Formatting Elements plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Formatting Elements — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Formatting Elements — Example</title>\n</head>\n<body>\n  <!-- Your HTML Formatting Elements content goes here -->\n  <main>\n    <h1>Learning HTML Formatting Elements</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Formatting Elements\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Formatting Elements:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Formatting Elements forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Formatting Elements is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch9-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch9-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch9-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch9-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch9-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["html-ch8"],
    keyPoints: ["HTML Formatting Elements plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch10",
    courseId: "html",
    title: "HTML Quotations & Citations",
    order: 10,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Quotations & Citations?\n\nHTML Quotations & Citations is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Quotations & Citations plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Quotations & Citations — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Quotations & Citations — Example</title>\n</head>\n<body>\n  <!-- Your HTML Quotations & Citations content goes here -->\n  <main>\n    <h1>Learning HTML Quotations & Citations</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Quotations & Citations\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Quotations & Citations:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Quotations & Citations — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Quotations & Citations is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch10-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch10-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch10-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch10-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch10-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["html-ch9"],
    keyPoints: ["HTML Quotations & Citations plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch11",
    courseId: "html",
    title: "HTML Colors (Named, Hex, RGB)",
    order: 11,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Colors (Named, Hex, RGB)?\n\nHTML Colors (Named, Hex, RGB) is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Colors (Named, Hex, RGB) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Colors (Named, Hex, RGB) — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Colors (Named, Hex, RGB) — Example</title>\n</head>\n<body>\n  <!-- Your HTML Colors (Named, Hex, RGB) content goes here -->\n  <main>\n    <h1>Learning HTML Colors (Named, Hex, RGB)</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Colors (Named, Hex, RGB)\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Colors (Named, Hex, RGB):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Colors (Named, Hex, RGB) forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Colors (Named, Hex, RGB) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch11-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch11-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch11-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch11-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch11-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["html-ch10"],
    keyPoints: ["HTML Colors (Named, Hex, RGB) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch12",
    courseId: "html",
    title: "HTML Styles (Inline CSS)",
    order: 12,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Styles (Inline CSS)?\n\nHTML Styles (Inline CSS) is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Styles (Inline CSS) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Styles (Inline CSS) — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Styles (Inline CSS)</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Styles (Inline CSS)\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Styles (Inline CSS):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Styles (Inline CSS) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Styles (Inline CSS) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch12-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch12-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch12-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch12-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch12-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["html-ch11"],
    keyPoints: ["HTML Styles (Inline CSS) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch13",
    courseId: "html",
    title: "HTML Links & Hyperlinks",
    order: 13,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Links & Hyperlinks?\n\nHTML Links & Hyperlinks is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Links & Hyperlinks plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Links & Hyperlinks — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Links & Hyperlinks — Example</title>\n</head>\n<body>\n  <!-- Your HTML Links & Hyperlinks content goes here -->\n  <main>\n    <h1>Learning HTML Links & Hyperlinks</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Links & Hyperlinks\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Links & Hyperlinks:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Links & Hyperlinks forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Links & Hyperlinks is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch13-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch13-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch13-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch13-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch13-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["html-ch12"],
    keyPoints: ["HTML Links & Hyperlinks plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch14",
    courseId: "html",
    title: "HTML Images & Alt Text",
    order: 14,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Images & Alt Text?\n\nHTML Images & Alt Text is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Images & Alt Text plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Images & Alt Text — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Images & Alt Text — Example</title>\n</head>\n<body>\n  <!-- Your HTML Images & Alt Text content goes here -->\n  <main>\n    <h1>Learning HTML Images & Alt Text</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Images & Alt Text\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Images & Alt Text:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Images & Alt Text — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Images & Alt Text is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch14-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch14-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch14-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch14-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch14-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["html-ch13"],
    keyPoints: ["HTML Images & Alt Text plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch15",
    courseId: "html",
    title: "HTML Lists (Ordered, Unordered, Description)",
    order: 15,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Lists (Ordered, Unordered, Description)?\n\nHTML Lists (Ordered, Unordered, Description) is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Lists (Ordered, Unordered, Description) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Lists (Ordered, Unordered, Description) — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Lists (Ordered, Unordered, Description)</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Lists (Ordered, Unordered, Description)\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Lists (Ordered, Unordered, Description):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Lists (Ordered, Unordered, Description) forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Lists (Ordered, Unordered, Description) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch15-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch15-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch15-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch15-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch15-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["html-ch14"],
    keyPoints: ["HTML Lists (Ordered, Unordered, Description) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch16",
    courseId: "html",
    title: "HTML Tables (Rows, Cols, Headers)",
    order: 16,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Tables (Rows, Cols, Headers)?\n\nHTML Tables (Rows, Cols, Headers) is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Tables (Rows, Cols, Headers) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Tables (Rows, Cols, Headers) — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Tables (Rows, Cols, Headers)</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Tables (Rows, Cols, Headers)\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Tables (Rows, Cols, Headers):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Tables (Rows, Cols, Headers) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Tables (Rows, Cols, Headers) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch16-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch16-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch16-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch16-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch16-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["html-ch15"],
    keyPoints: ["HTML Tables (Rows, Cols, Headers) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch17",
    courseId: "html",
    title: "HTML Table Styling & Accessibility",
    order: 17,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Table Styling & Accessibility?\n\nHTML Table Styling & Accessibility is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Table Styling & Accessibility plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Table Styling & Accessibility — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Table Styling & Accessibility</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Table Styling & Accessibility\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Table Styling & Accessibility:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Table Styling & Accessibility forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Table Styling & Accessibility is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch17-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch17-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch17-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch17-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch17-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["html-ch16"],
    keyPoints: ["HTML Table Styling & Accessibility plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch18",
    courseId: "html",
    title: "HTML Divs & Spans",
    order: 18,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Divs & Spans?\n\nHTML Divs & Spans is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Divs & Spans plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Divs & Spans — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Divs & Spans</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Divs & Spans\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Divs & Spans:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Divs & Spans — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Divs & Spans is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch18-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch18-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch18-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch18-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch18-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["html-ch17"],
    keyPoints: ["HTML Divs & Spans plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch19",
    courseId: "html",
    title: "HTML Block & Inline Elements",
    order: 19,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Block & Inline Elements?\n\nHTML Block & Inline Elements is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Block & Inline Elements plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Block & Inline Elements — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Block & Inline Elements — Example</title>\n</head>\n<body>\n  <!-- Your HTML Block & Inline Elements content goes here -->\n  <main>\n    <h1>Learning HTML Block & Inline Elements</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Block & Inline Elements\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Block & Inline Elements:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Block & Inline Elements forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Block & Inline Elements is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch19-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch19-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch19-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch19-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch19-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["html-ch18"],
    keyPoints: ["HTML Block & Inline Elements plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch20",
    courseId: "html",
    title: "HTML Classes for Styling",
    order: 20,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Classes for Styling?\n\nHTML Classes for Styling is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Classes for Styling plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Classes for Styling — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Classes for Styling</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Classes for Styling\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Classes for Styling:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Classes for Styling — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Classes for Styling is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch20-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch20-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch20-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch20-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch20-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["html-ch19"],
    keyPoints: ["HTML Classes for Styling plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch21",
    courseId: "html",
    title: "HTML IDs for Uniqueness",
    order: 21,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML IDs for Uniqueness?\n\nHTML IDs for Uniqueness is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML IDs for Uniqueness plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML IDs for Uniqueness — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML IDs for Uniqueness</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML IDs for Uniqueness\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML IDs for Uniqueness:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML IDs for Uniqueness forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML IDs for Uniqueness is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch21-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch21-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch21-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch21-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch21-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["html-ch20"],
    keyPoints: ["HTML IDs for Uniqueness plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch22",
    courseId: "html",
    title: "HTML Iframes & Embeds",
    order: 22,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Iframes & Embeds?\n\nHTML Iframes & Embeds is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Iframes & Embeds plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Iframes & Embeds — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Iframes & Embeds</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Iframes & Embeds\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Iframes & Embeds:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Iframes & Embeds — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Iframes & Embeds is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch22-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch22-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch22-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch22-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch22-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["html-ch21"],
    keyPoints: ["HTML Iframes & Embeds plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch23",
    courseId: "html",
    title: "HTML File Paths (Absolute vs Relative)",
    order: 23,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML File Paths (Absolute vs Relative)?\n\nHTML File Paths (Absolute vs Relative) is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML File Paths (Absolute vs Relative) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML File Paths (Absolute vs Relative) — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML File Paths (Absolute vs Relative)</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML File Paths (Absolute vs Relative)\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML File Paths (Absolute vs Relative):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML File Paths (Absolute vs Relative) forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML File Paths (Absolute vs Relative) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch23-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch23-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch23-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch23-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch23-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["html-ch22"],
    keyPoints: ["HTML File Paths (Absolute vs Relative) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch24",
    courseId: "html",
    title: "HTML Head Meta Tags",
    order: 24,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Head Meta Tags?\n\nHTML Head Meta Tags is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Head Meta Tags plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Head Meta Tags — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Head Meta Tags — Example</title>\n</head>\n<body>\n  <!-- Your HTML Head Meta Tags content goes here -->\n  <main>\n    <h1>Learning HTML Head Meta Tags</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Head Meta Tags\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Head Meta Tags:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Head Meta Tags — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Head Meta Tags is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch24-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch24-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch24-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch24-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch24-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["html-ch23"],
    keyPoints: ["HTML Head Meta Tags plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch25",
    courseId: "html",
    title: "HTML Layout Elements (Header, Nav, Main)",
    order: 25,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Layout Elements (Header, Nav, Main)?\n\nHTML Layout Elements (Header, Nav, Main) is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Layout Elements (Header, Nav, Main) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Layout Elements (Header, Nav, Main) — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Layout Elements (Header, Nav, Main) — Example</title>\n</head>\n<body>\n  <!-- Your HTML Layout Elements (Header, Nav, Main) content goes here -->\n  <main>\n    <h1>Learning HTML Layout Elements (Header, Nav, Main)</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Layout Elements (Header, Nav, Main)\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Layout Elements (Header, Nav, Main):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Layout Elements (Header, Nav, Main) forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Layout Elements (Header, Nav, Main) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch25-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch25-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch25-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch25-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch25-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["html-ch24"],
    keyPoints: ["HTML Layout Elements (Header, Nav, Main) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch26",
    courseId: "html",
    title: "HTML Semantic Elements (Article, Section, Aside)",
    order: 26,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Semantic Elements (Article, Section, Aside)?\n\nHTML Semantic Elements (Article, Section, Aside) is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Semantic Elements (Article, Section, Aside) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Semantic Elements (Article, Section, Aside) — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Semantic Elements (Article, Section, Aside) — Example</title>\n</head>\n<body>\n  <!-- Your HTML Semantic Elements (Article, Section, Aside) content goes here -->\n  <main>\n    <h1>Learning HTML Semantic Elements (Article, Section, Aside)</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Semantic Elements (Article, Section, Aside)\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Semantic Elements (Article, Section, Aside):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Semantic Elements (Article, Section, Aside) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Semantic Elements (Article, Section, Aside) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch26-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch26-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch26-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch26-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch26-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["html-ch25"],
    keyPoints: ["HTML Semantic Elements (Article, Section, Aside) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch27",
    courseId: "html",
    title: "HTML Style Guide & Conventions",
    order: 27,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Style Guide & Conventions?\n\nHTML Style Guide & Conventions is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Style Guide & Conventions plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Style Guide & Conventions — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Style Guide & Conventions</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Style Guide & Conventions\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Style Guide & Conventions:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Style Guide & Conventions forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Style Guide & Conventions is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch27-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch27-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch27-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch27-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch27-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["html-ch26"],
    keyPoints: ["HTML Style Guide & Conventions plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch28",
    courseId: "html",
    title: "HTML Responsive Meta Viewport",
    order: 28,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Responsive Meta Viewport?\n\nHTML Responsive Meta Viewport is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Responsive Meta Viewport plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Responsive Meta Viewport — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Responsive Meta Viewport</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Responsive Meta Viewport\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Responsive Meta Viewport:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Responsive Meta Viewport — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Responsive Meta Viewport is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch28-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch28-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch28-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch28-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch28-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["html-ch27"],
    keyPoints: ["HTML Responsive Meta Viewport plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch29",
    courseId: "html",
    title: "HTML Entities & Special Characters",
    order: 29,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Entities & Special Characters?\n\nHTML Entities & Special Characters is an important part of web development — essential HTML knowledge. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Entities & Special Characters plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Entities & Special Characters — Practical example:",
              "content": "<!-- HTML Entities & Special Characters — Example -->\n<section aria-labelledby=\"ch-title\">\n  <h2 id=\"ch-title\">HTML Entities & Special Characters</h2>\n  <p>This demonstrates practical usage of HTML Entities & Special Characters.</p>\n  <ul>\n    <li>Understand the syntax and structure</li>\n    <li>Apply best practices for accessibility</li>\n    <li>Test across different browsers</li>\n  </ul>\n</section>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Entities & Special Characters\n\nEssential HTML knowledge. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Entities & Special Characters, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Entities & Special Characters:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Entities & Special Characters forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Entities & Special Characters\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Entities & Special Characters is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch29-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct HTML for creating a HTML Entities & Special Characters?",
          "options": [
            {
              "id": "a",
              "text": "Using the appropriate semantic HTML element"
            },
            {
              "id": "b",
              "text": "Using a generic <div> with a class name"
            },
            {
              "id": "c",
              "text": "Using JavaScript to create the element dynamically"
            },
            {
              "id": "d",
              "text": "There is no correct approach in HTML"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content."
        },
        {
          "id": "html-ch29-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Entities & Special Characters is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch29-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch29-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["html-ch28"],
    keyPoints: ["HTML Entities & Special Characters plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch30",
    courseId: "html",
    title: "HTML Symbols & Icons",
    order: 30,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Symbols & Icons?\n\nHTML Symbols & Icons is an important part of web development — how HTML handles text representation, special characters, and internationalization. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Symbols & Icons plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Symbols & Icons — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Symbols & Icons</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Symbols & Icons\n\nHow HTML handles text representation, special characters, and internationalization. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Symbols & Icons, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Symbols & Icons:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Symbols & Icons — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Symbols & Icons\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Symbols & Icons is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch30-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct HTML for creating a HTML Symbols & Icons?",
          "options": [
            {
              "id": "a",
              "text": "Using the appropriate semantic HTML element"
            },
            {
              "id": "b",
              "text": "Using a generic <div> with a class name"
            },
            {
              "id": "c",
              "text": "Using JavaScript to create the element dynamically"
            },
            {
              "id": "d",
              "text": "There is no correct approach in HTML"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content."
        },
        {
          "id": "html-ch30-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Symbols & Icons is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch30-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch30-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["html-ch29"],
    keyPoints: ["HTML Symbols & Icons plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch31",
    courseId: "html",
    title: "HTML Emojis & UTF-8",
    order: 31,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Emojis & UTF-8?\n\nHTML Emojis & UTF-8 is an important part of web development — how HTML handles text representation, special characters, and internationalization. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Emojis & UTF-8 plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Emojis & UTF-8 — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Emojis & UTF-8</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Emojis & UTF-8\n\nHow HTML handles text representation, special characters, and internationalization. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Emojis & UTF-8, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Emojis & UTF-8:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Emojis & UTF-8 forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Emojis & UTF-8\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Emojis & UTF-8 is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch31-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct HTML for creating a HTML Emojis & UTF-8?",
          "options": [
            {
              "id": "a",
              "text": "Using the appropriate semantic HTML element"
            },
            {
              "id": "b",
              "text": "Using a generic <div> with a class name"
            },
            {
              "id": "c",
              "text": "Using JavaScript to create the element dynamically"
            },
            {
              "id": "d",
              "text": "There is no correct approach in HTML"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content."
        },
        {
          "id": "html-ch31-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Emojis & UTF-8 is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch31-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch31-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["html-ch30"],
    keyPoints: ["HTML Emojis & UTF-8 plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch32",
    courseId: "html",
    title: "HTML Charset Declaration",
    order: 32,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Charset Declaration?\n\nHTML Charset Declaration is an important part of web development — how HTML handles text representation, special characters, and internationalization. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Charset Declaration plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Charset Declaration — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Charset Declaration</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Charset Declaration\n\nHow HTML handles text representation, special characters, and internationalization. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Charset Declaration, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Charset Declaration:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Charset Declaration — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Charset Declaration\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Charset Declaration is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch32-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct HTML for creating a HTML Charset Declaration?",
          "options": [
            {
              "id": "a",
              "text": "Using the appropriate semantic HTML element"
            },
            {
              "id": "b",
              "text": "Using a generic <div> with a class name"
            },
            {
              "id": "c",
              "text": "Using JavaScript to create the element dynamically"
            },
            {
              "id": "d",
              "text": "There is no correct approach in HTML"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content."
        },
        {
          "id": "html-ch32-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Charset Declaration is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch32-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch32-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["html-ch31"],
    keyPoints: ["HTML Charset Declaration plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch33",
    courseId: "html",
    title: "HTML URL Encoding",
    order: 33,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML URL Encoding?\n\nHTML URL Encoding is an important part of web development — how HTML handles text representation, special characters, and internationalization. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML URL Encoding plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML URL Encoding — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML URL Encoding</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML URL Encoding\n\nHow HTML handles text representation, special characters, and internationalization. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML URL Encoding, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML URL Encoding:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML URL Encoding forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML URL Encoding\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML URL Encoding is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch33-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct HTML for creating a HTML URL Encoding?",
          "options": [
            {
              "id": "a",
              "text": "Using the appropriate semantic HTML element"
            },
            {
              "id": "b",
              "text": "Using a generic <div> with a class name"
            },
            {
              "id": "c",
              "text": "Using JavaScript to create the element dynamically"
            },
            {
              "id": "d",
              "text": "There is no correct approach in HTML"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content."
        },
        {
          "id": "html-ch33-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML URL Encoding is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch33-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch33-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["html-ch32"],
    keyPoints: ["HTML URL Encoding plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch34",
    courseId: "html",
    title: "HTML Language Attributes",
    order: 34,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Language Attributes?\n\nHTML Language Attributes is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Language Attributes plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Language Attributes — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Language Attributes — Example</title>\n</head>\n<body>\n  <!-- Your HTML Language Attributes content goes here -->\n  <main>\n    <h1>Learning HTML Language Attributes</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Language Attributes\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Language Attributes:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Language Attributes — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Language Attributes is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch34-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch34-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch34-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch34-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch34-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["html-ch33"],
    keyPoints: ["HTML Language Attributes plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch35",
    courseId: "html",
    title: "HTML Bidirectional Text",
    order: 35,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Bidirectional Text?\n\nHTML Bidirectional Text is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Bidirectional Text plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Bidirectional Text — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Bidirectional Text</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Bidirectional Text\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Bidirectional Text:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Bidirectional Text forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Bidirectional Text is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch35-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch35-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch35-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch35-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch35-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["html-ch34"],
    keyPoints: ["HTML Bidirectional Text plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch36",
    courseId: "html",
    title: "HTML Code & Pre Elements",
    order: 36,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Code & Pre Elements?\n\nHTML Code & Pre Elements is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Code & Pre Elements plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Code & Pre Elements — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Code & Pre Elements — Example</title>\n</head>\n<body>\n  <!-- Your HTML Code & Pre Elements content goes here -->\n  <main>\n    <h1>Learning HTML Code & Pre Elements</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Code & Pre Elements\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Code & Pre Elements:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Code & Pre Elements — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Code & Pre Elements is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch36-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch36-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch36-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch36-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch36-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["html-ch35"],
    keyPoints: ["HTML Code & Pre Elements plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch37",
    courseId: "html",
    title: "HTML Forms Overview",
    order: 37,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Forms Overview?\n\nHTML Forms Overview is an important part of web development — interactive elements that collect user input and send data to servers. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Forms Overview plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Forms Overview — Form example:",
              "content": "<form action=\"/submit\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Your Details</legend>\n    <label for=\"name\">Full Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required minlength=\"2\" placeholder=\"Enter your name\">\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"you@example.com\">\n    \n    <label for=\"country\">Country:</label>\n    <select id=\"country\" name=\"country\">\n      <option value=\"\">Select...</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n    </select>\n    \n    <button type=\"submit\">Submit</button>\n  </fieldset>\n</form>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Forms Overview\n\nInteractive elements that collect user input and send data to servers. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always associate labels with inputs using the \"for\" attribute matching the input's \"id\". This improves accessibility — clicking the label focuses the input. Use \"fieldset\" and \"legend\" to group related form controls."
          },
          {
              "type": "text",
              "content": "## Form Best Practices\n\nFollow these guidelines for forms:\n\n1. **Label every input** — Use proper <label> elements with \"for\" attributes\n2. **Provide helpful validation** — Use HTML5 validation attributes (required, pattern, min, max)\n3. **Show clear error messages** — Place errors inline near the relevant field\n4. **Use appropriate input types** — type=\"email\", type=\"tel\", type=\"url\" trigger correct mobile keyboards\n5. **Design for errors** — Form submissions fail. Re-populate fields, highlight errors, keep the user's data"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Forms Overview forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with forms is forgetting to associate labels with inputs, or using placeholder text instead of labels. Placeholders disappear when the user types, making it hard to remember what a field is for."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: HTML Forms Guide** — Comprehensive form element documentation\n2. **A11y Project: Form Accessibility** — Accessible form patterns\n3. **Smashing Magazine: Form Design** — UX best practices for forms\n4. **WebAIM: Creating Accessible Forms** — Screen reader-friendly form design\n5. **HTML Spec: Forms** — The official forms specification"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Forms Overview is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch37-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which attribute specifies that an input field must be filled out?",
          "options": [
            {
              "id": "a",
              "text": "required"
            },
            {
              "id": "b",
              "text": "mandatory"
            },
            {
              "id": "c",
              "text": "validate"
            },
            {
              "id": "d",
              "text": "must"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The 'required' attribute specifies that an input field must be filled out before submitting the form."
        },
        {
          "id": "html-ch37-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'placeholder' attribute should replace the <label> element for form accessibility.",
          "correctAnswer": false,
          "explanation": "Placeholders disappear when users type, making them unsuitable as label replacements. Always use both label (visible) and placeholder (hint)."
        },
        {
          "id": "html-ch37-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "Which input type shows a date picker on mobile browsers?",
          "options": [
            {
              "id": "a",
              "text": "type=\"date\""
            },
            {
              "id": "b",
              "text": "type=\"calendar\""
            },
            {
              "id": "c",
              "text": "type=\"datetime\""
            },
            {
              "id": "d",
              "text": "type=\"picker\""
            }
          ],
          "correctAnswer": "a",
          "explanation": "type=\"date\" shows a native date picker on supported browsers and triggers the date keyboard on mobile devices."
        },
        {
          "id": "html-ch37-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch37-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["html-ch36"],
    keyPoints: ["HTML Forms Overview plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch38",
    courseId: "html",
    title: "HTML Form Attributes (Action, Method)",
    order: 38,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Form Attributes (Action, Method)?\n\nHTML Form Attributes (Action, Method) is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Form Attributes (Action, Method) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Form Attributes (Action, Method) — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Form Attributes (Action, Method) — Example</title>\n</head>\n<body>\n  <!-- Your HTML Form Attributes (Action, Method) content goes here -->\n  <main>\n    <h1>Learning HTML Form Attributes (Action, Method)</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Form Attributes (Action, Method)\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Form Attributes (Action, Method):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Form Attributes (Action, Method) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Form Attributes (Action, Method) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch38-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch38-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch38-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch38-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch38-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["html-ch37"],
    keyPoints: ["HTML Form Attributes (Action, Method) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch39",
    courseId: "html",
    title: "HTML Form Elements (Input, Select, Textarea)",
    order: 39,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Form Elements (Input, Select, Textarea)?\n\nHTML Form Elements (Input, Select, Textarea) is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Form Elements (Input, Select, Textarea) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Form Elements (Input, Select, Textarea) — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Form Elements (Input, Select, Textarea) — Example</title>\n</head>\n<body>\n  <!-- Your HTML Form Elements (Input, Select, Textarea) content goes here -->\n  <main>\n    <h1>Learning HTML Form Elements (Input, Select, Textarea)</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Form Elements (Input, Select, Textarea)\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Form Elements (Input, Select, Textarea):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Form Elements (Input, Select, Textarea) forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Form Elements (Input, Select, Textarea) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch39-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch39-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch39-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch39-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch39-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["html-ch38"],
    keyPoints: ["HTML Form Elements (Input, Select, Textarea) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch40",
    courseId: "html",
    title: "HTML Input Types (Text, Password, Email)",
    order: 40,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Input Types (Text, Password, Email)?\n\nHTML Input Types (Text, Password, Email) is an important part of web development — interactive elements that collect user input and send data to servers. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Input Types (Text, Password, Email) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Input Types (Text, Password, Email) — Form example:",
              "content": "<form action=\"/submit\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Your Details</legend>\n    <label for=\"name\">Full Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required minlength=\"2\" placeholder=\"Enter your name\">\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"you@example.com\">\n    \n    <label for=\"country\">Country:</label>\n    <select id=\"country\" name=\"country\">\n      <option value=\"\">Select...</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n    </select>\n    \n    <button type=\"submit\">Submit</button>\n  </fieldset>\n</form>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Input Types (Text, Password, Email)\n\nInteractive elements that collect user input and send data to servers. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always associate labels with inputs using the \"for\" attribute matching the input's \"id\". This improves accessibility — clicking the label focuses the input. Use \"fieldset\" and \"legend\" to group related form controls."
          },
          {
              "type": "text",
              "content": "## Form Best Practices\n\nFollow these guidelines for forms:\n\n1. **Label every input** — Use proper <label> elements with \"for\" attributes\n2. **Provide helpful validation** — Use HTML5 validation attributes (required, pattern, min, max)\n3. **Show clear error messages** — Place errors inline near the relevant field\n4. **Use appropriate input types** — type=\"email\", type=\"tel\", type=\"url\" trigger correct mobile keyboards\n5. **Design for errors** — Form submissions fail. Re-populate fields, highlight errors, keep the user's data"
          },
          {
              "type": "comparison",
              "title": "HTML Input Types (Text, Password, Email) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with forms is forgetting to associate labels with inputs, or using placeholder text instead of labels. Placeholders disappear when the user types, making it hard to remember what a field is for."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: HTML Forms Guide** — Comprehensive form element documentation\n2. **A11y Project: Form Accessibility** — Accessible form patterns\n3. **Smashing Magazine: Form Design** — UX best practices for forms\n4. **WebAIM: Creating Accessible Forms** — Screen reader-friendly form design\n5. **HTML Spec: Forms** — The official forms specification"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Input Types (Text, Password, Email) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch40-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which attribute specifies that an input field must be filled out?",
          "options": [
            {
              "id": "a",
              "text": "required"
            },
            {
              "id": "b",
              "text": "mandatory"
            },
            {
              "id": "c",
              "text": "validate"
            },
            {
              "id": "d",
              "text": "must"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The 'required' attribute specifies that an input field must be filled out before submitting the form."
        },
        {
          "id": "html-ch40-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'placeholder' attribute should replace the <label> element for form accessibility.",
          "correctAnswer": false,
          "explanation": "Placeholders disappear when users type, making them unsuitable as label replacements. Always use both label (visible) and placeholder (hint)."
        },
        {
          "id": "html-ch40-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "Which input type shows a date picker on mobile browsers?",
          "options": [
            {
              "id": "a",
              "text": "type=\"date\""
            },
            {
              "id": "b",
              "text": "type=\"calendar\""
            },
            {
              "id": "c",
              "text": "type=\"datetime\""
            },
            {
              "id": "d",
              "text": "type=\"picker\""
            }
          ],
          "correctAnswer": "a",
          "explanation": "type=\"date\" shows a native date picker on supported browsers and triggers the date keyboard on mobile devices."
        },
        {
          "id": "html-ch40-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch40-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["html-ch39"],
    keyPoints: ["HTML Input Types (Text, Password, Email) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch41",
    courseId: "html",
    title: "HTML Input Types (Number, Range, Date)",
    order: 41,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Input Types (Number, Range, Date)?\n\nHTML Input Types (Number, Range, Date) is an important part of web development — interactive elements that collect user input and send data to servers. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Input Types (Number, Range, Date) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Input Types (Number, Range, Date) — Form example:",
              "content": "<form action=\"/submit\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Your Details</legend>\n    <label for=\"name\">Full Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required minlength=\"2\" placeholder=\"Enter your name\">\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"you@example.com\">\n    \n    <label for=\"country\">Country:</label>\n    <select id=\"country\" name=\"country\">\n      <option value=\"\">Select...</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n    </select>\n    \n    <button type=\"submit\">Submit</button>\n  </fieldset>\n</form>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Input Types (Number, Range, Date)\n\nInteractive elements that collect user input and send data to servers. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always associate labels with inputs using the \"for\" attribute matching the input's \"id\". This improves accessibility — clicking the label focuses the input. Use \"fieldset\" and \"legend\" to group related form controls."
          },
          {
              "type": "text",
              "content": "## Form Best Practices\n\nFollow these guidelines for forms:\n\n1. **Label every input** — Use proper <label> elements with \"for\" attributes\n2. **Provide helpful validation** — Use HTML5 validation attributes (required, pattern, min, max)\n3. **Show clear error messages** — Place errors inline near the relevant field\n4. **Use appropriate input types** — type=\"email\", type=\"tel\", type=\"url\" trigger correct mobile keyboards\n5. **Design for errors** — Form submissions fail. Re-populate fields, highlight errors, keep the user's data"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Input Types (Number, Range, Date) forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with forms is forgetting to associate labels with inputs, or using placeholder text instead of labels. Placeholders disappear when the user types, making it hard to remember what a field is for."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: HTML Forms Guide** — Comprehensive form element documentation\n2. **A11y Project: Form Accessibility** — Accessible form patterns\n3. **Smashing Magazine: Form Design** — UX best practices for forms\n4. **WebAIM: Creating Accessible Forms** — Screen reader-friendly form design\n5. **HTML Spec: Forms** — The official forms specification"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Input Types (Number, Range, Date) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch41-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which attribute specifies that an input field must be filled out?",
          "options": [
            {
              "id": "a",
              "text": "required"
            },
            {
              "id": "b",
              "text": "mandatory"
            },
            {
              "id": "c",
              "text": "validate"
            },
            {
              "id": "d",
              "text": "must"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The 'required' attribute specifies that an input field must be filled out before submitting the form."
        },
        {
          "id": "html-ch41-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'placeholder' attribute should replace the <label> element for form accessibility.",
          "correctAnswer": false,
          "explanation": "Placeholders disappear when users type, making them unsuitable as label replacements. Always use both label (visible) and placeholder (hint)."
        },
        {
          "id": "html-ch41-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "Which input type shows a date picker on mobile browsers?",
          "options": [
            {
              "id": "a",
              "text": "type=\"date\""
            },
            {
              "id": "b",
              "text": "type=\"calendar\""
            },
            {
              "id": "c",
              "text": "type=\"datetime\""
            },
            {
              "id": "d",
              "text": "type=\"picker\""
            }
          ],
          "correctAnswer": "a",
          "explanation": "type=\"date\" shows a native date picker on supported browsers and triggers the date keyboard on mobile devices."
        },
        {
          "id": "html-ch41-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch41-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["html-ch40"],
    keyPoints: ["HTML Input Types (Number, Range, Date) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch42",
    courseId: "html",
    title: "HTML Input Types (Checkbox, Radio, File)",
    order: 42,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Input Types (Checkbox, Radio, File)?\n\nHTML Input Types (Checkbox, Radio, File) is an important part of web development — interactive elements that collect user input and send data to servers. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Input Types (Checkbox, Radio, File) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Input Types (Checkbox, Radio, File) — Form example:",
              "content": "<form action=\"/submit\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Your Details</legend>\n    <label for=\"name\">Full Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required minlength=\"2\" placeholder=\"Enter your name\">\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"you@example.com\">\n    \n    <label for=\"country\">Country:</label>\n    <select id=\"country\" name=\"country\">\n      <option value=\"\">Select...</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n    </select>\n    \n    <button type=\"submit\">Submit</button>\n  </fieldset>\n</form>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Input Types (Checkbox, Radio, File)\n\nInteractive elements that collect user input and send data to servers. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always associate labels with inputs using the \"for\" attribute matching the input's \"id\". This improves accessibility — clicking the label focuses the input. Use \"fieldset\" and \"legend\" to group related form controls."
          },
          {
              "type": "text",
              "content": "## Form Best Practices\n\nFollow these guidelines for forms:\n\n1. **Label every input** — Use proper <label> elements with \"for\" attributes\n2. **Provide helpful validation** — Use HTML5 validation attributes (required, pattern, min, max)\n3. **Show clear error messages** — Place errors inline near the relevant field\n4. **Use appropriate input types** — type=\"email\", type=\"tel\", type=\"url\" trigger correct mobile keyboards\n5. **Design for errors** — Form submissions fail. Re-populate fields, highlight errors, keep the user's data"
          },
          {
              "type": "comparison",
              "title": "HTML Input Types (Checkbox, Radio, File) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with forms is forgetting to associate labels with inputs, or using placeholder text instead of labels. Placeholders disappear when the user types, making it hard to remember what a field is for."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: HTML Forms Guide** — Comprehensive form element documentation\n2. **A11y Project: Form Accessibility** — Accessible form patterns\n3. **Smashing Magazine: Form Design** — UX best practices for forms\n4. **WebAIM: Creating Accessible Forms** — Screen reader-friendly form design\n5. **HTML Spec: Forms** — The official forms specification"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Input Types (Checkbox, Radio, File) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch42-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which attribute specifies that an input field must be filled out?",
          "options": [
            {
              "id": "a",
              "text": "required"
            },
            {
              "id": "b",
              "text": "mandatory"
            },
            {
              "id": "c",
              "text": "validate"
            },
            {
              "id": "d",
              "text": "must"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The 'required' attribute specifies that an input field must be filled out before submitting the form."
        },
        {
          "id": "html-ch42-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'placeholder' attribute should replace the <label> element for form accessibility.",
          "correctAnswer": false,
          "explanation": "Placeholders disappear when users type, making them unsuitable as label replacements. Always use both label (visible) and placeholder (hint)."
        },
        {
          "id": "html-ch42-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "Which input type shows a date picker on mobile browsers?",
          "options": [
            {
              "id": "a",
              "text": "type=\"date\""
            },
            {
              "id": "b",
              "text": "type=\"calendar\""
            },
            {
              "id": "c",
              "text": "type=\"datetime\""
            },
            {
              "id": "d",
              "text": "type=\"picker\""
            }
          ],
          "correctAnswer": "a",
          "explanation": "type=\"date\" shows a native date picker on supported browsers and triggers the date keyboard on mobile devices."
        },
        {
          "id": "html-ch42-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch42-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["html-ch41"],
    keyPoints: ["HTML Input Types (Checkbox, Radio, File) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch43",
    courseId: "html",
    title: "HTML Input Attributes (Placeholder, Required, Pattern)",
    order: 43,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Input Attributes (Placeholder, Required, Pattern)?\n\nHTML Input Attributes (Placeholder, Required, Pattern) is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Input Attributes (Placeholder, Required, Pattern) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Input Attributes (Placeholder, Required, Pattern) — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Input Attributes (Placeholder, Required, Pattern) — Example</title>\n</head>\n<body>\n  <!-- Your HTML Input Attributes (Placeholder, Required, Pattern) content goes here -->\n  <main>\n    <h1>Learning HTML Input Attributes (Placeholder, Required, Pattern)</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Input Attributes (Placeholder, Required, Pattern)\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Input Attributes (Placeholder, Required, Pattern):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Input Attributes (Placeholder, Required, Pattern) forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Input Attributes (Placeholder, Required, Pattern) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch43-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch43-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch43-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch43-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch43-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["html-ch42"],
    keyPoints: ["HTML Input Attributes (Placeholder, Required, Pattern) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch44",
    courseId: "html",
    title: "HTML Select Menus & Options",
    order: 44,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Select Menus & Options?\n\nHTML Select Menus & Options is an important part of web development — interactive elements that collect user input and send data to servers. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Select Menus & Options plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Select Menus & Options — Form example:",
              "content": "<form action=\"/submit\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Your Details</legend>\n    <label for=\"name\">Full Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required minlength=\"2\" placeholder=\"Enter your name\">\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"you@example.com\">\n    \n    <label for=\"country\">Country:</label>\n    <select id=\"country\" name=\"country\">\n      <option value=\"\">Select...</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n    </select>\n    \n    <button type=\"submit\">Submit</button>\n  </fieldset>\n</form>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Select Menus & Options\n\nInteractive elements that collect user input and send data to servers. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always associate labels with inputs using the \"for\" attribute matching the input's \"id\". This improves accessibility — clicking the label focuses the input. Use \"fieldset\" and \"legend\" to group related form controls."
          },
          {
              "type": "text",
              "content": "## Form Best Practices\n\nFollow these guidelines for forms:\n\n1. **Label every input** — Use proper <label> elements with \"for\" attributes\n2. **Provide helpful validation** — Use HTML5 validation attributes (required, pattern, min, max)\n3. **Show clear error messages** — Place errors inline near the relevant field\n4. **Use appropriate input types** — type=\"email\", type=\"tel\", type=\"url\" trigger correct mobile keyboards\n5. **Design for errors** — Form submissions fail. Re-populate fields, highlight errors, keep the user's data"
          },
          {
              "type": "comparison",
              "title": "HTML Select Menus & Options — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with forms is forgetting to associate labels with inputs, or using placeholder text instead of labels. Placeholders disappear when the user types, making it hard to remember what a field is for."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: HTML Forms Guide** — Comprehensive form element documentation\n2. **A11y Project: Form Accessibility** — Accessible form patterns\n3. **Smashing Magazine: Form Design** — UX best practices for forms\n4. **WebAIM: Creating Accessible Forms** — Screen reader-friendly form design\n5. **HTML Spec: Forms** — The official forms specification"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Select Menus & Options is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch44-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which attribute specifies that an input field must be filled out?",
          "options": [
            {
              "id": "a",
              "text": "required"
            },
            {
              "id": "b",
              "text": "mandatory"
            },
            {
              "id": "c",
              "text": "validate"
            },
            {
              "id": "d",
              "text": "must"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The 'required' attribute specifies that an input field must be filled out before submitting the form."
        },
        {
          "id": "html-ch44-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'placeholder' attribute should replace the <label> element for form accessibility.",
          "correctAnswer": false,
          "explanation": "Placeholders disappear when users type, making them unsuitable as label replacements. Always use both label (visible) and placeholder (hint)."
        },
        {
          "id": "html-ch44-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "Which input type shows a date picker on mobile browsers?",
          "options": [
            {
              "id": "a",
              "text": "type=\"date\""
            },
            {
              "id": "b",
              "text": "type=\"calendar\""
            },
            {
              "id": "c",
              "text": "type=\"datetime\""
            },
            {
              "id": "d",
              "text": "type=\"picker\""
            }
          ],
          "correctAnswer": "a",
          "explanation": "type=\"date\" shows a native date picker on supported browsers and triggers the date keyboard on mobile devices."
        },
        {
          "id": "html-ch44-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch44-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["html-ch43"],
    keyPoints: ["HTML Select Menus & Options plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch45",
    courseId: "html",
    title: "HTML Textareas & Multi-line Input",
    order: 45,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Textareas & Multi-line Input?\n\nHTML Textareas & Multi-line Input is an important part of web development — interactive elements that collect user input and send data to servers. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Textareas & Multi-line Input plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Textareas & Multi-line Input — Form example:",
              "content": "<form action=\"/submit\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Your Details</legend>\n    <label for=\"name\">Full Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required minlength=\"2\" placeholder=\"Enter your name\">\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"you@example.com\">\n    \n    <label for=\"country\">Country:</label>\n    <select id=\"country\" name=\"country\">\n      <option value=\"\">Select...</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n    </select>\n    \n    <button type=\"submit\">Submit</button>\n  </fieldset>\n</form>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Textareas & Multi-line Input\n\nInteractive elements that collect user input and send data to servers. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always associate labels with inputs using the \"for\" attribute matching the input's \"id\". This improves accessibility — clicking the label focuses the input. Use \"fieldset\" and \"legend\" to group related form controls."
          },
          {
              "type": "text",
              "content": "## Form Best Practices\n\nFollow these guidelines for forms:\n\n1. **Label every input** — Use proper <label> elements with \"for\" attributes\n2. **Provide helpful validation** — Use HTML5 validation attributes (required, pattern, min, max)\n3. **Show clear error messages** — Place errors inline near the relevant field\n4. **Use appropriate input types** — type=\"email\", type=\"tel\", type=\"url\" trigger correct mobile keyboards\n5. **Design for errors** — Form submissions fail. Re-populate fields, highlight errors, keep the user's data"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Textareas & Multi-line Input forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with forms is forgetting to associate labels with inputs, or using placeholder text instead of labels. Placeholders disappear when the user types, making it hard to remember what a field is for."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: HTML Forms Guide** — Comprehensive form element documentation\n2. **A11y Project: Form Accessibility** — Accessible form patterns\n3. **Smashing Magazine: Form Design** — UX best practices for forms\n4. **WebAIM: Creating Accessible Forms** — Screen reader-friendly form design\n5. **HTML Spec: Forms** — The official forms specification"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Textareas & Multi-line Input is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch45-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which attribute specifies that an input field must be filled out?",
          "options": [
            {
              "id": "a",
              "text": "required"
            },
            {
              "id": "b",
              "text": "mandatory"
            },
            {
              "id": "c",
              "text": "validate"
            },
            {
              "id": "d",
              "text": "must"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The 'required' attribute specifies that an input field must be filled out before submitting the form."
        },
        {
          "id": "html-ch45-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'placeholder' attribute should replace the <label> element for form accessibility.",
          "correctAnswer": false,
          "explanation": "Placeholders disappear when users type, making them unsuitable as label replacements. Always use both label (visible) and placeholder (hint)."
        },
        {
          "id": "html-ch45-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "Which input type shows a date picker on mobile browsers?",
          "options": [
            {
              "id": "a",
              "text": "type=\"date\""
            },
            {
              "id": "b",
              "text": "type=\"calendar\""
            },
            {
              "id": "c",
              "text": "type=\"datetime\""
            },
            {
              "id": "d",
              "text": "type=\"picker\""
            }
          ],
          "correctAnswer": "a",
          "explanation": "type=\"date\" shows a native date picker on supported browsers and triggers the date keyboard on mobile devices."
        },
        {
          "id": "html-ch45-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch45-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["html-ch44"],
    keyPoints: ["HTML Textareas & Multi-line Input plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch46",
    courseId: "html",
    title: "HTML Form Validation (Client-Side)",
    order: 46,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Form Validation (Client-Side)?\n\nHTML Form Validation (Client-Side) is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Form Validation (Client-Side) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Form Validation (Client-Side) — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Form Validation (Client-Side)</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Form Validation (Client-Side)\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Form Validation (Client-Side):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Form Validation (Client-Side) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Form Validation (Client-Side) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch46-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch46-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch46-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch46-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch46-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["html-ch45"],
    keyPoints: ["HTML Form Validation (Client-Side) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch47",
    courseId: "html",
    title: "HTML Form Styling & UX",
    order: 47,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Form Styling & UX?\n\nHTML Form Styling & UX is an important part of web development — interactive elements that collect user input and send data to servers. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Form Styling & UX plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Form Styling & UX — Form example:",
              "content": "<form action=\"/submit\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Your Details</legend>\n    <label for=\"name\">Full Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required minlength=\"2\" placeholder=\"Enter your name\">\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"you@example.com\">\n    \n    <label for=\"country\">Country:</label>\n    <select id=\"country\" name=\"country\">\n      <option value=\"\">Select...</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n    </select>\n    \n    <button type=\"submit\">Submit</button>\n  </fieldset>\n</form>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Form Styling & UX\n\nInteractive elements that collect user input and send data to servers. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always associate labels with inputs using the \"for\" attribute matching the input's \"id\". This improves accessibility — clicking the label focuses the input. Use \"fieldset\" and \"legend\" to group related form controls."
          },
          {
              "type": "text",
              "content": "## Form Best Practices\n\nFollow these guidelines for forms:\n\n1. **Label every input** — Use proper <label> elements with \"for\" attributes\n2. **Provide helpful validation** — Use HTML5 validation attributes (required, pattern, min, max)\n3. **Show clear error messages** — Place errors inline near the relevant field\n4. **Use appropriate input types** — type=\"email\", type=\"tel\", type=\"url\" trigger correct mobile keyboards\n5. **Design for errors** — Form submissions fail. Re-populate fields, highlight errors, keep the user's data"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Form Styling & UX forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with forms is forgetting to associate labels with inputs, or using placeholder text instead of labels. Placeholders disappear when the user types, making it hard to remember what a field is for."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: HTML Forms Guide** — Comprehensive form element documentation\n2. **A11y Project: Form Accessibility** — Accessible form patterns\n3. **Smashing Magazine: Form Design** — UX best practices for forms\n4. **WebAIM: Creating Accessible Forms** — Screen reader-friendly form design\n5. **HTML Spec: Forms** — The official forms specification"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Form Styling & UX is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch47-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which attribute specifies that an input field must be filled out?",
          "options": [
            {
              "id": "a",
              "text": "required"
            },
            {
              "id": "b",
              "text": "mandatory"
            },
            {
              "id": "c",
              "text": "validate"
            },
            {
              "id": "d",
              "text": "must"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The 'required' attribute specifies that an input field must be filled out before submitting the form."
        },
        {
          "id": "html-ch47-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'placeholder' attribute should replace the <label> element for form accessibility.",
          "correctAnswer": false,
          "explanation": "Placeholders disappear when users type, making them unsuitable as label replacements. Always use both label (visible) and placeholder (hint)."
        },
        {
          "id": "html-ch47-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "Which input type shows a date picker on mobile browsers?",
          "options": [
            {
              "id": "a",
              "text": "type=\"date\""
            },
            {
              "id": "b",
              "text": "type=\"calendar\""
            },
            {
              "id": "c",
              "text": "type=\"datetime\""
            },
            {
              "id": "d",
              "text": "type=\"picker\""
            }
          ],
          "correctAnswer": "a",
          "explanation": "type=\"date\" shows a native date picker on supported browsers and triggers the date keyboard on mobile devices."
        },
        {
          "id": "html-ch47-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch47-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["html-ch46"],
    keyPoints: ["HTML Form Styling & UX plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch48",
    courseId: "html",
    title: "HTML Fieldset & Legend",
    order: 48,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Fieldset & Legend?\n\nHTML Fieldset & Legend is an important part of web development — interactive elements that collect user input and send data to servers. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Fieldset & Legend plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Fieldset & Legend — Form example:",
              "content": "<form action=\"/submit\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Your Details</legend>\n    <label for=\"name\">Full Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required minlength=\"2\" placeholder=\"Enter your name\">\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"you@example.com\">\n    \n    <label for=\"country\">Country:</label>\n    <select id=\"country\" name=\"country\">\n      <option value=\"\">Select...</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n    </select>\n    \n    <button type=\"submit\">Submit</button>\n  </fieldset>\n</form>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Fieldset & Legend\n\nInteractive elements that collect user input and send data to servers. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always associate labels with inputs using the \"for\" attribute matching the input's \"id\". This improves accessibility — clicking the label focuses the input. Use \"fieldset\" and \"legend\" to group related form controls."
          },
          {
              "type": "text",
              "content": "## Form Best Practices\n\nFollow these guidelines for forms:\n\n1. **Label every input** — Use proper <label> elements with \"for\" attributes\n2. **Provide helpful validation** — Use HTML5 validation attributes (required, pattern, min, max)\n3. **Show clear error messages** — Place errors inline near the relevant field\n4. **Use appropriate input types** — type=\"email\", type=\"tel\", type=\"url\" trigger correct mobile keyboards\n5. **Design for errors** — Form submissions fail. Re-populate fields, highlight errors, keep the user's data"
          },
          {
              "type": "comparison",
              "title": "HTML Fieldset & Legend — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with forms is forgetting to associate labels with inputs, or using placeholder text instead of labels. Placeholders disappear when the user types, making it hard to remember what a field is for."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: HTML Forms Guide** — Comprehensive form element documentation\n2. **A11y Project: Form Accessibility** — Accessible form patterns\n3. **Smashing Magazine: Form Design** — UX best practices for forms\n4. **WebAIM: Creating Accessible Forms** — Screen reader-friendly form design\n5. **HTML Spec: Forms** — The official forms specification"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Fieldset & Legend is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch48-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which attribute specifies that an input field must be filled out?",
          "options": [
            {
              "id": "a",
              "text": "required"
            },
            {
              "id": "b",
              "text": "mandatory"
            },
            {
              "id": "c",
              "text": "validate"
            },
            {
              "id": "d",
              "text": "must"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The 'required' attribute specifies that an input field must be filled out before submitting the form."
        },
        {
          "id": "html-ch48-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'placeholder' attribute should replace the <label> element for form accessibility.",
          "correctAnswer": false,
          "explanation": "Placeholders disappear when users type, making them unsuitable as label replacements. Always use both label (visible) and placeholder (hint)."
        },
        {
          "id": "html-ch48-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "Which input type shows a date picker on mobile browsers?",
          "options": [
            {
              "id": "a",
              "text": "type=\"date\""
            },
            {
              "id": "b",
              "text": "type=\"calendar\""
            },
            {
              "id": "c",
              "text": "type=\"datetime\""
            },
            {
              "id": "d",
              "text": "type=\"picker\""
            }
          ],
          "correctAnswer": "a",
          "explanation": "type=\"date\" shows a native date picker on supported browsers and triggers the date keyboard on mobile devices."
        },
        {
          "id": "html-ch48-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch48-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["html-ch47"],
    keyPoints: ["HTML Fieldset & Legend plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch49",
    courseId: "html",
    title: "HTML Datalist & Autocomplete",
    order: 49,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Datalist & Autocomplete?\n\nHTML Datalist & Autocomplete is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Datalist & Autocomplete plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Datalist & Autocomplete — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Datalist & Autocomplete</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Datalist & Autocomplete\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Datalist & Autocomplete:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Datalist & Autocomplete forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Datalist & Autocomplete is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch49-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch49-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch49-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch49-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch49-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["html-ch48"],
    keyPoints: ["HTML Datalist & Autocomplete plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch50",
    courseId: "html",
    title: "HTML Form Security & Best Practices",
    order: 50,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Form Security & Best Practices?\n\nHTML Form Security & Best Practices is an important part of web development — interactive elements that collect user input and send data to servers. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Form Security & Best Practices plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Form Security & Best Practices — Form example:",
              "content": "<form action=\"/submit\" method=\"POST\" novalidate>\n  <fieldset>\n    <legend>Your Details</legend>\n    <label for=\"name\">Full Name:</label>\n    <input type=\"text\" id=\"name\" name=\"name\" required minlength=\"2\" placeholder=\"Enter your name\">\n    \n    <label for=\"email\">Email:</label>\n    <input type=\"email\" id=\"email\" name=\"email\" required placeholder=\"you@example.com\">\n    \n    <label for=\"country\">Country:</label>\n    <select id=\"country\" name=\"country\">\n      <option value=\"\">Select...</option>\n      <option value=\"us\">United States</option>\n      <option value=\"uk\">United Kingdom</option>\n    </select>\n    \n    <button type=\"submit\">Submit</button>\n  </fieldset>\n</form>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Form Security & Best Practices\n\nInteractive elements that collect user input and send data to servers. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always associate labels with inputs using the \"for\" attribute matching the input's \"id\". This improves accessibility — clicking the label focuses the input. Use \"fieldset\" and \"legend\" to group related form controls."
          },
          {
              "type": "text",
              "content": "## Form Best Practices\n\nFollow these guidelines for forms:\n\n1. **Label every input** — Use proper <label> elements with \"for\" attributes\n2. **Provide helpful validation** — Use HTML5 validation attributes (required, pattern, min, max)\n3. **Show clear error messages** — Place errors inline near the relevant field\n4. **Use appropriate input types** — type=\"email\", type=\"tel\", type=\"url\" trigger correct mobile keyboards\n5. **Design for errors** — Form submissions fail. Re-populate fields, highlight errors, keep the user's data"
          },
          {
              "type": "comparison",
              "title": "HTML Form Security & Best Practices — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with forms is forgetting to associate labels with inputs, or using placeholder text instead of labels. Placeholders disappear when the user types, making it hard to remember what a field is for."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: HTML Forms Guide** — Comprehensive form element documentation\n2. **A11y Project: Form Accessibility** — Accessible form patterns\n3. **Smashing Magazine: Form Design** — UX best practices for forms\n4. **WebAIM: Creating Accessible Forms** — Screen reader-friendly form design\n5. **HTML Spec: Forms** — The official forms specification"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Form Security & Best Practices is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch50-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which attribute specifies that an input field must be filled out?",
          "options": [
            {
              "id": "a",
              "text": "required"
            },
            {
              "id": "b",
              "text": "mandatory"
            },
            {
              "id": "c",
              "text": "validate"
            },
            {
              "id": "d",
              "text": "must"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The 'required' attribute specifies that an input field must be filled out before submitting the form."
        },
        {
          "id": "html-ch50-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'placeholder' attribute should replace the <label> element for form accessibility.",
          "correctAnswer": false,
          "explanation": "Placeholders disappear when users type, making them unsuitable as label replacements. Always use both label (visible) and placeholder (hint)."
        },
        {
          "id": "html-ch50-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "Which input type shows a date picker on mobile browsers?",
          "options": [
            {
              "id": "a",
              "text": "type=\"date\""
            },
            {
              "id": "b",
              "text": "type=\"calendar\""
            },
            {
              "id": "c",
              "text": "type=\"datetime\""
            },
            {
              "id": "d",
              "text": "type=\"picker\""
            }
          ],
          "correctAnswer": "a",
          "explanation": "type=\"date\" shows a native date picker on supported browsers and triggers the date keyboard on mobile devices."
        },
        {
          "id": "html-ch50-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch50-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["html-ch49"],
    keyPoints: ["HTML Form Security & Best Practices plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch51",
    courseId: "html",
    title: "HTML Canvas: Drawing Shapes",
    order: 51,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Canvas: Drawing Shapes?\n\nHTML Canvas: Drawing Shapes is an important part of web development — how HTML supports drawing, vector graphics, and mathematical notation directly in the browser. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Canvas: Drawing Shapes plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Canvas: Drawing Shapes — Media element:",
              "content": "<figure>\n  <!-- HTML Canvas: Drawing Shapes element -->\n  <video controls width=\"640\" poster=\"thumbnail.jpg\">\n    <source src=\"video.mp4\" type=\"video/mp4\">\n    <source src=\"video.webm\" type=\"video/webm\">\n    <track kind=\"captions\" src=\"captions.vtt\" srclang=\"en\" label=\"English\">\n    <p>Your browser does not support the video element.</p>\n  </video>\n  <figcaption>HTML Canvas: Drawing Shapes — A media demonstration</figcaption>\n</figure>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Canvas: Drawing Shapes\n\nHow HTML supports drawing, vector graphics, and mathematical notation directly in the browser. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Canvas: Drawing Shapes, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Best Practices for Embedded Content\n\nFollow these guidelines:\n\n1. **Provide fallbacks** — Always include fallback content between element tags\n2. **Use multiple formats** — Provide WebM and MP4 for video, different image resolutions\n3. **Add captions and subtitles** — Use <track> elements for accessibility\n4. **Optimize file sizes** — Compress media, use responsive images with srcset\n5. **Set dimensions** — Width and height prevent layout shifts (Cumulative Layout Shift)"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Canvas: Drawing Shapes forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Canvas: Drawing Shapes\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Canvas: Drawing Shapes is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch51-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to embed video content?",
          "options": [
            {
              "id": "a",
              "text": "<video>"
            },
            {
              "id": "b",
              "text": "<media>"
            },
            {
              "id": "c",
              "text": "<movie>"
            },
            {
              "id": "d",
              "text": "<embed>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <video> element is used to embed video content. It supports multiple source formats via <source> elements."
        },
        {
          "id": "html-ch51-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The alt attribute on images is optional and mainly used for SEO.",
          "correctAnswer": false,
          "explanation": "The alt attribute is required for accessibility. Screen readers read it aloud, and it displays when images fail to load. It also helps SEO but its primary purpose is accessibility."
        },
        {
          "id": "html-ch51-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch51-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["html-ch50"],
    keyPoints: ["HTML Canvas: Drawing Shapes plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch52",
    courseId: "html",
    title: "HTML Canvas: Paths & Text",
    order: 52,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Canvas: Paths & Text?\n\nHTML Canvas: Paths & Text is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Canvas: Paths & Text plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Canvas: Paths & Text — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Canvas: Paths & Text</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Canvas: Paths & Text\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Canvas: Paths & Text:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Canvas: Paths & Text — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Canvas: Paths & Text is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch52-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch52-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch52-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch52-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch52-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["html-ch51"],
    keyPoints: ["HTML Canvas: Paths & Text plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch53",
    courseId: "html",
    title: "HTML Canvas: Transformations & Animation",
    order: 53,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Canvas: Transformations & Animation?\n\nHTML Canvas: Transformations & Animation is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Canvas: Transformations & Animation plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Canvas: Transformations & Animation — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Canvas: Transformations & Animation — Example</title>\n</head>\n<body>\n  <!-- Your HTML Canvas: Transformations & Animation content goes here -->\n  <main>\n    <h1>Learning HTML Canvas: Transformations & Animation</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Canvas: Transformations & Animation\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Canvas: Transformations & Animation:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Canvas: Transformations & Animation forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Canvas: Transformations & Animation is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch53-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch53-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch53-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch53-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch53-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["html-ch52"],
    keyPoints: ["HTML Canvas: Transformations & Animation plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch54",
    courseId: "html",
    title: "HTML SVG: Scalable Vector Graphics",
    order: 54,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML SVG: Scalable Vector Graphics?\n\nHTML SVG: Scalable Vector Graphics is an important part of web development — how HTML supports drawing, vector graphics, and mathematical notation directly in the browser. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML SVG: Scalable Vector Graphics plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML SVG: Scalable Vector Graphics — Media element:",
              "content": "<figure>\n  <!-- HTML SVG: Scalable Vector Graphics element -->\n  <video controls width=\"640\" poster=\"thumbnail.jpg\">\n    <source src=\"video.mp4\" type=\"video/mp4\">\n    <source src=\"video.webm\" type=\"video/webm\">\n    <track kind=\"captions\" src=\"captions.vtt\" srclang=\"en\" label=\"English\">\n    <p>Your browser does not support the video element.</p>\n  </video>\n  <figcaption>HTML SVG: Scalable Vector Graphics — A media demonstration</figcaption>\n</figure>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML SVG: Scalable Vector Graphics\n\nHow HTML supports drawing, vector graphics, and mathematical notation directly in the browser. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML SVG: Scalable Vector Graphics, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Best Practices for Embedded Content\n\nFollow these guidelines:\n\n1. **Provide fallbacks** — Always include fallback content between element tags\n2. **Use multiple formats** — Provide WebM and MP4 for video, different image resolutions\n3. **Add captions and subtitles** — Use <track> elements for accessibility\n4. **Optimize file sizes** — Compress media, use responsive images with srcset\n5. **Set dimensions** — Width and height prevent layout shifts (Cumulative Layout Shift)"
          },
          {
              "type": "comparison",
              "title": "HTML SVG: Scalable Vector Graphics — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML SVG: Scalable Vector Graphics\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML SVG: Scalable Vector Graphics is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch54-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to embed video content?",
          "options": [
            {
              "id": "a",
              "text": "<video>"
            },
            {
              "id": "b",
              "text": "<media>"
            },
            {
              "id": "c",
              "text": "<movie>"
            },
            {
              "id": "d",
              "text": "<embed>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <video> element is used to embed video content. It supports multiple source formats via <source> elements."
        },
        {
          "id": "html-ch54-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The alt attribute on images is optional and mainly used for SEO.",
          "correctAnswer": false,
          "explanation": "The alt attribute is required for accessibility. Screen readers read it aloud, and it displays when images fail to load. It also helps SEO but its primary purpose is accessibility."
        },
        {
          "id": "html-ch54-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch54-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["html-ch53"],
    keyPoints: ["HTML SVG: Scalable Vector Graphics plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch55",
    courseId: "html",
    title: "HTML SVG: Shapes, Paths, Filters",
    order: 55,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML SVG: Shapes, Paths, Filters?\n\nHTML SVG: Shapes, Paths, Filters is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML SVG: Shapes, Paths, Filters plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML SVG: Shapes, Paths, Filters — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML SVG: Shapes, Paths, Filters</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML SVG: Shapes, Paths, Filters\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML SVG: Shapes, Paths, Filters:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML SVG: Shapes, Paths, Filters forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML SVG: Shapes, Paths, Filters is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch55-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch55-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch55-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch55-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch55-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["html-ch54"],
    keyPoints: ["HTML SVG: Shapes, Paths, Filters plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch56",
    courseId: "html",
    title: "HTML SVG: Animation & Interactivity",
    order: 56,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML SVG: Animation & Interactivity?\n\nHTML SVG: Animation & Interactivity is an important part of web development — how HTML supports drawing, vector graphics, and mathematical notation directly in the browser. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML SVG: Animation & Interactivity plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML SVG: Animation & Interactivity — Media element:",
              "content": "<figure>\n  <!-- HTML SVG: Animation & Interactivity element -->\n  <video controls width=\"640\" poster=\"thumbnail.jpg\">\n    <source src=\"video.mp4\" type=\"video/mp4\">\n    <source src=\"video.webm\" type=\"video/webm\">\n    <track kind=\"captions\" src=\"captions.vtt\" srclang=\"en\" label=\"English\">\n    <p>Your browser does not support the video element.</p>\n  </video>\n  <figcaption>HTML SVG: Animation & Interactivity — A media demonstration</figcaption>\n</figure>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML SVG: Animation & Interactivity\n\nHow HTML supports drawing, vector graphics, and mathematical notation directly in the browser. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML SVG: Animation & Interactivity, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Best Practices for Embedded Content\n\nFollow these guidelines:\n\n1. **Provide fallbacks** — Always include fallback content between element tags\n2. **Use multiple formats** — Provide WebM and MP4 for video, different image resolutions\n3. **Add captions and subtitles** — Use <track> elements for accessibility\n4. **Optimize file sizes** — Compress media, use responsive images with srcset\n5. **Set dimensions** — Width and height prevent layout shifts (Cumulative Layout Shift)"
          },
          {
              "type": "comparison",
              "title": "HTML SVG: Animation & Interactivity — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML SVG: Animation & Interactivity\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML SVG: Animation & Interactivity is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch56-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to embed video content?",
          "options": [
            {
              "id": "a",
              "text": "<video>"
            },
            {
              "id": "b",
              "text": "<media>"
            },
            {
              "id": "c",
              "text": "<movie>"
            },
            {
              "id": "d",
              "text": "<embed>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <video> element is used to embed video content. It supports multiple source formats via <source> elements."
        },
        {
          "id": "html-ch56-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The alt attribute on images is optional and mainly used for SEO.",
          "correctAnswer": false,
          "explanation": "The alt attribute is required for accessibility. Screen readers read it aloud, and it displays when images fail to load. It also helps SEO but its primary purpose is accessibility."
        },
        {
          "id": "html-ch56-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch56-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["html-ch55"],
    keyPoints: ["HTML SVG: Animation & Interactivity plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch57",
    courseId: "html",
    title: "HTML MathML for Mathematical Notation",
    order: 57,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML MathML for Mathematical Notation?\n\nHTML MathML for Mathematical Notation is an important part of web development — how HTML supports drawing, vector graphics, and mathematical notation directly in the browser. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML MathML for Mathematical Notation plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML MathML for Mathematical Notation — Media element:",
              "content": "<figure>\n  <!-- HTML MathML for Mathematical Notation element -->\n  <video controls width=\"640\" poster=\"thumbnail.jpg\">\n    <source src=\"video.mp4\" type=\"video/mp4\">\n    <source src=\"video.webm\" type=\"video/webm\">\n    <track kind=\"captions\" src=\"captions.vtt\" srclang=\"en\" label=\"English\">\n    <p>Your browser does not support the video element.</p>\n  </video>\n  <figcaption>HTML MathML for Mathematical Notation — A media demonstration</figcaption>\n</figure>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML MathML for Mathematical Notation\n\nHow HTML supports drawing, vector graphics, and mathematical notation directly in the browser. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML MathML for Mathematical Notation, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Best Practices for Embedded Content\n\nFollow these guidelines:\n\n1. **Provide fallbacks** — Always include fallback content between element tags\n2. **Use multiple formats** — Provide WebM and MP4 for video, different image resolutions\n3. **Add captions and subtitles** — Use <track> elements for accessibility\n4. **Optimize file sizes** — Compress media, use responsive images with srcset\n5. **Set dimensions** — Width and height prevent layout shifts (Cumulative Layout Shift)"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML MathML for Mathematical Notation forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML MathML for Mathematical Notation\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML MathML for Mathematical Notation is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch57-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to embed video content?",
          "options": [
            {
              "id": "a",
              "text": "<video>"
            },
            {
              "id": "b",
              "text": "<media>"
            },
            {
              "id": "c",
              "text": "<movie>"
            },
            {
              "id": "d",
              "text": "<embed>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <video> element is used to embed video content. It supports multiple source formats via <source> elements."
        },
        {
          "id": "html-ch57-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The alt attribute on images is optional and mainly used for SEO.",
          "correctAnswer": false,
          "explanation": "The alt attribute is required for accessibility. Screen readers read it aloud, and it displays when images fail to load. It also helps SEO but its primary purpose is accessibility."
        },
        {
          "id": "html-ch57-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch57-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["html-ch56"],
    keyPoints: ["HTML MathML for Mathematical Notation plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch58",
    courseId: "html",
    title: "HTML Image Maps & Clickable Regions",
    order: 58,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Image Maps & Clickable Regions?\n\nHTML Image Maps & Clickable Regions is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Image Maps & Clickable Regions plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Image Maps & Clickable Regions — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Image Maps & Clickable Regions — Example</title>\n</head>\n<body>\n  <!-- Your HTML Image Maps & Clickable Regions content goes here -->\n  <main>\n    <h1>Learning HTML Image Maps & Clickable Regions</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Image Maps & Clickable Regions\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Image Maps & Clickable Regions:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Image Maps & Clickable Regions — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Image Maps & Clickable Regions is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch58-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch58-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch58-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch58-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch58-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["html-ch57"],
    keyPoints: ["HTML Image Maps & Clickable Regions plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch59",
    courseId: "html",
    title: "HTML Video Element & Attributes",
    order: 59,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Video Element & Attributes?\n\nHTML Video Element & Attributes is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Video Element & Attributes plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Video Element & Attributes — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Video Element & Attributes — Example</title>\n</head>\n<body>\n  <!-- Your HTML Video Element & Attributes content goes here -->\n  <main>\n    <h1>Learning HTML Video Element & Attributes</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Video Element & Attributes\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Video Element & Attributes:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Video Element & Attributes forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Video Element & Attributes is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch59-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch59-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch59-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch59-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch59-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["html-ch58"],
    keyPoints: ["HTML Video Element & Attributes plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch60",
    courseId: "html",
    title: "HTML Video: Formats, Codecs, Captions",
    order: 60,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Video: Formats, Codecs, Captions?\n\nHTML Video: Formats, Codecs, Captions is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Video: Formats, Codecs, Captions plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Video: Formats, Codecs, Captions — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Video: Formats, Codecs, Captions — Example</title>\n</head>\n<body>\n  <!-- Your HTML Video: Formats, Codecs, Captions content goes here -->\n  <main>\n    <h1>Learning HTML Video: Formats, Codecs, Captions</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Video: Formats, Codecs, Captions\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Video: Formats, Codecs, Captions:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Video: Formats, Codecs, Captions — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Video: Formats, Codecs, Captions is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch60-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch60-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch60-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch60-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch60-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["html-ch59"],
    keyPoints: ["HTML Video: Formats, Codecs, Captions plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch61",
    courseId: "html",
    title: "HTML Audio Element & Attributes",
    order: 61,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Audio Element & Attributes?\n\nHTML Audio Element & Attributes is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Audio Element & Attributes plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Audio Element & Attributes — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Audio Element & Attributes — Example</title>\n</head>\n<body>\n  <!-- Your HTML Audio Element & Attributes content goes here -->\n  <main>\n    <h1>Learning HTML Audio Element & Attributes</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Audio Element & Attributes\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Audio Element & Attributes:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Audio Element & Attributes forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Audio Element & Attributes is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch61-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch61-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch61-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch61-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch61-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["html-ch60"],
    keyPoints: ["HTML Audio Element & Attributes plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch62",
    courseId: "html",
    title: "HTML Embedded YouTube & Vimeo",
    order: 62,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Embedded YouTube & Vimeo?\n\nHTML Embedded YouTube & Vimeo is an important part of web development — embedding and controlling video, audio, and rich media content on web pages. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Embedded YouTube & Vimeo plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Embedded YouTube & Vimeo — Media element:",
              "content": "<figure>\n  <!-- HTML Embedded YouTube & Vimeo element -->\n  <video controls width=\"640\" poster=\"thumbnail.jpg\">\n    <source src=\"video.mp4\" type=\"video/mp4\">\n    <source src=\"video.webm\" type=\"video/webm\">\n    <track kind=\"captions\" src=\"captions.vtt\" srclang=\"en\" label=\"English\">\n    <p>Your browser does not support the video element.</p>\n  </video>\n  <figcaption>HTML Embedded YouTube & Vimeo — A media demonstration</figcaption>\n</figure>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Embedded YouTube & Vimeo\n\nEmbedding and controlling video, audio, and rich media content on web pages. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Embedded YouTube & Vimeo, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Best Practices for Embedded Content\n\nFollow these guidelines:\n\n1. **Provide fallbacks** — Always include fallback content between element tags\n2. **Use multiple formats** — Provide WebM and MP4 for video, different image resolutions\n3. **Add captions and subtitles** — Use <track> elements for accessibility\n4. **Optimize file sizes** — Compress media, use responsive images with srcset\n5. **Set dimensions** — Width and height prevent layout shifts (Cumulative Layout Shift)"
          },
          {
              "type": "comparison",
              "title": "HTML Embedded YouTube & Vimeo — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Embedded YouTube & Vimeo\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Embedded YouTube & Vimeo is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch62-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to embed video content?",
          "options": [
            {
              "id": "a",
              "text": "<video>"
            },
            {
              "id": "b",
              "text": "<media>"
            },
            {
              "id": "c",
              "text": "<movie>"
            },
            {
              "id": "d",
              "text": "<embed>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <video> element is used to embed video content. It supports multiple source formats via <source> elements."
        },
        {
          "id": "html-ch62-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The alt attribute on images is optional and mainly used for SEO.",
          "correctAnswer": false,
          "explanation": "The alt attribute is required for accessibility. Screen readers read it aloud, and it displays when images fail to load. It also helps SEO but its primary purpose is accessibility."
        },
        {
          "id": "html-ch62-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch62-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["html-ch61"],
    keyPoints: ["HTML Embedded YouTube & Vimeo plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch63",
    courseId: "html",
    title: "HTML Picture Element & Responsive Images",
    order: 63,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Picture Element & Responsive Images?\n\nHTML Picture Element & Responsive Images is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Picture Element & Responsive Images plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Picture Element & Responsive Images — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Picture Element & Responsive Images — Example</title>\n</head>\n<body>\n  <!-- Your HTML Picture Element & Responsive Images content goes here -->\n  <main>\n    <h1>Learning HTML Picture Element & Responsive Images</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Picture Element & Responsive Images\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Picture Element & Responsive Images:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Picture Element & Responsive Images forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Picture Element & Responsive Images is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch63-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch63-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch63-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch63-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch63-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["html-ch62"],
    keyPoints: ["HTML Picture Element & Responsive Images plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch64",
    courseId: "html",
    title: "HTML Source & Track Elements",
    order: 64,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Source & Track Elements?\n\nHTML Source & Track Elements is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Source & Track Elements plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Source & Track Elements — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Source & Track Elements — Example</title>\n</head>\n<body>\n  <!-- Your HTML Source & Track Elements content goes here -->\n  <main>\n    <h1>Learning HTML Source & Track Elements</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Source & Track Elements\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Source & Track Elements:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Source & Track Elements — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Source & Track Elements is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch64-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch64-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch64-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch64-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch64-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["html-ch63"],
    keyPoints: ["HTML Source & Track Elements plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch65",
    courseId: "html",
    title: "HTML Object & Embed (Legacy Plugins)",
    order: 65,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Object & Embed (Legacy Plugins)?\n\nHTML Object & Embed (Legacy Plugins) is an important part of web development — embedding and controlling video, audio, and rich media content on web pages. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Object & Embed (Legacy Plugins) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Object & Embed (Legacy Plugins) — Media element:",
              "content": "<figure>\n  <!-- HTML Object & Embed (Legacy Plugins) element -->\n  <video controls width=\"640\" poster=\"thumbnail.jpg\">\n    <source src=\"video.mp4\" type=\"video/mp4\">\n    <source src=\"video.webm\" type=\"video/webm\">\n    <track kind=\"captions\" src=\"captions.vtt\" srclang=\"en\" label=\"English\">\n    <p>Your browser does not support the video element.</p>\n  </video>\n  <figcaption>HTML Object & Embed (Legacy Plugins) — A media demonstration</figcaption>\n</figure>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Object & Embed (Legacy Plugins)\n\nEmbedding and controlling video, audio, and rich media content on web pages. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Object & Embed (Legacy Plugins), keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Best Practices for Embedded Content\n\nFollow these guidelines:\n\n1. **Provide fallbacks** — Always include fallback content between element tags\n2. **Use multiple formats** — Provide WebM and MP4 for video, different image resolutions\n3. **Add captions and subtitles** — Use <track> elements for accessibility\n4. **Optimize file sizes** — Compress media, use responsive images with srcset\n5. **Set dimensions** — Width and height prevent layout shifts (Cumulative Layout Shift)"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Object & Embed (Legacy Plugins) forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Object & Embed (Legacy Plugins)\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Object & Embed (Legacy Plugins) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch65-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to embed video content?",
          "options": [
            {
              "id": "a",
              "text": "<video>"
            },
            {
              "id": "b",
              "text": "<media>"
            },
            {
              "id": "c",
              "text": "<movie>"
            },
            {
              "id": "d",
              "text": "<embed>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <video> element is used to embed video content. It supports multiple source formats via <source> elements."
        },
        {
          "id": "html-ch65-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The alt attribute on images is optional and mainly used for SEO.",
          "correctAnswer": false,
          "explanation": "The alt attribute is required for accessibility. Screen readers read it aloud, and it displays when images fail to load. It also helps SEO but its primary purpose is accessibility."
        },
        {
          "id": "html-ch65-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch65-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["html-ch64"],
    keyPoints: ["HTML Object & Embed (Legacy Plugins) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch66",
    courseId: "html",
    title: "HTML Media Events & JavaScript Control",
    order: 66,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Media Events & JavaScript Control?\n\nHTML Media Events & JavaScript Control is an important part of web development — embedding and controlling video, audio, and rich media content on web pages. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Media Events & JavaScript Control plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Media Events & JavaScript Control — Media element:",
              "content": "<figure>\n  <!-- HTML Media Events & JavaScript Control element -->\n  <video controls width=\"640\" poster=\"thumbnail.jpg\">\n    <source src=\"video.mp4\" type=\"video/mp4\">\n    <source src=\"video.webm\" type=\"video/webm\">\n    <track kind=\"captions\" src=\"captions.vtt\" srclang=\"en\" label=\"English\">\n    <p>Your browser does not support the video element.</p>\n  </video>\n  <figcaption>HTML Media Events & JavaScript Control — A media demonstration</figcaption>\n</figure>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Media Events & JavaScript Control\n\nEmbedding and controlling video, audio, and rich media content on web pages. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Media Events & JavaScript Control, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Best Practices for Embedded Content\n\nFollow these guidelines:\n\n1. **Provide fallbacks** — Always include fallback content between element tags\n2. **Use multiple formats** — Provide WebM and MP4 for video, different image resolutions\n3. **Add captions and subtitles** — Use <track> elements for accessibility\n4. **Optimize file sizes** — Compress media, use responsive images with srcset\n5. **Set dimensions** — Width and height prevent layout shifts (Cumulative Layout Shift)"
          },
          {
              "type": "comparison",
              "title": "HTML Media Events & JavaScript Control — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Media Events & JavaScript Control\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Media Events & JavaScript Control is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch66-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to embed video content?",
          "options": [
            {
              "id": "a",
              "text": "<video>"
            },
            {
              "id": "b",
              "text": "<media>"
            },
            {
              "id": "c",
              "text": "<movie>"
            },
            {
              "id": "d",
              "text": "<embed>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <video> element is used to embed video content. It supports multiple source formats via <source> elements."
        },
        {
          "id": "html-ch66-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The alt attribute on images is optional and mainly used for SEO.",
          "correctAnswer": false,
          "explanation": "The alt attribute is required for accessibility. Screen readers read it aloud, and it displays when images fail to load. It also helps SEO but its primary purpose is accessibility."
        },
        {
          "id": "html-ch66-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch66-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["html-ch65"],
    keyPoints: ["HTML Media Events & JavaScript Control plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch67",
    courseId: "html",
    title: "HTML Drag & Drop API",
    order: 67,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Drag & Drop API?\n\nHTML Drag & Drop API is an important part of web development — browser APIs accessible from HTML that enable rich client-side functionality. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Drag & Drop API plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Drag & Drop API — Modern HTML API:",
              "content": "<!-- HTML Drag & Drop API — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Drag & Drop API</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Drag & Drop API\n\nBrowser APIs accessible from HTML that enable rich client-side functionality. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Drag & Drop API:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Drag & Drop API forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Drag & Drop API\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Drag & Drop API is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch67-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch67-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch67-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch67-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["html-ch66"],
    keyPoints: ["HTML Drag & Drop API plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch68",
    courseId: "html",
    title: "HTML Web Storage (LocalStorage, SessionStorage)",
    order: 68,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Web Storage (LocalStorage, SessionStorage)?\n\nHTML Web Storage (LocalStorage, SessionStorage) is an important part of web development — browser APIs accessible from HTML that enable rich client-side functionality. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Web Storage (LocalStorage, SessionStorage) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Web Storage (LocalStorage, SessionStorage) — Modern HTML API:",
              "content": "<!-- HTML Web Storage (LocalStorage, SessionStorage) — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Web Storage (LocalStorage, SessionStorage)</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Web Storage (LocalStorage, SessionStorage)\n\nBrowser APIs accessible from HTML that enable rich client-side functionality. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Web Storage (LocalStorage, SessionStorage):\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Web Storage (LocalStorage, SessionStorage) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Web Storage (LocalStorage, SessionStorage)\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Web Storage (LocalStorage, SessionStorage) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch68-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch68-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch68-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch68-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["html-ch67"],
    keyPoints: ["HTML Web Storage (LocalStorage, SessionStorage) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch69",
    courseId: "html",
    title: "HTML Web Workers (Background Threads)",
    order: 69,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Web Workers (Background Threads)?\n\nHTML Web Workers (Background Threads) is an important part of web development — browser APIs accessible from HTML that enable rich client-side functionality. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Web Workers (Background Threads) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Web Workers (Background Threads) — Modern HTML API:",
              "content": "<!-- HTML Web Workers (Background Threads) — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Web Workers (Background Threads)</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Web Workers (Background Threads)\n\nBrowser APIs accessible from HTML that enable rich client-side functionality. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Web Workers (Background Threads):\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Web Workers (Background Threads) forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Web Workers (Background Threads)\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Web Workers (Background Threads) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch69-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch69-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch69-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch69-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["html-ch68"],
    keyPoints: ["HTML Web Workers (Background Threads) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch70",
    courseId: "html",
    title: "HTML Server-Sent Events (SSE)",
    order: 70,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Server-Sent Events (SSE)?\n\nHTML Server-Sent Events (SSE) is an important part of web development — browser APIs accessible from HTML that enable rich client-side functionality. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Server-Sent Events (SSE) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Server-Sent Events (SSE) — Modern HTML API:",
              "content": "<!-- HTML Server-Sent Events (SSE) — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Server-Sent Events (SSE)</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Server-Sent Events (SSE)\n\nBrowser APIs accessible from HTML that enable rich client-side functionality. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Server-Sent Events (SSE):\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Server-Sent Events (SSE) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Server-Sent Events (SSE)\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Server-Sent Events (SSE) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch70-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch70-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch70-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch70-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["html-ch69"],
    keyPoints: ["HTML Server-Sent Events (SSE) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch71",
    courseId: "html",
    title: "HTML Geolocation API",
    order: 71,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Geolocation API?\n\nHTML Geolocation API is an important part of web development — browser APIs accessible from HTML that enable rich client-side functionality. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Geolocation API plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Geolocation API — Modern HTML API:",
              "content": "<!-- HTML Geolocation API — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Geolocation API</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Geolocation API\n\nBrowser APIs accessible from HTML that enable rich client-side functionality. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Geolocation API:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Geolocation API forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Geolocation API\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Geolocation API is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch71-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch71-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch71-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch71-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["html-ch70"],
    keyPoints: ["HTML Geolocation API plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch72",
    courseId: "html",
    title: "HTML History API (PushState, PopState)",
    order: 72,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML History API (PushState, PopState)?\n\nHTML History API (PushState, PopState) is an important part of web development — browser APIs accessible from HTML that enable rich client-side functionality. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML History API (PushState, PopState) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML History API (PushState, PopState) — Modern HTML API:",
              "content": "<!-- HTML History API (PushState, PopState) — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML History API (PushState, PopState)</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML History API (PushState, PopState)\n\nBrowser APIs accessible from HTML that enable rich client-side functionality. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML History API (PushState, PopState):\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML History API (PushState, PopState) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML History API (PushState, PopState)\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML History API (PushState, PopState) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch72-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch72-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch72-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch72-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["html-ch71"],
    keyPoints: ["HTML History API (PushState, PopState) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch73",
    courseId: "html",
    title: "HTML Notification API",
    order: 73,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Notification API?\n\nHTML Notification API is an important part of web development — browser APIs accessible from HTML that enable rich client-side functionality. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Notification API plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Notification API — Modern HTML API:",
              "content": "<!-- HTML Notification API — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Notification API</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Notification API\n\nBrowser APIs accessible from HTML that enable rich client-side functionality. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Notification API:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Notification API forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Notification API\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Notification API is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch73-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch73-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch73-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch73-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["html-ch72"],
    keyPoints: ["HTML Notification API plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch74",
    courseId: "html",
    title: "HTML Clipboard API",
    order: 74,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Clipboard API?\n\nHTML Clipboard API is an important part of web development — browser APIs accessible from HTML that enable rich client-side functionality. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Clipboard API plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Clipboard API — Modern HTML API:",
              "content": "<!-- HTML Clipboard API — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Clipboard API</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Clipboard API\n\nBrowser APIs accessible from HTML that enable rich client-side functionality. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Clipboard API:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Clipboard API — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Clipboard API\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Clipboard API is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch74-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch74-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch74-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch74-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["html-ch73"],
    keyPoints: ["HTML Clipboard API plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch75",
    courseId: "html",
    title: "HTML Fullscreen API",
    order: 75,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Fullscreen API?\n\nHTML Fullscreen API is an important part of web development — browser APIs accessible from HTML that enable rich client-side functionality. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Fullscreen API plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Fullscreen API — Modern HTML API:",
              "content": "<!-- HTML Fullscreen API — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Fullscreen API</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Fullscreen API\n\nBrowser APIs accessible from HTML that enable rich client-side functionality. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Fullscreen API:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Fullscreen API forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Fullscreen API\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Fullscreen API is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch75-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch75-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch75-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch75-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["html-ch74"],
    keyPoints: ["HTML Fullscreen API plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch76",
    courseId: "html",
    title: "HTML Page Visibility API",
    order: 76,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Page Visibility API?\n\nHTML Page Visibility API is an important part of web development — essential HTML knowledge. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Page Visibility API plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Page Visibility API — Practical example:",
              "content": "<!-- HTML Page Visibility API — Example -->\n<section aria-labelledby=\"ch-title\">\n  <h2 id=\"ch-title\">HTML Page Visibility API</h2>\n  <p>This demonstrates practical usage of HTML Page Visibility API.</p>\n  <ul>\n    <li>Understand the syntax and structure</li>\n    <li>Apply best practices for accessibility</li>\n    <li>Test across different browsers</li>\n  </ul>\n</section>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Page Visibility API\n\nEssential HTML knowledge. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Page Visibility API, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Page Visibility API:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Page Visibility API — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Page Visibility API\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Page Visibility API is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch76-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct HTML for creating a HTML Page Visibility API?",
          "options": [
            {
              "id": "a",
              "text": "Using the appropriate semantic HTML element"
            },
            {
              "id": "b",
              "text": "Using a generic <div> with a class name"
            },
            {
              "id": "c",
              "text": "Using JavaScript to create the element dynamically"
            },
            {
              "id": "d",
              "text": "There is no correct approach in HTML"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content."
        },
        {
          "id": "html-ch76-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Page Visibility API is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch76-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch76-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["html-ch75"],
    keyPoints: ["HTML Page Visibility API plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch77",
    courseId: "html",
    title: "HTML Network Information API",
    order: 77,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Network Information API?\n\nHTML Network Information API is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Network Information API plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Network Information API — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Network Information API — Example</title>\n</head>\n<body>\n  <!-- Your HTML Network Information API content goes here -->\n  <main>\n    <h1>Learning HTML Network Information API</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Network Information API\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Network Information API:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Network Information API forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Network Information API is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch77-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch77-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch77-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch77-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch77-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["html-ch76"],
    keyPoints: ["HTML Network Information API plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch78",
    courseId: "html",
    title: "HTML Battery & Device APIs",
    order: 78,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Battery & Device APIs?\n\nHTML Battery & Device APIs is an important part of web development — essential HTML knowledge. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Battery & Device APIs plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Battery & Device APIs — Practical example:",
              "content": "<!-- HTML Battery & Device APIs — Example -->\n<section aria-labelledby=\"ch-title\">\n  <h2 id=\"ch-title\">HTML Battery & Device APIs</h2>\n  <p>This demonstrates practical usage of HTML Battery & Device APIs.</p>\n  <ul>\n    <li>Understand the syntax and structure</li>\n    <li>Apply best practices for accessibility</li>\n    <li>Test across different browsers</li>\n  </ul>\n</section>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Battery & Device APIs\n\nEssential HTML knowledge. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Battery & Device APIs, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Battery & Device APIs:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Battery & Device APIs — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Battery & Device APIs\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Battery & Device APIs is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch78-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct HTML for creating a HTML Battery & Device APIs?",
          "options": [
            {
              "id": "a",
              "text": "Using the appropriate semantic HTML element"
            },
            {
              "id": "b",
              "text": "Using a generic <div> with a class name"
            },
            {
              "id": "c",
              "text": "Using JavaScript to create the element dynamically"
            },
            {
              "id": "d",
              "text": "There is no correct approach in HTML"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content."
        },
        {
          "id": "html-ch78-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Battery & Device APIs is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch78-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch78-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["html-ch77"],
    keyPoints: ["HTML Battery & Device APIs plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch79",
    courseId: "html",
    title: "HTML Pointer Lock API",
    order: 79,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Pointer Lock API?\n\nHTML Pointer Lock API is an important part of web development — essential HTML knowledge. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Pointer Lock API plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Pointer Lock API — Practical example:",
              "content": "<!-- HTML Pointer Lock API — Example -->\n<section aria-labelledby=\"ch-title\">\n  <h2 id=\"ch-title\">HTML Pointer Lock API</h2>\n  <p>This demonstrates practical usage of HTML Pointer Lock API.</p>\n  <ul>\n    <li>Understand the syntax and structure</li>\n    <li>Apply best practices for accessibility</li>\n    <li>Test across different browsers</li>\n  </ul>\n</section>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Pointer Lock API\n\nEssential HTML knowledge. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Pointer Lock API, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Pointer Lock API:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Pointer Lock API forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Pointer Lock API\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Pointer Lock API is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch79-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct HTML for creating a HTML Pointer Lock API?",
          "options": [
            {
              "id": "a",
              "text": "Using the appropriate semantic HTML element"
            },
            {
              "id": "b",
              "text": "Using a generic <div> with a class name"
            },
            {
              "id": "c",
              "text": "Using JavaScript to create the element dynamically"
            },
            {
              "id": "d",
              "text": "There is no correct approach in HTML"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content."
        },
        {
          "id": "html-ch79-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Pointer Lock API is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch79-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch79-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["html-ch78"],
    keyPoints: ["HTML Pointer Lock API plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch80",
    courseId: "html",
    title: "HTML Speech Synthesis & Recognition",
    order: 80,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Speech Synthesis & Recognition?\n\nHTML Speech Synthesis & Recognition is an important part of web development — browser APIs accessible from HTML that enable rich client-side functionality. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Speech Synthesis & Recognition plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Speech Synthesis & Recognition — Modern HTML API:",
              "content": "<!-- HTML Speech Synthesis & Recognition — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Speech Synthesis & Recognition</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Speech Synthesis & Recognition\n\nBrowser APIs accessible from HTML that enable rich client-side functionality. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Speech Synthesis & Recognition:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Speech Synthesis & Recognition — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Speech Synthesis & Recognition\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Speech Synthesis & Recognition is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch80-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch80-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch80-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch80-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["html-ch79"],
    keyPoints: ["HTML Speech Synthesis & Recognition plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch81",
    courseId: "html",
    title: "HTML Templates & Slots",
    order: 81,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Templates & Slots?\n\nHTML Templates & Slots is an important part of web development — cutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Templates & Slots plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Templates & Slots — Modern HTML API:",
              "content": "<!-- HTML Templates & Slots — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Templates & Slots</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Templates & Slots\n\nCutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Templates & Slots:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Templates & Slots forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Templates & Slots\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Templates & Slots is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch81-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch81-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch81-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch81-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["html-ch80"],
    keyPoints: ["HTML Templates & Slots plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch82",
    courseId: "html",
    title: "HTML Web Components: Custom Elements",
    order: 82,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Web Components: Custom Elements?\n\nHTML Web Components: Custom Elements is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Web Components: Custom Elements plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Web Components: Custom Elements — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Web Components: Custom Elements — Example</title>\n</head>\n<body>\n  <!-- Your HTML Web Components: Custom Elements content goes here -->\n  <main>\n    <h1>Learning HTML Web Components: Custom Elements</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Web Components: Custom Elements\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Web Components: Custom Elements:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Web Components: Custom Elements — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Web Components: Custom Elements is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch82-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch82-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch82-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch82-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch82-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["html-ch81"],
    keyPoints: ["HTML Web Components: Custom Elements plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch83",
    courseId: "html",
    title: "HTML Shadow DOM",
    order: 83,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Shadow DOM?\n\nHTML Shadow DOM is an important part of web development — cutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Shadow DOM plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Shadow DOM — Modern HTML API:",
              "content": "<!-- HTML Shadow DOM — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Shadow DOM</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Shadow DOM\n\nCutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Shadow DOM:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Shadow DOM forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Shadow DOM\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Shadow DOM is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch83-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch83-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch83-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch83-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["html-ch82"],
    keyPoints: ["HTML Shadow DOM plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch84",
    courseId: "html",
    title: "HTML Microdata & Structured Data",
    order: 84,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Microdata & Structured Data?\n\nHTML Microdata & Structured Data is an important part of web development — cutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Microdata & Structured Data plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Microdata & Structured Data — Modern HTML API:",
              "content": "<!-- HTML Microdata & Structured Data — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Microdata & Structured Data</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Microdata & Structured Data\n\nCutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Microdata & Structured Data:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Microdata & Structured Data — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Microdata & Structured Data\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Microdata & Structured Data is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch84-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch84-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch84-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch84-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["html-ch83"],
    keyPoints: ["HTML Microdata & Structured Data plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch85",
    courseId: "html",
    title: "HTML ARIA: Roles & Properties",
    order: 85,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML ARIA: Roles & Properties?\n\nHTML ARIA: Roles & Properties is an important part of web development — cutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML ARIA: Roles & Properties plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML ARIA: Roles & Properties — Modern HTML API:",
              "content": "<!-- HTML ARIA: Roles & Properties — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML ARIA: Roles & Properties</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML ARIA: Roles & Properties\n\nCutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML ARIA: Roles & Properties:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML ARIA: Roles & Properties forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML ARIA: Roles & Properties\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML ARIA: Roles & Properties is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch85-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch85-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch85-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch85-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["html-ch84"],
    keyPoints: ["HTML ARIA: Roles & Properties plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch86",
    courseId: "html",
    title: "HTML ARIA: Live Regions & States",
    order: 86,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML ARIA: Live Regions & States?\n\nHTML ARIA: Live Regions & States is an important part of web development — cutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML ARIA: Live Regions & States plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML ARIA: Live Regions & States — Modern HTML API:",
              "content": "<!-- HTML ARIA: Live Regions & States — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML ARIA: Live Regions & States</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML ARIA: Live Regions & States\n\nCutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML ARIA: Live Regions & States:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML ARIA: Live Regions & States — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML ARIA: Live Regions & States\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML ARIA: Live Regions & States is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch86-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch86-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch86-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch86-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["html-ch85"],
    keyPoints: ["HTML ARIA: Live Regions & States plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch87",
    courseId: "html",
    title: "HTML Accessibility (WCAG Guidelines)",
    order: 87,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Accessibility (WCAG Guidelines)?\n\nHTML Accessibility (WCAG Guidelines) is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Accessibility (WCAG Guidelines) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Accessibility (WCAG Guidelines) — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Accessibility (WCAG Guidelines)</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Accessibility (WCAG Guidelines)\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Accessibility (WCAG Guidelines):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Accessibility (WCAG Guidelines) forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Accessibility (WCAG Guidelines) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch87-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch87-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch87-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch87-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch87-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["html-ch86"],
    keyPoints: ["HTML Accessibility (WCAG Guidelines) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch88",
    courseId: "html",
    title: "HTML SEO Best Practices",
    order: 88,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML SEO Best Practices?\n\nHTML SEO Best Practices is an important part of web development — cutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML SEO Best Practices plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML SEO Best Practices — Modern HTML API:",
              "content": "<!-- HTML SEO Best Practices — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML SEO Best Practices</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML SEO Best Practices\n\nCutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML SEO Best Practices:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML SEO Best Practices — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML SEO Best Practices\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML SEO Best Practices is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch88-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch88-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch88-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch88-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["html-ch87"],
    keyPoints: ["HTML SEO Best Practices plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch89",
    courseId: "html",
    title: "HTML Performance: Critical Rendering Path",
    order: 89,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Performance: Critical Rendering Path?\n\nHTML Performance: Critical Rendering Path is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Performance: Critical Rendering Path plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Performance: Critical Rendering Path — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Performance: Critical Rendering Path</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Performance: Critical Rendering Path\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Performance: Critical Rendering Path:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Performance: Critical Rendering Path forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Performance: Critical Rendering Path is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch89-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch89-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch89-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch89-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch89-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["html-ch88"],
    keyPoints: ["HTML Performance: Critical Rendering Path plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch90",
    courseId: "html",
    title: "HTML Progressive Web Apps (Manifest)",
    order: 90,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Progressive Web Apps (Manifest)?\n\nHTML Progressive Web Apps (Manifest) is an important part of web development — cutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Progressive Web Apps (Manifest) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Progressive Web Apps (Manifest) — Modern HTML API:",
              "content": "<!-- HTML Progressive Web Apps (Manifest) — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Progressive Web Apps (Manifest)</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Progressive Web Apps (Manifest)\n\nCutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Progressive Web Apps (Manifest):\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Progressive Web Apps (Manifest) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Progressive Web Apps (Manifest)\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Progressive Web Apps (Manifest) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch90-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch90-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch90-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch90-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["html-ch89"],
    keyPoints: ["HTML Progressive Web Apps (Manifest) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch91",
    courseId: "html",
    title: "HTML Dialog & Modal Elements",
    order: 91,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Dialog & Modal Elements?\n\nHTML Dialog & Modal Elements is an important part of web development — individual HTML tags and how they define content meaning, from text to images to links. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Dialog & Modal Elements plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Dialog & Modal Elements — Basic syntax:",
              "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML Dialog & Modal Elements — Example</title>\n</head>\n<body>\n  <!-- Your HTML Dialog & Modal Elements content goes here -->\n  <main>\n    <h1>Learning HTML Dialog & Modal Elements</h1>\n    <p>This is an example of proper HTML structure.</p>\n  </main>\n</body>\n</html>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Dialog & Modal Elements\n\nIndividual HTML tags and how they define content meaning, from text to images to links. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Dialog & Modal Elements:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Dialog & Modal Elements forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Dialog & Modal Elements is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch91-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML element is used to define a hyperlink?",
          "options": [
            {
              "id": "a",
              "text": "<a>"
            },
            {
              "id": "b",
              "text": "<link>"
            },
            {
              "id": "c",
              "text": "<href>"
            },
            {
              "id": "d",
              "text": "<nav>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <a> (anchor) element defines a hyperlink. The href attribute specifies the URL."
        },
        {
          "id": "html-ch91-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the correct HTML for inserting an image?",
          "options": [
            {
              "id": "a",
              "text": "<img src=\"image.jpg\" alt=\"description\">"
            },
            {
              "id": "b",
              "text": "<image src=\"image.jpg\">"
            },
            {
              "id": "c",
              "text": "<img href=\"image.jpg\">"
            },
            {
              "id": "d",
              "text": "<picture src=\"image.jpg\">"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The <img> element uses src for the image path and alt for alternative text, which is required for accessibility."
        },
        {
          "id": "html-ch91-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The HTML element for the largest heading is ___.",
          "correctAnswer": "h1",
          "explanation": "HTML provides six heading levels (h1 to h6), with h1 being the most important and largest."
        },
        {
          "id": "html-ch91-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch91-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["html-ch90"],
    keyPoints: ["HTML Dialog & Modal Elements plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch92",
    courseId: "html",
    title: "HTML Details & Summary (Disclosure)",
    order: 92,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Details & Summary (Disclosure)?\n\nHTML Details & Summary (Disclosure) is an important part of web development — cutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Details & Summary (Disclosure) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Details & Summary (Disclosure) — Modern HTML API:",
              "content": "<!-- HTML Details & Summary (Disclosure) — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Details & Summary (Disclosure)</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Details & Summary (Disclosure)\n\nCutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Details & Summary (Disclosure):\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Details & Summary (Disclosure) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Details & Summary (Disclosure)\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Details & Summary (Disclosure) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch92-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch92-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch92-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch92-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["html-ch91"],
    keyPoints: ["HTML Details & Summary (Disclosure) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch93",
    courseId: "html",
    title: "HTML Popover API",
    order: 93,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Popover API?\n\nHTML Popover API is an important part of web development — cutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Popover API plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Popover API — Modern HTML API:",
              "content": "<!-- HTML Popover API — Web Component Example -->\n<template id=\"my-component\">\n  <style>\n    :host { display: block; padding: 1rem; border: 1px solid #ddd; }\n  </style>\n  <slot name=\"title\">Default Title</slot>\n  <div part=\"content\">\n    <slot></slot>\n  </div>\n</template>\n\n<my-component>\n  <span slot=\"title\">HTML Popover API</span>\n  <p>This uses Web Components for encapsulated, reusable HTML.</p>\n</my-component>\n\n<script>\n  class MyComponent extends HTMLElement {\n    constructor() {\n      super();\n      const template = document.getElementById('my-component');\n      this.attachShadow({ mode: 'open' })\n        .appendChild(template.content.cloneNode(true));\n    }\n  }\n  customElements.define('my-component', MyComponent);\n</script>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Popover API\n\nCutting-edge HTML features including Web Components, accessibility, and modern interaction patterns. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Web Components (Custom Elements, Shadow DOM, Templates) let you create reusable, encapsulated HTML elements. They work across all frameworks — write once, use anywhere. This is the true power of the platform."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Popover API:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Popover API forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Popover API\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Popover API is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch93-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which API allows web pages to store data in the browser persistently?",
          "options": [
            {
              "id": "a",
              "text": "localStorage"
            },
            {
              "id": "b",
              "text": "sessionStorage"
            },
            {
              "id": "c",
              "text": "cookies"
            },
            {
              "id": "d",
              "text": "IndexedDB"
            }
          ],
          "correctAnswer": "a",
          "explanation": "localStorage stores data with no expiration. sessionStorage clears when the tab closes. Cookies have size limits and are sent with every request. IndexedDB is for larger structured data."
        },
        {
          "id": "html-ch93-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the purpose of ARIA attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To improve accessibility when HTML semantics are insufficient"
            },
            {
              "id": "b",
              "text": "To add visual styling to elements"
            },
            {
              "id": "c",
              "text": "To improve page loading performance"
            },
            {
              "id": "d",
              "text": "To encrypt form data before submission"
            }
          ],
          "correctAnswer": "a",
          "explanation": "ARIA (Accessible Rich Internet Applications) attributes supplement HTML semantics to make dynamic content and advanced UI controls accessible to assistive technologies."
        },
        {
          "id": "html-ch93-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch93-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["html-ch92"],
    keyPoints: ["HTML Popover API plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch94",
    courseId: "html",
    title: "HTML Search & Inline Find",
    order: 94,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Search & Inline Find?\n\nHTML Search & Inline Find is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Search & Inline Find plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Search & Inline Find — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Search & Inline Find</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Search & Inline Find\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Search & Inline Find:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Search & Inline Find — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Search & Inline Find is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch94-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch94-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch94-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch94-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch94-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["html-ch93"],
    keyPoints: ["HTML Search & Inline Find plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch95",
    courseId: "html",
    title: "HTML Security: XSS, CSP, CORS",
    order: 95,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Security: XSS, CSP, CORS?\n\nHTML Security: XSS, CSP, CORS is an important part of web development — advanced best practices, security, testing, and what's coming next in HTML. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Security: XSS, CSP, CORS plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Security: XSS, CSP, CORS — Practical example:",
              "content": "<!-- HTML Security: XSS, CSP, CORS — Example -->\n<section aria-labelledby=\"ch-title\">\n  <h2 id=\"ch-title\">HTML Security: XSS, CSP, CORS</h2>\n  <p>This demonstrates practical usage of HTML Security: XSS, CSP, CORS.</p>\n  <ul>\n    <li>Understand the syntax and structure</li>\n    <li>Apply best practices for accessibility</li>\n    <li>Test across different browsers</li>\n  </ul>\n</section>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Security: XSS, CSP, CORS\n\nAdvanced best practices, security, testing, and what's coming next in HTML. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Security: XSS, CSP, CORS, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Security: XSS, CSP, CORS:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Security: XSS, CSP, CORS forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Security: XSS, CSP, CORS\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Security: XSS, CSP, CORS is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch95-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct HTML for creating a HTML Security: XSS, CSP, CORS?",
          "options": [
            {
              "id": "a",
              "text": "Using the appropriate semantic HTML element"
            },
            {
              "id": "b",
              "text": "Using a generic <div> with a class name"
            },
            {
              "id": "c",
              "text": "Using JavaScript to create the element dynamically"
            },
            {
              "id": "d",
              "text": "There is no correct approach in HTML"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content."
        },
        {
          "id": "html-ch95-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Security: XSS, CSP, CORS is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch95-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch95-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["html-ch94"],
    keyPoints: ["HTML Security: XSS, CSP, CORS plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch96",
    courseId: "html",
    title: "HTML Testing & Validation Tools",
    order: 96,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Testing & Validation Tools?\n\nHTML Testing & Validation Tools is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Testing & Validation Tools plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Testing & Validation Tools — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Testing & Validation Tools</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Testing & Validation Tools\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Testing & Validation Tools:\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "comparison",
              "title": "HTML Testing & Validation Tools — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Testing & Validation Tools is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch96-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch96-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch96-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch96-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch96-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["html-ch95"],
    keyPoints: ["HTML Testing & Validation Tools plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch97",
    courseId: "html",
    title: "HTML Email Coding (Tables, Inline Styles)",
    order: 97,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Email Coding (Tables, Inline Styles)?\n\nHTML Email Coding (Tables, Inline Styles) is an important part of web development — ways to organize HTML content into meaningful page layouts using semantic and structural elements. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Email Coding (Tables, Inline Styles) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Email Coding (Tables, Inline Styles) — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Email Coding (Tables, Inline Styles)</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Email Coding (Tables, Inline Styles)\n\nWays to organize HTML content into meaningful page layouts using semantic and structural elements. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always use semantic elements over generic divs. Screen readers and search engines rely on proper HTML structure to understand your content. Use <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> to define your page regions."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Email Coding (Tables, Inline Styles):\n\n1. **Proper nesting** — Elements close in the reverse order they opened\n2. **Semantic choice** — Pick the element that best describes the content\n3. **ARIA augmentation** — Add ARIA attributes where HTML semantics are insufficient\n4. **Validation** — Use the W3C HTML validator to catch errors\n5. **Progressive enhancement** — Start with core HTML, enhance with CSS/JS"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Email Coding (Tables, Inline Styles) forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: HTML** — The definitive reference for all HTML elements and attributes\n2. **HTML Living Standard (WHATWG)** — The official specification\n3. **W3C HTML Validator** — Check your markup for errors\n4. **WebAIM** — Web accessibility evaluation tools and guides\n5. **HTML5 Doctor** — Semantic HTML element flowcharts and guides"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Email Coding (Tables, Inline Styles) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch97-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which HTML5 element is used for navigation links?",
          "options": [
            {
              "id": "a",
              "text": "<nav>"
            },
            {
              "id": "b",
              "text": "<menu>"
            },
            {
              "id": "c",
              "text": "<ul>"
            },
            {
              "id": "d",
              "text": "<header>"
            }
          ],
          "correctAnswer": "a",
          "explanation": "<nav> is a semantic HTML5 element for navigation links. It helps screen readers and search engines identify site navigation."
        },
        {
          "id": "html-ch97-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "When should you use a <div> instead of a semantic element?",
          "options": [
            {
              "id": "a",
              "text": "When no semantic element adequately describes the content"
            },
            {
              "id": "b",
              "text": "Always — divs are more flexible"
            },
            {
              "id": "c",
              "text": "Never — semantic elements always should be used"
            },
            {
              "id": "d",
              "text": "When you need to apply CSS styles"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Use a <div> only when no semantic element fits. Always prefer the most descriptive semantic element. CSS can be applied to any element."
        },
        {
          "id": "html-ch97-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML attribute that uniquely identifies an element is called the ___ attribute.",
          "correctAnswer": "id",
          "acceptableAnswers": [
            "id attribute"
          ],
          "explanation": "The id attribute provides a unique identifier for an HTML element. Each id must be unique within the document."
        },
        {
          "id": "html-ch97-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch97-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["html-ch96"],
    keyPoints: ["HTML Email Coding (Tables, Inline Styles) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch98",
    courseId: "html",
    title: "HTML Preprocessors (Pug, Haml)",
    order: 98,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Preprocessors (Pug, Haml)?\n\nHTML Preprocessors (Pug, Haml) is an important part of web development — how HTML handles text representation, special characters, and internationalization. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Preprocessors (Pug, Haml) plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Preprocessors (Pug, Haml) — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Preprocessors (Pug, Haml)</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Preprocessors (Pug, Haml)\n\nHow HTML handles text representation, special characters, and internationalization. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Preprocessors (Pug, Haml), keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Preprocessors (Pug, Haml):\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Preprocessors (Pug, Haml) — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Preprocessors (Pug, Haml)\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Preprocessors (Pug, Haml) is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch98-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct HTML for creating a HTML Preprocessors (Pug, Haml)?",
          "options": [
            {
              "id": "a",
              "text": "Using the appropriate semantic HTML element"
            },
            {
              "id": "b",
              "text": "Using a generic <div> with a class name"
            },
            {
              "id": "c",
              "text": "Using JavaScript to create the element dynamically"
            },
            {
              "id": "d",
              "text": "There is no correct approach in HTML"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content."
        },
        {
          "id": "html-ch98-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Preprocessors (Pug, Haml) is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch98-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch98-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["html-ch97"],
    keyPoints: ["HTML Preprocessors (Pug, Haml) plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch99",
    courseId: "html",
    title: "HTML Best Practices: Code Organization",
    order: 99,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Best Practices: Code Organization?\n\nHTML Best Practices: Code Organization is an important part of web development — how HTML handles text representation, special characters, and internationalization. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Best Practices: Code Organization plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Best Practices: Code Organization — Semantic structure:",
              "content": "<header role=\"banner\">\n  <nav aria-label=\"Main navigation\">\n    <ul>\n      <li><a href=\"/\">Home</a></li>\n      <li><a href=\"/about\">About</a></li>\n      <li><a href=\"/contact\">Contact</a></li>\n    </ul>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>HTML Best Practices: Code Organization</h1>\n    <section>\n      <h2>Key Concepts</h2>\n      <p>Understanding these patterns improves code quality.</p>\n    </section>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 — Built with semantic HTML</p>\n</footer>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Best Practices: Code Organization\n\nHow HTML handles text representation, special characters, and internationalization. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Best Practices: Code Organization, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Best Practices: Code Organization:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Best Practices: Code Organization forms a key part of modern web development",
                  "Always use the most specific semantic HTML element",
                  "Validate your HTML with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Best Practices: Code Organization\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Best Practices: Code Organization is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch99-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct HTML for creating a HTML Best Practices: Code Organization?",
          "options": [
            {
              "id": "a",
              "text": "Using the appropriate semantic HTML element"
            },
            {
              "id": "b",
              "text": "Using a generic <div> with a class name"
            },
            {
              "id": "c",
              "text": "Using JavaScript to create the element dynamically"
            },
            {
              "id": "d",
              "text": "There is no correct approach in HTML"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content."
        },
        {
          "id": "html-ch99-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Best Practices: Code Organization is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch99-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch99-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["html-ch98"],
    keyPoints: ["HTML Best Practices: Code Organization plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
  {
    id: "html-ch100",
    courseId: "html",
    title: "HTML Future: What's New in HTML?",
    order: 100,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Future: What's New in HTML??\n\nHTML Future: What's New in HTML? is an important part of web development — advanced best practices, security, testing, and what's coming next in HTML. Proper use of HTML creates documents that are accessible, SEO-friendly, and maintainable.\n\nHTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Future: What's New in HTML? plays a key role in structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic and interactive elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Future: What's New in HTML? — Practical example:",
              "content": "<!-- HTML Future: What's New in HTML? — Example -->\n<section aria-labelledby=\"ch-title\">\n  <h2 id=\"ch-title\">HTML Future: What's New in HTML?</h2>\n  <p>This demonstrates practical usage of HTML Future: What's New in HTML?.</p>\n  <ul>\n    <li>Understand the syntax and structure</li>\n    <li>Apply best practices for accessibility</li>\n    <li>Test across different browsers</li>\n  </ul>\n</section>"
          },
          {
              "type": "text",
              "content": "## Understanding HTML Future: What's New in HTML?\n\nAdvanced best practices, security, testing, and what's coming next in HTML. Mastering this topic will improve your development workflow and the quality of your projects.\n\nModern web development demands a solid understanding of HTML. Every framework, from React to Vue, ultimately renders HTML. Understanding raw HTML means understanding what your framework generates."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Future: What's New in HTML?, keep accessibility in mind from the start. Test with keyboard navigation and screen readers. Use aria-label, aria-labelledby, and role attributes when semantic HTML alone is insufficient."
          },
          {
              "type": "text",
              "content": "## Key Techniques\n\nMaster these patterns for HTML Future: What's New in HTML?:\n\n1. **Read the spec** — MDN Web Docs is your best resource\n2. **Practice regularly** — Build small projects to reinforce concepts\n3. **Test across browsers** — Use BrowserStack or similar tools\n4. **Use the validator** — Run W3C validation in your build pipeline\n5. **Stay current** — HTML evolves; follow the HTML Living Standard"
          },
          {
              "type": "comparison",
              "title": "HTML Future: What's New in HTML? — Best Practice vs Anti-Pattern",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Anti-Pattern"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic <div> soup"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "No accessible naming"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping levels (h1→h3)"
                  ],
                  [
                      "Performance",
                      "Minimal nesting, lazy media",
                      "Deeply nested <div> chains"
                  ],
                  [
                      "Validation",
                      "Regular W3C validation",
                      "No validation until QA"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with ${chName} is using generic containers when semantic alternatives exist. Always ask: 'Is there a more descriptive HTML element?'"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs** — The best reference for HTML Future: What's New in HTML?\n2. **web.dev (Google)** — Modern HTML guides and best practices\n3. **HTML Living Standard** — The official specification\n4. **CSS-Tricks** — Practical guides and tutorials\n5. **CanIUse.com** — Browser support tables for HTML features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML is the foundation of the web. HTML Future: What's New in HTML? is about creating meaningful document structure that communicates intent to browsers, search engines, and assistive technologies. Master the fundamentals — frameworks come and go, but HTML stays."
          }
      ],
    examPool: [
        {
          "id": "html-ch100-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct HTML for creating a HTML Future: What's New in HTML??",
          "options": [
            {
              "id": "a",
              "text": "Using the appropriate semantic HTML element"
            },
            {
              "id": "b",
              "text": "Using a generic <div> with a class name"
            },
            {
              "id": "c",
              "text": "Using JavaScript to create the element dynamically"
            },
            {
              "id": "d",
              "text": "There is no correct approach in HTML"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML provides semantic elements for specific purposes. Always use the most appropriate element for the content."
        },
        {
          "id": "html-ch100-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Future: What's New in HTML? is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch100-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch100-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The attribute used to provide additional context for assistive technologies when semantic HTML is insufficient is called: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby",
            "aria"
          ],
          "explanation": "ARIA attributes enhance accessibility when native HTML semantics are insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["html-ch99"],
    keyPoints: ["HTML Future: What's New in HTML? plays a key role in structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic and interactive elements"],
  },
];

const htmlProjects: Project[] = [
];

export const htmlCourse: Course = {
  id: "html",
  title: "HTML",
  fullTitle: "HTML — The Language of the Web",
  description: "Master HTML from the ground up. Learn to structure web pages with semantic elements, create forms, embed media, and build accessible, well-formed documents — from basic tags to advanced modern APIs.",
  icon: "FileCode",
  color: "#f97316",
  difficulty: 1,
  chapters: htmlChapters,
  projects: htmlProjects,
  totalXP: 1700,
  estimatedHours: 70,
};
