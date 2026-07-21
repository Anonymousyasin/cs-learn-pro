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
              "content": "## Understanding CSS Introduction\n\nCSS Introduction is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Introduction is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Introduction — Basic syntax:",
              "content": "/* CSS Introduction — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Introduction Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Introduction:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Introduction is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Introduction:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch1-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch1-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch1-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch1-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch1-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: [],
    keyPoints: ["CSS Introduction is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch2",
    courseId: "css",
    title: "CSS Syntax & Structure",
    order: 2,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Syntax & Structure\n\nCSS Syntax & Structure is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Syntax & Structure is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Syntax & Structure — Basic syntax:",
              "content": "/* CSS Syntax & Structure — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Syntax & Structure Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Syntax & Structure:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Syntax & Structure — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Syntax & Structure:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch2-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch2-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch2-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch2-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch2-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["css-ch1"],
    keyPoints: ["CSS Syntax & Structure is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch3",
    courseId: "css",
    title: "CSS Selectors (Element, Class, ID)",
    order: 3,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Selectors (Element, Class, ID)\n\nCSS Selectors (Element, Class, ID) is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Selectors (Element, Class, ID) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Selectors (Element, Class, ID) — Basic syntax:",
              "content": "/* CSS Selectors (Element, Class, ID) — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Selectors (Element, Class, ID) Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Selectors (Element, Class, ID):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Selectors (Element, Class, ID) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Selectors (Element, Class, ID):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch3-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch3-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch3-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch3-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch3-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["css-ch2"],
    keyPoints: ["CSS Selectors (Element, Class, ID) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch4",
    courseId: "css",
    title: "CSS How To Add (Inline, Internal, External)",
    order: 4,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS How To Add (Inline, Internal, External)\n\nCSS How To Add (Inline, Internal, External) is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS How To Add (Inline, Internal, External) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS How To Add (Inline, Internal, External) — Basic syntax:",
              "content": "/* CSS How To Add (Inline, Internal, External) — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS How To Add (Inline, Internal, External) Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS How To Add (Inline, Internal, External):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS How To Add (Inline, Internal, External) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS How To Add (Inline, Internal, External):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch4-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch4-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch4-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch4-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch4-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["css-ch3"],
    keyPoints: ["CSS How To Add (Inline, Internal, External) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch5",
    courseId: "css",
    title: "CSS Comments & Organization",
    order: 5,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Comments & Organization\n\nCSS Comments & Organization is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Comments & Organization is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Comments & Organization — Basic syntax:",
              "content": "/* CSS Comments & Organization — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Comments & Organization Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Comments & Organization:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Comments & Organization is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Comments & Organization:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch5-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch5-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch5-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch5-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch5-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["css-ch4"],
    keyPoints: ["CSS Comments & Organization is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch6",
    courseId: "css",
    title: "CSS Colors (Named, Hex, RGB, HSL)",
    order: 6,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Colors (Named, Hex, RGB, HSL)\n\nCSS Colors (Named, Hex, RGB, HSL) is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Colors (Named, Hex, RGB, HSL) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Colors (Named, Hex, RGB, HSL) — Basic syntax:",
              "content": "/* CSS Colors (Named, Hex, RGB, HSL) — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Colors (Named, Hex, RGB, HSL) Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Colors (Named, Hex, RGB, HSL):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Colors (Named, Hex, RGB, HSL) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Colors (Named, Hex, RGB, HSL):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch6-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch6-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch6-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch6-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch6-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["css-ch5"],
    keyPoints: ["CSS Colors (Named, Hex, RGB, HSL) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch7",
    courseId: "css",
    title: "CSS Backgrounds & Background Images",
    order: 7,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Backgrounds & Background Images\n\nCSS Backgrounds & Background Images is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Backgrounds & Background Images is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Backgrounds & Background Images — Basic syntax:",
              "content": "/* CSS Backgrounds & Background Images — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Backgrounds & Background Images Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Backgrounds & Background Images:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Backgrounds & Background Images is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Backgrounds & Background Images:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch7-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch7-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch7-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch7-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch7-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["css-ch6"],
    keyPoints: ["CSS Backgrounds & Background Images is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch8",
    courseId: "css",
    title: "CSS Borders (Width, Style, Color, Radius)",
    order: 8,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Borders (Width, Style, Color, Radius)\n\nCSS Borders (Width, Style, Color, Radius) is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Borders (Width, Style, Color, Radius) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Borders (Width, Style, Color, Radius) — Basic syntax:",
              "content": "/* CSS Borders (Width, Style, Color, Radius) — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Borders (Width, Style, Color, Radius) Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Borders (Width, Style, Color, Radius):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Borders (Width, Style, Color, Radius) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Borders (Width, Style, Color, Radius):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch8-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch8-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch8-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch8-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch8-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["css-ch7"],
    keyPoints: ["CSS Borders (Width, Style, Color, Radius) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch9",
    courseId: "css",
    title: "CSS Margins & Collapsing Margins",
    order: 9,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Margins & Collapsing Margins\n\nCSS Margins & Collapsing Margins is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Margins & Collapsing Margins is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Margins & Collapsing Margins — Basic syntax:",
              "content": "/* CSS Margins & Collapsing Margins — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Margins & Collapsing Margins Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Margins & Collapsing Margins:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Margins & Collapsing Margins is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Margins & Collapsing Margins:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch9-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch9-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch9-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch9-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch9-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["css-ch8"],
    keyPoints: ["CSS Margins & Collapsing Margins is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch10",
    courseId: "css",
    title: "CSS Padding & Content Spacing",
    order: 10,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Padding & Content Spacing\n\nCSS Padding & Content Spacing is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Padding & Content Spacing is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Padding & Content Spacing — Basic syntax:",
              "content": "/* CSS Padding & Content Spacing — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Padding & Content Spacing Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Padding & Content Spacing:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Padding & Content Spacing — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Padding & Content Spacing:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch10-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch10-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch10-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch10-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch10-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["css-ch9"],
    keyPoints: ["CSS Padding & Content Spacing is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch11",
    courseId: "css",
    title: "CSS Height, Width & Max-Width",
    order: 11,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Height, Width & Max-Width\n\nCSS Height, Width & Max-Width is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Height, Width & Max-Width is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Height, Width & Max-Width — Basic syntax:",
              "content": "/* CSS Height, Width & Max-Width — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Height, Width & Max-Width Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Height, Width & Max-Width:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Height, Width & Max-Width is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Height, Width & Max-Width:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch11-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch11-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch11-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch11-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch11-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["css-ch10"],
    keyPoints: ["CSS Height, Width & Max-Width is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch12",
    courseId: "css",
    title: "CSS Box Model (Content, Padding, Border, Margin)",
    order: 12,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Box Model (Content, Padding, Border, Margin)\n\nCSS Box Model (Content, Padding, Border, Margin) is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Box Model (Content, Padding, Border, Margin) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Box Model (Content, Padding, Border, Margin) — Basic syntax:",
              "content": "/* CSS Box Model (Content, Padding, Border, Margin) — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Box Model (Content, Padding, Border, Margin) Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Box Model (Content, Padding, Border, Margin):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Box Model (Content, Padding, Border, Margin) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Box Model (Content, Padding, Border, Margin):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch12-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch12-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch12-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch12-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch12-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["css-ch11"],
    keyPoints: ["CSS Box Model (Content, Padding, Border, Margin) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch13",
    courseId: "css",
    title: "CSS Box Sizing (Border-Box vs Content-Box)",
    order: 13,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Box Sizing (Border-Box vs Content-Box)\n\nCSS Box Sizing (Border-Box vs Content-Box) is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Box Sizing (Border-Box vs Content-Box) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Box Sizing (Border-Box vs Content-Box) — Basic syntax:",
              "content": "/* CSS Box Sizing (Border-Box vs Content-Box) — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Box Sizing (Border-Box vs Content-Box) Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Box Sizing (Border-Box vs Content-Box):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Box Sizing (Border-Box vs Content-Box) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Box Sizing (Border-Box vs Content-Box):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch13-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch13-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch13-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch13-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch13-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["css-ch12"],
    keyPoints: ["CSS Box Sizing (Border-Box vs Content-Box) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch14",
    courseId: "css",
    title: "CSS Outline & Accessibility Focus",
    order: 14,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Outline & Accessibility Focus\n\nCSS Outline & Accessibility Focus is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Outline & Accessibility Focus is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Outline & Accessibility Focus — Basic syntax:",
              "content": "/* CSS Outline & Accessibility Focus — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Outline & Accessibility Focus Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Outline & Accessibility Focus:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Outline & Accessibility Focus — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Outline & Accessibility Focus:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch14-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch14-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch14-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch14-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch14-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["css-ch13"],
    keyPoints: ["CSS Outline & Accessibility Focus is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch15",
    courseId: "css",
    title: "CSS Text Properties (Align, Decoration, Transform)",
    order: 15,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Text Properties (Align, Decoration, Transform)\n\nCSS Text Properties (Align, Decoration, Transform) is how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Text Properties (Align, Decoration, Transform) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Text Properties (Align, Decoration, Transform) — Styling example:",
              "content": "/* CSS Text Properties (Align, Decoration, Transform) — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Text Properties (Align, Decoration, Transform) Works\n\nHow CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Text Properties (Align, Decoration, Transform):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Text Properties (Align, Decoration, Transform) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Text Properties (Align, Decoration, Transform):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch15-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property changes the font of an element?",
          "options": [
            {
              "id": "a",
              "text": "font-family"
            },
            {
              "id": "b",
              "text": "font-style"
            },
            {
              "id": "c",
              "text": "font-weight"
            },
            {
              "id": "d",
              "text": "text-font"
            }
          ],
          "correctAnswer": "a",
          "explanation": "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness."
        },
        {
          "id": "css-ch15-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the difference between 'em' and 'rem' units?",
          "options": [
            {
              "id": "a",
              "text": "em is relative to parent font-size; rem is relative to root (html) font-size"
            },
            {
              "id": "b",
              "text": "rem is relative to parent; em is relative to root"
            },
            {
              "id": "c",
              "text": "Both are absolute units"
            },
            {
              "id": "d",
              "text": "em is for fonts only; rem is for spacing only"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues."
        },
        {
          "id": "css-ch15-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch15-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["css-ch14"],
    keyPoints: ["CSS Text Properties (Align, Decoration, Transform) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch16",
    courseId: "css",
    title: "CSS Font Families & Web Safe Fonts",
    order: 16,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Font Families & Web Safe Fonts\n\nCSS Font Families & Web Safe Fonts is how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Font Families & Web Safe Fonts is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Font Families & Web Safe Fonts — Styling example:",
              "content": "/* CSS Font Families & Web Safe Fonts — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Font Families & Web Safe Fonts Works\n\nHow CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Font Families & Web Safe Fonts:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Font Families & Web Safe Fonts — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Font Families & Web Safe Fonts:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch16-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property changes the font of an element?",
          "options": [
            {
              "id": "a",
              "text": "font-family"
            },
            {
              "id": "b",
              "text": "font-style"
            },
            {
              "id": "c",
              "text": "font-weight"
            },
            {
              "id": "d",
              "text": "text-font"
            }
          ],
          "correctAnswer": "a",
          "explanation": "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness."
        },
        {
          "id": "css-ch16-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the difference between 'em' and 'rem' units?",
          "options": [
            {
              "id": "a",
              "text": "em is relative to parent font-size; rem is relative to root (html) font-size"
            },
            {
              "id": "b",
              "text": "rem is relative to parent; em is relative to root"
            },
            {
              "id": "c",
              "text": "Both are absolute units"
            },
            {
              "id": "d",
              "text": "em is for fonts only; rem is for spacing only"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues."
        },
        {
          "id": "css-ch16-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch16-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["css-ch15"],
    keyPoints: ["CSS Font Families & Web Safe Fonts is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch17",
    courseId: "css",
    title: "CSS @font-face & Web Fonts (Google Fonts)",
    order: 17,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS @font-face & Web Fonts (Google Fonts)\n\nCSS @font-face & Web Fonts (Google Fonts) is how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS @font-face & Web Fonts (Google Fonts) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS @font-face & Web Fonts (Google Fonts) — Styling example:",
              "content": "/* CSS @font-face & Web Fonts (Google Fonts) — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS @font-face & Web Fonts (Google Fonts) Works\n\nHow CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS @font-face & Web Fonts (Google Fonts):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS @font-face & Web Fonts (Google Fonts) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS @font-face & Web Fonts (Google Fonts):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch17-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property changes the font of an element?",
          "options": [
            {
              "id": "a",
              "text": "font-family"
            },
            {
              "id": "b",
              "text": "font-style"
            },
            {
              "id": "c",
              "text": "font-weight"
            },
            {
              "id": "d",
              "text": "text-font"
            }
          ],
          "correctAnswer": "a",
          "explanation": "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness."
        },
        {
          "id": "css-ch17-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the difference between 'em' and 'rem' units?",
          "options": [
            {
              "id": "a",
              "text": "em is relative to parent font-size; rem is relative to root (html) font-size"
            },
            {
              "id": "b",
              "text": "rem is relative to parent; em is relative to root"
            },
            {
              "id": "c",
              "text": "Both are absolute units"
            },
            {
              "id": "d",
              "text": "em is for fonts only; rem is for spacing only"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues."
        },
        {
          "id": "css-ch17-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch17-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["css-ch16"],
    keyPoints: ["CSS @font-face & Web Fonts (Google Fonts) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch18",
    courseId: "css",
    title: "CSS Font Size, Weight, Style & Variant",
    order: 18,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Font Size, Weight, Style & Variant\n\nCSS Font Size, Weight, Style & Variant is how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Font Size, Weight, Style & Variant is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Font Size, Weight, Style & Variant — Styling example:",
              "content": "/* CSS Font Size, Weight, Style & Variant — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Font Size, Weight, Style & Variant Works\n\nHow CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Font Size, Weight, Style & Variant:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Font Size, Weight, Style & Variant — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Font Size, Weight, Style & Variant:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch18-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property changes the font of an element?",
          "options": [
            {
              "id": "a",
              "text": "font-family"
            },
            {
              "id": "b",
              "text": "font-style"
            },
            {
              "id": "c",
              "text": "font-weight"
            },
            {
              "id": "d",
              "text": "text-font"
            }
          ],
          "correctAnswer": "a",
          "explanation": "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness."
        },
        {
          "id": "css-ch18-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the difference between 'em' and 'rem' units?",
          "options": [
            {
              "id": "a",
              "text": "em is relative to parent font-size; rem is relative to root (html) font-size"
            },
            {
              "id": "b",
              "text": "rem is relative to parent; em is relative to root"
            },
            {
              "id": "c",
              "text": "Both are absolute units"
            },
            {
              "id": "d",
              "text": "em is for fonts only; rem is for spacing only"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues."
        },
        {
          "id": "css-ch18-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch18-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["css-ch17"],
    keyPoints: ["CSS Font Size, Weight, Style & Variant is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch19",
    courseId: "css",
    title: "CSS Line Height & Vertical Align",
    order: 19,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Line Height & Vertical Align\n\nCSS Line Height & Vertical Align is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Line Height & Vertical Align is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Line Height & Vertical Align — Basic syntax:",
              "content": "/* CSS Line Height & Vertical Align — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Line Height & Vertical Align Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Line Height & Vertical Align:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Line Height & Vertical Align is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Line Height & Vertical Align:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch19-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch19-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch19-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch19-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch19-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["css-ch18"],
    keyPoints: ["CSS Line Height & Vertical Align is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch20",
    courseId: "css",
    title: "CSS Text Overflow & White Space",
    order: 20,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Text Overflow & White Space\n\nCSS Text Overflow & White Space is how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Text Overflow & White Space is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Text Overflow & White Space — Styling example:",
              "content": "/* CSS Text Overflow & White Space — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Text Overflow & White Space Works\n\nHow CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Text Overflow & White Space:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Text Overflow & White Space — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Text Overflow & White Space:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch20-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property changes the font of an element?",
          "options": [
            {
              "id": "a",
              "text": "font-family"
            },
            {
              "id": "b",
              "text": "font-style"
            },
            {
              "id": "c",
              "text": "font-weight"
            },
            {
              "id": "d",
              "text": "text-font"
            }
          ],
          "correctAnswer": "a",
          "explanation": "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness."
        },
        {
          "id": "css-ch20-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the difference between 'em' and 'rem' units?",
          "options": [
            {
              "id": "a",
              "text": "em is relative to parent font-size; rem is relative to root (html) font-size"
            },
            {
              "id": "b",
              "text": "rem is relative to parent; em is relative to root"
            },
            {
              "id": "c",
              "text": "Both are absolute units"
            },
            {
              "id": "d",
              "text": "em is for fonts only; rem is for spacing only"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues."
        },
        {
          "id": "css-ch20-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch20-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["css-ch19"],
    keyPoints: ["CSS Text Overflow & White Space is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch21",
    courseId: "css",
    title: "CSS Word Break & Hyphenation",
    order: 21,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Word Break & Hyphenation\n\nCSS Word Break & Hyphenation is how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Word Break & Hyphenation is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Word Break & Hyphenation — Styling example:",
              "content": "/* CSS Word Break & Hyphenation — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Word Break & Hyphenation Works\n\nHow CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Word Break & Hyphenation:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Word Break & Hyphenation is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Word Break & Hyphenation:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch21-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property changes the font of an element?",
          "options": [
            {
              "id": "a",
              "text": "font-family"
            },
            {
              "id": "b",
              "text": "font-style"
            },
            {
              "id": "c",
              "text": "font-weight"
            },
            {
              "id": "d",
              "text": "text-font"
            }
          ],
          "correctAnswer": "a",
          "explanation": "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness."
        },
        {
          "id": "css-ch21-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the difference between 'em' and 'rem' units?",
          "options": [
            {
              "id": "a",
              "text": "em is relative to parent font-size; rem is relative to root (html) font-size"
            },
            {
              "id": "b",
              "text": "rem is relative to parent; em is relative to root"
            },
            {
              "id": "c",
              "text": "Both are absolute units"
            },
            {
              "id": "d",
              "text": "em is for fonts only; rem is for spacing only"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues."
        },
        {
          "id": "css-ch21-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch21-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["css-ch20"],
    keyPoints: ["CSS Word Break & Hyphenation is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch22",
    courseId: "css",
    title: "CSS Text Shadows & Effects",
    order: 22,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Text Shadows & Effects\n\nCSS Text Shadows & Effects is how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Text Shadows & Effects is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Text Shadows & Effects — Styling example:",
              "content": "/* CSS Text Shadows & Effects — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Text Shadows & Effects Works\n\nHow CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Text Shadows & Effects:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Text Shadows & Effects — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Text Shadows & Effects:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch22-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property changes the font of an element?",
          "options": [
            {
              "id": "a",
              "text": "font-family"
            },
            {
              "id": "b",
              "text": "font-style"
            },
            {
              "id": "c",
              "text": "font-weight"
            },
            {
              "id": "d",
              "text": "text-font"
            }
          ],
          "correctAnswer": "a",
          "explanation": "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness."
        },
        {
          "id": "css-ch22-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the difference between 'em' and 'rem' units?",
          "options": [
            {
              "id": "a",
              "text": "em is relative to parent font-size; rem is relative to root (html) font-size"
            },
            {
              "id": "b",
              "text": "rem is relative to parent; em is relative to root"
            },
            {
              "id": "c",
              "text": "Both are absolute units"
            },
            {
              "id": "d",
              "text": "em is for fonts only; rem is for spacing only"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues."
        },
        {
          "id": "css-ch22-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch22-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["css-ch21"],
    keyPoints: ["CSS Text Shadows & Effects is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch23",
    courseId: "css",
    title: "CSS Icons (Font Awesome, Material)",
    order: 23,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Icons (Font Awesome, Material)\n\nCSS Icons (Font Awesome, Material) is how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Icons (Font Awesome, Material) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Icons (Font Awesome, Material) — Styling example:",
              "content": "/* CSS Icons (Font Awesome, Material) — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Icons (Font Awesome, Material) Works\n\nHow CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Icons (Font Awesome, Material):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Icons (Font Awesome, Material) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Icons (Font Awesome, Material):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch23-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property changes the font of an element?",
          "options": [
            {
              "id": "a",
              "text": "font-family"
            },
            {
              "id": "b",
              "text": "font-style"
            },
            {
              "id": "c",
              "text": "font-weight"
            },
            {
              "id": "d",
              "text": "text-font"
            }
          ],
          "correctAnswer": "a",
          "explanation": "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness."
        },
        {
          "id": "css-ch23-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the difference between 'em' and 'rem' units?",
          "options": [
            {
              "id": "a",
              "text": "em is relative to parent font-size; rem is relative to root (html) font-size"
            },
            {
              "id": "b",
              "text": "rem is relative to parent; em is relative to root"
            },
            {
              "id": "c",
              "text": "Both are absolute units"
            },
            {
              "id": "d",
              "text": "em is for fonts only; rem is for spacing only"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues."
        },
        {
          "id": "css-ch23-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch23-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["css-ch22"],
    keyPoints: ["CSS Icons (Font Awesome, Material) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch24",
    courseId: "css",
    title: "CSS Columns & Multi-column Layout",
    order: 24,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Columns & Multi-column Layout\n\nCSS Columns & Multi-column Layout is how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Columns & Multi-column Layout is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Columns & Multi-column Layout — Styling example:",
              "content": "/* CSS Columns & Multi-column Layout — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Columns & Multi-column Layout Works\n\nHow CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Columns & Multi-column Layout:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Columns & Multi-column Layout — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Columns & Multi-column Layout:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch24-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property changes the font of an element?",
          "options": [
            {
              "id": "a",
              "text": "font-family"
            },
            {
              "id": "b",
              "text": "font-style"
            },
            {
              "id": "c",
              "text": "font-weight"
            },
            {
              "id": "d",
              "text": "text-font"
            }
          ],
          "correctAnswer": "a",
          "explanation": "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness."
        },
        {
          "id": "css-ch24-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the difference between 'em' and 'rem' units?",
          "options": [
            {
              "id": "a",
              "text": "em is relative to parent font-size; rem is relative to root (html) font-size"
            },
            {
              "id": "b",
              "text": "rem is relative to parent; em is relative to root"
            },
            {
              "id": "c",
              "text": "Both are absolute units"
            },
            {
              "id": "d",
              "text": "em is for fonts only; rem is for spacing only"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues."
        },
        {
          "id": "css-ch24-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch24-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["css-ch23"],
    keyPoints: ["CSS Columns & Multi-column Layout is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch25",
    courseId: "css",
    title: "CSS Display: Block, Inline, Inline-Block, None",
    order: 25,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Display: Block, Inline, Inline-Block, None\n\nCSS Display: Block, Inline, Inline-Block, None is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Display: Block, Inline, Inline-Block, None is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Display: Block, Inline, Inline-Block, None — Modern layout with Grid:",
              "content": "/* CSS Display: Block, Inline, Inline-Block, None — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Display: Block, Inline, Inline-Block, None Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Display: Block, Inline, Inline-Block, None:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Display: Block, Inline, Inline-Block, None is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Display: Block, Inline, Inline-Block, None:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch25-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch25-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch25-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch25-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch25-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["css-ch24"],
    keyPoints: ["CSS Display: Block, Inline, Inline-Block, None is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch26",
    courseId: "css",
    title: "CSS Position: Static, Relative, Absolute",
    order: 26,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Position: Static, Relative, Absolute\n\nCSS Position: Static, Relative, Absolute is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Position: Static, Relative, Absolute is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Position: Static, Relative, Absolute — Modern layout with Grid:",
              "content": "/* CSS Position: Static, Relative, Absolute — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Position: Static, Relative, Absolute Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Position: Static, Relative, Absolute:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Position: Static, Relative, Absolute — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Position: Static, Relative, Absolute:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch26-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch26-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch26-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch26-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch26-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["css-ch25"],
    keyPoints: ["CSS Position: Static, Relative, Absolute is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch27",
    courseId: "css",
    title: "CSS Position: Fixed & Sticky",
    order: 27,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Position: Fixed & Sticky\n\nCSS Position: Fixed & Sticky is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Position: Fixed & Sticky is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Position: Fixed & Sticky — Modern layout with Grid:",
              "content": "/* CSS Position: Fixed & Sticky — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Position: Fixed & Sticky Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Position: Fixed & Sticky:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Position: Fixed & Sticky is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Position: Fixed & Sticky:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch27-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch27-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch27-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch27-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch27-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["css-ch26"],
    keyPoints: ["CSS Position: Fixed & Sticky is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch28",
    courseId: "css",
    title: "CSS Z-Index & Stacking Context",
    order: 28,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Z-Index & Stacking Context\n\nCSS Z-Index & Stacking Context is how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Z-Index & Stacking Context is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Z-Index & Stacking Context — Styling example:",
              "content": "/* CSS Z-Index & Stacking Context — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Z-Index & Stacking Context Works\n\nHow CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Z-Index & Stacking Context:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Z-Index & Stacking Context — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Z-Index & Stacking Context:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch28-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property changes the font of an element?",
          "options": [
            {
              "id": "a",
              "text": "font-family"
            },
            {
              "id": "b",
              "text": "font-style"
            },
            {
              "id": "c",
              "text": "font-weight"
            },
            {
              "id": "d",
              "text": "text-font"
            }
          ],
          "correctAnswer": "a",
          "explanation": "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness."
        },
        {
          "id": "css-ch28-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the difference between 'em' and 'rem' units?",
          "options": [
            {
              "id": "a",
              "text": "em is relative to parent font-size; rem is relative to root (html) font-size"
            },
            {
              "id": "b",
              "text": "rem is relative to parent; em is relative to root"
            },
            {
              "id": "c",
              "text": "Both are absolute units"
            },
            {
              "id": "d",
              "text": "em is for fonts only; rem is for spacing only"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues."
        },
        {
          "id": "css-ch28-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch28-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["css-ch27"],
    keyPoints: ["CSS Z-Index & Stacking Context is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch29",
    courseId: "css",
    title: "CSS Overflow: Visible, Hidden, Scroll, Auto",
    order: 29,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Overflow: Visible, Hidden, Scroll, Auto\n\nCSS Overflow: Visible, Hidden, Scroll, Auto is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Overflow: Visible, Hidden, Scroll, Auto is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Overflow: Visible, Hidden, Scroll, Auto — Modern layout with Grid:",
              "content": "/* CSS Overflow: Visible, Hidden, Scroll, Auto — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Overflow: Visible, Hidden, Scroll, Auto Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Overflow: Visible, Hidden, Scroll, Auto:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Overflow: Visible, Hidden, Scroll, Auto is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Overflow: Visible, Hidden, Scroll, Auto:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch29-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch29-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch29-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch29-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch29-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["css-ch28"],
    keyPoints: ["CSS Overflow: Visible, Hidden, Scroll, Auto is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch30",
    courseId: "css",
    title: "CSS Float & Clear",
    order: 30,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Float & Clear\n\nCSS Float & Clear is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Float & Clear is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Float & Clear — Modern layout with Grid:",
              "content": "/* CSS Float & Clear — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Float & Clear Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Float & Clear:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Float & Clear — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Float & Clear:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch30-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch30-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch30-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch30-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch30-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["css-ch29"],
    keyPoints: ["CSS Float & Clear is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch31",
    courseId: "css",
    title: "CSS Flexbox: Container Properties",
    order: 31,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Flexbox: Container Properties\n\nCSS Flexbox: Container Properties is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Flexbox: Container Properties is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Flexbox: Container Properties — Modern layout with Grid:",
              "content": "/* CSS Flexbox: Container Properties — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Flexbox: Container Properties Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Flexbox: Container Properties:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Flexbox: Container Properties is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Flexbox: Container Properties:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch31-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch31-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch31-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch31-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch31-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["css-ch30"],
    keyPoints: ["CSS Flexbox: Container Properties is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch32",
    courseId: "css",
    title: "CSS Flexbox: Item Properties (Grow, Shrink, Basis)",
    order: 32,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Flexbox: Item Properties (Grow, Shrink, Basis)\n\nCSS Flexbox: Item Properties (Grow, Shrink, Basis) is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Flexbox: Item Properties (Grow, Shrink, Basis) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Flexbox: Item Properties (Grow, Shrink, Basis) — Modern layout with Grid:",
              "content": "/* CSS Flexbox: Item Properties (Grow, Shrink, Basis) — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Flexbox: Item Properties (Grow, Shrink, Basis) Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Flexbox: Item Properties (Grow, Shrink, Basis):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Flexbox: Item Properties (Grow, Shrink, Basis) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Flexbox: Item Properties (Grow, Shrink, Basis):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch32-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch32-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch32-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch32-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch32-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["css-ch31"],
    keyPoints: ["CSS Flexbox: Item Properties (Grow, Shrink, Basis) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch33",
    courseId: "css",
    title: "CSS Flexbox: Alignment & Distribution",
    order: 33,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Flexbox: Alignment & Distribution\n\nCSS Flexbox: Alignment & Distribution is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Flexbox: Alignment & Distribution is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Flexbox: Alignment & Distribution — Modern layout with Grid:",
              "content": "/* CSS Flexbox: Alignment & Distribution — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Flexbox: Alignment & Distribution Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Flexbox: Alignment & Distribution:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Flexbox: Alignment & Distribution is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Flexbox: Alignment & Distribution:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch33-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch33-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch33-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch33-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch33-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["css-ch32"],
    keyPoints: ["CSS Flexbox: Alignment & Distribution is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch34",
    courseId: "css",
    title: "CSS Flexbox: Real-World Layouts",
    order: 34,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Flexbox: Real-World Layouts\n\nCSS Flexbox: Real-World Layouts is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Flexbox: Real-World Layouts is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Flexbox: Real-World Layouts — Modern layout with Grid:",
              "content": "/* CSS Flexbox: Real-World Layouts — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Flexbox: Real-World Layouts Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Flexbox: Real-World Layouts:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Flexbox: Real-World Layouts — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Flexbox: Real-World Layouts:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch34-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch34-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch34-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch34-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch34-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["css-ch33"],
    keyPoints: ["CSS Flexbox: Real-World Layouts is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch35",
    courseId: "css",
    title: "CSS Grid: Container & Template Columns/Rows",
    order: 35,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Grid: Container & Template Columns/Rows\n\nCSS Grid: Container & Template Columns/Rows is how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Grid: Container & Template Columns/Rows is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Grid: Container & Template Columns/Rows — Styling example:",
              "content": "/* CSS Grid: Container & Template Columns/Rows — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Grid: Container & Template Columns/Rows Works\n\nHow CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Grid: Container & Template Columns/Rows:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Grid: Container & Template Columns/Rows is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Grid: Container & Template Columns/Rows:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch35-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property changes the font of an element?",
          "options": [
            {
              "id": "a",
              "text": "font-family"
            },
            {
              "id": "b",
              "text": "font-style"
            },
            {
              "id": "c",
              "text": "font-weight"
            },
            {
              "id": "d",
              "text": "text-font"
            }
          ],
          "correctAnswer": "a",
          "explanation": "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness."
        },
        {
          "id": "css-ch35-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the difference between 'em' and 'rem' units?",
          "options": [
            {
              "id": "a",
              "text": "em is relative to parent font-size; rem is relative to root (html) font-size"
            },
            {
              "id": "b",
              "text": "rem is relative to parent; em is relative to root"
            },
            {
              "id": "c",
              "text": "Both are absolute units"
            },
            {
              "id": "d",
              "text": "em is for fonts only; rem is for spacing only"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues."
        },
        {
          "id": "css-ch35-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch35-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["css-ch34"],
    keyPoints: ["CSS Grid: Container & Template Columns/Rows is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch36",
    courseId: "css",
    title: "CSS Grid: Item Placement & Spanning",
    order: 36,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Grid: Item Placement & Spanning\n\nCSS Grid: Item Placement & Spanning is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Grid: Item Placement & Spanning is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Grid: Item Placement & Spanning — Modern layout with Grid:",
              "content": "/* CSS Grid: Item Placement & Spanning — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Grid: Item Placement & Spanning Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Grid: Item Placement & Spanning:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Grid: Item Placement & Spanning — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Grid: Item Placement & Spanning:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch36-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch36-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch36-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch36-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch36-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["css-ch35"],
    keyPoints: ["CSS Grid: Item Placement & Spanning is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch37",
    courseId: "css",
    title: "CSS Grid: Named Areas & Lines",
    order: 37,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Grid: Named Areas & Lines\n\nCSS Grid: Named Areas & Lines is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Grid: Named Areas & Lines is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Grid: Named Areas & Lines — Modern layout with Grid:",
              "content": "/* CSS Grid: Named Areas & Lines — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Grid: Named Areas & Lines Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Grid: Named Areas & Lines:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Grid: Named Areas & Lines is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Grid: Named Areas & Lines:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch37-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch37-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch37-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch37-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch37-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["css-ch36"],
    keyPoints: ["CSS Grid: Named Areas & Lines is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch38",
    courseId: "css",
    title: "CSS Grid: Auto Flow & Dense Packing",
    order: 38,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Grid: Auto Flow & Dense Packing\n\nCSS Grid: Auto Flow & Dense Packing is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Grid: Auto Flow & Dense Packing is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Grid: Auto Flow & Dense Packing — Modern layout with Grid:",
              "content": "/* CSS Grid: Auto Flow & Dense Packing — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Grid: Auto Flow & Dense Packing Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Grid: Auto Flow & Dense Packing:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Grid: Auto Flow & Dense Packing — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Grid: Auto Flow & Dense Packing:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch38-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch38-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch38-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch38-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch38-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["css-ch37"],
    keyPoints: ["CSS Grid: Auto Flow & Dense Packing is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch39",
    courseId: "css",
    title: "CSS Grid: Alignment & Gaps",
    order: 39,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Grid: Alignment & Gaps\n\nCSS Grid: Alignment & Gaps is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Grid: Alignment & Gaps is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Grid: Alignment & Gaps — Modern layout with Grid:",
              "content": "/* CSS Grid: Alignment & Gaps — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Grid: Alignment & Gaps Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Grid: Alignment & Gaps:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Grid: Alignment & Gaps is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Grid: Alignment & Gaps:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch39-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch39-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch39-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch39-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch39-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["css-ch38"],
    keyPoints: ["CSS Grid: Alignment & Gaps is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch40",
    courseId: "css",
    title: "CSS Grid: Responsive Layouts",
    order: 40,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Grid: Responsive Layouts\n\nCSS Grid: Responsive Layouts is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Grid: Responsive Layouts is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Grid: Responsive Layouts — Modern layout with Grid:",
              "content": "/* CSS Grid: Responsive Layouts — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Grid: Responsive Layouts Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Grid: Responsive Layouts:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Grid: Responsive Layouts — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Grid: Responsive Layouts:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch40-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch40-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch40-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch40-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch40-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["css-ch39"],
    keyPoints: ["CSS Grid: Responsive Layouts is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch41",
    courseId: "css",
    title: "CSS Grid: Subgrid Deep Dive",
    order: 41,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Grid: Subgrid Deep Dive\n\nCSS Grid: Subgrid Deep Dive is CSS layout systems like Flexbox and Grid that position and size elements on the page. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Grid: Subgrid Deep Dive is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Grid: Subgrid Deep Dive — Modern layout with Grid:",
              "content": "/* CSS Grid: Subgrid Deep Dive — Responsive Grid Layout */\n.page-layout {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"sidebar main\"\n    \"footer footer\";\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: auto 1fr auto;\n  min-height: 100vh;\n  gap: 1rem;\n}\n\n@media (max-width: 768px) {\n  .page-layout {\n    grid-template-areas:\n      \"header\"\n      \"main\"\n      \"footer\";\n    grid-template-columns: 1fr;\n  }\n  .sidebar { display: none; }\n}\n\nheader { grid-area: header; }\nmain   { grid-area: main; }\naside  { grid-area: sidebar; }\nfooter { grid-area: footer; }"
          },
          {
              "type": "text",
              "content": "## How CSS Grid: Subgrid Deep Dive Works\n\nCSS layout systems like Flexbox and Grid that position and size elements on the page. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Grid: Subgrid Deep Dive:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Grid: Subgrid Deep Dive is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Setting width and padding without box-sizing: border-box causes unexpected overflow. Always set box-sizing: border-box on all elements — it makes width/height include padding and border."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Grid: Subgrid Deep Dive:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **CSS Grid Garden** — Interactive game to learn CSS Grid\n2. **Flexbox Froggy** — Interactive game to learn Flexbox\n3. **MDN: CSS Layout** — Comprehensive layout documentation\n4. **CSS-Tricks: A Complete Guide to Grid** — The definitive Grid reference\n5. **Layout Land (YouTube)** — Jen Simmons' layout tutorial series"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch41-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used for creating flexible one-dimensional layouts?",
          "options": [
            {
              "id": "a",
              "text": "display: flex"
            },
            {
              "id": "b",
              "text": "display: grid"
            },
            {
              "id": "c",
              "text": "display: inline-block"
            },
            {
              "id": "d",
              "text": "display: table"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Flexbox (display: flex) is designed for one-dimensional layouts (rows OR columns). Grid is for two-dimensional layouts (rows AND columns)."
        },
        {
          "id": "css-ch41-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "In CSS Grid, what does grid-template-columns: 1fr 2fr 1fr do?",
          "options": [
            {
              "id": "a",
              "text": "Creates 3 columns: middle one is twice as wide as the others"
            },
            {
              "id": "b",
              "text": "Creates 3 equal-width columns"
            },
            {
              "id": "c",
              "text": "Creates 1 column that fills 3 fractions of space"
            },
            {
              "id": "d",
              "text": "Creates 4 columns: 1fr, 2fr, 1fr, and auto"
            }
          ],
          "correctAnswer": "a",
          "explanation": "fr units distribute available space. 1fr 2fr 1fr creates 3 columns where the middle column gets 2x the space of the side columns."
        },
        {
          "id": "css-ch41-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "An element with position: absolute is positioned relative to its nearest positioned ancestor.",
          "correctAnswer": true,
          "explanation": "position: absolute removes the element from normal flow and positions it relative to the nearest ancestor with a position other than static."
        },
        {
          "id": "css-ch41-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch41-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["css-ch40"],
    keyPoints: ["CSS Grid: Subgrid Deep Dive is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch42",
    courseId: "css",
    title: "CSS Multi-Column Layout (Columns, Gap, Rule)",
    order: 42,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Multi-Column Layout (Columns, Gap, Rule)\n\nCSS Multi-Column Layout (Columns, Gap, Rule) is how CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Multi-Column Layout (Columns, Gap, Rule) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Multi-Column Layout (Columns, Gap, Rule) — Styling example:",
              "content": "/* CSS Multi-Column Layout (Columns, Gap, Rule) — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Multi-Column Layout (Columns, Gap, Rule) Works\n\nHow CSS controls text appearance — fonts, spacing, alignment, and visual hierarchy. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Multi-Column Layout (Columns, Gap, Rule):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Multi-Column Layout (Columns, Gap, Rule) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Multi-Column Layout (Columns, Gap, Rule):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch42-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property changes the font of an element?",
          "options": [
            {
              "id": "a",
              "text": "font-family"
            },
            {
              "id": "b",
              "text": "font-style"
            },
            {
              "id": "c",
              "text": "font-weight"
            },
            {
              "id": "d",
              "text": "text-font"
            }
          ],
          "correctAnswer": "a",
          "explanation": "font-family specifies the typeface. font-style controls italic/normal. font-weight controls boldness."
        },
        {
          "id": "css-ch42-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the difference between 'em' and 'rem' units?",
          "options": [
            {
              "id": "a",
              "text": "em is relative to parent font-size; rem is relative to root (html) font-size"
            },
            {
              "id": "b",
              "text": "rem is relative to parent; em is relative to root"
            },
            {
              "id": "c",
              "text": "Both are absolute units"
            },
            {
              "id": "d",
              "text": "em is for fonts only; rem is for spacing only"
            }
          ],
          "correctAnswer": "a",
          "explanation": "em is relative to the parent element's font size. rem (root em) is relative to the root <html> element's font size, avoiding compounding issues."
        },
        {
          "id": "css-ch42-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch42-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["css-ch41"],
    keyPoints: ["CSS Multi-Column Layout (Columns, Gap, Rule) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch43",
    courseId: "css",
    title: "CSS Combinators (Descendant, Child, Sibling)",
    order: 43,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Combinators (Descendant, Child, Sibling)\n\nCSS Combinators (Descendant, Child, Sibling) is visual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Combinators (Descendant, Child, Sibling) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Combinators (Descendant, Child, Sibling) — Styling example:",
              "content": "/* CSS Combinators (Descendant, Child, Sibling) — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Combinators (Descendant, Child, Sibling) Works\n\nVisual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Combinators (Descendant, Child, Sibling) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Combinators (Descendant, Child, Sibling):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch43-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which pseudo-class applies styles when the user hovers over an element?",
          "options": [
            {
              "id": "a",
              "text": ":hover"
            },
            {
              "id": "b",
              "text": ":focus"
            },
            {
              "id": "c",
              "text": ":active"
            },
            {
              "id": "d",
              "text": ":visited"
            }
          ],
          "correctAnswer": "a",
          "explanation": ":hover applies when the user's pointer is over an element. :focus applies when an element receives focus. :active applies during click."
        },
        {
          "id": "css-ch43-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The CSS property that creates a frosted glass effect by blurring the background behind an element is: backdrop-___",
          "correctAnswer": "filter",
          "explanation": "backdrop-filter: blur(10px) creates the frosted glass effect by applying filters to the area behind an element."
        },
        {
          "id": "css-ch43-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch43-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["css-ch42"],
    keyPoints: ["CSS Combinators (Descendant, Child, Sibling) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch44",
    courseId: "css",
    title: "CSS Attribute Selectors (Presence, Value, Substring)",
    order: 44,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Attribute Selectors (Presence, Value, Substring)\n\nCSS Attribute Selectors (Presence, Value, Substring) is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Attribute Selectors (Presence, Value, Substring) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Attribute Selectors (Presence, Value, Substring) — Basic syntax:",
              "content": "/* CSS Attribute Selectors (Presence, Value, Substring) — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Attribute Selectors (Presence, Value, Substring) Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Attribute Selectors (Presence, Value, Substring):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Attribute Selectors (Presence, Value, Substring) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Attribute Selectors (Presence, Value, Substring):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch44-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch44-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch44-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch44-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch44-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["css-ch43"],
    keyPoints: ["CSS Attribute Selectors (Presence, Value, Substring) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch45",
    courseId: "css",
    title: "CSS Pseudo-Classes: Structural (:nth-child, :first-of-type)",
    order: 45,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Pseudo-Classes: Structural (:nth-child, :first-of-type)\n\nCSS Pseudo-Classes: Structural (:nth-child, :first-of-type) is visual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Pseudo-Classes: Structural (:nth-child, :first-of-type) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Pseudo-Classes: Structural (:nth-child, :first-of-type) — Styling example:",
              "content": "/* CSS Pseudo-Classes: Structural (:nth-child, :first-of-type) — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Pseudo-Classes: Structural (:nth-child, :first-of-type) Works\n\nVisual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Pseudo-Classes: Structural (:nth-child, :first-of-type) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Pseudo-Classes: Structural (:nth-child, :first-of-type):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch45-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which pseudo-class applies styles when the user hovers over an element?",
          "options": [
            {
              "id": "a",
              "text": ":hover"
            },
            {
              "id": "b",
              "text": ":focus"
            },
            {
              "id": "c",
              "text": ":active"
            },
            {
              "id": "d",
              "text": ":visited"
            }
          ],
          "correctAnswer": "a",
          "explanation": ":hover applies when the user's pointer is over an element. :focus applies when an element receives focus. :active applies during click."
        },
        {
          "id": "css-ch45-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The CSS property that creates a frosted glass effect by blurring the background behind an element is: backdrop-___",
          "correctAnswer": "filter",
          "explanation": "backdrop-filter: blur(10px) creates the frosted glass effect by applying filters to the area behind an element."
        },
        {
          "id": "css-ch45-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch45-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["css-ch44"],
    keyPoints: ["CSS Pseudo-Classes: Structural (:nth-child, :first-of-type) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch46",
    courseId: "css",
    title: "CSS Pseudo-Classes: UI States (:hover, :focus, :disabled)",
    order: 46,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Pseudo-Classes: UI States (:hover, :focus, :disabled)\n\nCSS Pseudo-Classes: UI States (:hover, :focus, :disabled) is visual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Pseudo-Classes: UI States (:hover, :focus, :disabled) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Pseudo-Classes: UI States (:hover, :focus, :disabled) — Styling example:",
              "content": "/* CSS Pseudo-Classes: UI States (:hover, :focus, :disabled) — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Pseudo-Classes: UI States (:hover, :focus, :disabled) Works\n\nVisual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "comparison",
              "title": "CSS Pseudo-Classes: UI States (:hover, :focus, :disabled) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Pseudo-Classes: UI States (:hover, :focus, :disabled):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch46-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which pseudo-class applies styles when the user hovers over an element?",
          "options": [
            {
              "id": "a",
              "text": ":hover"
            },
            {
              "id": "b",
              "text": ":focus"
            },
            {
              "id": "c",
              "text": ":active"
            },
            {
              "id": "d",
              "text": ":visited"
            }
          ],
          "correctAnswer": "a",
          "explanation": ":hover applies when the user's pointer is over an element. :focus applies when an element receives focus. :active applies during click."
        },
        {
          "id": "css-ch46-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The CSS property that creates a frosted glass effect by blurring the background behind an element is: backdrop-___",
          "correctAnswer": "filter",
          "explanation": "backdrop-filter: blur(10px) creates the frosted glass effect by applying filters to the area behind an element."
        },
        {
          "id": "css-ch46-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch46-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["css-ch45"],
    keyPoints: ["CSS Pseudo-Classes: UI States (:hover, :focus, :disabled) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch47",
    courseId: "css",
    title: "CSS Pseudo-Elements (::before, ::after, ::selection)",
    order: 47,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Pseudo-Elements (::before, ::after, ::selection)\n\nCSS Pseudo-Elements (::before, ::after, ::selection) is visual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Pseudo-Elements (::before, ::after, ::selection) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Pseudo-Elements (::before, ::after, ::selection) — Styling example:",
              "content": "/* CSS Pseudo-Elements (::before, ::after, ::selection) — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Pseudo-Elements (::before, ::after, ::selection) Works\n\nVisual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Pseudo-Elements (::before, ::after, ::selection) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Pseudo-Elements (::before, ::after, ::selection):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch47-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which pseudo-class applies styles when the user hovers over an element?",
          "options": [
            {
              "id": "a",
              "text": ":hover"
            },
            {
              "id": "b",
              "text": ":focus"
            },
            {
              "id": "c",
              "text": ":active"
            },
            {
              "id": "d",
              "text": ":visited"
            }
          ],
          "correctAnswer": "a",
          "explanation": ":hover applies when the user's pointer is over an element. :focus applies when an element receives focus. :active applies during click."
        },
        {
          "id": "css-ch47-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The CSS property that creates a frosted glass effect by blurring the background behind an element is: backdrop-___",
          "correctAnswer": "filter",
          "explanation": "backdrop-filter: blur(10px) creates the frosted glass effect by applying filters to the area behind an element."
        },
        {
          "id": "css-ch47-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch47-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["css-ch46"],
    keyPoints: ["CSS Pseudo-Elements (::before, ::after, ::selection) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch48",
    courseId: "css",
    title: "CSS Opacity & RGBA/HSLA Alpha Channels",
    order: 48,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Opacity & RGBA/HSLA Alpha Channels\n\nCSS Opacity & RGBA/HSLA Alpha Channels is visual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Opacity & RGBA/HSLA Alpha Channels is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Opacity & RGBA/HSLA Alpha Channels — Styling example:",
              "content": "/* CSS Opacity & RGBA/HSLA Alpha Channels — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Opacity & RGBA/HSLA Alpha Channels Works\n\nVisual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "comparison",
              "title": "CSS Opacity & RGBA/HSLA Alpha Channels — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Opacity & RGBA/HSLA Alpha Channels:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch48-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which pseudo-class applies styles when the user hovers over an element?",
          "options": [
            {
              "id": "a",
              "text": ":hover"
            },
            {
              "id": "b",
              "text": ":focus"
            },
            {
              "id": "c",
              "text": ":active"
            },
            {
              "id": "d",
              "text": ":visited"
            }
          ],
          "correctAnswer": "a",
          "explanation": ":hover applies when the user's pointer is over an element. :focus applies when an element receives focus. :active applies during click."
        },
        {
          "id": "css-ch48-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The CSS property that creates a frosted glass effect by blurring the background behind an element is: backdrop-___",
          "correctAnswer": "filter",
          "explanation": "backdrop-filter: blur(10px) creates the frosted glass effect by applying filters to the area behind an element."
        },
        {
          "id": "css-ch48-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch48-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["css-ch47"],
    keyPoints: ["CSS Opacity & RGBA/HSLA Alpha Channels is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch49",
    courseId: "css",
    title: "CSS Gradients (Linear, Radial, Conic)",
    order: 49,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Gradients (Linear, Radial, Conic)\n\nCSS Gradients (Linear, Radial, Conic) is visual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Gradients (Linear, Radial, Conic) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Gradients (Linear, Radial, Conic) — Styling example:",
              "content": "/* CSS Gradients (Linear, Radial, Conic) — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Gradients (Linear, Radial, Conic) Works\n\nVisual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Gradients (Linear, Radial, Conic) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Gradients (Linear, Radial, Conic):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch49-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which pseudo-class applies styles when the user hovers over an element?",
          "options": [
            {
              "id": "a",
              "text": ":hover"
            },
            {
              "id": "b",
              "text": ":focus"
            },
            {
              "id": "c",
              "text": ":active"
            },
            {
              "id": "d",
              "text": ":visited"
            }
          ],
          "correctAnswer": "a",
          "explanation": ":hover applies when the user's pointer is over an element. :focus applies when an element receives focus. :active applies during click."
        },
        {
          "id": "css-ch49-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The CSS property that creates a frosted glass effect by blurring the background behind an element is: backdrop-___",
          "correctAnswer": "filter",
          "explanation": "backdrop-filter: blur(10px) creates the frosted glass effect by applying filters to the area behind an element."
        },
        {
          "id": "css-ch49-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch49-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["css-ch48"],
    keyPoints: ["CSS Gradients (Linear, Radial, Conic) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch50",
    courseId: "css",
    title: "CSS Box Shadows & Drop Shadows",
    order: 50,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Box Shadows & Drop Shadows\n\nCSS Box Shadows & Drop Shadows is visual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Box Shadows & Drop Shadows is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Box Shadows & Drop Shadows — Styling example:",
              "content": "/* CSS Box Shadows & Drop Shadows — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Box Shadows & Drop Shadows Works\n\nVisual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "comparison",
              "title": "CSS Box Shadows & Drop Shadows — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Box Shadows & Drop Shadows:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch50-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which pseudo-class applies styles when the user hovers over an element?",
          "options": [
            {
              "id": "a",
              "text": ":hover"
            },
            {
              "id": "b",
              "text": ":focus"
            },
            {
              "id": "c",
              "text": ":active"
            },
            {
              "id": "d",
              "text": ":visited"
            }
          ],
          "correctAnswer": "a",
          "explanation": ":hover applies when the user's pointer is over an element. :focus applies when an element receives focus. :active applies during click."
        },
        {
          "id": "css-ch50-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The CSS property that creates a frosted glass effect by blurring the background behind an element is: backdrop-___",
          "correctAnswer": "filter",
          "explanation": "backdrop-filter: blur(10px) creates the frosted glass effect by applying filters to the area behind an element."
        },
        {
          "id": "css-ch50-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch50-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["css-ch49"],
    keyPoints: ["CSS Box Shadows & Drop Shadows is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch51",
    courseId: "css",
    title: "CSS Background: Size, Position, Repeat, Attachment",
    order: 51,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Background: Size, Position, Repeat, Attachment\n\nCSS Background: Size, Position, Repeat, Attachment is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Background: Size, Position, Repeat, Attachment is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Background: Size, Position, Repeat, Attachment — Basic syntax:",
              "content": "/* CSS Background: Size, Position, Repeat, Attachment — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Background: Size, Position, Repeat, Attachment Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Background: Size, Position, Repeat, Attachment:\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Background: Size, Position, Repeat, Attachment is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Background: Size, Position, Repeat, Attachment:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch51-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch51-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch51-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch51-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch51-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["css-ch50"],
    keyPoints: ["CSS Background: Size, Position, Repeat, Attachment is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch52",
    courseId: "css",
    title: "CSS Filter Effects (Blur, Grayscale, Brightness)",
    order: 52,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Filter Effects (Blur, Grayscale, Brightness)\n\nCSS Filter Effects (Blur, Grayscale, Brightness) is visual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Filter Effects (Blur, Grayscale, Brightness) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Filter Effects (Blur, Grayscale, Brightness) — Styling example:",
              "content": "/* CSS Filter Effects (Blur, Grayscale, Brightness) — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Filter Effects (Blur, Grayscale, Brightness) Works\n\nVisual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "comparison",
              "title": "CSS Filter Effects (Blur, Grayscale, Brightness) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Filter Effects (Blur, Grayscale, Brightness):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch52-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which pseudo-class applies styles when the user hovers over an element?",
          "options": [
            {
              "id": "a",
              "text": ":hover"
            },
            {
              "id": "b",
              "text": ":focus"
            },
            {
              "id": "c",
              "text": ":active"
            },
            {
              "id": "d",
              "text": ":visited"
            }
          ],
          "correctAnswer": "a",
          "explanation": ":hover applies when the user's pointer is over an element. :focus applies when an element receives focus. :active applies during click."
        },
        {
          "id": "css-ch52-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The CSS property that creates a frosted glass effect by blurring the background behind an element is: backdrop-___",
          "correctAnswer": "filter",
          "explanation": "backdrop-filter: blur(10px) creates the frosted glass effect by applying filters to the area behind an element."
        },
        {
          "id": "css-ch52-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch52-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["css-ch51"],
    keyPoints: ["CSS Filter Effects (Blur, Grayscale, Brightness) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch53",
    courseId: "css",
    title: "CSS Backdrop Filter (Frosted Glass Effect)",
    order: 53,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Backdrop Filter (Frosted Glass Effect)\n\nCSS Backdrop Filter (Frosted Glass Effect) is visual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Backdrop Filter (Frosted Glass Effect) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Backdrop Filter (Frosted Glass Effect) — Styling example:",
              "content": "/* CSS Backdrop Filter (Frosted Glass Effect) — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Backdrop Filter (Frosted Glass Effect) Works\n\nVisual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Backdrop Filter (Frosted Glass Effect) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Backdrop Filter (Frosted Glass Effect):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch53-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which pseudo-class applies styles when the user hovers over an element?",
          "options": [
            {
              "id": "a",
              "text": ":hover"
            },
            {
              "id": "b",
              "text": ":focus"
            },
            {
              "id": "c",
              "text": ":active"
            },
            {
              "id": "d",
              "text": ":visited"
            }
          ],
          "correctAnswer": "a",
          "explanation": ":hover applies when the user's pointer is over an element. :focus applies when an element receives focus. :active applies during click."
        },
        {
          "id": "css-ch53-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The CSS property that creates a frosted glass effect by blurring the background behind an element is: backdrop-___",
          "correctAnswer": "filter",
          "explanation": "backdrop-filter: blur(10px) creates the frosted glass effect by applying filters to the area behind an element."
        },
        {
          "id": "css-ch53-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch53-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["css-ch52"],
    keyPoints: ["CSS Backdrop Filter (Frosted Glass Effect) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch54",
    courseId: "css",
    title: "CSS Masking & Clipping (Clip-Path)",
    order: 54,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Masking & Clipping (Clip-Path)\n\nCSS Masking & Clipping (Clip-Path) is visual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Masking & Clipping (Clip-Path) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Masking & Clipping (Clip-Path) — Styling example:",
              "content": "/* CSS Masking & Clipping (Clip-Path) — Typography & Visual Effects */\n:root {\n  --font-heading: 'Inter', system-ui, sans-serif;\n  --font-body: 'Source Serif 4', Georgia, serif;\n  --scale-ratio: 1.25;  /* Major third scale */\n}\n\nbody {\n  font-family: var(--font-body);\n  font-size: 1rem;\n  line-height: 1.6;\n  color: #1a1a1a;\n}\n\nh1, h2, h3 {\n  font-family: var(--font-heading);\n  font-weight: 700;\n  line-height: 1.2;\n}\n\nh1 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio) * var(--scale-ratio)); }\nh2 { font-size: calc(1rem * var(--scale-ratio) * var(--scale-ratio)); }\nh3 { font-size: calc(1rem * var(--scale-ratio)); }"
          },
          {
              "type": "text",
              "content": "## How CSS Masking & Clipping (Clip-Path) Works\n\nVisual enhancement techniques — pseudo-classes, pseudo-elements, gradients, filters, and shadows. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "comparison",
              "title": "CSS Masking & Clipping (Clip-Path) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Masking & Clipping (Clip-Path):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch54-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which pseudo-class applies styles when the user hovers over an element?",
          "options": [
            {
              "id": "a",
              "text": ":hover"
            },
            {
              "id": "b",
              "text": ":focus"
            },
            {
              "id": "c",
              "text": ":active"
            },
            {
              "id": "d",
              "text": ":visited"
            }
          ],
          "correctAnswer": "a",
          "explanation": ":hover applies when the user's pointer is over an element. :focus applies when an element receives focus. :active applies during click."
        },
        {
          "id": "css-ch54-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The CSS property that creates a frosted glass effect by blurring the background behind an element is: backdrop-___",
          "correctAnswer": "filter",
          "explanation": "backdrop-filter: blur(10px) creates the frosted glass effect by applying filters to the area behind an element."
        },
        {
          "id": "css-ch54-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch54-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["css-ch53"],
    keyPoints: ["CSS Masking & Clipping (Clip-Path) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch55",
    courseId: "css",
    title: "CSS Units: px, em, rem, vw, vh, %, ch",
    order: 55,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Units: px, em, rem, vw, vh, %, ch\n\nCSS Units: px, em, rem, vw, vh, %, ch is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Units: px, em, rem, vw, vh, %, ch is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Units: px, em, rem, vw, vh, %, ch — Responsive design with container queries:",
              "content": "/* CSS Units: px, em, rem, vw, vh, %, ch — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS Units: px, em, rem, vw, vh, %, ch Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Units: px, em, rem, vw, vh, %, ch:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Units: px, em, rem, vw, vh, %, ch is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Units: px, em, rem, vw, vh, %, ch:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch55-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch55-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch55-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch55-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["css-ch54"],
    keyPoints: ["CSS Units: px, em, rem, vw, vh, %, ch is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch56",
    courseId: "css",
    title: "CSS Specificity & The Cascade",
    order: 56,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Specificity & The Cascade\n\nCSS Specificity & The Cascade is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Specificity & The Cascade is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Specificity & The Cascade — Responsive design with container queries:",
              "content": "/* CSS Specificity & The Cascade — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS Specificity & The Cascade Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Specificity & The Cascade:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS Specificity & The Cascade — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Specificity & The Cascade:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch56-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch56-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch56-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch56-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["css-ch55"],
    keyPoints: ["CSS Specificity & The Cascade is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch57",
    courseId: "css",
    title: "CSS !important & When to Avoid",
    order: 57,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS !important & When to Avoid\n\nCSS !important & When to Avoid is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS !important & When to Avoid is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS !important & When to Avoid — Responsive design with container queries:",
              "content": "/* CSS !important & When to Avoid — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS !important & When to Avoid Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS !important & When to Avoid:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS !important & When to Avoid is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS !important & When to Avoid:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch57-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch57-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch57-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch57-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["css-ch56"],
    keyPoints: ["CSS !important & When to Avoid is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch58",
    courseId: "css",
    title: "CSS Inheritance & Initial/Unset/Inherit",
    order: 58,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Inheritance & Initial/Unset/Inherit\n\nCSS Inheritance & Initial/Unset/Inherit is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Inheritance & Initial/Unset/Inherit is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Inheritance & Initial/Unset/Inherit — Responsive design with container queries:",
              "content": "/* CSS Inheritance & Initial/Unset/Inherit — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS Inheritance & Initial/Unset/Inherit Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Inheritance & Initial/Unset/Inherit:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS Inheritance & Initial/Unset/Inherit — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Inheritance & Initial/Unset/Inherit:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch58-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch58-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch58-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch58-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["css-ch57"],
    keyPoints: ["CSS Inheritance & Initial/Unset/Inherit is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch59",
    courseId: "css",
    title: "CSS Custom Properties (Variables)",
    order: 59,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Custom Properties (Variables)\n\nCSS Custom Properties (Variables) is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Custom Properties (Variables) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Custom Properties (Variables) — Responsive design with container queries:",
              "content": "/* CSS Custom Properties (Variables) — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS Custom Properties (Variables) Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Custom Properties (Variables):\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Custom Properties (Variables) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Custom Properties (Variables):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch59-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch59-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch59-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch59-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["css-ch58"],
    keyPoints: ["CSS Custom Properties (Variables) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch60",
    courseId: "css",
    title: "CSS @property: Typed Custom Properties",
    order: 60,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS @property: Typed Custom Properties\n\nCSS @property: Typed Custom Properties is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS @property: Typed Custom Properties is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS @property: Typed Custom Properties — Responsive design with container queries:",
              "content": "/* CSS @property: Typed Custom Properties — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS @property: Typed Custom Properties Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS @property: Typed Custom Properties:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS @property: Typed Custom Properties — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS @property: Typed Custom Properties:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch60-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch60-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch60-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch60-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["css-ch59"],
    keyPoints: ["CSS @property: Typed Custom Properties is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch61",
    courseId: "css",
    title: "CSS calc(), min(), max(), clamp()",
    order: 61,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS calc(), min(), max(), clamp()\n\nCSS calc(), min(), max(), clamp() is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS calc(), min(), max(), clamp() is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS calc(), min(), max(), clamp() — Responsive design with container queries:",
              "content": "/* CSS calc(), min(), max(), clamp() — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS calc(), min(), max(), clamp() Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS calc(), min(), max(), clamp():\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS calc(), min(), max(), clamp() is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS calc(), min(), max(), clamp():\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch61-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch61-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch61-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch61-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["css-ch60"],
    keyPoints: ["CSS calc(), min(), max(), clamp() is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch62",
    courseId: "css",
    title: "CSS Media Queries: Breakpoints",
    order: 62,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Media Queries: Breakpoints\n\nCSS Media Queries: Breakpoints is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Media Queries: Breakpoints is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Media Queries: Breakpoints — Responsive design with container queries:",
              "content": "/* CSS Media Queries: Breakpoints — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS Media Queries: Breakpoints Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Media Queries: Breakpoints:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS Media Queries: Breakpoints — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Media Queries: Breakpoints:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch62-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch62-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch62-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch62-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["css-ch61"],
    keyPoints: ["CSS Media Queries: Breakpoints is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch63",
    courseId: "css",
    title: "CSS Media Queries: Feature Detection",
    order: 63,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Media Queries: Feature Detection\n\nCSS Media Queries: Feature Detection is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Media Queries: Feature Detection is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Media Queries: Feature Detection — Responsive design with container queries:",
              "content": "/* CSS Media Queries: Feature Detection — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS Media Queries: Feature Detection Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Media Queries: Feature Detection:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Media Queries: Feature Detection is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Media Queries: Feature Detection:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch63-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch63-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch63-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch63-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["css-ch62"],
    keyPoints: ["CSS Media Queries: Feature Detection is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch64",
    courseId: "css",
    title: "CSS Container Queries & Container Units",
    order: 64,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Container Queries & Container Units\n\nCSS Container Queries & Container Units is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Container Queries & Container Units is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Container Queries & Container Units — Responsive design with container queries:",
              "content": "/* CSS Container Queries & Container Units — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS Container Queries & Container Units Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Container Queries & Container Units:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS Container Queries & Container Units — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Container Queries & Container Units:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch64-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch64-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch64-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch64-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["css-ch63"],
    keyPoints: ["CSS Container Queries & Container Units is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch65",
    courseId: "css",
    title: "CSS Viewport Units (dvh, svh, lvh)",
    order: 65,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Viewport Units (dvh, svh, lvh)\n\nCSS Viewport Units (dvh, svh, lvh) is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Viewport Units (dvh, svh, lvh) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Viewport Units (dvh, svh, lvh) — Responsive design with container queries:",
              "content": "/* CSS Viewport Units (dvh, svh, lvh) — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS Viewport Units (dvh, svh, lvh) Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Viewport Units (dvh, svh, lvh):\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Viewport Units (dvh, svh, lvh) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Viewport Units (dvh, svh, lvh):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch65-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch65-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch65-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch65-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["css-ch64"],
    keyPoints: ["CSS Viewport Units (dvh, svh, lvh) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch66",
    courseId: "css",
    title: "CSS Logical Properties (Inset, Margin-Block)",
    order: 66,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Logical Properties (Inset, Margin-Block)\n\nCSS Logical Properties (Inset, Margin-Block) is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Logical Properties (Inset, Margin-Block) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Logical Properties (Inset, Margin-Block) — Basic syntax:",
              "content": "/* CSS Logical Properties (Inset, Margin-Block) — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Logical Properties (Inset, Margin-Block) Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Logical Properties (Inset, Margin-Block):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Logical Properties (Inset, Margin-Block) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Logical Properties (Inset, Margin-Block):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch66-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch66-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch66-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch66-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch66-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["css-ch65"],
    keyPoints: ["CSS Logical Properties (Inset, Margin-Block) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch67",
    courseId: "css",
    title: "CSS Color Functions (color-mix, relative colors)",
    order: 67,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Color Functions (color-mix, relative colors)\n\nCSS Color Functions (color-mix, relative colors) is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Color Functions (color-mix, relative colors) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Color Functions (color-mix, relative colors) — Basic syntax:",
              "content": "/* CSS Color Functions (color-mix, relative colors) — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Color Functions (color-mix, relative colors) Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Color Functions (color-mix, relative colors):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Color Functions (color-mix, relative colors) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Color Functions (color-mix, relative colors):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch67-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch67-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch67-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch67-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch67-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["css-ch66"],
    keyPoints: ["CSS Color Functions (color-mix, relative colors) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch68",
    courseId: "css",
    title: "CSS Nesting (Native CSS Nesting)",
    order: 68,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Nesting (Native CSS Nesting)\n\nCSS Nesting (Native CSS Nesting) is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Nesting (Native CSS Nesting) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Nesting (Native CSS Nesting) — Responsive design with container queries:",
              "content": "/* CSS Nesting (Native CSS Nesting) — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS Nesting (Native CSS Nesting) Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Nesting (Native CSS Nesting):\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS Nesting (Native CSS Nesting) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Nesting (Native CSS Nesting):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch68-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch68-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch68-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch68-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["css-ch67"],
    keyPoints: ["CSS Nesting (Native CSS Nesting) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch69",
    courseId: "css",
    title: "CSS 2D Transforms (Translate, Rotate, Scale, Skew)",
    order: 69,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS 2D Transforms (Translate, Rotate, Scale, Skew)\n\nCSS 2D Transforms (Translate, Rotate, Scale, Skew) is bringing interfaces to life with CSS transitions, transforms, and keyframe animations. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS 2D Transforms (Translate, Rotate, Scale, Skew) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS 2D Transforms (Translate, Rotate, Scale, Skew) — CSS Animation example:",
              "content": "/* CSS 2D Transforms (Translate, Rotate, Scale, Skew) — Keyframe Animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n.animated-card {\n  animation: fadeInUp 0.6s ease-out both;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.animated-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.12);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated-card {\n    animation: none;\n    transition: none;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS 2D Transforms (Translate, Rotate, Scale, Skew) Works\n\nBringing interfaces to life with CSS transitions, transforms, and keyframe animations. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always respect prefers-reduced-motion. Some users have vestibular disorders — large animations can cause nausea. Use @media (prefers-reduced-motion: reduce) to disable or minimize animations. Keep UI animations under 300ms for best UX."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS 2D Transforms (Translate, Rotate, Scale, Skew) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS 2D Transforms (Translate, Rotate, Scale, Skew):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: CSS Animations** — The official guide\n2. **Animista** — Pre-made CSS animation library\n3. **CSS-Tricks: Animation Performance** — Best practices for smooth animations\n4. **Google Web Dev: Animations Guide** — Performance-focused animation advice\n5. **Cubic Bezier Generator** — Fine-tune your animation timing functions"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch69-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used to create smooth transitions between states?",
          "options": [
            {
              "id": "a",
              "text": "transition"
            },
            {
              "id": "b",
              "text": "animation"
            },
            {
              "id": "c",
              "text": "transform"
            },
            {
              "id": "d",
              "text": "translate"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The transition property enables smooth interpolation between CSS property values when a state change occurs (like hover)."
        },
        {
          "id": "css-ch69-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Animating the 'width' property is more performant than animating 'transform'.",
          "correctAnswer": false,
          "explanation": "Animating transform (and opacity) only triggers compositing — the most efficient rendering layer. Animating width triggers layout recalculation, which is expensive."
        },
        {
          "id": "css-ch69-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch69-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["css-ch68"],
    keyPoints: ["CSS 2D Transforms (Translate, Rotate, Scale, Skew) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch70",
    courseId: "css",
    title: "CSS 3D Transforms & Perspective",
    order: 70,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS 3D Transforms & Perspective\n\nCSS 3D Transforms & Perspective is bringing interfaces to life with CSS transitions, transforms, and keyframe animations. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS 3D Transforms & Perspective is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS 3D Transforms & Perspective — CSS Animation example:",
              "content": "/* CSS 3D Transforms & Perspective — Keyframe Animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n.animated-card {\n  animation: fadeInUp 0.6s ease-out both;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.animated-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.12);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated-card {\n    animation: none;\n    transition: none;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS 3D Transforms & Perspective Works\n\nBringing interfaces to life with CSS transitions, transforms, and keyframe animations. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always respect prefers-reduced-motion. Some users have vestibular disorders — large animations can cause nausea. Use @media (prefers-reduced-motion: reduce) to disable or minimize animations. Keep UI animations under 300ms for best UX."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "comparison",
              "title": "CSS 3D Transforms & Perspective — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS 3D Transforms & Perspective:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: CSS Animations** — The official guide\n2. **Animista** — Pre-made CSS animation library\n3. **CSS-Tricks: Animation Performance** — Best practices for smooth animations\n4. **Google Web Dev: Animations Guide** — Performance-focused animation advice\n5. **Cubic Bezier Generator** — Fine-tune your animation timing functions"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch70-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used to create smooth transitions between states?",
          "options": [
            {
              "id": "a",
              "text": "transition"
            },
            {
              "id": "b",
              "text": "animation"
            },
            {
              "id": "c",
              "text": "transform"
            },
            {
              "id": "d",
              "text": "translate"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The transition property enables smooth interpolation between CSS property values when a state change occurs (like hover)."
        },
        {
          "id": "css-ch70-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Animating the 'width' property is more performant than animating 'transform'.",
          "correctAnswer": false,
          "explanation": "Animating transform (and opacity) only triggers compositing — the most efficient rendering layer. Animating width triggers layout recalculation, which is expensive."
        },
        {
          "id": "css-ch70-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch70-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["css-ch69"],
    keyPoints: ["CSS 3D Transforms & Perspective is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch71",
    courseId: "css",
    title: "CSS Transitions: Properties & Timing Functions",
    order: 71,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Transitions: Properties & Timing Functions\n\nCSS Transitions: Properties & Timing Functions is bringing interfaces to life with CSS transitions, transforms, and keyframe animations. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Transitions: Properties & Timing Functions is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Transitions: Properties & Timing Functions — CSS Animation example:",
              "content": "/* CSS Transitions: Properties & Timing Functions — Keyframe Animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n.animated-card {\n  animation: fadeInUp 0.6s ease-out both;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.animated-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.12);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated-card {\n    animation: none;\n    transition: none;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Transitions: Properties & Timing Functions Works\n\nBringing interfaces to life with CSS transitions, transforms, and keyframe animations. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always respect prefers-reduced-motion. Some users have vestibular disorders — large animations can cause nausea. Use @media (prefers-reduced-motion: reduce) to disable or minimize animations. Keep UI animations under 300ms for best UX."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Transitions: Properties & Timing Functions is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Transitions: Properties & Timing Functions:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: CSS Animations** — The official guide\n2. **Animista** — Pre-made CSS animation library\n3. **CSS-Tricks: Animation Performance** — Best practices for smooth animations\n4. **Google Web Dev: Animations Guide** — Performance-focused animation advice\n5. **Cubic Bezier Generator** — Fine-tune your animation timing functions"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch71-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used to create smooth transitions between states?",
          "options": [
            {
              "id": "a",
              "text": "transition"
            },
            {
              "id": "b",
              "text": "animation"
            },
            {
              "id": "c",
              "text": "transform"
            },
            {
              "id": "d",
              "text": "translate"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The transition property enables smooth interpolation between CSS property values when a state change occurs (like hover)."
        },
        {
          "id": "css-ch71-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Animating the 'width' property is more performant than animating 'transform'.",
          "correctAnswer": false,
          "explanation": "Animating transform (and opacity) only triggers compositing — the most efficient rendering layer. Animating width triggers layout recalculation, which is expensive."
        },
        {
          "id": "css-ch71-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch71-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["css-ch70"],
    keyPoints: ["CSS Transitions: Properties & Timing Functions is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch72",
    courseId: "css",
    title: "CSS Transitions: Delays & Events",
    order: 72,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Transitions: Delays & Events\n\nCSS Transitions: Delays & Events is bringing interfaces to life with CSS transitions, transforms, and keyframe animations. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Transitions: Delays & Events is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Transitions: Delays & Events — CSS Animation example:",
              "content": "/* CSS Transitions: Delays & Events — Keyframe Animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n.animated-card {\n  animation: fadeInUp 0.6s ease-out both;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.animated-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.12);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated-card {\n    animation: none;\n    transition: none;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Transitions: Delays & Events Works\n\nBringing interfaces to life with CSS transitions, transforms, and keyframe animations. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always respect prefers-reduced-motion. Some users have vestibular disorders — large animations can cause nausea. Use @media (prefers-reduced-motion: reduce) to disable or minimize animations. Keep UI animations under 300ms for best UX."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "comparison",
              "title": "CSS Transitions: Delays & Events — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Transitions: Delays & Events:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: CSS Animations** — The official guide\n2. **Animista** — Pre-made CSS animation library\n3. **CSS-Tricks: Animation Performance** — Best practices for smooth animations\n4. **Google Web Dev: Animations Guide** — Performance-focused animation advice\n5. **Cubic Bezier Generator** — Fine-tune your animation timing functions"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch72-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used to create smooth transitions between states?",
          "options": [
            {
              "id": "a",
              "text": "transition"
            },
            {
              "id": "b",
              "text": "animation"
            },
            {
              "id": "c",
              "text": "transform"
            },
            {
              "id": "d",
              "text": "translate"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The transition property enables smooth interpolation between CSS property values when a state change occurs (like hover)."
        },
        {
          "id": "css-ch72-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Animating the 'width' property is more performant than animating 'transform'.",
          "correctAnswer": false,
          "explanation": "Animating transform (and opacity) only triggers compositing — the most efficient rendering layer. Animating width triggers layout recalculation, which is expensive."
        },
        {
          "id": "css-ch72-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch72-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["css-ch71"],
    keyPoints: ["CSS Transitions: Delays & Events is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch73",
    courseId: "css",
    title: "CSS Animations: @keyframes & Animation Properties",
    order: 73,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Animations: @keyframes & Animation Properties\n\nCSS Animations: @keyframes & Animation Properties is bringing interfaces to life with CSS transitions, transforms, and keyframe animations. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Animations: @keyframes & Animation Properties is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Animations: @keyframes & Animation Properties — CSS Animation example:",
              "content": "/* CSS Animations: @keyframes & Animation Properties — Keyframe Animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n.animated-card {\n  animation: fadeInUp 0.6s ease-out both;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.animated-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.12);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated-card {\n    animation: none;\n    transition: none;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Animations: @keyframes & Animation Properties Works\n\nBringing interfaces to life with CSS transitions, transforms, and keyframe animations. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always respect prefers-reduced-motion. Some users have vestibular disorders — large animations can cause nausea. Use @media (prefers-reduced-motion: reduce) to disable or minimize animations. Keep UI animations under 300ms for best UX."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Animations: @keyframes & Animation Properties is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Animations: @keyframes & Animation Properties:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: CSS Animations** — The official guide\n2. **Animista** — Pre-made CSS animation library\n3. **CSS-Tricks: Animation Performance** — Best practices for smooth animations\n4. **Google Web Dev: Animations Guide** — Performance-focused animation advice\n5. **Cubic Bezier Generator** — Fine-tune your animation timing functions"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch73-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used to create smooth transitions between states?",
          "options": [
            {
              "id": "a",
              "text": "transition"
            },
            {
              "id": "b",
              "text": "animation"
            },
            {
              "id": "c",
              "text": "transform"
            },
            {
              "id": "d",
              "text": "translate"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The transition property enables smooth interpolation between CSS property values when a state change occurs (like hover)."
        },
        {
          "id": "css-ch73-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Animating the 'width' property is more performant than animating 'transform'.",
          "correctAnswer": false,
          "explanation": "Animating transform (and opacity) only triggers compositing — the most efficient rendering layer. Animating width triggers layout recalculation, which is expensive."
        },
        {
          "id": "css-ch73-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch73-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["css-ch72"],
    keyPoints: ["CSS Animations: @keyframes & Animation Properties is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch74",
    courseId: "css",
    title: "CSS Animation: Timing, Direction, Fill Mode",
    order: 74,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Animation: Timing, Direction, Fill Mode\n\nCSS Animation: Timing, Direction, Fill Mode is bringing interfaces to life with CSS transitions, transforms, and keyframe animations. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Animation: Timing, Direction, Fill Mode is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Animation: Timing, Direction, Fill Mode — CSS Animation example:",
              "content": "/* CSS Animation: Timing, Direction, Fill Mode — Keyframe Animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n.animated-card {\n  animation: fadeInUp 0.6s ease-out both;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.animated-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.12);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated-card {\n    animation: none;\n    transition: none;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Animation: Timing, Direction, Fill Mode Works\n\nBringing interfaces to life with CSS transitions, transforms, and keyframe animations. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always respect prefers-reduced-motion. Some users have vestibular disorders — large animations can cause nausea. Use @media (prefers-reduced-motion: reduce) to disable or minimize animations. Keep UI animations under 300ms for best UX."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "comparison",
              "title": "CSS Animation: Timing, Direction, Fill Mode — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Animation: Timing, Direction, Fill Mode:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: CSS Animations** — The official guide\n2. **Animista** — Pre-made CSS animation library\n3. **CSS-Tricks: Animation Performance** — Best practices for smooth animations\n4. **Google Web Dev: Animations Guide** — Performance-focused animation advice\n5. **Cubic Bezier Generator** — Fine-tune your animation timing functions"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch74-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used to create smooth transitions between states?",
          "options": [
            {
              "id": "a",
              "text": "transition"
            },
            {
              "id": "b",
              "text": "animation"
            },
            {
              "id": "c",
              "text": "transform"
            },
            {
              "id": "d",
              "text": "translate"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The transition property enables smooth interpolation between CSS property values when a state change occurs (like hover)."
        },
        {
          "id": "css-ch74-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Animating the 'width' property is more performant than animating 'transform'.",
          "correctAnswer": false,
          "explanation": "Animating transform (and opacity) only triggers compositing — the most efficient rendering layer. Animating width triggers layout recalculation, which is expensive."
        },
        {
          "id": "css-ch74-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch74-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["css-ch73"],
    keyPoints: ["CSS Animation: Timing, Direction, Fill Mode is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch75",
    courseId: "css",
    title: "CSS Animation: Steps & Multiple Animations",
    order: 75,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Animation: Steps & Multiple Animations\n\nCSS Animation: Steps & Multiple Animations is bringing interfaces to life with CSS transitions, transforms, and keyframe animations. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Animation: Steps & Multiple Animations is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Animation: Steps & Multiple Animations — CSS Animation example:",
              "content": "/* CSS Animation: Steps & Multiple Animations — Keyframe Animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n.animated-card {\n  animation: fadeInUp 0.6s ease-out both;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.animated-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.12);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated-card {\n    animation: none;\n    transition: none;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Animation: Steps & Multiple Animations Works\n\nBringing interfaces to life with CSS transitions, transforms, and keyframe animations. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always respect prefers-reduced-motion. Some users have vestibular disorders — large animations can cause nausea. Use @media (prefers-reduced-motion: reduce) to disable or minimize animations. Keep UI animations under 300ms for best UX."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Animation: Steps & Multiple Animations is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Animation: Steps & Multiple Animations:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: CSS Animations** — The official guide\n2. **Animista** — Pre-made CSS animation library\n3. **CSS-Tricks: Animation Performance** — Best practices for smooth animations\n4. **Google Web Dev: Animations Guide** — Performance-focused animation advice\n5. **Cubic Bezier Generator** — Fine-tune your animation timing functions"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch75-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used to create smooth transitions between states?",
          "options": [
            {
              "id": "a",
              "text": "transition"
            },
            {
              "id": "b",
              "text": "animation"
            },
            {
              "id": "c",
              "text": "transform"
            },
            {
              "id": "d",
              "text": "translate"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The transition property enables smooth interpolation between CSS property values when a state change occurs (like hover)."
        },
        {
          "id": "css-ch75-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Animating the 'width' property is more performant than animating 'transform'.",
          "correctAnswer": false,
          "explanation": "Animating transform (and opacity) only triggers compositing — the most efficient rendering layer. Animating width triggers layout recalculation, which is expensive."
        },
        {
          "id": "css-ch75-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch75-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["css-ch74"],
    keyPoints: ["CSS Animation: Steps & Multiple Animations is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch76",
    courseId: "css",
    title: "CSS Scroll-Driven Animations",
    order: 76,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Scroll-Driven Animations\n\nCSS Scroll-Driven Animations is bringing interfaces to life with CSS transitions, transforms, and keyframe animations. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Scroll-Driven Animations is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Scroll-Driven Animations — CSS Animation example:",
              "content": "/* CSS Scroll-Driven Animations — Keyframe Animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n.animated-card {\n  animation: fadeInUp 0.6s ease-out both;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.animated-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.12);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated-card {\n    animation: none;\n    transition: none;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Scroll-Driven Animations Works\n\nBringing interfaces to life with CSS transitions, transforms, and keyframe animations. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always respect prefers-reduced-motion. Some users have vestibular disorders — large animations can cause nausea. Use @media (prefers-reduced-motion: reduce) to disable or minimize animations. Keep UI animations under 300ms for best UX."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "comparison",
              "title": "CSS Scroll-Driven Animations — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Scroll-Driven Animations:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: CSS Animations** — The official guide\n2. **Animista** — Pre-made CSS animation library\n3. **CSS-Tricks: Animation Performance** — Best practices for smooth animations\n4. **Google Web Dev: Animations Guide** — Performance-focused animation advice\n5. **Cubic Bezier Generator** — Fine-tune your animation timing functions"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch76-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used to create smooth transitions between states?",
          "options": [
            {
              "id": "a",
              "text": "transition"
            },
            {
              "id": "b",
              "text": "animation"
            },
            {
              "id": "c",
              "text": "transform"
            },
            {
              "id": "d",
              "text": "translate"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The transition property enables smooth interpolation between CSS property values when a state change occurs (like hover)."
        },
        {
          "id": "css-ch76-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Animating the 'width' property is more performant than animating 'transform'.",
          "correctAnswer": false,
          "explanation": "Animating transform (and opacity) only triggers compositing — the most efficient rendering layer. Animating width triggers layout recalculation, which is expensive."
        },
        {
          "id": "css-ch76-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch76-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["css-ch75"],
    keyPoints: ["CSS Scroll-Driven Animations is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch77",
    courseId: "css",
    title: "CSS View Transitions API",
    order: 77,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS View Transitions API\n\nCSS View Transitions API is bringing interfaces to life with CSS transitions, transforms, and keyframe animations. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS View Transitions API is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS View Transitions API — CSS Animation example:",
              "content": "/* CSS View Transitions API — Keyframe Animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n.animated-card {\n  animation: fadeInUp 0.6s ease-out both;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.animated-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.12);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated-card {\n    animation: none;\n    transition: none;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS View Transitions API Works\n\nBringing interfaces to life with CSS transitions, transforms, and keyframe animations. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always respect prefers-reduced-motion. Some users have vestibular disorders — large animations can cause nausea. Use @media (prefers-reduced-motion: reduce) to disable or minimize animations. Keep UI animations under 300ms for best UX."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS View Transitions API is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS View Transitions API:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: CSS Animations** — The official guide\n2. **Animista** — Pre-made CSS animation library\n3. **CSS-Tricks: Animation Performance** — Best practices for smooth animations\n4. **Google Web Dev: Animations Guide** — Performance-focused animation advice\n5. **Cubic Bezier Generator** — Fine-tune your animation timing functions"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch77-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used to create smooth transitions between states?",
          "options": [
            {
              "id": "a",
              "text": "transition"
            },
            {
              "id": "b",
              "text": "animation"
            },
            {
              "id": "c",
              "text": "transform"
            },
            {
              "id": "d",
              "text": "translate"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The transition property enables smooth interpolation between CSS property values when a state change occurs (like hover)."
        },
        {
          "id": "css-ch77-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Animating the 'width' property is more performant than animating 'transform'.",
          "correctAnswer": false,
          "explanation": "Animating transform (and opacity) only triggers compositing — the most efficient rendering layer. Animating width triggers layout recalculation, which is expensive."
        },
        {
          "id": "css-ch77-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch77-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["css-ch76"],
    keyPoints: ["CSS View Transitions API is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch78",
    courseId: "css",
    title: "CSS Performance: Will-Change & Hardware Acceleration",
    order: 78,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Performance: Will-Change & Hardware Acceleration\n\nCSS Performance: Will-Change & Hardware Acceleration is bringing interfaces to life with CSS transitions, transforms, and keyframe animations. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Performance: Will-Change & Hardware Acceleration is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Performance: Will-Change & Hardware Acceleration — CSS Animation example:",
              "content": "/* CSS Performance: Will-Change & Hardware Acceleration — Keyframe Animation */\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n.animated-card {\n  animation: fadeInUp 0.6s ease-out both;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.animated-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.12);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .animated-card {\n    animation: none;\n    transition: none;\n  }\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Performance: Will-Change & Hardware Acceleration Works\n\nBringing interfaces to life with CSS transitions, transforms, and keyframe animations. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Always respect prefers-reduced-motion. Some users have vestibular disorders — large animations can cause nausea. Use @media (prefers-reduced-motion: reduce) to disable or minimize animations. Keep UI animations under 300ms for best UX."
          },
          {
              "type": "text",
              "content": "## Animation Performance Guidelines\n\nFollow these rules for smooth animations:\n\n1. **Animate transforms and opacity only** — These trigger compositing, not layout or paint\n2. **Avoid animating width, height, top, left** — These trigger expensive layout recalculations\n3. **Use will-change sparingly** — Only when you know an element will animate, and remove it after\n4. **Keep animations under 300ms** — Longer animations feel sluggish for UI transitions\n5. **Use requestAnimationFrame for JS animations** — Better timing than setTimeout/setInterval"
          },
          {
              "type": "comparison",
              "title": "CSS Performance: Will-Change & Hardware Acceleration — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Performance: Will-Change & Hardware Acceleration:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN: CSS Animations** — The official guide\n2. **Animista** — Pre-made CSS animation library\n3. **CSS-Tricks: Animation Performance** — Best practices for smooth animations\n4. **Google Web Dev: Animations Guide** — Performance-focused animation advice\n5. **Cubic Bezier Generator** — Fine-tune your animation timing functions"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch78-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS property is used to create smooth transitions between states?",
          "options": [
            {
              "id": "a",
              "text": "transition"
            },
            {
              "id": "b",
              "text": "animation"
            },
            {
              "id": "c",
              "text": "transform"
            },
            {
              "id": "d",
              "text": "translate"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The transition property enables smooth interpolation between CSS property values when a state change occurs (like hover)."
        },
        {
          "id": "css-ch78-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Animating the 'width' property is more performant than animating 'transform'.",
          "correctAnswer": false,
          "explanation": "Animating transform (and opacity) only triggers compositing — the most efficient rendering layer. Animating width triggers layout recalculation, which is expensive."
        },
        {
          "id": "css-ch78-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch78-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["css-ch77"],
    keyPoints: ["CSS Performance: Will-Change & Hardware Acceleration is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch79",
    courseId: "css",
    title: "CSS Frameworks (Tailwind, Bootstrap)",
    order: 79,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Frameworks (Tailwind, Bootstrap)\n\nCSS Frameworks (Tailwind, Bootstrap) is organizing CSS at scale — methodologies, custom properties, design systems, and preprocessors. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Frameworks (Tailwind, Bootstrap) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Frameworks (Tailwind, Bootstrap) — CSS Architecture with Cascade Layers:",
              "content": "/* CSS Frameworks (Tailwind, Bootstrap) — Cascade Layers for organized CSS */\n@layer reset, base, components, utilities;\n\n/* Reset — normalize browser defaults */\n@layer reset {\n  *, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n/* Base — element-level styles */\n@layer base {\n  body { font-family: system-ui, sans-serif; line-height: 1.6; }\n}\n\n/* Components — reusable patterns */\n@layer components {\n  .btn { /* button styles */ }\n  .card { /* card styles */ }\n}\n\n/* Utilities — high-specificity helpers */\n@layer utilities {\n  .mt-4 { margin-top: 1rem; }\n}\n\n/* Custom properties: design tokens */\n:root {\n  --color-primary: #38bdf8;\n  --color-surface: #ffffff;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 2rem;\n  --radius: 8px;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Frameworks (Tailwind, Bootstrap) Works\n\nOrganizing CSS at scale — methodologies, custom properties, design systems, and preprocessors. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Frameworks (Tailwind, Bootstrap):\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Frameworks (Tailwind, Bootstrap) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Frameworks (Tailwind, Bootstrap):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch79-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch79-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch79-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch79-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["css-ch78"],
    keyPoints: ["CSS Frameworks (Tailwind, Bootstrap) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch80",
    courseId: "css",
    title: "CSS Preprocessors (Sass/SCSS)",
    order: 80,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Preprocessors (Sass/SCSS)\n\nCSS Preprocessors (Sass/SCSS) is organizing CSS at scale — methodologies, custom properties, design systems, and preprocessors. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Preprocessors (Sass/SCSS) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Preprocessors (Sass/SCSS) — CSS Architecture with Cascade Layers:",
              "content": "/* CSS Preprocessors (Sass/SCSS) — Cascade Layers for organized CSS */\n@layer reset, base, components, utilities;\n\n/* Reset — normalize browser defaults */\n@layer reset {\n  *, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n/* Base — element-level styles */\n@layer base {\n  body { font-family: system-ui, sans-serif; line-height: 1.6; }\n}\n\n/* Components — reusable patterns */\n@layer components {\n  .btn { /* button styles */ }\n  .card { /* card styles */ }\n}\n\n/* Utilities — high-specificity helpers */\n@layer utilities {\n  .mt-4 { margin-top: 1rem; }\n}\n\n/* Custom properties: design tokens */\n:root {\n  --color-primary: #38bdf8;\n  --color-surface: #ffffff;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 2rem;\n  --radius: 8px;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Preprocessors (Sass/SCSS) Works\n\nOrganizing CSS at scale — methodologies, custom properties, design systems, and preprocessors. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Preprocessors (Sass/SCSS):\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS Preprocessors (Sass/SCSS) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Preprocessors (Sass/SCSS):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch80-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch80-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch80-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch80-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["css-ch79"],
    keyPoints: ["CSS Preprocessors (Sass/SCSS) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch81",
    courseId: "css",
    title: "CSS Methodologies (BEM, ITCSS, SMACSS)",
    order: 81,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Methodologies (BEM, ITCSS, SMACSS)\n\nCSS Methodologies (BEM, ITCSS, SMACSS) is organizing CSS at scale — methodologies, custom properties, design systems, and preprocessors. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Methodologies (BEM, ITCSS, SMACSS) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Methodologies (BEM, ITCSS, SMACSS) — CSS Architecture with Cascade Layers:",
              "content": "/* CSS Methodologies (BEM, ITCSS, SMACSS) — Cascade Layers for organized CSS */\n@layer reset, base, components, utilities;\n\n/* Reset — normalize browser defaults */\n@layer reset {\n  *, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n/* Base — element-level styles */\n@layer base {\n  body { font-family: system-ui, sans-serif; line-height: 1.6; }\n}\n\n/* Components — reusable patterns */\n@layer components {\n  .btn { /* button styles */ }\n  .card { /* card styles */ }\n}\n\n/* Utilities — high-specificity helpers */\n@layer utilities {\n  .mt-4 { margin-top: 1rem; }\n}\n\n/* Custom properties: design tokens */\n:root {\n  --color-primary: #38bdf8;\n  --color-surface: #ffffff;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 2rem;\n  --radius: 8px;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Methodologies (BEM, ITCSS, SMACSS) Works\n\nOrganizing CSS at scale — methodologies, custom properties, design systems, and preprocessors. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Methodologies (BEM, ITCSS, SMACSS):\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Methodologies (BEM, ITCSS, SMACSS) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Methodologies (BEM, ITCSS, SMACSS):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch81-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch81-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch81-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch81-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["css-ch80"],
    keyPoints: ["CSS Methodologies (BEM, ITCSS, SMACSS) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch82",
    courseId: "css",
    title: "CSS Cascade Layers (@layer)",
    order: 82,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Cascade Layers (@layer)\n\nCSS Cascade Layers (@layer) is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Cascade Layers (@layer) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Cascade Layers (@layer) — Responsive design with container queries:",
              "content": "/* CSS Cascade Layers (@layer) — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS Cascade Layers (@layer) Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Cascade Layers (@layer):\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS Cascade Layers (@layer) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Cascade Layers (@layer):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch82-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch82-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch82-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch82-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["css-ch81"],
    keyPoints: ["CSS Cascade Layers (@layer) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch83",
    courseId: "css",
    title: "CSS Design Systems & Tokens",
    order: 83,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Design Systems & Tokens\n\nCSS Design Systems & Tokens is organizing CSS at scale — methodologies, custom properties, design systems, and preprocessors. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Design Systems & Tokens is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Design Systems & Tokens — CSS Architecture with Cascade Layers:",
              "content": "/* CSS Design Systems & Tokens — Cascade Layers for organized CSS */\n@layer reset, base, components, utilities;\n\n/* Reset — normalize browser defaults */\n@layer reset {\n  *, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n/* Base — element-level styles */\n@layer base {\n  body { font-family: system-ui, sans-serif; line-height: 1.6; }\n}\n\n/* Components — reusable patterns */\n@layer components {\n  .btn { /* button styles */ }\n  .card { /* card styles */ }\n}\n\n/* Utilities — high-specificity helpers */\n@layer utilities {\n  .mt-4 { margin-top: 1rem; }\n}\n\n/* Custom properties: design tokens */\n:root {\n  --color-primary: #38bdf8;\n  --color-surface: #ffffff;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 2rem;\n  --radius: 8px;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Design Systems & Tokens Works\n\nOrganizing CSS at scale — methodologies, custom properties, design systems, and preprocessors. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Design Systems & Tokens:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Design Systems & Tokens is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Design Systems & Tokens:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch83-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch83-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch83-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch83-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["css-ch82"],
    keyPoints: ["CSS Design Systems & Tokens is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch84",
    courseId: "css",
    title: "CSS Custom Properties for Theming",
    order: 84,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Custom Properties for Theming\n\nCSS Custom Properties for Theming is making designs work at every screen size using media queries, container queries, and modern units. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Custom Properties for Theming is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Custom Properties for Theming — Responsive design with container queries:",
              "content": "/* CSS Custom Properties for Theming — Modern Responsive Design */\n/* 1. Container queries — respond to element size, not viewport */\n.card-container {\n  container-type: inline-size;\n  container-name: card;\n}\n\n@container card (min-width: 400px) {\n  .card {\n    display: flex;\n    gap: 1rem;\n  }\n  .card-image {\n    width: 200px;\n    height: auto;\n  }\n}\n\n@container card (max-width: 399px) {\n  .card {\n    display: block;\n  }\n  .card-image {\n    width: 100%;\n  }\n}\n\n/* 2. Fluid typography with clamp() */\nh1 {\n  font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);\n}\n\n/* 3. Common breakpoints */\n@media (max-width: 640px) { /* mobile */ }\n@media (min-width: 641px) and (max-width: 1024px) { /* tablet */ }\n@media (min-width: 1025px) { /* desktop */ }"
          },
          {
              "type": "text",
              "content": "## How CSS Custom Properties for Theming Works\n\nMaking designs work at every screen size using media queries, container queries, and modern units. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Design mobile-first: start with the single-column layout as your base CSS, then add complexity with min-width media queries. This means every screen gets the core experience, and larger screens get progressive enhancement."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Custom Properties for Theming:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS Custom Properties for Theming — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Custom Properties for Theming:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch84-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which CSS feature allows styles to change based on the viewport size?",
          "options": [
            {
              "id": "a",
              "text": "Media queries (@media)"
            },
            {
              "id": "b",
              "text": "@supports"
            },
            {
              "id": "c",
              "text": "@viewport"
            },
            {
              "id": "d",
              "text": "@import"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Media queries allow CSS to apply styles conditionally based on viewport width, device type, or other media features."
        },
        {
          "id": "css-ch84-mc2",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the advantage of container queries over media queries?",
          "options": [
            {
              "id": "a",
              "text": "Container queries respond to the parent container's size, not the viewport"
            },
            {
              "id": "b",
              "text": "Container queries are faster to render"
            },
            {
              "id": "c",
              "text": "Container queries work on all browsers"
            },
            {
              "id": "d",
              "text": "Container queries replace the need for media queries entirely"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Container queries let components respond to their container's size rather than the viewport. This makes components truly reusable across different contexts."
        },
        {
          "id": "css-ch84-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch84-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["css-ch83"],
    keyPoints: ["CSS Custom Properties for Theming is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch85",
    courseId: "css",
    title: "CSS Debugging & DevTools",
    order: 85,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Debugging & DevTools\n\nCSS Debugging & DevTools is organizing CSS at scale — methodologies, custom properties, design systems, and preprocessors. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Debugging & DevTools is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Debugging & DevTools — CSS Architecture with Cascade Layers:",
              "content": "/* CSS Debugging & DevTools — Cascade Layers for organized CSS */\n@layer reset, base, components, utilities;\n\n/* Reset — normalize browser defaults */\n@layer reset {\n  *, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n/* Base — element-level styles */\n@layer base {\n  body { font-family: system-ui, sans-serif; line-height: 1.6; }\n}\n\n/* Components — reusable patterns */\n@layer components {\n  .btn { /* button styles */ }\n  .card { /* card styles */ }\n}\n\n/* Utilities — high-specificity helpers */\n@layer utilities {\n  .mt-4 { margin-top: 1rem; }\n}\n\n/* Custom properties: design tokens */\n:root {\n  --color-primary: #38bdf8;\n  --color-surface: #ffffff;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 2rem;\n  --radius: 8px;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Debugging & DevTools Works\n\nOrganizing CSS at scale — methodologies, custom properties, design systems, and preprocessors. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Debugging & DevTools:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Debugging & DevTools is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Debugging & DevTools:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch85-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch85-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch85-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch85-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["css-ch84"],
    keyPoints: ["CSS Debugging & DevTools is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch86",
    courseId: "css",
    title: "CSS Best Practices: Organization & Maintainability",
    order: 86,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Best Practices: Organization & Maintainability\n\nCSS Best Practices: Organization & Maintainability is organizing CSS at scale — methodologies, custom properties, design systems, and preprocessors. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Best Practices: Organization & Maintainability is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Best Practices: Organization & Maintainability — CSS Architecture with Cascade Layers:",
              "content": "/* CSS Best Practices: Organization & Maintainability — Cascade Layers for organized CSS */\n@layer reset, base, components, utilities;\n\n/* Reset — normalize browser defaults */\n@layer reset {\n  *, *::before, *::after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n}\n\n/* Base — element-level styles */\n@layer base {\n  body { font-family: system-ui, sans-serif; line-height: 1.6; }\n}\n\n/* Components — reusable patterns */\n@layer components {\n  .btn { /* button styles */ }\n  .card { /* card styles */ }\n}\n\n/* Utilities — high-specificity helpers */\n@layer utilities {\n  .mt-4 { margin-top: 1rem; }\n}\n\n/* Custom properties: design tokens */\n:root {\n  --color-primary: #38bdf8;\n  --color-surface: #ffffff;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 2rem;\n  --radius: 8px;\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Best Practices: Organization & Maintainability Works\n\nOrganizing CSS at scale — methodologies, custom properties, design systems, and preprocessors. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Best Practices: Organization & Maintainability:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS Best Practices: Organization & Maintainability — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Best Practices: Organization & Maintainability:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch86-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch86-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch86-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch86-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["css-ch85"],
    keyPoints: ["CSS Best Practices: Organization & Maintainability is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch87",
    courseId: "css",
    title: "CSS Forms Styling & UX",
    order: 87,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Forms Styling & UX\n\nCSS Forms Styling & UX is specialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Forms Styling & UX is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Forms Styling & UX — Example:",
              "content": "/* CSS Forms Styling & UX — Practical Example */\n.element {\n  /* Your styles here */\n  \n  /* Modern CSS best practices */\n  display: block;\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 1rem;\n  \n  /* Visual design */\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  \n  /* Interaction */\n  transition: all 0.2s ease;\n}\n\n.element:hover {\n  border-color: #38bdf8;\n  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.15);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Forms Styling & UX Works\n\nSpecialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Forms Styling & UX:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Forms Styling & UX is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Forms Styling & UX:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch87-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch87-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch87-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch87-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["css-ch86"],
    keyPoints: ["CSS Forms Styling & UX is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch88",
    courseId: "css",
    title: "CSS Image Sprites & Optimization",
    order: 88,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Image Sprites & Optimization\n\nCSS Image Sprites & Optimization is specialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Image Sprites & Optimization is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Image Sprites & Optimization — Example:",
              "content": "/* CSS Image Sprites & Optimization — Practical Example */\n.element {\n  /* Your styles here */\n  \n  /* Modern CSS best practices */\n  display: block;\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 1rem;\n  \n  /* Visual design */\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  \n  /* Interaction */\n  transition: all 0.2s ease;\n}\n\n.element:hover {\n  border-color: #38bdf8;\n  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.15);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Image Sprites & Optimization Works\n\nSpecialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Image Sprites & Optimization:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS Image Sprites & Optimization — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Image Sprites & Optimization:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch88-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch88-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch88-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch88-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["css-ch87"],
    keyPoints: ["CSS Image Sprites & Optimization is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch89",
    courseId: "css",
    title: "CSS Counters & Numbered Lists",
    order: 89,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Counters & Numbered Lists\n\nCSS Counters & Numbered Lists is specialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Counters & Numbered Lists is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Counters & Numbered Lists — Example:",
              "content": "/* CSS Counters & Numbered Lists — Practical Example */\n.element {\n  /* Your styles here */\n  \n  /* Modern CSS best practices */\n  display: block;\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 1rem;\n  \n  /* Visual design */\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  \n  /* Interaction */\n  transition: all 0.2s ease;\n}\n\n.element:hover {\n  border-color: #38bdf8;\n  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.15);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Counters & Numbered Lists Works\n\nSpecialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Counters & Numbered Lists:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Counters & Numbered Lists is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Counters & Numbered Lists:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch89-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch89-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch89-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch89-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["css-ch88"],
    keyPoints: ["CSS Counters & Numbered Lists is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch90",
    courseId: "css",
    title: "CSS Scroll Snap",
    order: 90,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Scroll Snap\n\nCSS Scroll Snap is specialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Scroll Snap is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Scroll Snap — Example:",
              "content": "/* CSS Scroll Snap — Practical Example */\n.element {\n  /* Your styles here */\n  \n  /* Modern CSS best practices */\n  display: block;\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 1rem;\n  \n  /* Visual design */\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  \n  /* Interaction */\n  transition: all 0.2s ease;\n}\n\n.element:hover {\n  border-color: #38bdf8;\n  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.15);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Scroll Snap Works\n\nSpecialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Scroll Snap:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS Scroll Snap — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Scroll Snap:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch90-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch90-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch90-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch90-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["css-ch89"],
    keyPoints: ["CSS Scroll Snap is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch91",
    courseId: "css",
    title: "CSS Print Stylesheets (@page)",
    order: 91,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Print Stylesheets (@page)\n\nCSS Print Stylesheets (@page) is specialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Print Stylesheets (@page) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Print Stylesheets (@page) — Example:",
              "content": "/* CSS Print Stylesheets (@page) — Practical Example */\n.element {\n  /* Your styles here */\n  \n  /* Modern CSS best practices */\n  display: block;\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 1rem;\n  \n  /* Visual design */\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  \n  /* Interaction */\n  transition: all 0.2s ease;\n}\n\n.element:hover {\n  border-color: #38bdf8;\n  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.15);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Print Stylesheets (@page) Works\n\nSpecialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Print Stylesheets (@page):\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Print Stylesheets (@page) is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Print Stylesheets (@page):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch91-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch91-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch91-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch91-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["css-ch90"],
    keyPoints: ["CSS Print Stylesheets (@page) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch92",
    courseId: "css",
    title: "CSS Feature Queries (@supports)",
    order: 92,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Feature Queries (@supports)\n\nCSS Feature Queries (@supports) is specialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Feature Queries (@supports) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Feature Queries (@supports) — Example:",
              "content": "/* CSS Feature Queries (@supports) — Practical Example */\n.element {\n  /* Your styles here */\n  \n  /* Modern CSS best practices */\n  display: block;\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 1rem;\n  \n  /* Visual design */\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  \n  /* Interaction */\n  transition: all 0.2s ease;\n}\n\n.element:hover {\n  border-color: #38bdf8;\n  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.15);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Feature Queries (@supports) Works\n\nSpecialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Feature Queries (@supports):\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "comparison",
              "title": "CSS Feature Queries (@supports) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Feature Queries (@supports):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch92-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch92-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch92-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch92-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["css-ch91"],
    keyPoints: ["CSS Feature Queries (@supports) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch93",
    courseId: "css",
    title: "CSS Houdini: Paint API & Custom Worklets",
    order: 93,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Houdini: Paint API & Custom Worklets\n\nCSS Houdini: Paint API & Custom Worklets is specialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Houdini: Paint API & Custom Worklets is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Houdini: Paint API & Custom Worklets — Example:",
              "content": "/* CSS Houdini: Paint API & Custom Worklets — Practical Example */\n.element {\n  /* Your styles here */\n  \n  /* Modern CSS best practices */\n  display: block;\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 1rem;\n  \n  /* Visual design */\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  \n  /* Interaction */\n  transition: all 0.2s ease;\n}\n\n.element:hover {\n  border-color: #38bdf8;\n  box-shadow: 0 4px 12px rgba(56, 189, 248, 0.15);\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Houdini: Paint API & Custom Worklets Works\n\nSpecialized CSS features like scroll snap, Houdini, print styles, and the :has() selector. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to experiment with CSS in real-time. The \"Computed\" tab shows the final styles after the cascade. Use the \":hover\" checkbox in the Styles pane to inspect hover states."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Houdini: Paint API & Custom Worklets:\n\n1. **Build reusable utilities** — Small, focused CSS classes\n2. **Use consistent naming** — BEM, SMACSS, or utility-first (Tailwind)\n3. **Limit specificity depth** — Avoid deeply nested selectors\n4. **Comment your CSS** — Document why, not what (the code says what)\n5. **Regular audits** — Remove unused CSS, check for redundant rules"
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "CSS Houdini: Paint API & Custom Worklets is essential for modern web design",
                  "Master the cascade and specificity rules early",
                  "Learn Flexbox before Grid (conceptual stepping stone)",
                  "Use CSS custom properties for maintainable themes",
                  "Test responsive layouts on real devices, not just DevTools"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Houdini: Paint API & Custom Worklets:\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch93-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you apply CSS to an HTML element?",
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
          "explanation": "CSS uses selectors to target elements and property-value pairs to define styles."
        },
        {
          "id": "css-ch93-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS styles cascade from parent to child elements by default.",
          "correctAnswer": true,
          "explanation": "CSS stands for Cascading Style Sheets — inherited properties flow down the DOM tree from parent to child."
        },
        {
          "id": "css-ch93-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch93-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["css-ch92"],
    keyPoints: ["CSS Houdini: Paint API & Custom Worklets is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
  {
    id: "css-ch94",
    courseId: "css",
    title: "CSS Has Selector (:has — The Parent Selector)",
    order: 94,
    sections: [
          {
              "type": "text",
              "content": "## Understanding CSS Has Selector (:has — The Parent Selector)\n\nCSS Has Selector (:has — The Parent Selector) is the core rules of CSS — selectors, properties, values, and how the box model works. Mastering this allows you to create polished, professional layouts that adapt to different screen sizes and devices.\n\nCSS has evolved dramatically — from simple text styling to complex layout systems like Flexbox, Grid, container queries, and cascade layers. Understanding the fundamentals is key to using modern features effectively."
          },
          {
              "type": "key-points",
              "points": [
                  "CSS Has Selector (:has — The Parent Selector) is fundamental to modern web styling",
                  "Controls how elements appear and respond to different screen sizes",
                  "Modern CSS offers powerful tools for complex layouts and animations",
                  "Understanding this enables responsive, accessible, beautiful designs"
              ]
          },
          {
              "type": "code",
              "language": "css",
              "caption": "CSS Has Selector (:has — The Parent Selector) — Basic syntax:",
              "content": "/* CSS Has Selector (:has — The Parent Selector) — Basic Example */\nselector {\n  property: value;\n}\n\n/* The CSS Box Model — every element is a box */\n.box {\n  width: 300px;\n  padding: 1rem;      /* Space INSIDE the box */\n  border: 2px solid #333;  /* The edge of the box */\n  margin: 1rem;       /* Space OUTSIDE the box */\n  box-sizing: border-box;  /* Width includes padding + border */\n}"
          },
          {
              "type": "text",
              "content": "## How CSS Has Selector (:has — The Parent Selector) Works\n\nThe core rules of CSS — selectors, properties, values, and how the box model works. The browser processes CSS through a pipeline:\n\n1. **Parse** the CSS file or inline styles\n2. **Build** the CSSOM (CSS Object Model)\n3. **Match** selectors to DOM elements\n4. **Calculate** the cascade and specificity\n5. **Apply** the winning declarations\n6. **Paint** the result to the screen\n\nUnderstanding this pipeline helps you debug styling issues and write more efficient CSS."
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use browser DevTools to inspect computed styles. The \"Styles\" pane shows exactly which declarations apply, which are overridden, and from which source. This is the #1 CSS debugging tool — learn to read it well."
          },
          {
              "type": "text",
              "content": "## Common Patterns\n\nMaster these patterns for CSS Has Selector (:has — The Parent Selector):\n\n1. **Centering** — Use flexbox or grid, not margin: auto hacks\n2. **Responsive images** — max-width: 100% on all images\n3. **Consistent spacing** — Use a spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)\n4. **Typography scale** — Define a type scale with consistent ratios\n5. **Color system** — Define semantic colors (primary, secondary, surface, text) as custom properties"
          },
          {
              "type": "comparison",
              "title": "CSS Has Selector (:has — The Parent Selector) — Modern vs Classic Approach",
              "headers": [
                  "Aspect",
                  "Modern Approach",
                  "Classic Approach"
              ],
              "rows": [
                  [
                      "Layout",
                      "Flexbox + Grid",
                      "Float + Clearfix"
                  ],
                  [
                      "Responsive",
                      "Container Queries + Clamp()",
                      "Media queries only"
                  ],
                  [
                      "Variables",
                      "Custom Properties",
                      "Preprocessor variables (Sass)"
                  ],
                  [
                      "Colors",
                      "OKLCH / color-mix()",
                      "Hex codes only"
                  ],
                  [
                      "Theming",
                      "Light-Dark() / prefers-color-scheme",
                      "Separate stylesheets"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting the cascade — a style may not apply because a more specific selector overrides it. Check DevTools if your CSS isn't taking effect."
          },
          {
              "type": "text",
              "content": "## Best Practices\n\nFollow these guidelines for CSS Has Selector (:has — The Parent Selector):\n\n1. **Use meaningful class names** — Follow BEM or similar naming conventions\n2. **Minimize specificity battles** — Avoid ID selectors and !important\n3. **Use CSS custom properties** — Create a design token system\n4. **Mobile-first** — Write base styles for mobile, enhance for larger screens\n5. **Audit your CSS** — Remove unused styles, use CSS stats tools"
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **MDN Web Docs: CSS** — The definitive CSS reference\n2. **CSS-Tricks** — Practical guides, tips, and complete references\n3. **web.dev (Google): Learn CSS** — Structured CSS learning path\n4. **Smashing Magazine** — In-depth CSS articles and techniques\n5. **CanIUse.com** — Check CSS feature browser support"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** CSS is designed to be forgiving — invalid rules are silently ignored, not crashed. This makes it easy to experiment, but also easy to introduce invisible bugs. Always check your styles in multiple browsers and use linting tools like Stylelint."
          }
      ],
    examPool: [
        {
          "id": "css-ch94-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What does the CSS Box Model consist of?",
          "options": [
            {
              "id": "a",
              "text": "Content, Padding, Border, Margin"
            },
            {
              "id": "b",
              "text": "Content, Margin, Padding, Outline"
            },
            {
              "id": "c",
              "text": "Width, Height, Padding, Border"
            },
            {
              "id": "d",
              "text": "Content, Border, Outline, Margin"
            }
          ],
          "correctAnswer": "a",
          "explanation": "The CSS Box Model consists of content (innermost), padding (inside border), border, and margin (outside border) — in that order."
        },
        {
          "id": "css-ch94-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "CSS stands for Cascading Style Sheets, where styles cascade from parent to child elements.",
          "correctAnswer": true,
          "explanation": "CSS is Cascading Style Sheets. Styles cascade down the DOM tree from parent to child elements unless explicitly overridden."
        },
        {
          "id": "css-ch94-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS property box-sizing: border-box makes an element's width include its ___ and ___.",
          "correctAnswer": "padding and border",
          "acceptableAnswers": [
            "padding, border",
            "border and padding"
          ],
          "explanation": "box-sizing: border-box includes padding and border in the element's total width/height, making sizing predictable."
        },
        {
          "id": "css-ch94-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best practice for organizing CSS in large projects?",
          "options": [
            {
              "id": "a",
              "text": "Use a methodology like BEM with cascade layers (@layer)"
            },
            {
              "id": "b",
              "text": "Use !important to ensure styles always apply"
            },
            {
              "id": "c",
              "text": "Put all styles in one file without organization"
            },
            {
              "id": "d",
              "text": "Use inline styles exclusively"
            }
          ],
          "correctAnswer": "a",
          "explanation": "BEM (Block Element Modifier) with cascade layers provides maintainable, scalable CSS. !important creates specificity wars, inline styles bypass the cascade."
        },
        {
          "id": "css-ch94-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The CSS at-rule that lets you define custom reusable values is called a custom ___ using the ___() function.",
          "correctAnswer": "property; var",
          "acceptableAnswers": [
            "property; var()",
            "property using var"
          ],
          "explanation": "CSS custom properties (variables) are defined with --name and accessed with var(--name)."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["css-ch93"],
    keyPoints: ["CSS Has Selector (:has — The Parent Selector) is fundamental to modern web styling","Controls how elements appear and respond to different screen sizes","Modern CSS offers powerful tools for complex layouts and animations","Understanding this enables responsive, accessible, beautiful designs"],
  },
];

export const cssCourse: Course = {
  id: "css",
  title: "CSS",
  fullTitle: "CSS — Styling the Web",
  description: "From selectors to animations, learn to craft beautiful, responsive layouts with modern CSS including Flexbox, Grid, custom properties, container queries, and design systems.",
  icon: "Palette",
  color: "#38bdf8",
  difficulty: 1,
  chapters: cssChapters,
  totalXP: 1596,
  estimatedHours: 75,
};
