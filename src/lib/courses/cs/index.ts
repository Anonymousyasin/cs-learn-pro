// Auto-generated course data - do not edit directly
import { Course, Chapter, Section, ExamQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, CodeOrderQuestion, MatchPairsQuestion } from "../types";

const csChapters: Chapter[] = [
  {
    id: "cs-ch1",
    courseId: "cs",
    title: "What is CS?",
    order: 1,
    sections: [
          {
              "type": "text",
              "content": "## Understanding What is CS?\n\nWhat is CS? is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. What is CS? plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "What is CS? is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "What is CS? — Implementation:",
              "content": "// What is CS? — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nWhat is CS? is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "What is CS? is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of What is CS?:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch1-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in What is CS?)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch1-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "What is CS? is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch1-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing What is CS? with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch1-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch1-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for What is CS??",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: [],
    keyPoints: ["What is CS? is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch2",
    courseId: "cs",
    title: "Binary Numbers",
    order: 2,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Binary Numbers\n\nBinary Numbers is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Binary Numbers plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Binary Numbers is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Binary Numbers has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nBinary Numbers is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Binary Numbers — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Binary Numbers:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch2-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Binary Numbers)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch2-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Binary Numbers is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch2-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Binary Numbers with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch2-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch2-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Binary Numbers?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["cs-ch1"],
    keyPoints: ["Binary Numbers is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch3",
    courseId: "cs",
    title: "Hex & Octal",
    order: 3,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Hex & Octal\n\nHex & Octal is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Hex & Octal plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Hex & Octal is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Hex & Octal — Implementation:",
              "content": "// Hex & Octal — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nHex & Octal is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Hex & Octal Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Hex & Octal:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch3-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Hex & Octal)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch3-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Hex & Octal is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch3-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Hex & Octal with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch3-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch3-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Hex & Octal?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["cs-ch2"],
    keyPoints: ["Hex & Octal is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch4",
    courseId: "cs",
    title: "Logic Gates",
    order: 4,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Logic Gates\n\nLogic Gates is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Logic Gates plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Logic Gates is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Logic Gates has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nLogic Gates is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Logic Gates is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Logic Gates:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch4-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Logic Gates)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch4-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Logic Gates is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch4-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Logic Gates with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch4-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch4-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Logic Gates?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["cs-ch3"],
    keyPoints: ["Logic Gates is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch5",
    courseId: "cs",
    title: "Boolean Algebra",
    order: 5,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Boolean Algebra\n\nBoolean Algebra is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Boolean Algebra plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Boolean Algebra is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Boolean Algebra — Implementation:",
              "content": "// Boolean Algebra — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nBoolean Algebra is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Boolean Algebra — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Boolean Algebra:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch5-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Boolean Algebra)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch5-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Boolean Algebra is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch5-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Boolean Algebra with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch5-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch5-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Boolean Algebra?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["cs-ch4"],
    keyPoints: ["Boolean Algebra is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch6",
    courseId: "cs",
    title: "How CPUs Work",
    order: 6,
    sections: [
          {
              "type": "text",
              "content": "## Understanding How CPUs Work\n\nHow CPUs Work is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. How CPUs Work plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "How CPUs Work is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "How CPUs Work has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nHow CPUs Work is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "How CPUs Work Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of How CPUs Work:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch6-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in How CPUs Work)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch6-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "How CPUs Work is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch6-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing How CPUs Work with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch6-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch6-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for How CPUs Work?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["cs-ch5"],
    keyPoints: ["How CPUs Work is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch7",
    courseId: "cs",
    title: "Memory Hierarchy",
    order: 7,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Memory Hierarchy\n\nMemory Hierarchy is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Memory Hierarchy plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Memory Hierarchy is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Memory Hierarchy — Implementation:",
              "content": "// Memory Hierarchy — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nMemory Hierarchy is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Memory Hierarchy is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Memory Hierarchy:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch7-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Memory Hierarchy)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch7-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Memory Hierarchy is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch7-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Memory Hierarchy with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch7-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch7-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Memory Hierarchy?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["cs-ch6"],
    keyPoints: ["Memory Hierarchy is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch8",
    courseId: "cs",
    title: "Data Representation",
    order: 8,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Data Representation\n\nData Representation is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Data Representation plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Data Representation is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Data Representation has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nData Representation is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Data Representation — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Data Representation:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch8-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Data Representation)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch8-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Data Representation is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch8-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Data Representation with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch8-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch8-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Data Representation?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["cs-ch7"],
    keyPoints: ["Data Representation is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch9",
    courseId: "cs",
    title: "Algorithms Intro",
    order: 9,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Algorithms Intro\n\nAlgorithms Intro is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Algorithms Intro plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Algorithms Intro is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Algorithms Intro — Implementation:",
              "content": "// Algorithms Intro — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nAlgorithms Intro is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Algorithms Intro Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Algorithms Intro:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch9-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Algorithms Intro)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch9-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Algorithms Intro is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch9-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Algorithms Intro with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch9-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch9-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Algorithms Intro?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["cs-ch8"],
    keyPoints: ["Algorithms Intro is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch10",
    courseId: "cs",
    title: "Algorithm Analysis",
    order: 10,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Algorithm Analysis\n\nAlgorithm Analysis is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Algorithm Analysis plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Algorithm Analysis is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Algorithm Analysis has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nAlgorithm Analysis is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Algorithm Analysis is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Algorithm Analysis:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch10-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Algorithm Analysis)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch10-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Algorithm Analysis is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch10-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Algorithm Analysis with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch10-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch10-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Algorithm Analysis?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["cs-ch9"],
    keyPoints: ["Algorithm Analysis is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch11",
    courseId: "cs",
    title: "Big O Notation",
    order: 11,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Big O Notation\n\nBig O Notation is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Big O Notation plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Big O Notation is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Big O Notation — Implementation:",
              "content": "// Big O Notation — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nBig O Notation is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Big O Notation — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Big O Notation:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch11-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Big O Notation)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch11-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Big O Notation is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch11-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Big O Notation with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch11-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch11-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Big O Notation?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["cs-ch10"],
    keyPoints: ["Big O Notation is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch12",
    courseId: "cs",
    title: "Recursion",
    order: 12,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Recursion\n\nRecursion is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Recursion plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Recursion is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Recursion has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nRecursion is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Recursion Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Recursion:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch12-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Recursion)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch12-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Recursion is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch12-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Recursion with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch12-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch12-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Recursion?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["cs-ch11"],
    keyPoints: ["Recursion is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch13",
    courseId: "cs",
    title: "Search: Linear",
    order: 13,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Search: Linear\n\nSearch: Linear is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Search: Linear plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Search: Linear is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Search: Linear — Implementation:",
              "content": "// Search: Linear — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nSearch: Linear is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Search: Linear is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Search: Linear:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch13-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Search: Linear)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch13-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Search: Linear is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch13-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Search: Linear with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch13-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch13-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Search: Linear?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["cs-ch12"],
    keyPoints: ["Search: Linear is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch14",
    courseId: "cs",
    title: "Search: Binary",
    order: 14,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Search: Binary\n\nSearch: Binary is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Search: Binary plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Search: Binary is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Search: Binary has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nSearch: Binary is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Search: Binary — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Search: Binary:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch14-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Search: Binary)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch14-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Search: Binary is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch14-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Search: Binary with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch14-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch14-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Search: Binary?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["cs-ch13"],
    keyPoints: ["Search: Binary is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch15",
    courseId: "cs",
    title: "Sort: Bubble",
    order: 15,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Sort: Bubble\n\nSort: Bubble is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Sort: Bubble plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Sort: Bubble is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Sort: Bubble — Implementation:",
              "content": "// Sort: Bubble — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nSort: Bubble is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Sort: Bubble Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Sort: Bubble:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch15-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Sort: Bubble)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch15-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Sort: Bubble is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch15-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Sort: Bubble with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch15-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch15-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Sort: Bubble?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["cs-ch14"],
    keyPoints: ["Sort: Bubble is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch16",
    courseId: "cs",
    title: "Sort: Selection",
    order: 16,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Sort: Selection\n\nSort: Selection is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Sort: Selection plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Sort: Selection is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Sort: Selection has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nSort: Selection is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Sort: Selection is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Sort: Selection:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch16-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Sort: Selection)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch16-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Sort: Selection is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch16-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Sort: Selection with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch16-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch16-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Sort: Selection?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["cs-ch15"],
    keyPoints: ["Sort: Selection is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch17",
    courseId: "cs",
    title: "Sort: Insertion",
    order: 17,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Sort: Insertion\n\nSort: Insertion is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Sort: Insertion plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Sort: Insertion is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Sort: Insertion — Implementation:",
              "content": "// Sort: Insertion — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nSort: Insertion is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Sort: Insertion — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Sort: Insertion:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch17-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Sort: Insertion)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch17-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Sort: Insertion is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch17-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Sort: Insertion with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch17-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch17-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Sort: Insertion?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["cs-ch16"],
    keyPoints: ["Sort: Insertion is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch18",
    courseId: "cs",
    title: "Sort: Merge",
    order: 18,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Sort: Merge\n\nSort: Merge is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Sort: Merge plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Sort: Merge is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Sort: Merge has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nSort: Merge is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Sort: Merge Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Sort: Merge:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch18-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Sort: Merge)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch18-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Sort: Merge is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch18-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Sort: Merge with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch18-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch18-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Sort: Merge?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["cs-ch17"],
    keyPoints: ["Sort: Merge is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch19",
    courseId: "cs",
    title: "Sort: Quick",
    order: 19,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Sort: Quick\n\nSort: Quick is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Sort: Quick plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Sort: Quick is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Sort: Quick — Implementation:",
              "content": "// Sort: Quick — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nSort: Quick is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Sort: Quick is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Sort: Quick:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch19-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Sort: Quick)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch19-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Sort: Quick is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch19-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Sort: Quick with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch19-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch19-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Sort: Quick?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["cs-ch18"],
    keyPoints: ["Sort: Quick is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch20",
    courseId: "cs",
    title: "Sort: Heap",
    order: 20,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Sort: Heap\n\nSort: Heap is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Sort: Heap plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Sort: Heap is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Sort: Heap has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nSort: Heap is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Sort: Heap — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Sort: Heap:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch20-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Sort: Heap)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch20-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Sort: Heap is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch20-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Sort: Heap with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch20-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch20-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Sort: Heap?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["cs-ch19"],
    keyPoints: ["Sort: Heap is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch21",
    courseId: "cs",
    title: "Arrays",
    order: 21,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Arrays\n\nArrays is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Arrays plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Arrays is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Arrays — Implementation:",
              "content": "// Arrays — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nArrays is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Arrays Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Arrays:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch21-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Arrays)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch21-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Arrays is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch21-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Arrays with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch21-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch21-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Arrays?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["cs-ch20"],
    keyPoints: ["Arrays is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch22",
    courseId: "cs",
    title: "Linked Lists",
    order: 22,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Linked Lists\n\nLinked Lists is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Linked Lists plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Linked Lists is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Linked Lists has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nLinked Lists is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Linked Lists is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Linked Lists:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch22-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Linked Lists)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch22-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Linked Lists is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch22-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Linked Lists with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch22-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch22-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Linked Lists?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["cs-ch21"],
    keyPoints: ["Linked Lists is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch23",
    courseId: "cs",
    title: "Doubly Linked",
    order: 23,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Doubly Linked\n\nDoubly Linked is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Doubly Linked plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Doubly Linked is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Doubly Linked — Implementation:",
              "content": "// Doubly Linked — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nDoubly Linked is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Doubly Linked — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Doubly Linked:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch23-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Doubly Linked)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch23-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Doubly Linked is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch23-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Doubly Linked with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch23-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch23-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Doubly Linked?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["cs-ch22"],
    keyPoints: ["Doubly Linked is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch24",
    courseId: "cs",
    title: "Stacks",
    order: 24,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Stacks\n\nStacks is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Stacks plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Stacks is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Stacks has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nStacks is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Stacks Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Stacks:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch24-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Stacks)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch24-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Stacks is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch24-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Stacks with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch24-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch24-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Stacks?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["cs-ch23"],
    keyPoints: ["Stacks is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch25",
    courseId: "cs",
    title: "Queues",
    order: 25,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Queues\n\nQueues is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Queues plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Queues is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Queues — Implementation:",
              "content": "// Queues — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nQueues is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Queues is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Queues:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch25-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Queues)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch25-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Queues is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch25-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Queues with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch25-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch25-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Queues?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["cs-ch24"],
    keyPoints: ["Queues is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch26",
    courseId: "cs",
    title: "Deques",
    order: 26,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Deques\n\nDeques is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Deques plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Deques is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Deques has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nDeques is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Deques — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Deques:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch26-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Deques)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch26-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Deques is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch26-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Deques with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch26-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch26-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Deques?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["cs-ch25"],
    keyPoints: ["Deques is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch27",
    courseId: "cs",
    title: "Hash Tables",
    order: 27,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Hash Tables\n\nHash Tables is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Hash Tables plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Hash Tables is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Hash Tables — Implementation:",
              "content": "// Hash Tables — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nHash Tables is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Hash Tables Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Hash Tables:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch27-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Hash Tables)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch27-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Hash Tables is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch27-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Hash Tables with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch27-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch27-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Hash Tables?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["cs-ch26"],
    keyPoints: ["Hash Tables is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch28",
    courseId: "cs",
    title: "Hash Collisions",
    order: 28,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Hash Collisions\n\nHash Collisions is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Hash Collisions plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Hash Collisions is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Hash Collisions has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nHash Collisions is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Hash Collisions is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Hash Collisions:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch28-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Hash Collisions)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch28-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Hash Collisions is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch28-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Hash Collisions with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch28-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch28-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Hash Collisions?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["cs-ch27"],
    keyPoints: ["Hash Collisions is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch29",
    courseId: "cs",
    title: "Trees Intro",
    order: 29,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Trees Intro\n\nTrees Intro is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Trees Intro plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Trees Intro is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Trees Intro — Implementation:",
              "content": "// Trees Intro — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nTrees Intro is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Trees Intro — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Trees Intro:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch29-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Trees Intro)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch29-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Trees Intro is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch29-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Trees Intro with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch29-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch29-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Trees Intro?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["cs-ch28"],
    keyPoints: ["Trees Intro is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch30",
    courseId: "cs",
    title: "Binary Trees",
    order: 30,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Binary Trees\n\nBinary Trees is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Binary Trees plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Binary Trees is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Binary Trees has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nBinary Trees is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Binary Trees Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Binary Trees:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch30-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Binary Trees)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch30-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Binary Trees is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch30-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Binary Trees with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch30-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch30-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Binary Trees?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["cs-ch29"],
    keyPoints: ["Binary Trees is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch31",
    courseId: "cs",
    title: "BST Operations",
    order: 31,
    sections: [
          {
              "type": "text",
              "content": "## Understanding BST Operations\n\nBST Operations is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. BST Operations plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "BST Operations is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "BST Operations — Implementation:",
              "content": "// BST Operations — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nBST Operations is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "BST Operations is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of BST Operations:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch31-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in BST Operations)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch31-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "BST Operations is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch31-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing BST Operations with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch31-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch31-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for BST Operations?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["cs-ch30"],
    keyPoints: ["BST Operations is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch32",
    courseId: "cs",
    title: "Tree Traversals",
    order: 32,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Tree Traversals\n\nTree Traversals is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Tree Traversals plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Tree Traversals is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Tree Traversals has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nTree Traversals is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Tree Traversals — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Tree Traversals:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch32-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Tree Traversals)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch32-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Tree Traversals is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch32-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Tree Traversals with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch32-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch32-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Tree Traversals?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["cs-ch31"],
    keyPoints: ["Tree Traversals is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch33",
    courseId: "cs",
    title: "Heaps",
    order: 33,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Heaps\n\nHeaps is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Heaps plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Heaps is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Heaps — Implementation:",
              "content": "// Heaps — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nHeaps is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Heaps Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Heaps:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch33-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Heaps)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch33-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Heaps is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch33-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Heaps with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch33-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch33-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Heaps?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["cs-ch32"],
    keyPoints: ["Heaps is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch34",
    courseId: "cs",
    title: "Priority Queues",
    order: 34,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Priority Queues\n\nPriority Queues is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Priority Queues plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Priority Queues is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Priority Queues has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nPriority Queues is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Priority Queues is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Priority Queues:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch34-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Priority Queues)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch34-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Priority Queues is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch34-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Priority Queues with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch34-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch34-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Priority Queues?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["cs-ch33"],
    keyPoints: ["Priority Queues is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch35",
    courseId: "cs",
    title: "AVL Trees",
    order: 35,
    sections: [
          {
              "type": "text",
              "content": "## Understanding AVL Trees\n\nAVL Trees is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. AVL Trees plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "AVL Trees is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "AVL Trees — Implementation:",
              "content": "// AVL Trees — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nAVL Trees is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "AVL Trees — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of AVL Trees:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch35-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in AVL Trees)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch35-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "AVL Trees is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch35-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing AVL Trees with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch35-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch35-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for AVL Trees?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["cs-ch34"],
    keyPoints: ["AVL Trees is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch36",
    courseId: "cs",
    title: "Red-Black Trees",
    order: 36,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Red-Black Trees\n\nRed-Black Trees is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Red-Black Trees plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Red-Black Trees is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Red-Black Trees has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nRed-Black Trees is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Red-Black Trees Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Red-Black Trees:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch36-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Red-Black Trees)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch36-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Red-Black Trees is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch36-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Red-Black Trees with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch36-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch36-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Red-Black Trees?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["cs-ch35"],
    keyPoints: ["Red-Black Trees is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch37",
    courseId: "cs",
    title: "Trie",
    order: 37,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Trie\n\nTrie is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Trie plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Trie is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Trie — Implementation:",
              "content": "// Trie — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nTrie is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Trie is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Trie:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch37-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Trie)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch37-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Trie is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch37-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Trie with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch37-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch37-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Trie?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["cs-ch36"],
    keyPoints: ["Trie is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch38",
    courseId: "cs",
    title: "Graphs",
    order: 38,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Graphs\n\nGraphs is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Graphs plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Graphs is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Graphs has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nGraphs is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Graphs — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Graphs:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch38-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Graphs)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch38-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Graphs is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch38-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Graphs with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch38-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch38-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Graphs?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["cs-ch37"],
    keyPoints: ["Graphs is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch39",
    courseId: "cs",
    title: "Graph Representation",
    order: 39,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Graph Representation\n\nGraph Representation is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Graph Representation plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Graph Representation is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Graph Representation — Implementation:",
              "content": "// Graph Representation — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nGraph Representation is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Graph Representation Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Graph Representation:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch39-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Graph Representation)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch39-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Graph Representation is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch39-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Graph Representation with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch39-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch39-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Graph Representation?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["cs-ch38"],
    keyPoints: ["Graph Representation is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch40",
    courseId: "cs",
    title: "BFS",
    order: 40,
    sections: [
          {
              "type": "text",
              "content": "## Understanding BFS\n\nBFS is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. BFS plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "BFS is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "BFS has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nBFS is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "BFS is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of BFS:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch40-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in BFS)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch40-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "BFS is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch40-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing BFS with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch40-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch40-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for BFS?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["cs-ch39"],
    keyPoints: ["BFS is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch41",
    courseId: "cs",
    title: "DFS",
    order: 41,
    sections: [
          {
              "type": "text",
              "content": "## Understanding DFS\n\nDFS is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. DFS plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "DFS is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "DFS — Implementation:",
              "content": "// DFS — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nDFS is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "DFS — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of DFS:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch41-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in DFS)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch41-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "DFS is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch41-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing DFS with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch41-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch41-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for DFS?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["cs-ch40"],
    keyPoints: ["DFS is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch42",
    courseId: "cs",
    title: "Topological Sort",
    order: 42,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Topological Sort\n\nTopological Sort is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Topological Sort plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Topological Sort is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Topological Sort has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nTopological Sort is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Topological Sort Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Topological Sort:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch42-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Topological Sort)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch42-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Topological Sort is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch42-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Topological Sort with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch42-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch42-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Topological Sort?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["cs-ch41"],
    keyPoints: ["Topological Sort is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch43",
    courseId: "cs",
    title: "Dijkstra",
    order: 43,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Dijkstra\n\nDijkstra is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Dijkstra plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Dijkstra is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Dijkstra — Implementation:",
              "content": "// Dijkstra — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nDijkstra is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Dijkstra is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Dijkstra:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch43-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Dijkstra)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch43-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Dijkstra is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch43-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Dijkstra with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch43-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch43-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Dijkstra?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["cs-ch42"],
    keyPoints: ["Dijkstra is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch44",
    courseId: "cs",
    title: "Bellman-Ford",
    order: 44,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Bellman-Ford\n\nBellman-Ford is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Bellman-Ford plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Bellman-Ford is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Bellman-Ford has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nBellman-Ford is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Bellman-Ford — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Bellman-Ford:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch44-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Bellman-Ford)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch44-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Bellman-Ford is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch44-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Bellman-Ford with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch44-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch44-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Bellman-Ford?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["cs-ch43"],
    keyPoints: ["Bellman-Ford is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch45",
    courseId: "cs",
    title: "MST Prim",
    order: 45,
    sections: [
          {
              "type": "text",
              "content": "## Understanding MST Prim\n\nMST Prim is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. MST Prim plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "MST Prim is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "MST Prim — Implementation:",
              "content": "// MST Prim — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nMST Prim is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "MST Prim Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of MST Prim:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch45-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in MST Prim)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch45-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "MST Prim is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch45-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing MST Prim with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch45-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch45-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for MST Prim?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["cs-ch44"],
    keyPoints: ["MST Prim is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch46",
    courseId: "cs",
    title: "MST Kruskal",
    order: 46,
    sections: [
          {
              "type": "text",
              "content": "## Understanding MST Kruskal\n\nMST Kruskal is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. MST Kruskal plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "MST Kruskal is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "MST Kruskal has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nMST Kruskal is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "MST Kruskal is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of MST Kruskal:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch46-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in MST Kruskal)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch46-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "MST Kruskal is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch46-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing MST Kruskal with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch46-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch46-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for MST Kruskal?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["cs-ch45"],
    keyPoints: ["MST Kruskal is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch47",
    courseId: "cs",
    title: "Dynamic Programming",
    order: 47,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Dynamic Programming\n\nDynamic Programming is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Dynamic Programming plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Dynamic Programming is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Dynamic Programming — Implementation:",
              "content": "// Dynamic Programming — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nDynamic Programming is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Dynamic Programming — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Dynamic Programming:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch47-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Dynamic Programming)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch47-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Dynamic Programming is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch47-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Dynamic Programming with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch47-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch47-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Dynamic Programming?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["cs-ch46"],
    keyPoints: ["Dynamic Programming is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch48",
    courseId: "cs",
    title: "DP: Knapsack",
    order: 48,
    sections: [
          {
              "type": "text",
              "content": "## Understanding DP: Knapsack\n\nDP: Knapsack is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. DP: Knapsack plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "DP: Knapsack is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "DP: Knapsack has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nDP: Knapsack is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "DP: Knapsack Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of DP: Knapsack:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch48-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in DP: Knapsack)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch48-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "DP: Knapsack is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch48-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing DP: Knapsack with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch48-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch48-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for DP: Knapsack?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["cs-ch47"],
    keyPoints: ["DP: Knapsack is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch49",
    courseId: "cs",
    title: "DP: LCS",
    order: 49,
    sections: [
          {
              "type": "text",
              "content": "## Understanding DP: LCS\n\nDP: LCS is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. DP: LCS plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "DP: LCS is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "DP: LCS — Implementation:",
              "content": "// DP: LCS — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nDP: LCS is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "DP: LCS is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of DP: LCS:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch49-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in DP: LCS)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch49-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "DP: LCS is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch49-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing DP: LCS with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch49-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch49-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for DP: LCS?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["cs-ch48"],
    keyPoints: ["DP: LCS is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch50",
    courseId: "cs",
    title: "Greedy Algorithms",
    order: 50,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Greedy Algorithms\n\nGreedy Algorithms is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Greedy Algorithms plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Greedy Algorithms is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Greedy Algorithms has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nGreedy Algorithms is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Greedy Algorithms — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Greedy Algorithms:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch50-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Greedy Algorithms)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch50-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Greedy Algorithms is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch50-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Greedy Algorithms with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch50-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch50-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Greedy Algorithms?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["cs-ch49"],
    keyPoints: ["Greedy Algorithms is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch51",
    courseId: "cs",
    title: "P vs NP",
    order: 51,
    sections: [
          {
              "type": "text",
              "content": "## Understanding P vs NP\n\nP vs NP is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. P vs NP plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "P vs NP is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "P vs NP — Implementation:",
              "content": "// P vs NP — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nP vs NP is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "P vs NP Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of P vs NP:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch51-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in P vs NP)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch51-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "P vs NP is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch51-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing P vs NP with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch51-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch51-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for P vs NP?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["cs-ch50"],
    keyPoints: ["P vs NP is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch52",
    courseId: "cs",
    title: "NP-Complete",
    order: 52,
    sections: [
          {
              "type": "text",
              "content": "## Understanding NP-Complete\n\nNP-Complete is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. NP-Complete plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "NP-Complete is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "NP-Complete has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nNP-Complete is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "NP-Complete is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of NP-Complete:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch52-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in NP-Complete)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch52-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "NP-Complete is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch52-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing NP-Complete with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch52-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch52-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for NP-Complete?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["cs-ch51"],
    keyPoints: ["NP-Complete is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch53",
    courseId: "cs",
    title: "Bit Manipulation",
    order: 53,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Bit Manipulation\n\nBit Manipulation is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Bit Manipulation plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Bit Manipulation is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Bit Manipulation — Implementation:",
              "content": "// Bit Manipulation — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nBit Manipulation is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Bit Manipulation — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Bit Manipulation:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch53-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Bit Manipulation)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch53-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Bit Manipulation is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch53-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Bit Manipulation with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch53-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch53-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Bit Manipulation?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["cs-ch52"],
    keyPoints: ["Bit Manipulation is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch54",
    courseId: "cs",
    title: "Computer Architecture",
    order: 54,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Computer Architecture\n\nComputer Architecture is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Computer Architecture plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Computer Architecture is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Computer Architecture has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nComputer Architecture is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Computer Architecture Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Computer Architecture:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch54-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Computer Architecture)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch54-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Computer Architecture is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch54-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Computer Architecture with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch54-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch54-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Computer Architecture?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["cs-ch53"],
    keyPoints: ["Computer Architecture is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch55",
    courseId: "cs",
    title: "Operating Systems",
    order: 55,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Operating Systems\n\nOperating Systems is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Operating Systems plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Operating Systems is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Operating Systems — Implementation:",
              "content": "// Operating Systems — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nOperating Systems is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Operating Systems is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Operating Systems:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch55-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Operating Systems)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch55-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Operating Systems is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch55-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Operating Systems with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch55-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch55-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Operating Systems?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["cs-ch54"],
    keyPoints: ["Operating Systems is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch56",
    courseId: "cs",
    title: "Networking",
    order: 56,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Networking\n\nNetworking is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Networking plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Networking is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Networking has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nNetworking is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Networking — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Networking:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch56-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Networking)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch56-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Networking is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch56-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Networking with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch56-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch56-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Networking?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["cs-ch55"],
    keyPoints: ["Networking is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch57",
    courseId: "cs",
    title: "Databases",
    order: 57,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Databases\n\nDatabases is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Databases plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Databases is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Databases — Implementation:",
              "content": "// Databases — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nDatabases is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Databases Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Databases:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch57-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Databases)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch57-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Databases is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch57-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Databases with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch57-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch57-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Databases?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["cs-ch56"],
    keyPoints: ["Databases is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch58",
    courseId: "cs",
    title: "Compilers",
    order: 58,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Compilers\n\nCompilers is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Compilers plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Compilers is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Compilers has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nCompilers is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Compilers is a building block of computer science",
                  "Understanding algorithms helps you solve problems systematically",
                  "Data structures are ways to organize data for efficient access",
                  "Time and space complexity guide implementation choices",
                  "Practice implementing data structures from scratch"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Compilers:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch58-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Compilers)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch58-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Compilers is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch58-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Compilers with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch58-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch58-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Compilers?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["cs-ch57"],
    keyPoints: ["Compilers is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch59",
    courseId: "cs",
    title: "Distributed Systems",
    order: 59,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Distributed Systems\n\nDistributed Systems is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Distributed Systems plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Distributed Systems is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "code",
              "language": "javascript",
              "caption": "Distributed Systems — Implementation:",
              "content": "// Distributed Systems — Conceptual Implementation\nfunction demonstrateConcept(data) {\n  // CS concepts often have elegant implementations\n  let result = 0;\n  for (let i = 0; i < data.length; i++) {\n    result += data[i];\n  }\n  // The efficiency matters — O(n) vs O(n²)\n  return result;\n}\n\n// Analyze: What's the time complexity?"
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nDistributed Systems is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "comparison",
              "title": "Distributed Systems — Key Comparisons",
              "headers": [
                  "Aspect",
                  "Approach A",
                  "Approach B"
              ],
              "rows": [
                  [
                      "Time complexity",
                      "O(n) — Linear",
                      "O(log n) — Logarithmic"
                  ],
                  [
                      "Space",
                      "In-place",
                      "Extra memory needed"
                  ],
                  [
                      "Stability",
                      "Preserves order",
                      "May reorder"
                  ],
                  [
                      "Best case",
                      "Already sorted",
                      "Random order"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Distributed Systems:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch59-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Distributed Systems)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch59-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Distributed Systems is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch59-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Distributed Systems with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch59-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch59-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Distributed Systems?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["cs-ch58"],
    keyPoints: ["Distributed Systems is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
  {
    id: "cs-ch60",
    courseId: "cs",
    title: "Computability",
    order: 60,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Computability\n\nComputability is a fundamental concept in computer science that underlies much of modern computing. Understanding this deeply will make you a better programmer, even if you don't use it directly every day.\n\nComputer science is the study of computation — what can be computed, how efficiently, and by what means. Computability plays a key role in this broader picture."
          },
          {
              "type": "key-points",
              "points": [
                  "Computability is a core computer science concept",
                  "Understanding CS fundamentals makes you a better programmer",
                  "These concepts apply across all programming languages",
                  "CS theory helps in designing efficient, scalable solutions"
              ]
          },
          {
              "type": "formula",
              "content": "Computability has mathematical foundations",
              "description": "CS concepts are often expressed mathematically. Understanding the math helps you reason about correctness and efficiency."
          },
          {
              "type": "text",
              "content": "## Why This Matters\n\nComputability is not just academic — it has practical applications:\n\n1. **Efficiency** — Understanding theory helps you write faster code\n2. **Scalability** — Good algorithms handle large data gracefully\n3. **Problem-solving** — CS teaches systematic thinking\n4. **Interview prep** — These topics are essential for technical interviews\n5. **Foundation** — Advanced topics build on these fundamentals"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** When learning CS concepts, implement them yourself from scratch in code. Writing a linked list, sorting algorithm, or tree traversal yourself builds deep understanding that reading alone cannot provide."
          },
          {
              "type": "exercise",
              "title": "Computability Practice Problem",
              "description": "Test your understanding:",
              "instructions": [
                  "Implement this concept from scratch",
                  "Analyze its time and space complexity",
                  "Test with various input sizes",
                  "Compare your implementation with standard library versions"
              ],
              "hint": "Start with a brute-force approach, then optimize."
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** It's easy to over-optimize prematurely. Before choosing a complex algorithm or data structure, ask: \"Is this data large enough for the choice to matter?\" Often, a simple solution is all you need."
          },
          {
              "type": "text",
              "content": "## Further Study\n\nTo deepen your understanding of Computability:\n\n1. Read CLRS (Introduction to Algorithms) for rigorous treatment\n2. Practice on LeetCode/HackerRank with problems tagged for this topic\n3. Watch MIT OpenCourseWare lectures on algorithm analysis\n4. Implement the concept in multiple programming languages\n5. Teach someone else — the best way to learn is to explain"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Computer science is about problem-solving, not memorization. The goal is to develop the ability to analyze new problems and design efficient solutions — not to remember every algorithm by heart."
          }
      ],
    examPool: [
        {
          "id": "cs-ch60-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the time complexity of accessing an element by index in an array (concept in Computability)?",
          "options": [
            {
              "id": "a",
              "text": "O(1) — Constant time"
            },
            {
              "id": "b",
              "text": "O(n) — Linear time"
            },
            {
              "id": "c",
              "text": "O(log n) — Logarithmic time"
            },
            {
              "id": "d",
              "text": "O(n²) — Quadratic time"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Array access by index is O(1) because it's a direct memory address calculation — no iteration needed."
        },
        {
          "id": "cs-ch60-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Computability is relevant only for academic computer science.",
          "correctAnswer": false,
          "explanation": "CS concepts like complexity analysis, data structures, and algorithms are essential for building efficient, scalable software in industry."
        },
        {
          "id": "cs-ch60-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What data structure is best for implementing Computability with fast lookups?",
          "options": [
            {
              "id": "a",
              "text": "Hash table (O(1) average lookup)"
            },
            {
              "id": "b",
              "text": "Linked list (O(n) lookup)"
            },
            {
              "id": "c",
              "text": "Stack (LIFO access only)"
            },
            {
              "id": "d",
              "text": "Queue (FIFO access only)"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Hash tables provide O(1) average-case lookups by using a hash function to map keys to array indices."
        },
        {
          "id": "cs-ch60-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Big ___ notation describes the upper bound of an algorithm's running time.",
          "correctAnswer": "O",
          "explanation": "Big O notation describes the worst-case upper bound of an algorithm's growth rate as input size increases."
        },
        {
          "id": "cs-ch60-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "When should you choose a balanced BST over a hash table for Computability?",
          "options": [
            {
              "id": "a",
              "text": "When you need ordered traversal or range queries"
            },
            {
              "id": "b",
              "text": "When you need the fastest possible lookups"
            },
            {
              "id": "c",
              "text": "When memory usage is the primary concern"
            },
            {
              "id": "d",
              "text": "When the data fits in an array"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Balanced BSTs maintain sorted order (in-order traversal) and support range queries efficiently. Hash tables are faster for lookups but don't maintain order."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["cs-ch59"],
    keyPoints: ["Computability is a core computer science concept","Understanding CS fundamentals makes you a better programmer","These concepts apply across all programming languages","CS theory helps in designing efficient, scalable solutions"],
  },
];

export const csCourse: Course = {
  id: "cs",
  title: "CS / DSA",
  fullTitle: "Computer Science & Data Structures",
  description: "The fundamental science behind computing. Binary, logic gates, data structures, algorithms, complexity theory, and more.",
  icon: "Shield",
  color: "#a78bfa",
  difficulty: 3,
  chapters: csChapters,
  totalXP: 1020,
  estimatedHours: 35,
};
