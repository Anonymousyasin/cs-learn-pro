// Auto-generated course data - do not edit directly
import { Course, Chapter, Section, ExamQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, CodeOrderQuestion, MatchPairsQuestion } from "../types";

const cssChapters: Chapter[] = [
  {
    id: "css-ch1",
    courseId: "css",
    title: "CSS Introduction",
    order: 1,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Introduction\n\nCSS Introduction is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Introduction is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Introduction — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Introduction Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Introduction controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Introduction, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch1-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Introduction to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch1-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Introduction styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch1-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch1-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Introduction using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch1-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css introduction) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch1-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Introduction?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: [],
    keyPoints: ["CSS Introduction is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch2",
    courseId: "css",
    title: "CSS Syntax",
    order: 2,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Syntax\n\nCSS Syntax is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Syntax is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Syntax — Modern approach:",
              "content": "/* CSS Syntax with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Syntax Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Syntax — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Syntax, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch2-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Syntax to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch2-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Syntax styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch2-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch2-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Syntax using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch2-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css syntax) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch2-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Syntax?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["css-ch1"],
    keyPoints: ["CSS Syntax is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch3",
    courseId: "css",
    title: "CSS Selectors",
    order: 3,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Selectors\n\nCSS Selectors is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Selectors is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Selectors — Advanced patterns:",
              "content": "/* CSS Selectors — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Selectors Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Selectors controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Selectors, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch3-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Selectors to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch3-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Selectors styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch3-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch3-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Selectors using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch3-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css selectors) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch3-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Selectors?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["css-ch2"],
    keyPoints: ["CSS Selectors is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch4",
    courseId: "css",
    title: "CSS How To Add",
    order: 4,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS How To Add\n\nCSS How To Add is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS How To Add is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS How To Add — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS How To Add Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS How To Add — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS How To Add, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch4-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS How To Add to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch4-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS How To Add styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch4-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch4-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS How To Add using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch4-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css how to add) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch4-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS How To Add?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["css-ch3"],
    keyPoints: ["CSS How To Add is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch5",
    courseId: "css",
    title: "CSS Comments",
    order: 5,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Comments\n\nCSS Comments is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Comments is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Comments — Modern approach:",
              "content": "/* CSS Comments with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Comments Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Comments controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Comments, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch5-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Comments to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch5-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Comments styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch5-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch5-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Comments using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch5-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css comments) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch5-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Comments?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["css-ch4"],
    keyPoints: ["CSS Comments is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch6",
    courseId: "css",
    title: "CSS Colors",
    order: 6,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Colors\n\nCSS Colors is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Colors is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Colors — Advanced patterns:",
              "content": "/* CSS Colors — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Colors Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Colors — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Colors, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch6-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Colors to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch6-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Colors styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch6-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch6-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Colors using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch6-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css colors) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch6-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Colors?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["css-ch5"],
    keyPoints: ["CSS Colors is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch7",
    courseId: "css",
    title: "CSS Backgrounds",
    order: 7,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Backgrounds\n\nCSS Backgrounds is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Backgrounds is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Backgrounds — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Backgrounds Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Backgrounds controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Backgrounds, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch7-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Backgrounds to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch7-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Backgrounds styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch7-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch7-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Backgrounds using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch7-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css backgrounds) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch7-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Backgrounds?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["css-ch6"],
    keyPoints: ["CSS Backgrounds is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch8",
    courseId: "css",
    title: "CSS Borders",
    order: 8,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Borders\n\nCSS Borders is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Borders is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Borders — Modern approach:",
              "content": "/* CSS Borders with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Borders Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Borders — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Borders, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch8-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Borders to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch8-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Borders styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch8-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch8-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Borders using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch8-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css borders) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch8-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Borders?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["css-ch7"],
    keyPoints: ["CSS Borders is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch9",
    courseId: "css",
    title: "CSS Margins",
    order: 9,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Margins\n\nCSS Margins is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Margins is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Margins — Advanced patterns:",
              "content": "/* CSS Margins — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Margins Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Margins controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Margins, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch9-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Margins to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch9-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Margins styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch9-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch9-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Margins using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch9-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css margins) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch9-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Margins?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["css-ch8"],
    keyPoints: ["CSS Margins is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch10",
    courseId: "css",
    title: "CSS Padding",
    order: 10,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Padding\n\nCSS Padding is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Padding is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Padding — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Padding Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Padding — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Padding, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch10-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Padding to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch10-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Padding styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch10-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch10-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Padding using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch10-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css padding) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch10-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Padding?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["css-ch9"],
    keyPoints: ["CSS Padding is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch11",
    courseId: "css",
    title: "CSS Height/Width",
    order: 11,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Height/Width\n\nCSS Height/Width is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Height/Width is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Height/Width — Modern approach:",
              "content": "/* CSS Height/Width with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Height/Width Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Height/Width controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Height/Width, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch11-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Height/Width to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch11-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Height/Width styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch11-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch11-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Height/Width using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch11-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css height/width) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch11-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Height/Width?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["css-ch10"],
    keyPoints: ["CSS Height/Width is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch12",
    courseId: "css",
    title: "CSS Box Model",
    order: 12,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Box Model\n\nCSS Box Model is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Box Model is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Box Model — Advanced patterns:",
              "content": "/* CSS Box Model — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Box Model Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Box Model — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Box Model, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch12-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Box Model to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch12-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Box Model styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch12-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch12-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Box Model using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch12-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css box model) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch12-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Box Model?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["css-ch11"],
    keyPoints: ["CSS Box Model is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch13",
    courseId: "css",
    title: "CSS Outline",
    order: 13,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Outline\n\nCSS Outline is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Outline is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Outline — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Outline Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Outline controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Outline, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch13-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Outline to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch13-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Outline styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch13-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch13-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Outline using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch13-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css outline) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch13-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Outline?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["css-ch12"],
    keyPoints: ["CSS Outline is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch14",
    courseId: "css",
    title: "CSS Text",
    order: 14,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Text\n\nCSS Text is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Text is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Text — Modern approach:",
              "content": "/* CSS Text with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Text Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Text — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Text, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch14-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Text to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch14-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Text styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch14-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch14-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Text using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch14-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css text) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch14-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Text?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["css-ch13"],
    keyPoints: ["CSS Text is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch15",
    courseId: "css",
    title: "CSS Fonts",
    order: 15,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Fonts\n\nCSS Fonts is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Fonts is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Fonts — Advanced patterns:",
              "content": "/* CSS Fonts — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Fonts Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Fonts controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Fonts, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch15-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Fonts to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch15-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Fonts styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch15-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch15-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Fonts using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch15-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css fonts) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch15-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Fonts?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["css-ch14"],
    keyPoints: ["CSS Fonts is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch16",
    courseId: "css",
    title: "CSS Icons",
    order: 16,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Icons\n\nCSS Icons is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Icons is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Icons — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Icons Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Icons — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Icons, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch16-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Icons to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch16-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Icons styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch16-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch16-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Icons using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch16-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css icons) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch16-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Icons?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["css-ch15"],
    keyPoints: ["CSS Icons is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch17",
    courseId: "css",
    title: "CSS Links",
    order: 17,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Links\n\nCSS Links is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Links is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Links — Modern approach:",
              "content": "/* CSS Links with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Links Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Links controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Links, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch17-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Links to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch17-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Links styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch17-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch17-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Links using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch17-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css links) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch17-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Links?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["css-ch16"],
    keyPoints: ["CSS Links is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch18",
    courseId: "css",
    title: "CSS Lists",
    order: 18,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Lists\n\nCSS Lists is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Lists is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Lists — Advanced patterns:",
              "content": "/* CSS Lists — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Lists Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Lists — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Lists, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch18-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Lists to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch18-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Lists styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch18-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch18-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Lists using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch18-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css lists) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch18-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Lists?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["css-ch17"],
    keyPoints: ["CSS Lists is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch19",
    courseId: "css",
    title: "CSS Tables",
    order: 19,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Tables\n\nCSS Tables is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Tables is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Tables — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Tables Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Tables controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Tables, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch19-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Tables to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch19-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Tables styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch19-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch19-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Tables using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch19-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css tables) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch19-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Tables?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["css-ch18"],
    keyPoints: ["CSS Tables is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch20",
    courseId: "css",
    title: "CSS Display",
    order: 20,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Display\n\nCSS Display is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Display is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Display — Modern approach:",
              "content": "/* CSS Display with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Display Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Display — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Display, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch20-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Display to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch20-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Display styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch20-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch20-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Display using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch20-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css display) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch20-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Display?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["css-ch19"],
    keyPoints: ["CSS Display is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch21",
    courseId: "css",
    title: "CSS Max-width",
    order: 21,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Max-width\n\nCSS Max-width is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Max-width is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Max-width — Advanced patterns:",
              "content": "/* CSS Max-width — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Max-width Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Max-width controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Max-width, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch21-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Max-width to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch21-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Max-width styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch21-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch21-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Max-width using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch21-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css max-width) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch21-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Max-width?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["css-ch20"],
    keyPoints: ["CSS Max-width is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch22",
    courseId: "css",
    title: "CSS Position",
    order: 22,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Position\n\nCSS Position is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Position is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Position — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Position Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Position — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Position, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch22-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Position to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch22-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Position styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch22-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch22-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Position using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch22-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css position) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch22-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Position?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["css-ch21"],
    keyPoints: ["CSS Position is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch23",
    courseId: "css",
    title: "CSS Z-index",
    order: 23,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Z-index\n\nCSS Z-index is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Z-index is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Z-index — Modern approach:",
              "content": "/* CSS Z-index with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Z-index Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Z-index controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Z-index, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch23-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Z-index to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch23-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Z-index styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch23-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch23-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Z-index using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch23-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css z-index) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch23-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Z-index?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["css-ch22"],
    keyPoints: ["CSS Z-index is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch24",
    courseId: "css",
    title: "CSS Overflow",
    order: 24,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Overflow\n\nCSS Overflow is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Overflow is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Overflow — Advanced patterns:",
              "content": "/* CSS Overflow — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Overflow Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Overflow — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Overflow, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch24-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Overflow to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch24-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Overflow styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch24-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch24-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Overflow using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch24-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css overflow) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch24-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Overflow?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["css-ch23"],
    keyPoints: ["CSS Overflow is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch25",
    courseId: "css",
    title: "CSS Float",
    order: 25,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Float\n\nCSS Float is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Float is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Float — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Float Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Float controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Float, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch25-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Float to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch25-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Float styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch25-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch25-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Float using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch25-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css float) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch25-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Float?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["css-ch24"],
    keyPoints: ["CSS Float is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch26",
    courseId: "css",
    title: "CSS Inline-block",
    order: 26,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Inline-block\n\nCSS Inline-block is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Inline-block is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Inline-block — Modern approach:",
              "content": "/* CSS Inline-block with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Inline-block Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Inline-block — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Inline-block, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch26-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Inline-block to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch26-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Inline-block styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch26-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch26-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Inline-block using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch26-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css inline-block) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch26-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Inline-block?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["css-ch25"],
    keyPoints: ["CSS Inline-block is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch27",
    courseId: "css",
    title: "CSS Align",
    order: 27,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Align\n\nCSS Align is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Align is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Align — Advanced patterns:",
              "content": "/* CSS Align — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Align Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Align controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Align, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch27-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Align to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch27-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Align styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch27-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch27-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Align using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch27-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css align) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch27-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Align?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["css-ch26"],
    keyPoints: ["CSS Align is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch28",
    courseId: "css",
    title: "CSS Combinators",
    order: 28,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Combinators\n\nCSS Combinators is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Combinators is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Combinators — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Combinators Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Combinators — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Combinators, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch28-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Combinators to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch28-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Combinators styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch28-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch28-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Combinators using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch28-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css combinators) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch28-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Combinators?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["css-ch27"],
    keyPoints: ["CSS Combinators is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch29",
    courseId: "css",
    title: "CSS Pseudo-classes",
    order: 29,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Pseudo-classes\n\nCSS Pseudo-classes is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Pseudo-classes is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Pseudo-classes — Modern approach:",
              "content": "/* CSS Pseudo-classes with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Pseudo-classes Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Pseudo-classes controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Pseudo-classes, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch29-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Pseudo-classes to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch29-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Pseudo-classes styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch29-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch29-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Pseudo-classes using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch29-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css pseudo-classes) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch29-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Pseudo-classes?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["css-ch28"],
    keyPoints: ["CSS Pseudo-classes is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch30",
    courseId: "css",
    title: "CSS Pseudo-elements",
    order: 30,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Pseudo-elements\n\nCSS Pseudo-elements is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Pseudo-elements is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Pseudo-elements — Advanced patterns:",
              "content": "/* CSS Pseudo-elements — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Pseudo-elements Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Pseudo-elements — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Pseudo-elements, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch30-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Pseudo-elements to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch30-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Pseudo-elements styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch30-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch30-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Pseudo-elements using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch30-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css pseudo-elements) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch30-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Pseudo-elements?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["css-ch29"],
    keyPoints: ["CSS Pseudo-elements is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch31",
    courseId: "css",
    title: "CSS Opacity",
    order: 31,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Opacity\n\nCSS Opacity is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Opacity is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Opacity — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Opacity Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Opacity controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Opacity, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch31-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Opacity to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch31-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Opacity styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch31-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch31-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Opacity using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch31-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css opacity) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch31-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Opacity?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["css-ch30"],
    keyPoints: ["CSS Opacity is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch32",
    courseId: "css",
    title: "CSS Dropdowns",
    order: 32,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Dropdowns\n\nCSS Dropdowns is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Dropdowns is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Dropdowns — Modern approach:",
              "content": "/* CSS Dropdowns with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Dropdowns Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Dropdowns — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Dropdowns, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch32-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Dropdowns to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch32-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Dropdowns styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch32-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch32-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Dropdowns using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch32-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css dropdowns) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch32-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Dropdowns?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["css-ch31"],
    keyPoints: ["CSS Dropdowns is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch33",
    courseId: "css",
    title: "CSS Image Gallery",
    order: 33,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Image Gallery\n\nCSS Image Gallery is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Image Gallery is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Image Gallery — Advanced patterns:",
              "content": "/* CSS Image Gallery — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Image Gallery Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Image Gallery controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Image Gallery, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch33-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Image Gallery to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch33-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Image Gallery styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch33-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch33-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Image Gallery using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch33-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css image gallery) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch33-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Image Gallery?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["css-ch32"],
    keyPoints: ["CSS Image Gallery is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch34",
    courseId: "css",
    title: "CSS Image Sprites",
    order: 34,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Image Sprites\n\nCSS Image Sprites is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Image Sprites is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Image Sprites — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Image Sprites Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Image Sprites — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Image Sprites, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch34-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Image Sprites to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch34-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Image Sprites styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch34-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch34-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Image Sprites using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch34-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css image sprites) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch34-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Image Sprites?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["css-ch33"],
    keyPoints: ["CSS Image Sprites is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch35",
    courseId: "css",
    title: "CSS Attr Selectors",
    order: 35,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Attr Selectors\n\nCSS Attr Selectors is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Attr Selectors is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Attr Selectors — Modern approach:",
              "content": "/* CSS Attr Selectors with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Attr Selectors Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Attr Selectors controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Attr Selectors, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch35-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Attr Selectors to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch35-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Attr Selectors styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch35-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch35-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Attr Selectors using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch35-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css attr selectors) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch35-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Attr Selectors?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["css-ch34"],
    keyPoints: ["CSS Attr Selectors is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch36",
    courseId: "css",
    title: "CSS Forms",
    order: 36,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Forms\n\nCSS Forms is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Forms is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Forms — Advanced patterns:",
              "content": "/* CSS Forms — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Forms Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Forms — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Forms, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch36-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Forms to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch36-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Forms styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch36-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch36-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Forms using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch36-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css forms) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch36-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Forms?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["css-ch35"],
    keyPoints: ["CSS Forms is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch37",
    courseId: "css",
    title: "CSS Counters",
    order: 37,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Counters\n\nCSS Counters is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Counters is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Counters — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Counters Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Counters controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Counters, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch37-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Counters to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch37-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Counters styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch37-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch37-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Counters using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch37-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css counters) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch37-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Counters?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["css-ch36"],
    keyPoints: ["CSS Counters is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch38",
    courseId: "css",
    title: "CSS Layout Float",
    order: 38,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Layout Float\n\nCSS Layout Float is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Layout Float is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Layout Float — Modern approach:",
              "content": "/* CSS Layout Float with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Layout Float Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Layout Float — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Layout Float, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch38-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Layout Float to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch38-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Layout Float styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch38-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch38-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Layout Float using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch38-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css layout float) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch38-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Layout Float?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["css-ch37"],
    keyPoints: ["CSS Layout Float is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch39",
    courseId: "css",
    title: "CSS Layout Flexbox",
    order: 39,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Layout Flexbox\n\nCSS Layout Flexbox is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Layout Flexbox is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Layout Flexbox — Advanced patterns:",
              "content": "/* CSS Layout Flexbox — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Layout Flexbox Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Layout Flexbox controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Layout Flexbox, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch39-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Layout Flexbox to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch39-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Layout Flexbox styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch39-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch39-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Layout Flexbox using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch39-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css layout flexbox) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch39-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Layout Flexbox?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["css-ch38"],
    keyPoints: ["CSS Layout Flexbox is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch40",
    courseId: "css",
    title: "CSS Layout Grid",
    order: 40,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Layout Grid\n\nCSS Layout Grid is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Layout Grid is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Layout Grid — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Layout Grid Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Layout Grid — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Layout Grid, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch40-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Layout Grid to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch40-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Layout Grid styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch40-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch40-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Layout Grid using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch40-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css layout grid) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch40-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Layout Grid?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["css-ch39"],
    keyPoints: ["CSS Layout Grid is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch41",
    courseId: "css",
    title: "CSS Units",
    order: 41,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Units\n\nCSS Units is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Units is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Units — Modern approach:",
              "content": "/* CSS Units with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Units Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Units controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Units, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch41-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Units to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch41-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Units styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch41-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch41-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Units using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch41-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css units) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch41-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Units?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["css-ch40"],
    keyPoints: ["CSS Units is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch42",
    courseId: "css",
    title: "CSS Specificity",
    order: 42,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Specificity\n\nCSS Specificity is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Specificity is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Specificity — Advanced patterns:",
              "content": "/* CSS Specificity — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Specificity Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Specificity — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Specificity, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch42-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Specificity to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch42-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Specificity styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch42-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch42-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Specificity using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch42-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css specificity) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch42-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Specificity?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["css-ch41"],
    keyPoints: ["CSS Specificity is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch43",
    courseId: "css",
    title: "CSS !important",
    order: 43,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS !important\n\nCSS !important is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS !important is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS !important — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS !important Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS !important controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS !important, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch43-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS !important to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch43-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS !important styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch43-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch43-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS !important using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch43-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css !important) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch43-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS !important?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["css-ch42"],
    keyPoints: ["CSS !important is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch44",
    courseId: "css",
    title: "CSS Math Functions",
    order: 44,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Math Functions\n\nCSS Math Functions is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Math Functions is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Math Functions — Modern approach:",
              "content": "/* CSS Math Functions with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Math Functions Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Math Functions — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Math Functions, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch44-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Math Functions to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch44-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Math Functions styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch44-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch44-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Math Functions using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch44-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css math functions) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch44-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Math Functions?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["css-ch43"],
    keyPoints: ["CSS Math Functions is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch45",
    courseId: "css",
    title: "CSS Rounded Corners",
    order: 45,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Rounded Corners\n\nCSS Rounded Corners is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Rounded Corners is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Rounded Corners — Advanced patterns:",
              "content": "/* CSS Rounded Corners — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Rounded Corners Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Rounded Corners controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Rounded Corners, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch45-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Rounded Corners to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch45-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Rounded Corners styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch45-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch45-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Rounded Corners using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch45-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css rounded corners) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch45-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Rounded Corners?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["css-ch44"],
    keyPoints: ["CSS Rounded Corners is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch46",
    courseId: "css",
    title: "CSS Border Images",
    order: 46,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Border Images\n\nCSS Border Images is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Border Images is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Border Images — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Border Images Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Border Images — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Border Images, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch46-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Border Images to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch46-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Border Images styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch46-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch46-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Border Images using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch46-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css border images) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch46-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Border Images?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["css-ch45"],
    keyPoints: ["CSS Border Images is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch47",
    courseId: "css",
    title: "CSS Gradients",
    order: 47,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Gradients\n\nCSS Gradients is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Gradients is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Gradients — Modern approach:",
              "content": "/* CSS Gradients with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Gradients Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Gradients controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Gradients, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch47-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Gradients to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch47-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Gradients styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch47-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch47-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Gradients using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch47-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css gradients) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch47-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Gradients?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["css-ch46"],
    keyPoints: ["CSS Gradients is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch48",
    courseId: "css",
    title: "CSS Shadows",
    order: 48,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Shadows\n\nCSS Shadows is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Shadows is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Shadows — Advanced patterns:",
              "content": "/* CSS Shadows — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Shadows Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Shadows — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Shadows, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch48-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Shadows to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch48-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Shadows styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch48-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch48-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Shadows using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch48-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css shadows) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch48-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Shadows?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["css-ch47"],
    keyPoints: ["CSS Shadows is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch49",
    courseId: "css",
    title: "CSS Text Effects",
    order: 49,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Text Effects\n\nCSS Text Effects is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Text Effects is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Text Effects — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Text Effects Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Text Effects controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Text Effects, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch49-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Text Effects to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch49-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Text Effects styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch49-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch49-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Text Effects using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch49-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css text effects) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch49-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Text Effects?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["css-ch48"],
    keyPoints: ["CSS Text Effects is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch50",
    courseId: "css",
    title: "CSS 2D Transforms",
    order: 50,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS 2D Transforms\n\nCSS 2D Transforms is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS 2D Transforms is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS 2D Transforms — Modern approach:",
              "content": "/* CSS 2D Transforms with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS 2D Transforms Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS 2D Transforms — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS 2D Transforms, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch50-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS 2D Transforms to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch50-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS 2D Transforms styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch50-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch50-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS 2D Transforms using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch50-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css 2d transforms) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch50-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS 2D Transforms?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["css-ch49"],
    keyPoints: ["CSS 2D Transforms is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch51",
    courseId: "css",
    title: "CSS 3D Transforms",
    order: 51,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS 3D Transforms\n\nCSS 3D Transforms is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS 3D Transforms is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS 3D Transforms — Advanced patterns:",
              "content": "/* CSS 3D Transforms — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS 3D Transforms Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS 3D Transforms controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS 3D Transforms, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch51-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS 3D Transforms to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch51-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS 3D Transforms styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch51-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch51-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS 3D Transforms using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch51-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css 3d transforms) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch51-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS 3D Transforms?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["css-ch50"],
    keyPoints: ["CSS 3D Transforms is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch52",
    courseId: "css",
    title: "CSS Transitions",
    order: 52,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Transitions\n\nCSS Transitions is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Transitions is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Transitions — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Transitions Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Transitions — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Transitions, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch52-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Transitions to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch52-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Transitions styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch52-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch52-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Transitions using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch52-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css transitions) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch52-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Transitions?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["css-ch51"],
    keyPoints: ["CSS Transitions is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch53",
    courseId: "css",
    title: "CSS Animations",
    order: 53,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Animations\n\nCSS Animations is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Animations is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Animations — Modern approach:",
              "content": "/* CSS Animations with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Animations Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Animations controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Animations, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch53-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Animations to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch53-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Animations styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch53-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch53-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Animations using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch53-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css animations) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch53-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Animations?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["css-ch52"],
    keyPoints: ["CSS Animations is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch54",
    courseId: "css",
    title: "CSS Tooltips",
    order: 54,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Tooltips\n\nCSS Tooltips is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Tooltips is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Tooltips — Advanced patterns:",
              "content": "/* CSS Tooltips — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Tooltips Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Tooltips — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Tooltips, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch54-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Tooltips to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch54-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Tooltips styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch54-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch54-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Tooltips using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch54-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css tooltips) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch54-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Tooltips?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["css-ch53"],
    keyPoints: ["CSS Tooltips is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch55",
    courseId: "css",
    title: "CSS Image Filters",
    order: 55,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Image Filters\n\nCSS Image Filters is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Image Filters is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Image Filters — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Image Filters Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Image Filters controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Image Filters, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch55-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Image Filters to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch55-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Image Filters styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch55-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch55-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Image Filters using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch55-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css image filters) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch55-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Image Filters?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["css-ch54"],
    keyPoints: ["CSS Image Filters is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch56",
    courseId: "css",
    title: "CSS Masking",
    order: 56,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Masking\n\nCSS Masking is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Masking is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Masking — Modern approach:",
              "content": "/* CSS Masking with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Masking Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Masking — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Masking, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch56-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Masking to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch56-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Masking styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch56-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch56-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Masking using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch56-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css masking) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch56-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Masking?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["css-ch55"],
    keyPoints: ["CSS Masking is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch57",
    courseId: "css",
    title: "CSS Buttons",
    order: 57,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Buttons\n\nCSS Buttons is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Buttons is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Buttons — Advanced patterns:",
              "content": "/* CSS Buttons — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Buttons Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Buttons controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Buttons, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch57-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Buttons to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch57-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Buttons styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch57-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch57-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Buttons using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch57-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css buttons) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch57-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Buttons?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["css-ch56"],
    keyPoints: ["CSS Buttons is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch58",
    courseId: "css",
    title: "CSS Pagination",
    order: 58,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Pagination\n\nCSS Pagination is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Pagination is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Pagination — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Pagination Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Pagination — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Pagination, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch58-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Pagination to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch58-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Pagination styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch58-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch58-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Pagination using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch58-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css pagination) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch58-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Pagination?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["css-ch57"],
    keyPoints: ["CSS Pagination is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch59",
    courseId: "css",
    title: "CSS Multi-column",
    order: 59,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Multi-column\n\nCSS Multi-column is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Multi-column is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Multi-column — Modern approach:",
              "content": "/* CSS Multi-column with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Multi-column Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Multi-column controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Multi-column, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch59-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Multi-column to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch59-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Multi-column styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch59-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch59-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Multi-column using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch59-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css multi-column) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch59-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Multi-column?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["css-ch58"],
    keyPoints: ["CSS Multi-column is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch60",
    courseId: "css",
    title: "CSS Variables",
    order: 60,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Variables\n\nCSS Variables is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Variables is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Variables — Advanced patterns:",
              "content": "/* CSS Variables — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Variables Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Variables — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Variables, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch60-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Variables to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch60-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Variables styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch60-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch60-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Variables using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch60-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css variables) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch60-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Variables?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["css-ch59"],
    keyPoints: ["CSS Variables is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch61",
    courseId: "css",
    title: "CSS @property",
    order: 61,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS @property\n\nCSS @property is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS @property is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS @property — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS @property Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS @property controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS @property, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch61-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS @property to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch61-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS @property styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch61-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch61-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS @property using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch61-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css @property) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch61-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS @property?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["css-ch60"],
    keyPoints: ["CSS @property is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch62",
    courseId: "css",
    title: "CSS Box Sizing",
    order: 62,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Box Sizing\n\nCSS Box Sizing is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Box Sizing is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Box Sizing — Modern approach:",
              "content": "/* CSS Box Sizing with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Box Sizing Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Box Sizing — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Box Sizing, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch62-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Box Sizing to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch62-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Box Sizing styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch62-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch62-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Box Sizing using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch62-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css box sizing) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch62-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Box Sizing?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["css-ch61"],
    keyPoints: ["CSS Box Sizing is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch63",
    courseId: "css",
    title: "CSS Media Queries",
    order: 63,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Media Queries\n\nCSS Media Queries is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Media Queries is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Media Queries — Advanced patterns:",
              "content": "/* CSS Media Queries — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Media Queries Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Media Queries controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Media Queries, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch63-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Media Queries to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch63-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Media Queries styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch63-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch63-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Media Queries using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch63-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css media queries) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch63-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Media Queries?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["css-ch62"],
    keyPoints: ["CSS Media Queries is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch64",
    courseId: "css",
    title: "CSS Responsive",
    order: 64,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Responsive\n\nCSS Responsive is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Responsive is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Responsive — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Responsive Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Responsive — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Responsive, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch64-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Responsive to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch64-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Responsive styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch64-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch64-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Responsive using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch64-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css responsive) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch64-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Responsive?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["css-ch63"],
    keyPoints: ["CSS Responsive is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch65",
    courseId: "css",
    title: "CSS Viewport",
    order: 65,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Viewport\n\nCSS Viewport is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Viewport is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Viewport — Modern approach:",
              "content": "/* CSS Viewport with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Viewport Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Viewport controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Viewport, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch65-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Viewport to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch65-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Viewport styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch65-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch65-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Viewport using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch65-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css viewport) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch65-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Viewport?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["css-ch64"],
    keyPoints: ["CSS Viewport is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch66",
    courseId: "css",
    title: "CSS Frameworks",
    order: 66,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Frameworks\n\nCSS Frameworks is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Frameworks is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Frameworks — Advanced patterns:",
              "content": "/* CSS Frameworks — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Frameworks Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Frameworks — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Frameworks, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch66-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Frameworks to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch66-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Frameworks styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch66-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch66-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Frameworks using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch66-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css frameworks) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch66-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Frameworks?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["css-ch65"],
    keyPoints: ["CSS Frameworks is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch67",
    courseId: "css",
    title: "CSS Advanced Grid",
    order: 67,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Advanced Grid\n\nCSS Advanced Grid is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Advanced Grid is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Advanced Grid — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Advanced Grid Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Advanced Grid controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Advanced Grid, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch67-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Advanced Grid to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch67-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Advanced Grid styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch67-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch67-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Advanced Grid using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch67-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css advanced grid) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch67-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Advanced Grid?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["css-ch66"],
    keyPoints: ["CSS Advanced Grid is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch68",
    courseId: "css",
    title: "CSS Container Queries",
    order: 68,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Container Queries\n\nCSS Container Queries is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Container Queries is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Container Queries — Modern approach:",
              "content": "/* CSS Container Queries with modern CSS */\n:root {\n  --primary: #38bdf8;\n  --space: 1rem;\n}\n\n.element {\n  padding: var(--space);\n  background: var(--primary);\n  border-radius: 8px;\n  transition: all 0.3s ease;\n}\n\n.element:hover {\n  transform: scale(1.05);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Container Queries Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Container Queries — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Container Queries, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch68-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Container Queries to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch68-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Container Queries styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch68-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch68-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Container Queries using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch68-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css container queries) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch68-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Container Queries?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["css-ch67"],
    keyPoints: ["CSS Container Queries is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch69",
    courseId: "css",
    title: "CSS Color Functions",
    order: 69,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Color Functions\n\nCSS Color Functions is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Color Functions is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Color Functions — Advanced patterns:",
              "content": "/* CSS Color Functions — Responsive Design */\n.card {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n\n@media (max-width: 768px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n}\n\n@container (min-width: 400px) {\n  .card-content {\n    display: flex;\n    gap: 1rem;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Color Functions Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Color Functions controls the visual layer of web pages",
                  "CSS specificity determines which rule takes priority",
                  "Use CSS custom properties for consistent theming",
                  "Responsive design requires media queries and flexible units",
                  "Modern CSS eliminates the need for preprocessors in many cases"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Color Functions, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch69-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Color Functions to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch69-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Color Functions styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch69-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch69-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Color Functions using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch69-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css color functions) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch69-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Color Functions?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["css-ch68"],
    keyPoints: ["CSS Color Functions is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
  {
    id: "css-ch70",
    courseId: "css",
    title: "CSS Nesting",
    order: 70,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Nesting\n\nCSS Nesting is a core CSS concept that controls the visual presentation of web elements. Mastering it allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved significantly — from simple text styling to complex layout systems like Flexbox and Grid. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Nesting is fundamental to web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts",
                  "Understanding this enables responsive, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "Basic syntax:",
              "content": "/* CSS Nesting — Basic Example */\nselector {\n  property: value;\n}\n\n/* Practical usage */\n.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Nesting Works\n\nThe browser processes CSS in a specific order:\n\n1. **Parse** the CSS file(s) and inline styles\n2. **Build** the DOM and CSSOM trees\n3. **Match** selectors to elements\n4. **Apply** styles based on specificity and cascade\n5. **Render** the final result to the screen\n\nUnderstanding this pipeline helps debug layout issues and optimize performance."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect CSS in real-time. The Styles panel shows exactly which rules apply to an element, where they come from, and which are overridden. This is invaluable for debugging layout issues."
          },
          {
              "type": "comparison",
              "title": "CSS Nesting — Property Comparison",
              "headers": [
                  "Property",
                  "Purpose",
                  "Example"
              ],
              "rows": [
                  [
                      "display",
                      "Layout behavior",
                      "flex, grid, block, inline"
                  ],
                  [
                      "position",
                      "Positioning scheme",
                      "relative, absolute, fixed"
                  ],
                  [
                      "overflow",
                      "Content overflow",
                      "hidden, scroll, auto"
                  ],
                  [
                      "visibility",
                      "Element visibility",
                      "visible, hidden"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Overriding styles with !important creates maintenance headaches. Instead, understand specificity and use it to your advantage. A clean selector hierarchy is far more maintainable."
          },
          {
              "type": "text",
              "content": "## Browser Compatibility\n\nWhen using CSS Nesting, consider:\n\n- Check caniuse.com for feature support\n- Use vendor prefixes for experimental features\n- Provide fallbacks for older browsers\n- Test on multiple browsers during development\n- Use feature queries (@supports) for progressive enhancement"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be resilient. When a browser encounters a property it doesn't understand, it simply ignores it — your page won't break, it just won't get that specific enhancement. This makes CSS inherently forward-compatible."
          }
      ],
    examPool: [
        {
          "id": "css-ch70-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS Nesting to an HTML element?",
          "options": [
            {
              "id": "a",
              "text": "Using CSS selectors with property-value declarations"
            },
            {
              "id": "b",
              "text": "Using HTML attributes on the element"
            },
            {
              "id": "c",
              "text": "Using JavaScript to modify the style object"
            },
            {
              "id": "d",
              "text": "Using server-side configuration files"
            }
          ],
          "correctAnswer": "a",
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles. HTML attributes for styling are deprecated, and JS should not be the primary styling mechanism."
        },
        {
          "id": "css-ch70-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS Nesting styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — styles cascade down the DOM tree from parent to child elements unless overridden."
        },
        {
          "id": "css-ch70-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "Which CSS unit is relative to the parent element's font size?",
          "options": [
            {
              "id": "a",
              "text": "em"
            },
            {
              "id": "b",
              "text": "rem"
            },
            {
              "id": "c",
              "text": "px"
            },
            {
              "id": "d",
              "text": "vw"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem is relative to the root font size. px is absolute. vw is relative to viewport width."
        },
        {
          "id": "css-ch70-tf2",
          "type": "true-false",
          "difficulty": "medium",
          "question": "CSS Nesting using !important should be avoided when possible.",
          "correctAnswer": true,
          "explanation": "!important overrides the natural cascade and specificity, making styles harder to debug and maintain. Better to use proper specificity."
        },
        {
          "id": "css-ch70-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property used to control the spacing INSIDE an element (for css nesting) is: ___",
          "correctAnswer": "padding",
          "explanation": "Padding creates space inside an element, between its content and border. Margin creates space outside the element."
        },
        {
          "id": "css-ch70-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the most efficient selector for targeting elements in CSS Nesting?",
          "options": [
            {
              "id": "a",
              "text": "Class selectors (.classname)"
            },
            {
              "id": "b",
              "text": "ID selectors (#idname)"
            },
            {
              "id": "c",
              "text": "Universal selectors (*)"
            },
            {
              "id": "d",
              "text": "Descendant selectors (div p)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Class selectors balance specificity and reusability. IDs are too specific, universal is too broad, and descendant selectors can be slow with deep nesting."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["css-ch69"],
    keyPoints: ["CSS Nesting is fundamental to web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts","Understanding this enables responsive, beautiful designs"],
  },
];

export const cssCourse: Course = {
  id: "css",
  title: "CSS",
  fullTitle: "CSS — Styling the Web",
  description: "From selectors to animations, learn to craft beautiful, responsive layouts with modern CSS including Flexbox, Grid, and CSS custom properties.",
  icon: "Palette",
  color: "#38bdf8",
  difficulty: 1,
  chapters: cssChapters,
  totalXP: 1190,
  estimatedHours: 45,
};
