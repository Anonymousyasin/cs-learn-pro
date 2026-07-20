// Auto-generated course data - do not edit directly
import { Course, Chapter, Section, ExamQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, CodeOrderQuestion, MatchPairsQuestion } from "../types";

const htmlChapters: Chapter[] = [
  {
    id: "html-ch1",
    courseId: "html",
    title: "HTML Introduction",
    order: 1,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Introduction?\n\nHTML Introduction is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Introduction is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Introduction — Basic Example -->\n<section>\n  <h2>HTML Introduction</h2>\n  <p>This demonstrates the core concepts of HTML Introduction.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Introduction Matters\n\nUnderstanding HTML Introduction deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Introduction, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Introduction in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Introduction forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Introduction with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Introduction is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Introduction:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Introduction is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Introduction concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch1-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Introduction in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch1-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html introduction in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch1-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html introduction element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch1-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html introduction should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch1-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html introduction improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch1-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html introduction in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch1-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Introduction is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch1-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html introduction to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: [],
    keyPoints: ["HTML Introduction is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch2",
    courseId: "html",
    title: "HTML Editors",
    order: 2,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Editors?\n\nHTML Editors is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Editors is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Editors — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Editors</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        \n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Editors Matters\n\nUnderstanding HTML Editors deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Editors, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Editors in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Editors — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Editors is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Editors:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Editors is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Editors concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch2-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Editors in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch2-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html editors in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch2-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html editors element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch2-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html editors should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch2-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html editors improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch2-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html editors in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch2-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Editors is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch2-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html editors to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["html-ch1"],
    keyPoints: ["HTML Editors is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch3",
    courseId: "html",
    title: "HTML Basics",
    order: 3,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Basics?\n\nHTML Basics is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Basics is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Basics — Advanced usage:",
              "content": "<!-- HTML Basics — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Basics in Practice</h2>\n  <p>When working with HTML Basics, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Basics Matters\n\nUnderstanding HTML Basics deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Basics, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Basics in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Basics forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Basics with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Basics is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Basics:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Basics is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Basics concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch3-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Basics in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch3-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html basics in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch3-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html basics element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch3-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html basics should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch3-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html basics improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch3-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html basics in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch3-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Basics is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch3-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html basics to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["html-ch2"],
    keyPoints: ["HTML Basics is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch4",
    courseId: "html",
    title: "HTML Elements",
    order: 4,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Elements?\n\nHTML Elements is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Elements is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Elements — Basic Example -->\n<section>\n  <h2>HTML Elements</h2>\n  <p>This demonstrates the core concepts of HTML Elements.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Elements Matters\n\nUnderstanding HTML Elements deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Elements, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Elements in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Elements — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Elements is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Elements:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Elements is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Elements concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch4-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Elements in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch4-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html elements in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch4-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html elements element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch4-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html elements should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch4-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch4-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html elements in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch4-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Elements is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch4-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html elements to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["html-ch3"],
    keyPoints: ["HTML Elements is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch5",
    courseId: "html",
    title: "HTML Attributes",
    order: 5,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Attributes?\n\nHTML Attributes is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Attributes is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Attributes — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Attributes</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        \n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Attributes Matters\n\nUnderstanding HTML Attributes deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Attributes, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Attributes in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Attributes forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Attributes with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Attributes is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Attributes:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Attributes is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Attributes concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch5-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch5-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html attributes in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch5-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html attributes element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch5-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html attributes should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch5-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html attributes improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch5-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html attributes in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch5-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Attributes is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch5-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html attributes to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["html-ch4"],
    keyPoints: ["HTML Attributes is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch6",
    courseId: "html",
    title: "HTML Headings",
    order: 6,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Headings?\n\nHTML Headings is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Headings is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Headings — Advanced usage:",
              "content": "<!-- HTML Headings — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Headings in Practice</h2>\n  <p>When working with HTML Headings, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Headings Matters\n\nUnderstanding HTML Headings deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Headings, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Headings in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Headings — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Headings is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Headings:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Headings is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Headings concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch6-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Headings in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch6-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html headings in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch6-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html headings element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch6-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html headings should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch6-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html headings improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch6-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html headings in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch6-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Headings is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch6-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html headings to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["html-ch5"],
    keyPoints: ["HTML Headings is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch7",
    courseId: "html",
    title: "HTML Paragraphs",
    order: 7,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Paragraphs?\n\nHTML Paragraphs is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Paragraphs is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Paragraphs — Basic Example -->\n<section>\n  <h2>HTML Paragraphs</h2>\n  <p>This demonstrates the core concepts of HTML Paragraphs.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Paragraphs Matters\n\nUnderstanding HTML Paragraphs deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Paragraphs, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Paragraphs in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Paragraphs forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Paragraphs with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Paragraphs is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Paragraphs:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Paragraphs is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Paragraphs concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch7-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Paragraphs in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch7-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html paragraphs in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch7-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html paragraphs element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch7-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html paragraphs should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch7-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html paragraphs improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch7-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html paragraphs in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch7-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Paragraphs is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch7-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html paragraphs to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["html-ch6"],
    keyPoints: ["HTML Paragraphs is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch8",
    courseId: "html",
    title: "HTML Styles",
    order: 8,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Styles?\n\nHTML Styles is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Styles is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Styles — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Styles</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        \n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Styles Matters\n\nUnderstanding HTML Styles deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Styles, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Styles in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Styles — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Styles is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Styles:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Styles is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Styles concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch8-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Styles in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch8-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html styles in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch8-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html styles element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch8-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html styles should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch8-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html styles improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch8-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html styles in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch8-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Styles is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch8-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html styles to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["html-ch7"],
    keyPoints: ["HTML Styles is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch9",
    courseId: "html",
    title: "HTML Formatting",
    order: 9,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Formatting?\n\nHTML Formatting is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Formatting is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Formatting — Advanced usage:",
              "content": "<!-- HTML Formatting — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Formatting in Practice</h2>\n  <p>When working with HTML Formatting, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Formatting Matters\n\nUnderstanding HTML Formatting deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Formatting, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Formatting in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Formatting forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Formatting with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Formatting is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Formatting:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Formatting is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Formatting concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch9-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Formatting in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch9-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html formatting in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch9-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html formatting element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch9-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html formatting should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch9-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html formatting improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch9-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html formatting in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch9-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Formatting is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch9-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html formatting to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["html-ch8"],
    keyPoints: ["HTML Formatting is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch10",
    courseId: "html",
    title: "HTML Quotations",
    order: 10,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Quotations?\n\nHTML Quotations is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Quotations is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Quotations — Basic Example -->\n<section>\n  <h2>HTML Quotations</h2>\n  <p>This demonstrates the core concepts of HTML Quotations.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Quotations Matters\n\nUnderstanding HTML Quotations deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Quotations, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Quotations in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Quotations — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Quotations is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Quotations:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Quotations is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Quotations concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch10-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Quotations in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch10-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html quotations in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch10-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html quotations element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch10-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html quotations should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch10-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html quotations improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch10-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html quotations in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch10-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Quotations is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch10-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html quotations to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["html-ch9"],
    keyPoints: ["HTML Quotations is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch11",
    courseId: "html",
    title: "HTML Comments",
    order: 11,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Comments?\n\nHTML Comments is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Comments is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Comments — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Comments</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        \n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Comments Matters\n\nUnderstanding HTML Comments deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Comments, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Comments in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Comments forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Comments with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Comments is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Comments:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Comments is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Comments concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch11-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Comments in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch11-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html comments in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch11-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html comments element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch11-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html comments should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch11-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html comments improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch11-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html comments in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch11-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Comments is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch11-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html comments to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["html-ch10"],
    keyPoints: ["HTML Comments is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch12",
    courseId: "html",
    title: "HTML Colors",
    order: 12,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Colors?\n\nHTML Colors is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Colors is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Colors — Advanced usage:",
              "content": "<!-- HTML Colors — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Colors in Practice</h2>\n  <p>When working with HTML Colors, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Colors Matters\n\nUnderstanding HTML Colors deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Colors, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Colors in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Colors — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Colors is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Colors:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Colors is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Colors concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch12-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Colors in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch12-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html colors in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch12-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html colors element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch12-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html colors should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch12-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html colors improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch12-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html colors in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch12-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Colors is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch12-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html colors to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["html-ch11"],
    keyPoints: ["HTML Colors is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch13",
    courseId: "html",
    title: "HTML CSS",
    order: 13,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML CSS?\n\nHTML CSS is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML CSS is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML CSS — Basic Example -->\n<section>\n  <h2>HTML CSS</h2>\n  <p>This demonstrates the core concepts of HTML CSS.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML CSS Matters\n\nUnderstanding HTML CSS deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML CSS, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML CSS in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML CSS forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML CSS with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML CSS is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML CSS:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML CSS is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML CSS concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch13-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML CSS in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch13-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html css in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch13-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html css element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch13-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html css should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch13-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html css improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch13-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html css in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch13-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML CSS is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch13-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html css to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["html-ch12"],
    keyPoints: ["HTML CSS is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch14",
    courseId: "html",
    title: "HTML Links",
    order: 14,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Links?\n\nHTML Links is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Links is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Links — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Links</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        \n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Links Matters\n\nUnderstanding HTML Links deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Links, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Links in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Links — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Links is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Links:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Links is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Links concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch14-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Links in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch14-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html links in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch14-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html links element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch14-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html links should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch14-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html links improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch14-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html links in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch14-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Links is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch14-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html links to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["html-ch13"],
    keyPoints: ["HTML Links is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch15",
    courseId: "html",
    title: "HTML Images",
    order: 15,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Images?\n\nHTML Images is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Images is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Images — Advanced usage:",
              "content": "<!-- HTML Images — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Images in Practice</h2>\n  <p>When working with HTML Images, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Images Matters\n\nUnderstanding HTML Images deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Images, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Images in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Images forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Images with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Images is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Images:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Images is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Images concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch15-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Images in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch15-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html images in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch15-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html images element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch15-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html images should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch15-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html images improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch15-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html images in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch15-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Images is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch15-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html images to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["html-ch14"],
    keyPoints: ["HTML Images is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch16",
    courseId: "html",
    title: "HTML Favicon",
    order: 16,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Favicon?\n\nHTML Favicon is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Favicon is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Favicon — Basic Example -->\n<section>\n  <h2>HTML Favicon</h2>\n  <p>This demonstrates the core concepts of HTML Favicon.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Favicon Matters\n\nUnderstanding HTML Favicon deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Favicon, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Favicon in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Favicon — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Favicon is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Favicon:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Favicon is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Favicon concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch16-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Favicon in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch16-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html favicon in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch16-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html favicon element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch16-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html favicon should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch16-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html favicon improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch16-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html favicon in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch16-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Favicon is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch16-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html favicon to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["html-ch15"],
    keyPoints: ["HTML Favicon is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch17",
    courseId: "html",
    title: "HTML Tables",
    order: 17,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Tables?\n\nHTML Tables is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Tables is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Tables — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Tables</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        \n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Tables Matters\n\nUnderstanding HTML Tables deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Tables, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Tables in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Tables forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Tables with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Tables is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Tables:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Tables is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Tables concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch17-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Tables in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch17-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html tables in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch17-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html tables element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch17-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html tables should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch17-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html tables improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch17-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html tables in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch17-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Tables is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch17-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html tables to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["html-ch16"],
    keyPoints: ["HTML Tables is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch18",
    courseId: "html",
    title: "HTML Lists",
    order: 18,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Lists?\n\nHTML Lists is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Lists is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Lists — Advanced usage:",
              "content": "<!-- HTML Lists — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Lists in Practice</h2>\n  <p>When working with HTML Lists, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Lists Matters\n\nUnderstanding HTML Lists deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Lists, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Lists in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Lists — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Lists is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Lists:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Lists is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Lists concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch18-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Lists in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch18-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html lists in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch18-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html lists element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch18-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html lists should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch18-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html lists improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch18-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html lists in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch18-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Lists is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch18-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html lists to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["html-ch17"],
    keyPoints: ["HTML Lists is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch19",
    courseId: "html",
    title: "HTML Block & Inline",
    order: 19,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Block & Inline?\n\nHTML Block & Inline is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Block & Inline is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Block & Inline — Basic Example -->\n<section>\n  <h2>HTML Block & Inline</h2>\n  <p>This demonstrates the core concepts of HTML Block & Inline.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Block & Inline Matters\n\nUnderstanding HTML Block & Inline deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Block & Inline, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Block & Inline in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Block & Inline forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Block & Inline with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Block & Inline is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Block & Inline:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Block & Inline is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Block & Inline concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch19-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Block & Inline in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch19-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html block & inline in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch19-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html block & inline element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch19-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html block & inline should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch19-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html block & inline improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch19-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html block & inline in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch19-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Block & Inline is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch19-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html block & inline to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["html-ch18"],
    keyPoints: ["HTML Block & Inline is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch20",
    courseId: "html",
    title: "HTML Div",
    order: 20,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Div?\n\nHTML Div is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Div is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Div — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Div</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        \n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Div Matters\n\nUnderstanding HTML Div deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Div, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Div in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Div — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Div is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Div:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Div is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Div concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch20-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Div in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch20-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html div in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch20-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html div element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch20-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html div should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch20-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html div improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch20-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html div in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch20-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Div is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch20-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html div to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["html-ch19"],
    keyPoints: ["HTML Div is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch21",
    courseId: "html",
    title: "HTML Classes",
    order: 21,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Classes?\n\nHTML Classes is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Classes is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Classes — Advanced usage:",
              "content": "<!-- HTML Classes — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Classes in Practice</h2>\n  <p>When working with HTML Classes, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Classes Matters\n\nUnderstanding HTML Classes deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Classes, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Classes in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Classes forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Classes with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Classes is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Classes:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Classes is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Classes concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch21-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Classes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch21-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html classes in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch21-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html classes element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch21-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html classes should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch21-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html classes improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch21-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html classes in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch21-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Classes is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch21-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html classes to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["html-ch20"],
    keyPoints: ["HTML Classes is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch22",
    courseId: "html",
    title: "HTML ID",
    order: 22,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML ID?\n\nHTML ID is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML ID is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML ID — Basic Example -->\n<section>\n  <h2>HTML ID</h2>\n  <p>This demonstrates the core concepts of HTML ID.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML ID Matters\n\nUnderstanding HTML ID deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML ID, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML ID in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML ID — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML ID is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML ID:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML ID is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML ID concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch22-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML ID in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch22-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html id in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch22-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html id element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch22-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html id should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch22-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html id improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch22-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html id in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch22-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML ID is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch22-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html id to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["html-ch21"],
    keyPoints: ["HTML ID is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch23",
    courseId: "html",
    title: "HTML Iframes",
    order: 23,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Iframes?\n\nHTML Iframes is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Iframes is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Iframes — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Iframes</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Iframes Matters\n\nUnderstanding HTML Iframes deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Iframes, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Iframes in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Iframes forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Iframes with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Iframes is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Iframes:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Iframes is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Iframes concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch23-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Iframes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch23-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html iframes in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch23-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html iframes element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch23-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html iframes should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch23-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html iframes improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch23-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html iframes in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch23-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Iframes is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch23-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html iframes to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["html-ch22"],
    keyPoints: ["HTML Iframes is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch24",
    courseId: "html",
    title: "HTML JavaScript",
    order: 24,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML JavaScript?\n\nHTML JavaScript is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML JavaScript is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML JavaScript — Advanced usage:",
              "content": "<!-- HTML JavaScript — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML JavaScript in Practice</h2>\n  <p>When working with HTML JavaScript, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML JavaScript Matters\n\nUnderstanding HTML JavaScript deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML JavaScript, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML JavaScript in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML JavaScript — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML JavaScript is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML JavaScript:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML JavaScript is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML JavaScript concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch24-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML JavaScript in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch24-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html javascript in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch24-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html javascript element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch24-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html javascript should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch24-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html javascript improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch24-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html javascript in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch24-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML JavaScript is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch24-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html javascript to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["html-ch23"],
    keyPoints: ["HTML JavaScript is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch25",
    courseId: "html",
    title: "HTML File Paths",
    order: 25,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML File Paths?\n\nHTML File Paths is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML File Paths is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML File Paths — Basic Example -->\n<section>\n  <h2>HTML File Paths</h2>\n  <p>This demonstrates the core concepts of HTML File Paths.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML File Paths Matters\n\nUnderstanding HTML File Paths deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML File Paths, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML File Paths in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML File Paths forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML File Paths with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML File Paths is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML File Paths:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML File Paths is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML File Paths concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch25-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML File Paths in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch25-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html file paths in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch25-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html file paths element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch25-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html file paths should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch25-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html file paths improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch25-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html file paths in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch25-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML File Paths is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch25-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html file paths to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["html-ch24"],
    keyPoints: ["HTML File Paths is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch26",
    courseId: "html",
    title: "HTML Head",
    order: 26,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Head?\n\nHTML Head is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Head is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Head — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Head</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Head Matters\n\nUnderstanding HTML Head deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Head, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Head in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Head — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Head is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Head:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Head is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Head concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch26-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Head in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch26-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html head in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch26-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html head element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch26-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html head should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch26-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html head improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch26-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html head in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch26-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Head is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch26-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html head to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["html-ch25"],
    keyPoints: ["HTML Head is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch27",
    courseId: "html",
    title: "HTML Layout",
    order: 27,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Layout?\n\nHTML Layout is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Layout is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Layout — Advanced usage:",
              "content": "<!-- HTML Layout — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Layout in Practice</h2>\n  <p>When working with HTML Layout, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Layout Matters\n\nUnderstanding HTML Layout deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Layout, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Layout in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Layout forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Layout with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Layout is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Layout:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Layout is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Layout concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch27-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Layout in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch27-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html layout in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch27-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html layout element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch27-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html layout should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch27-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html layout improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch27-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html layout in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch27-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Layout is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch27-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html layout to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["html-ch26"],
    keyPoints: ["HTML Layout is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch28",
    courseId: "html",
    title: "HTML Responsive",
    order: 28,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Responsive?\n\nHTML Responsive is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Responsive is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Responsive — Basic Example -->\n<section>\n  <h2>HTML Responsive</h2>\n  <p>This demonstrates the core concepts of HTML Responsive.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Responsive Matters\n\nUnderstanding HTML Responsive deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Responsive, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Responsive in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Responsive — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Responsive is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Responsive:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Responsive is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Responsive concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch28-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Responsive in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch28-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html responsive in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch28-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html responsive element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch28-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html responsive should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch28-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html responsive improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch28-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html responsive in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch28-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Responsive is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch28-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html responsive to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["html-ch27"],
    keyPoints: ["HTML Responsive is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch29",
    courseId: "html",
    title: "HTML Semantics",
    order: 29,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Semantics?\n\nHTML Semantics is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Semantics is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Semantics — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Semantics</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Semantics Matters\n\nUnderstanding HTML Semantics deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Semantics, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Semantics in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Semantics forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Semantics with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Semantics is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Semantics:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Semantics is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Semantics concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch29-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Semantics in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch29-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html semantics in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch29-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html semantics element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch29-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html semantics should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch29-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html semantics improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch29-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html semantics in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch29-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Semantics is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch29-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html semantics to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["html-ch28"],
    keyPoints: ["HTML Semantics is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch30",
    courseId: "html",
    title: "HTML Style Guide",
    order: 30,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Style Guide?\n\nHTML Style Guide is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Style Guide is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Style Guide — Advanced usage:",
              "content": "<!-- HTML Style Guide — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Style Guide in Practice</h2>\n  <p>When working with HTML Style Guide, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Style Guide Matters\n\nUnderstanding HTML Style Guide deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Style Guide, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Style Guide in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Style Guide — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Style Guide is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Style Guide:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Style Guide is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Style Guide concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch30-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Style Guide in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch30-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html style guide in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch30-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html style guide element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch30-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html style guide should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch30-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html style guide improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch30-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html style guide in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch30-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Style Guide is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch30-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html style guide to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["html-ch29"],
    keyPoints: ["HTML Style Guide is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch31",
    courseId: "html",
    title: "HTML Entities",
    order: 31,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Entities?\n\nHTML Entities is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Entities is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Entities — Basic Example -->\n<section>\n  <h2>HTML Entities</h2>\n  <p>This demonstrates the core concepts of HTML Entities.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Entities Matters\n\nUnderstanding HTML Entities deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Entities, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Entities in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Entities forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Entities with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Entities is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Entities:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Entities is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Entities concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch31-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Entities in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch31-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html entities in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch31-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html entities element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch31-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html entities should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch31-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html entities improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch31-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html entities in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch31-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Entities is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch31-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html entities to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["html-ch30"],
    keyPoints: ["HTML Entities is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch32",
    courseId: "html",
    title: "HTML Symbols",
    order: 32,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Symbols?\n\nHTML Symbols is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Symbols is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Symbols — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Symbols</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Symbols Matters\n\nUnderstanding HTML Symbols deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Symbols, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Symbols in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Symbols — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Symbols is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Symbols:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Symbols is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Symbols concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch32-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Symbols in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch32-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html symbols in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch32-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html symbols element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch32-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html symbols should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch32-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html symbols improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch32-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html symbols in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch32-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Symbols is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch32-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html symbols to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["html-ch31"],
    keyPoints: ["HTML Symbols is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch33",
    courseId: "html",
    title: "HTML Emojis",
    order: 33,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Emojis?\n\nHTML Emojis is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Emojis is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Emojis — Advanced usage:",
              "content": "<!-- HTML Emojis — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Emojis in Practice</h2>\n  <p>When working with HTML Emojis, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Emojis Matters\n\nUnderstanding HTML Emojis deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Emojis, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Emojis in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Emojis forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Emojis with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Emojis is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Emojis:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Emojis is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Emojis concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch33-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Emojis in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch33-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html emojis in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch33-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html emojis element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch33-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html emojis should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch33-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html emojis improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch33-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html emojis in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch33-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Emojis is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch33-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html emojis to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["html-ch32"],
    keyPoints: ["HTML Emojis is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch34",
    courseId: "html",
    title: "HTML Charset",
    order: 34,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Charset?\n\nHTML Charset is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Charset is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Charset — Basic Example -->\n<section>\n  <h2>HTML Charset</h2>\n  <p>This demonstrates the core concepts of HTML Charset.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Charset Matters\n\nUnderstanding HTML Charset deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Charset, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Charset in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Charset — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Charset is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Charset:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Charset is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Charset concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch34-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Charset in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch34-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html charset in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch34-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html charset element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch34-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html charset should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch34-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html charset improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch34-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html charset in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch34-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Charset is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch34-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html charset to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["html-ch33"],
    keyPoints: ["HTML Charset is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch35",
    courseId: "html",
    title: "HTML URL Encoding",
    order: 35,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML URL Encoding?\n\nHTML URL Encoding is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML URL Encoding is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML URL Encoding — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML URL Encoding</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML URL Encoding Matters\n\nUnderstanding HTML URL Encoding deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML URL Encoding, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML URL Encoding in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML URL Encoding forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML URL Encoding with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML URL Encoding is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML URL Encoding:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML URL Encoding is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML URL Encoding concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch35-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML URL Encoding in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch35-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html url encoding in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch35-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html url encoding element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch35-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html url encoding should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch35-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html url encoding improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch35-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html url encoding in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch35-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML URL Encoding is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch35-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html url encoding to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["html-ch34"],
    keyPoints: ["HTML URL Encoding is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch36",
    courseId: "html",
    title: "HTML Forms",
    order: 36,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Forms?\n\nHTML Forms is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Forms is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Forms — Advanced usage:",
              "content": "<!-- HTML Forms — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Forms in Practice</h2>\n  <p>When working with HTML Forms, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Forms Matters\n\nUnderstanding HTML Forms deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Forms, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Forms in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Forms — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Forms is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Forms:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Forms is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Forms concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch36-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Forms in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch36-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html forms in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch36-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html forms element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch36-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html forms should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch36-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html forms improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch36-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html forms in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch36-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Forms is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch36-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html forms to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["html-ch35"],
    keyPoints: ["HTML Forms is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch37",
    courseId: "html",
    title: "HTML Form Attributes",
    order: 37,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Form Attributes?\n\nHTML Form Attributes is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Form Attributes is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Form Attributes — Basic Example -->\n<section>\n  <h2>HTML Form Attributes</h2>\n  <p>This demonstrates the core concepts of HTML Form Attributes.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Form Attributes Matters\n\nUnderstanding HTML Form Attributes deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Form Attributes, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Form Attributes in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Form Attributes forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Form Attributes with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Form Attributes is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Form Attributes:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Form Attributes is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Form Attributes concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch37-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Form Attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch37-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html form attributes in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch37-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html form attributes element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch37-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html form attributes should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch37-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html form attributes improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch37-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html form attributes in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch37-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Form Attributes is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch37-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html form attributes to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["html-ch36"],
    keyPoints: ["HTML Form Attributes is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch38",
    courseId: "html",
    title: "HTML Form Elements",
    order: 38,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Form Elements?\n\nHTML Form Elements is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Form Elements is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Form Elements — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Form Elements</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Form Elements Matters\n\nUnderstanding HTML Form Elements deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Form Elements, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Form Elements in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Form Elements — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Form Elements is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Form Elements:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Form Elements is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Form Elements concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch38-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Form Elements in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch38-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html form elements in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch38-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html form elements element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch38-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html form elements should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch38-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html form elements improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch38-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html form elements in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch38-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Form Elements is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch38-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html form elements to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["html-ch37"],
    keyPoints: ["HTML Form Elements is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch39",
    courseId: "html",
    title: "HTML Input Types",
    order: 39,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Input Types?\n\nHTML Input Types is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Input Types is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Input Types — Advanced usage:",
              "content": "<!-- HTML Input Types — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Input Types in Practice</h2>\n  <p>When working with HTML Input Types, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Input Types Matters\n\nUnderstanding HTML Input Types deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Input Types, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Input Types in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Input Types forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Input Types with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Input Types is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Input Types:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Input Types is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Input Types concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch39-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Input Types in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch39-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html input types in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch39-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html input types element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch39-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html input types should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch39-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html input types improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch39-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html input types in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch39-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Input Types is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch39-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html input types to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["html-ch38"],
    keyPoints: ["HTML Input Types is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch40",
    courseId: "html",
    title: "HTML Input Attributes",
    order: 40,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Input Attributes?\n\nHTML Input Attributes is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Input Attributes is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Input Attributes — Basic Example -->\n<section>\n  <h2>HTML Input Attributes</h2>\n  <p>This demonstrates the core concepts of HTML Input Attributes.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Input Attributes Matters\n\nUnderstanding HTML Input Attributes deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Input Attributes, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Input Attributes in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Input Attributes — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Input Attributes is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Input Attributes:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Input Attributes is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Input Attributes concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch40-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Input Attributes in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch40-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html input attributes in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch40-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html input attributes element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch40-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html input attributes should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch40-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html input attributes improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch40-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html input attributes in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch40-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Input Attributes is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch40-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html input attributes to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["html-ch39"],
    keyPoints: ["HTML Input Attributes is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch41",
    courseId: "html",
    title: "HTML Canvas",
    order: 41,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Canvas?\n\nHTML Canvas is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Canvas is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Canvas — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Canvas</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Canvas Matters\n\nUnderstanding HTML Canvas deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Canvas, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Canvas in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Canvas forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Canvas with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Canvas is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Canvas:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Canvas is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Canvas concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch41-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Canvas in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch41-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html canvas in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch41-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html canvas element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch41-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html canvas should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch41-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html canvas improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch41-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html canvas in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch41-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Canvas is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch41-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html canvas to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["html-ch40"],
    keyPoints: ["HTML Canvas is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch42",
    courseId: "html",
    title: "HTML SVG",
    order: 42,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML SVG?\n\nHTML SVG is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML SVG is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML SVG — Advanced usage:",
              "content": "<!-- HTML SVG — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML SVG in Practice</h2>\n  <p>When working with HTML SVG, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML SVG Matters\n\nUnderstanding HTML SVG deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML SVG, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML SVG in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML SVG — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML SVG is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML SVG:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML SVG is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML SVG concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch42-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML SVG in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch42-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html svg in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch42-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html svg element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch42-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html svg should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch42-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html svg improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch42-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html svg in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch42-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML SVG is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch42-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html svg to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["html-ch41"],
    keyPoints: ["HTML SVG is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch43",
    courseId: "html",
    title: "HTML Media",
    order: 43,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Media?\n\nHTML Media is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Media is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Media — Basic Example -->\n<section>\n  <h2>HTML Media</h2>\n  <p>This demonstrates the core concepts of HTML Media.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Media Matters\n\nUnderstanding HTML Media deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Media, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Media in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Media forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Media with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Media is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Media:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Media is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Media concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch43-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Media in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch43-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html media in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch43-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html media element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch43-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html media should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch43-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html media improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch43-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html media in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch43-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Media is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch43-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html media to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["html-ch42"],
    keyPoints: ["HTML Media is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch44",
    courseId: "html",
    title: "HTML Video",
    order: 44,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Video?\n\nHTML Video is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Video is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Video — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Video</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Video Matters\n\nUnderstanding HTML Video deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Video, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Video in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Video — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Video is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Video:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Video is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Video concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch44-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Video in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch44-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html video in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch44-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html video element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch44-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html video should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch44-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html video improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch44-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html video in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch44-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Video is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch44-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html video to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["html-ch43"],
    keyPoints: ["HTML Video is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch45",
    courseId: "html",
    title: "HTML Audio",
    order: 45,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Audio?\n\nHTML Audio is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Audio is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Audio — Advanced usage:",
              "content": "<!-- HTML Audio — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Audio in Practice</h2>\n  <p>When working with HTML Audio, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Audio Matters\n\nUnderstanding HTML Audio deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Audio, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Audio in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Audio forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Audio with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Audio is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Audio:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Audio is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Audio concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch45-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Audio in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch45-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html audio in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch45-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html audio element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch45-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html audio should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch45-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html audio improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch45-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html audio in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch45-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Audio is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch45-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html audio to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["html-ch44"],
    keyPoints: ["HTML Audio is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch46",
    courseId: "html",
    title: "HTML YouTube",
    order: 46,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML YouTube?\n\nHTML YouTube is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML YouTube is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML YouTube — Basic Example -->\n<section>\n  <h2>HTML YouTube</h2>\n  <p>This demonstrates the core concepts of HTML YouTube.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML YouTube Matters\n\nUnderstanding HTML YouTube deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML YouTube, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML YouTube in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML YouTube — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML YouTube is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML YouTube:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML YouTube is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML YouTube concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch46-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML YouTube in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch46-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html youtube in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch46-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html youtube element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch46-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html youtube should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch46-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html youtube improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch46-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html youtube in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch46-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML YouTube is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch46-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html youtube to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["html-ch45"],
    keyPoints: ["HTML YouTube is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch47",
    courseId: "html",
    title: "HTML Drag/Drop",
    order: 47,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Drag/Drop?\n\nHTML Drag/Drop is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Drag/Drop is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Drag/Drop — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Drag/Drop</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Drag/Drop Matters\n\nUnderstanding HTML Drag/Drop deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Drag/Drop, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Drag/Drop in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Drag/Drop forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Drag/Drop with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Drag/Drop is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Drag/Drop:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Drag/Drop is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Drag/Drop concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch47-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Drag/Drop in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch47-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html drag/drop in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch47-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html drag/drop element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch47-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html drag/drop should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch47-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html drag/drop improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch47-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html drag/drop in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch47-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Drag/Drop is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch47-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html drag/drop to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["html-ch46"],
    keyPoints: ["HTML Drag/Drop is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch48",
    courseId: "html",
    title: "HTML Web Storage",
    order: 48,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Web Storage?\n\nHTML Web Storage is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Web Storage is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Web Storage — Advanced usage:",
              "content": "<!-- HTML Web Storage — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Web Storage in Practice</h2>\n  <p>When working with HTML Web Storage, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Web Storage Matters\n\nUnderstanding HTML Web Storage deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Web Storage, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Web Storage in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Web Storage — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Web Storage is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Web Storage:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Web Storage is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Web Storage concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch48-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Web Storage in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch48-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html web storage in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch48-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html web storage element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch48-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html web storage should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch48-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html web storage improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch48-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html web storage in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch48-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Web Storage is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch48-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html web storage to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["html-ch47"],
    keyPoints: ["HTML Web Storage is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch49",
    courseId: "html",
    title: "HTML Web Workers",
    order: 49,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Web Workers?\n\nHTML Web Workers is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Web Workers is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Web Workers — Basic Example -->\n<section>\n  <h2>HTML Web Workers</h2>\n  <p>This demonstrates the core concepts of HTML Web Workers.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Web Workers Matters\n\nUnderstanding HTML Web Workers deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Web Workers, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Web Workers in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Web Workers forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Web Workers with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Web Workers is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Web Workers:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Web Workers is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Web Workers concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch49-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Web Workers in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch49-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html web workers in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch49-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html web workers element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch49-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html web workers should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch49-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html web workers improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch49-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html web workers in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch49-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Web Workers is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch49-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html web workers to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["html-ch48"],
    keyPoints: ["HTML Web Workers is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch50",
    courseId: "html",
    title: "HTML SSE",
    order: 50,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML SSE?\n\nHTML SSE is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML SSE is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML SSE — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML SSE</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML SSE Matters\n\nUnderstanding HTML SSE deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML SSE, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML SSE in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML SSE — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML SSE is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML SSE:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML SSE is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML SSE concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch50-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML SSE in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch50-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html sse in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch50-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html sse element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch50-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html sse should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch50-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html sse improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch50-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html sse in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch50-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML SSE is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch50-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html sse to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["html-ch49"],
    keyPoints: ["HTML SSE is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch51",
    courseId: "html",
    title: "HTML Accessibility",
    order: 51,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Accessibility?\n\nHTML Accessibility is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Accessibility is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Accessibility — Advanced usage:",
              "content": "<!-- HTML Accessibility — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Accessibility in Practice</h2>\n  <p>When working with HTML Accessibility, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Accessibility Matters\n\nUnderstanding HTML Accessibility deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Accessibility, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Accessibility in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Accessibility forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Accessibility with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Accessibility is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Accessibility:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Accessibility is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Accessibility concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch51-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Accessibility in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch51-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html accessibility in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch51-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html accessibility element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch51-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html accessibility should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch51-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html accessibility improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch51-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html accessibility in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch51-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Accessibility is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch51-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html accessibility to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["html-ch50"],
    keyPoints: ["HTML Accessibility is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch52",
    courseId: "html",
    title: "HTML SEO",
    order: 52,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML SEO?\n\nHTML SEO is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML SEO is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML SEO — Basic Example -->\n<section>\n  <h2>HTML SEO</h2>\n  <p>This demonstrates the core concepts of HTML SEO.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML SEO Matters\n\nUnderstanding HTML SEO deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML SEO, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML SEO in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML SEO — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML SEO is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML SEO:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML SEO is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML SEO concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch52-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML SEO in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch52-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html seo in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch52-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html seo element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch52-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html seo should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch52-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html seo improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch52-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html seo in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch52-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML SEO is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch52-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html seo to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["html-ch51"],
    keyPoints: ["HTML SEO is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch53",
    courseId: "html",
    title: "HTML Performance",
    order: 53,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Performance?\n\nHTML Performance is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Performance is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Performance — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Performance</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Performance Matters\n\nUnderstanding HTML Performance deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Performance, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Performance in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Performance forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Performance with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Performance is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Performance:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Performance is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Performance concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch53-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Performance in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch53-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html performance in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch53-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html performance element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch53-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html performance should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch53-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html performance improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch53-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html performance in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch53-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Performance is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch53-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html performance to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["html-ch52"],
    keyPoints: ["HTML Performance is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch54",
    courseId: "html",
    title: "HTML Security",
    order: 54,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Security?\n\nHTML Security is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Security is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Security — Advanced usage:",
              "content": "<!-- HTML Security — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Security in Practice</h2>\n  <p>When working with HTML Security, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Security Matters\n\nUnderstanding HTML Security deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Security, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Security in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Security — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Security is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Security:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Security is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Security concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch54-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Security in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch54-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html security in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch54-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html security element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch54-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html security should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch54-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html security improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch54-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html security in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch54-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Security is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch54-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html security to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["html-ch53"],
    keyPoints: ["HTML Security is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch55",
    courseId: "html",
    title: "HTML Templates",
    order: 55,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Templates?\n\nHTML Templates is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Templates is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML Templates — Basic Example -->\n<section>\n  <h2>HTML Templates</h2>\n  <p>This demonstrates the core concepts of HTML Templates.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML Templates Matters\n\nUnderstanding HTML Templates deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Templates, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Templates in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Templates forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Templates with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Templates is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Templates:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Templates is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Templates concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch55-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Templates in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch55-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html templates in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch55-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html templates element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch55-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html templates should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch55-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html templates improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch55-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html templates in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch55-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Templates is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch55-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html templates to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["html-ch54"],
    keyPoints: ["HTML Templates is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch56",
    courseId: "html",
    title: "HTML Microdata",
    order: 56,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Microdata?\n\nHTML Microdata is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Microdata is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML Microdata — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML Microdata</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML Microdata Matters\n\nUnderstanding HTML Microdata deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Microdata, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Microdata in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML Microdata — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Microdata is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Microdata:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Microdata is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Microdata concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch56-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Microdata in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch56-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html microdata in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch56-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html microdata element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch56-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html microdata should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch56-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html microdata improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch56-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html microdata in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch56-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Microdata is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch56-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html microdata to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["html-ch55"],
    keyPoints: ["HTML Microdata is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch57",
    courseId: "html",
    title: "HTML Best Practices",
    order: 57,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML Best Practices?\n\nHTML Best Practices is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML Best Practices is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML Best Practices — Advanced usage:",
              "content": "<!-- HTML Best Practices — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML Best Practices in Practice</h2>\n  <p>When working with HTML Best Practices, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML Best Practices Matters\n\nUnderstanding HTML Best Practices deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML Best Practices, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML Best Practices in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML Best Practices forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML Best Practices with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML Best Practices is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML Best Practices:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML Best Practices is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML Best Practices concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch57-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML Best Practices in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch57-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html best practices in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch57-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html best practices element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch57-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html best practices should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch57-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html best practices improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch57-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html best practices in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch57-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML Best Practices is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch57-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html best practices to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["html-ch56"],
    keyPoints: ["HTML Best Practices is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch58",
    courseId: "html",
    title: "HTML APIs",
    order: 58,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML APIs?\n\nHTML APIs is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML APIs is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Basic structure example:",
              "content": "<!-- HTML APIs — Basic Example -->\n<section>\n  <h2>HTML APIs</h2>\n  <p>This demonstrates the core concepts of HTML APIs.</p>\n  <p>Each HTML element serves a specific purpose in document structure.</p>\n</section>"
          },
          {
              "type": "text",
              "content": "## Why HTML APIs Matters\n\nUnderstanding HTML APIs deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML APIs, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML APIs in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML APIs — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML APIs is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML APIs:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML APIs is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML APIs concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch58-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML APIs in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch58-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html apis in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch58-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html apis element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch58-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html apis should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch58-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html apis improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch58-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html apis in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch58-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML APIs is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch58-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html apis to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["html-ch57"],
    keyPoints: ["HTML APIs is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch59",
    courseId: "html",
    title: "HTML History",
    order: 59,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML History?\n\nHTML History is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML History is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "Practical usage:",
              "content": "<!-- HTML History — Common Patterns -->\n<div class=\"container\">\n  <header>\n    <h1>HTML History</h1>\n    <nav aria-label=\"Main navigation\">\n      <ul>\n        <li><a href=\"#overview\">Overview</a></li>\n        <li><a href=\"#examples\">Examples</a></li>\n        <li><a href=\"#advanced\">Advanced</a></li>\n      </ul>\n    </nav>\n  </header>\n</div>"
          },
          {
              "type": "text",
              "content": "## Why HTML History Matters\n\nUnderstanding HTML History deeply allows you to create more robust, maintainable, and accessible web pages. This concept builds upon previous chapters and lays the foundation for advanced topics like responsive design and web components."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML History, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML History in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "HTML History forms the foundation of web page structure",
                  "Always use the most specific semantic element available",
                  "Validate your HTML History with the W3C validator regularly",
                  "Keep accessibility in mind from the start",
                  "Use ARIA attributes when semantic HTML alone is insufficient"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML History is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML History:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML History is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML History concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch59-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML History in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch59-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html history in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch59-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html history element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch59-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html history should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch59-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html history improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch59-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html history in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch59-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML History is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch59-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html history to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["html-ch58"],
    keyPoints: ["HTML History is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
  {
    id: "html-ch60",
    courseId: "html",
    title: "HTML What's New",
    order: 60,
    sections: [
          {
              "type": "text",
              "content": "## What is HTML What's New?\n\nHTML What's New is a fundamental concept in web development. HTML elements form the backbone of every web page. Understanding how to properly structure content with the right tags is essential for creating accessible, well-organized documents that search engines and assistive technologies can parse effectively.\n\nModern HTML5 provides semantic elements that describe the meaning of content, not just its appearance. By using appropriate tags, you create a document outline that benefits both users and machines."
          },
          {
              "type": "key-points",
              "points": [
                  "HTML What's New is essential for structuring web content semantically",
                  "Proper use improves accessibility, SEO, and maintainability",
                  "HTML5 introduced many new semantic elements"
              ]
          },
          {
              "type": "code",
              "language": "html",
              "caption": "HTML What's New — Advanced usage:",
              "content": "<!-- HTML What's New — Best Practices -->\n<article aria-labelledby=\"title\">\n  <h2 id=\"title\">HTML What's New in Practice</h2>\n  <p>When working with HTML What's New, follow these patterns:</p>\n  <ul>\n    <li>Use semantic elements for clarity</li>\n    <li>Include proper ARIA attributes</li>\n    <li>Test across different browsers</li>\n    <li>Validate your HTML regularly</li>\n  </ul>\n</article>"
          },
          {
              "type": "text",
              "content": "## Why HTML What's New Matters\n\nUnderstanding HTML What's New deeply allows you to create more robust, maintainable, and accessible web pages. Mastering this topic will significantly improve your development workflow and the quality of your projects."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When working with HTML What's New, always use semantic elements over generic divs. This improves accessibility, SEO, and code readability. Screen readers and search engines rely on proper HTML structure to understand your content."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nDevelopers commonly use HTML What's New in several patterns:\n\n1. **Basic setup** — Creating the foundational structure\n2. **With attributes** — Adding metadata and configuration\n3. **Nested structures** — Building complex hierarchies\n4. **Combined with CSS** — Styling with classes and IDs\n5. **With JavaScript** — Making interactive elements"
          },
          {
              "type": "comparison",
              "title": "HTML What's New — Common Approaches",
              "headers": [
                  "Aspect",
                  "Best Practice",
                  "Avoid"
              ],
              "rows": [
                  [
                      "Structure",
                      "Semantic elements (<article>, <nav>)",
                      "Generic divs everywhere"
                  ],
                  [
                      "Accessibility",
                      "ARIA labels + semantic HTML",
                      "Only divs and spans"
                  ],
                  [
                      "SEO",
                      "Proper heading hierarchy",
                      "Skipping heading levels"
                  ],
                  [
                      "Performance",
                      "Minimal nesting",
                      "Deeply nested divs"
                  ],
                  [
                      "Maintenance",
                      "Clear class names",
                      "Inline styles everywhere"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** A frequent mistake with HTML What's New is using generic containers when semantic alternatives exist. Always ask yourself: \"Is there a more descriptive HTML element I could use here?\""
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for HTML What's New:\n\n1. **Validate regularly** — Use the W3C validator to catch errors early\n2. **Use semantic elements** — Choose the right tag for the job\n3. **Keep it clean** — Consistent indentation and clear structure\n4. **Mobile-first** — Design for small screens, enhance for large\n5. **Progressive enhancement** — Start with core content, layer on features"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** HTML What's New is not just about making things look a certain way — it's about creating a meaningful document structure that communicates intent to browsers, search engines, and assistive technologies."
          },
          {
              "type": "text",
              "content": "## Practical Exercise\n\nTry applying what you've learned:\n\n1. Create an HTML document using the HTML What's New concepts\n2. Add appropriate semantic elements\n3. Validate your markup with the W3C validator\n4. Test with a screen reader to verify accessibility\n5. Refactor based on the output"
          }
      ],
    examPool: [
        {
          "id": "html-ch60-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the primary purpose of HTML What's New in HTML?",
          "options": [
            {
              "id": "a",
              "text": "To structure and define the meaning of web content"
            },
            {
              "id": "b",
              "text": "To style the appearance of web pages"
            },
            {
              "id": "c",
              "text": "To add interactivity to web pages"
            },
            {
              "id": "d",
              "text": "To manage server-side data"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML elements define the structure and meaning of content. CSS handles styling, JavaScript handles interactivity, and server-side code manages data."
        },
        {
          "id": "html-ch60-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which of the following is the correct way to use html what's new in HTML5?",
          "options": [
            {
              "id": "a",
              "text": "Using semantic elements that describe content purpose"
            },
            {
              "id": "b",
              "text": "Using div elements with descriptive class names"
            },
            {
              "id": "c",
              "text": "Using table elements for layout"
            },
            {
              "id": "d",
              "text": "Using inline styles directly on elements"
            }
          ],
          "correctAnswer": "a",
          "explanation": "HTML5 encourages semantic elements that convey meaning. Divs with classes work but lack inherent semantics. Tables should not be used for layout."
        },
        {
          "id": "html-ch60-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "The html what's new element is a block-level element by default.",
          "correctAnswer": true,
          "explanation": "Most HTML elements have default display values. Block-level elements start on a new line and take full width available."
        },
        {
          "id": "html-ch60-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The HTML element used for html what's new should have the tag name: ___",
          "correctAnswer": "section",
          "acceptableAnswers": [
            "div",
            "article"
          ],
          "explanation": "Semantic elements like <section> or <article> are appropriate for grouping related content."
        },
        {
          "id": "html-ch60-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Using semantic HTML elements for html what's new improves SEO and accessibility.",
          "correctAnswer": true,
          "explanation": "Semantic HTML helps search engines understand page structure and assists screen readers in navigating content."
        },
        {
          "id": "html-ch60-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for implementing html what's new in a large-scale web application?",
          "options": [
            {
              "id": "a",
              "text": "Use semantic elements with ARIA attributes for accessibility"
            },
            {
              "id": "b",
              "text": "Use only div elements styled with CSS classes"
            },
            {
              "id": "c",
              "text": "Use iframes to isolate content sections"
            },
            {
              "id": "d",
              "text": "Avoid using HTML — use JavaScript to render everything"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Semantic HTML with ARIA attributes provides the best accessibility, SEO, and maintainability. Div-only approaches lack meaning, iframes hurt performance, and JS-only rendering excludes non-JS clients."
        },
        {
          "id": "html-ch60-tf3",
          "type": "true-false",
          "difficulty": "easy",
          "question": "HTML What's New is only relevant for visual appearance.",
          "correctAnswer": false,
          "explanation": "HTML is about structure and meaning, not appearance. Visual presentation is handled by CSS."
        },
        {
          "id": "html-ch60-fb2",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The recommended attribute to add to elements for html what's new to improve accessibility is: ___",
          "correctAnswer": "aria-label",
          "acceptableAnswers": [
            "role",
            "aria-labelledby"
          ],
          "explanation": "ARIA attributes like aria-label provide additional context for assistive technologies when semantic HTML alone is insufficient."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["html-ch59"],
    keyPoints: ["HTML What's New is essential for structuring web content semantically","Proper use improves accessibility, SEO, and maintainability","HTML5 introduced many new semantic elements"],
  },
];

export const htmlCourse: Course = {
  id: "html",
  title: "HTML",
  fullTitle: "HTML — The Language of the Web",
  description: "Master HTML from the ground up. Learn to structure web pages with semantic elements, create forms, embed media, and build accessible, well-formed documents.",
  icon: "FileCode",
  color: "#f97316",
  difficulty: 1,
  chapters: htmlChapters,
  totalXP: 1020,
  estimatedHours: 40,
};
