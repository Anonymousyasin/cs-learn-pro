// Auto-generated course data - do not edit directly
import { Course, Chapter, Section, ExamQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, CodeOrderQuestion, MatchPairsQuestion, Project } from "../types";

const pythonChapters: Chapter[] = [
  {
    id: "python-ch1",
    courseId: "python",
    title: "Python Introduction & Philosophy",
    order: 1,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Introduction & Philosophy\n\nPython Introduction & Philosophy is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Introduction & Philosophy following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Introduction & Philosophy follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Introduction & Philosophy helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Introduction & Philosophy — Python basics:",
              "content": "# Python Introduction & Philosophy — Python Fundamentals\n\"\"\"\"Python Introduction & Philosophy — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Introduction & Philosophy\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Introduction & Philosophy — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch1-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch1-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch1-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch1-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch1-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: [],
    keyPoints: ["Python Introduction & Philosophy follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Introduction & Philosophy helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch2",
    courseId: "python",
    title: "Python Installation & Setup",
    order: 2,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Installation & Setup\n\nPython Installation & Setup is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Installation & Setup following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Installation & Setup follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Installation & Setup helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Installation & Setup — Python basics:",
              "content": "# Python Installation & Setup — Python Fundamentals\n\"\"\"\"Python Installation & Setup — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Installation & Setup\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Installation & Setup — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch2-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch2-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch2-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch2-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch2-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["python-ch1"],
    keyPoints: ["Python Installation & Setup follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Installation & Setup helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch3",
    courseId: "python",
    title: "Python Syntax & Indentation",
    order: 3,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Syntax & Indentation\n\nPython Syntax & Indentation is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Syntax & Indentation following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Syntax & Indentation follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Syntax & Indentation helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Syntax & Indentation — Python basics:",
              "content": "# Python Syntax & Indentation — Python Fundamentals\n\"\"\"\"Python Syntax & Indentation — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Syntax & Indentation\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Syntax & Indentation — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch3-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch3-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch3-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch3-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch3-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["python-ch2"],
    keyPoints: ["Python Syntax & Indentation follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Syntax & Indentation helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch4",
    courseId: "python",
    title: "Python Comments & Docstrings",
    order: 4,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Comments & Docstrings\n\nPython Comments & Docstrings is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Comments & Docstrings following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Comments & Docstrings follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Comments & Docstrings helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Comments & Docstrings — Python basics:",
              "content": "# Python Comments & Docstrings — Python Fundamentals\n\"\"\"\"Python Comments & Docstrings — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Comments & Docstrings\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Comments & Docstrings — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch4-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch4-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch4-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch4-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch4-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["python-ch3"],
    keyPoints: ["Python Comments & Docstrings follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Comments & Docstrings helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch5",
    courseId: "python",
    title: "Python Variables & Assignment",
    order: 5,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Variables & Assignment\n\nPython Variables & Assignment is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Variables & Assignment following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Variables & Assignment follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Variables & Assignment helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Variables & Assignment — Python basics:",
              "content": "# Python Variables & Assignment — Python Fundamentals\n\"\"\"\"Python Variables & Assignment — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Variables & Assignment\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Variables & Assignment — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch5-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch5-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch5-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch5-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch5-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["python-ch4"],
    keyPoints: ["Python Variables & Assignment follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Variables & Assignment helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch6",
    courseId: "python",
    title: "Python Data Types (int, float, str, bool, None)",
    order: 6,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Data Types (int, float, str, bool, None)\n\nPython Data Types (int, float, str, bool, None) is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Data Types (int, float, str, bool, None) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Data Types (int, float, str, bool, None) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Data Types (int, float, str, bool, None) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Data Types (int, float, str, bool, None) — Python basics:",
              "content": "# Python Data Types (int, float, str, bool, None) — Python Fundamentals\n\"\"\"\"Python Data Types (int, float, str, bool, None) — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Data Types (int, float, str, bool, None)\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Data Types (int, float, str, bool, None) — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch6-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch6-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch6-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch6-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch6-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["python-ch5"],
    keyPoints: ["Python Data Types (int, float, str, bool, None) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Data Types (int, float, str, bool, None) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch7",
    courseId: "python",
    title: "Python Numbers & Math Operations",
    order: 7,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Numbers & Math Operations\n\nPython Numbers & Math Operations is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Numbers & Math Operations following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Numbers & Math Operations follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Numbers & Math Operations helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Numbers & Math Operations — Python basics:",
              "content": "# Python Numbers & Math Operations — Python Fundamentals\n\"\"\"\"Python Numbers & Math Operations — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Numbers & Math Operations\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Numbers & Math Operations — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch7-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch7-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch7-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch7-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch7-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["python-ch6"],
    keyPoints: ["Python Numbers & Math Operations follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Numbers & Math Operations helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch8",
    courseId: "python",
    title: "Python Type Conversion (Casting)",
    order: 8,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Type Conversion (Casting)\n\nPython Type Conversion (Casting) is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Type Conversion (Casting) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Type Conversion (Casting) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Type Conversion (Casting) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Type Conversion (Casting) — Python basics:",
              "content": "# Python Type Conversion (Casting) — Python Fundamentals\n\"\"\"\"Python Type Conversion (Casting) — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Type Conversion (Casting)\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Type Conversion (Casting) — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch8-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch8-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch8-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch8-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch8-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["python-ch7"],
    keyPoints: ["Python Type Conversion (Casting) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Type Conversion (Casting) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch9",
    courseId: "python",
    title: "Python Strings: Creation & Escaping",
    order: 9,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Strings: Creation & Escaping\n\nPython Strings: Creation & Escaping is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Strings: Creation & Escaping following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Strings: Creation & Escaping follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Strings: Creation & Escaping helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Strings: Creation & Escaping — Python OOP:",
              "content": "# Python Strings: Creation & Escaping — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Strings: Creation & Escaping\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Strings: Creation & Escaping follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch9-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch9-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch9-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch9-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["python-ch8"],
    keyPoints: ["Python Strings: Creation & Escaping follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Strings: Creation & Escaping helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch10",
    courseId: "python",
    title: "Python String Indexing & Slicing",
    order: 10,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python String Indexing & Slicing\n\nPython String Indexing & Slicing is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python String Indexing & Slicing following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python String Indexing & Slicing follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python String Indexing & Slicing helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python String Indexing & Slicing — Python basics:",
              "content": "# Python String Indexing & Slicing — Python Fundamentals\n\"\"\"\"Python String Indexing & Slicing — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python String Indexing & Slicing\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python String Indexing & Slicing — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch10-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch10-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch10-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch10-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch10-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["python-ch9"],
    keyPoints: ["Python String Indexing & Slicing follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python String Indexing & Slicing helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch11",
    courseId: "python",
    title: "Python String Methods (Split, Join, Replace, Find)",
    order: 11,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python String Methods (Split, Join, Replace, Find)\n\nPython String Methods (Split, Join, Replace, Find) is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python String Methods (Split, Join, Replace, Find) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python String Methods (Split, Join, Replace, Find) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python String Methods (Split, Join, Replace, Find) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python String Methods (Split, Join, Replace, Find) — Python basics:",
              "content": "# Python String Methods (Split, Join, Replace, Find) — Python Fundamentals\n\"\"\"\"Python String Methods (Split, Join, Replace, Find) — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python String Methods (Split, Join, Replace, Find)\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python String Methods (Split, Join, Replace, Find) — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch11-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch11-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch11-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch11-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch11-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["python-ch10"],
    keyPoints: ["Python String Methods (Split, Join, Replace, Find) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python String Methods (Split, Join, Replace, Find) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch12",
    courseId: "python",
    title: "Python F-Strings & Formatting",
    order: 12,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python F-Strings & Formatting\n\nPython F-Strings & Formatting is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python F-Strings & Formatting following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python F-Strings & Formatting follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python F-Strings & Formatting helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python F-Strings & Formatting — Python basics:",
              "content": "# Python F-Strings & Formatting — Python Fundamentals\n\"\"\"\"Python F-Strings & Formatting — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python F-Strings & Formatting\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python F-Strings & Formatting — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch12-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch12-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch12-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch12-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch12-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["python-ch11"],
    keyPoints: ["Python F-Strings & Formatting follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python F-Strings & Formatting helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch13",
    courseId: "python",
    title: "Python Booleans & Comparison Operators",
    order: 13,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Booleans & Comparison Operators\n\nPython Booleans & Comparison Operators is how Python controls program flow with conditionals, loops, and pattern matching. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Booleans & Comparison Operators following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Booleans & Comparison Operators follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Booleans & Comparison Operators helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Booleans & Comparison Operators — Control flow:",
              "content": "# Python Booleans & Comparison Operators — Python Control Flow\n\n# 1. If/elif/else with 'in' operator\nstatus = \"active\"\nif status not in (\"active\", \"pending\"):\n    print(\"Account disabled\")\nelif status == \"active\":\n    print(\"Welcome back!\")\nelse:\n    print(\"Please verify your email\")\n\n# 2. For loop with enumerate\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor i, fruit in enumerate(fruits, start=1):\n    print(f\"{i}. {fruit}\")\n\n# 3. While loop with else (runs if no break)\nn = 0\nwhile n < 3:\n    print(n)\n    n += 1\nelse:\n    print(\"Loop completed normally\")\n\n# 4. Match/case (Python 3.10+)\nmatch command.split():\n    case [\"quit\"]: exit()\n    case [\"hello\", name]: print(f\"Hi, {name}\")\n    case _: print(\"Unknown command\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Booleans & Comparison Operators\n\nHow Python controls program flow with conditionals, loops, and pattern matching. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Booleans & Comparison Operators — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch13-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch13-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch13-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch13-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch13-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["python-ch12"],
    keyPoints: ["Python Booleans & Comparison Operators follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Booleans & Comparison Operators helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch14",
    courseId: "python",
    title: "Python Logical Operators (and, or, not)",
    order: 14,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Logical Operators (and, or, not)\n\nPython Logical Operators (and, or, not) is how Python controls program flow with conditionals, loops, and pattern matching. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Logical Operators (and, or, not) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Logical Operators (and, or, not) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Logical Operators (and, or, not) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Logical Operators (and, or, not) — Control flow:",
              "content": "# Python Logical Operators (and, or, not) — Python Control Flow\n\n# 1. If/elif/else with 'in' operator\nstatus = \"active\"\nif status not in (\"active\", \"pending\"):\n    print(\"Account disabled\")\nelif status == \"active\":\n    print(\"Welcome back!\")\nelse:\n    print(\"Please verify your email\")\n\n# 2. For loop with enumerate\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor i, fruit in enumerate(fruits, start=1):\n    print(f\"{i}. {fruit}\")\n\n# 3. While loop with else (runs if no break)\nn = 0\nwhile n < 3:\n    print(n)\n    n += 1\nelse:\n    print(\"Loop completed normally\")\n\n# 4. Match/case (Python 3.10+)\nmatch command.split():\n    case [\"quit\"]: exit()\n    case [\"hello\", name]: print(f\"Hi, {name}\")\n    case _: print(\"Unknown command\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Logical Operators (and, or, not)\n\nHow Python controls program flow with conditionals, loops, and pattern matching. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Logical Operators (and, or, not) — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch14-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch14-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch14-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch14-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch14-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["python-ch13"],
    keyPoints: ["Python Logical Operators (and, or, not) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Logical Operators (and, or, not) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch15",
    courseId: "python",
    title: "Python If/Elif/Else & Conditional Logic",
    order: 15,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python If/Elif/Else & Conditional Logic\n\nPython If/Elif/Else & Conditional Logic is how Python controls program flow with conditionals, loops, and pattern matching. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python If/Elif/Else & Conditional Logic following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python If/Elif/Else & Conditional Logic follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python If/Elif/Else & Conditional Logic helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python If/Elif/Else & Conditional Logic — Control flow:",
              "content": "# Python If/Elif/Else & Conditional Logic — Python Control Flow\n\n# 1. If/elif/else with 'in' operator\nstatus = \"active\"\nif status not in (\"active\", \"pending\"):\n    print(\"Account disabled\")\nelif status == \"active\":\n    print(\"Welcome back!\")\nelse:\n    print(\"Please verify your email\")\n\n# 2. For loop with enumerate\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor i, fruit in enumerate(fruits, start=1):\n    print(f\"{i}. {fruit}\")\n\n# 3. While loop with else (runs if no break)\nn = 0\nwhile n < 3:\n    print(n)\n    n += 1\nelse:\n    print(\"Loop completed normally\")\n\n# 4. Match/case (Python 3.10+)\nmatch command.split():\n    case [\"quit\"]: exit()\n    case [\"hello\", name]: print(f\"Hi, {name}\")\n    case _: print(\"Unknown command\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python If/Elif/Else & Conditional Logic\n\nHow Python controls program flow with conditionals, loops, and pattern matching. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python If/Elif/Else & Conditional Logic — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch15-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch15-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch15-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch15-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch15-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["python-ch14"],
    keyPoints: ["Python If/Elif/Else & Conditional Logic follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python If/Elif/Else & Conditional Logic helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch16",
    courseId: "python",
    title: "Python Match/Case (Structural Pattern Matching)",
    order: 16,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Match/Case (Structural Pattern Matching)\n\nPython Match/Case (Structural Pattern Matching) is how Python controls program flow with conditionals, loops, and pattern matching. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Match/Case (Structural Pattern Matching) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Match/Case (Structural Pattern Matching) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Match/Case (Structural Pattern Matching) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Match/Case (Structural Pattern Matching) — Control flow:",
              "content": "# Python Match/Case (Structural Pattern Matching) — Python Control Flow\n\n# 1. If/elif/else with 'in' operator\nstatus = \"active\"\nif status not in (\"active\", \"pending\"):\n    print(\"Account disabled\")\nelif status == \"active\":\n    print(\"Welcome back!\")\nelse:\n    print(\"Please verify your email\")\n\n# 2. For loop with enumerate\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor i, fruit in enumerate(fruits, start=1):\n    print(f\"{i}. {fruit}\")\n\n# 3. While loop with else (runs if no break)\nn = 0\nwhile n < 3:\n    print(n)\n    n += 1\nelse:\n    print(\"Loop completed normally\")\n\n# 4. Match/case (Python 3.10+)\nmatch command.split():\n    case [\"quit\"]: exit()\n    case [\"hello\", name]: print(f\"Hi, {name}\")\n    case _: print(\"Unknown command\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Match/Case (Structural Pattern Matching)\n\nHow Python controls program flow with conditionals, loops, and pattern matching. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Match/Case (Structural Pattern Matching) — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch16-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch16-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch16-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch16-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch16-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["python-ch15"],
    keyPoints: ["Python Match/Case (Structural Pattern Matching) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Match/Case (Structural Pattern Matching) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch17",
    courseId: "python",
    title: "Python While Loops",
    order: 17,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python While Loops\n\nPython While Loops is how Python controls program flow with conditionals, loops, and pattern matching. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python While Loops following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python While Loops follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python While Loops helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python While Loops — Control flow:",
              "content": "# Python While Loops — Python Control Flow\n\n# 1. If/elif/else with 'in' operator\nstatus = \"active\"\nif status not in (\"active\", \"pending\"):\n    print(\"Account disabled\")\nelif status == \"active\":\n    print(\"Welcome back!\")\nelse:\n    print(\"Please verify your email\")\n\n# 2. For loop with enumerate\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor i, fruit in enumerate(fruits, start=1):\n    print(f\"{i}. {fruit}\")\n\n# 3. While loop with else (runs if no break)\nn = 0\nwhile n < 3:\n    print(n)\n    n += 1\nelse:\n    print(\"Loop completed normally\")\n\n# 4. Match/case (Python 3.10+)\nmatch command.split():\n    case [\"quit\"]: exit()\n    case [\"hello\", name]: print(f\"Hi, {name}\")\n    case _: print(\"Unknown command\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python While Loops\n\nHow Python controls program flow with conditionals, loops, and pattern matching. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python While Loops — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch17-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch17-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch17-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch17-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch17-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["python-ch16"],
    keyPoints: ["Python While Loops follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python While Loops helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch18",
    courseId: "python",
    title: "Python For Loops & Range",
    order: 18,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python For Loops & Range\n\nPython For Loops & Range is how Python controls program flow with conditionals, loops, and pattern matching. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python For Loops & Range following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python For Loops & Range follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python For Loops & Range helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python For Loops & Range — Control flow:",
              "content": "# Python For Loops & Range — Python Control Flow\n\n# 1. If/elif/else with 'in' operator\nstatus = \"active\"\nif status not in (\"active\", \"pending\"):\n    print(\"Account disabled\")\nelif status == \"active\":\n    print(\"Welcome back!\")\nelse:\n    print(\"Please verify your email\")\n\n# 2. For loop with enumerate\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor i, fruit in enumerate(fruits, start=1):\n    print(f\"{i}. {fruit}\")\n\n# 3. While loop with else (runs if no break)\nn = 0\nwhile n < 3:\n    print(n)\n    n += 1\nelse:\n    print(\"Loop completed normally\")\n\n# 4. Match/case (Python 3.10+)\nmatch command.split():\n    case [\"quit\"]: exit()\n    case [\"hello\", name]: print(f\"Hi, {name}\")\n    case _: print(\"Unknown command\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python For Loops & Range\n\nHow Python controls program flow with conditionals, loops, and pattern matching. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python For Loops & Range — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch18-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch18-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch18-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch18-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch18-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["python-ch17"],
    keyPoints: ["Python For Loops & Range follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python For Loops & Range helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch19",
    courseId: "python",
    title: "Python Break, Continue & Else in Loops",
    order: 19,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Break, Continue & Else in Loops\n\nPython Break, Continue & Else in Loops is how Python controls program flow with conditionals, loops, and pattern matching. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Break, Continue & Else in Loops following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Break, Continue & Else in Loops follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Break, Continue & Else in Loops helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Break, Continue & Else in Loops — Control flow:",
              "content": "# Python Break, Continue & Else in Loops — Python Control Flow\n\n# 1. If/elif/else with 'in' operator\nstatus = \"active\"\nif status not in (\"active\", \"pending\"):\n    print(\"Account disabled\")\nelif status == \"active\":\n    print(\"Welcome back!\")\nelse:\n    print(\"Please verify your email\")\n\n# 2. For loop with enumerate\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor i, fruit in enumerate(fruits, start=1):\n    print(f\"{i}. {fruit}\")\n\n# 3. While loop with else (runs if no break)\nn = 0\nwhile n < 3:\n    print(n)\n    n += 1\nelse:\n    print(\"Loop completed normally\")\n\n# 4. Match/case (Python 3.10+)\nmatch command.split():\n    case [\"quit\"]: exit()\n    case [\"hello\", name]: print(f\"Hi, {name}\")\n    case _: print(\"Unknown command\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Break, Continue & Else in Loops\n\nHow Python controls program flow with conditionals, loops, and pattern matching. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Break, Continue & Else in Loops — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch19-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch19-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch19-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch19-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch19-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["python-ch18"],
    keyPoints: ["Python Break, Continue & Else in Loops follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Break, Continue & Else in Loops helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch20",
    courseId: "python",
    title: "Python Lists: Creation, Indexing, Slicing",
    order: 20,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Lists: Creation, Indexing, Slicing\n\nPython Lists: Creation, Indexing, Slicing is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Lists: Creation, Indexing, Slicing following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Lists: Creation, Indexing, Slicing follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Lists: Creation, Indexing, Slicing helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Lists: Creation, Indexing, Slicing — Python basics:",
              "content": "# Python Lists: Creation, Indexing, Slicing — Python Fundamentals\n\"\"\"\"Python Lists: Creation, Indexing, Slicing — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Lists: Creation, Indexing, Slicing\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Lists: Creation, Indexing, Slicing — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch20-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch20-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch20-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch20-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch20-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["python-ch19"],
    keyPoints: ["Python Lists: Creation, Indexing, Slicing follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Lists: Creation, Indexing, Slicing helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch21",
    courseId: "python",
    title: "Python List Methods (Append, Insert, Remove, Sort)",
    order: 21,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python List Methods (Append, Insert, Remove, Sort)\n\nPython List Methods (Append, Insert, Remove, Sort) is Python's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python List Methods (Append, Insert, Remove, Sort) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python List Methods (Append, Insert, Remove, Sort) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python List Methods (Append, Insert, Remove, Sort) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python List Methods (Append, Insert, Remove, Sort) — Data structures:",
              "content": "# Python List Methods (Append, Insert, Remove, Sort) — Python Data Structures\n\n# List comprehension — Pythonic\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in [\"hello\", \"world\"]}\n# {\"hello\": 5, \"world\": 5}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # Union: {1,2,3,4,5,6}\nprint(a & b)  # Intersection: {3,4}\nprint(a - b)  # Difference: {1,2}\n\n# Collections module\nfrom collections import Counter, defaultdict\ntext = \"hello world\"\nchar_count = Counter(text)\n# Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python List Methods (Append, Insert, Remove, Sort)\n\nPython's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python List Methods (Append, Insert, Remove, Sort) — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch21-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch21-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch21-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch21-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch21-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["python-ch20"],
    keyPoints: ["Python List Methods (Append, Insert, Remove, Sort) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python List Methods (Append, Insert, Remove, Sort) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch22",
    courseId: "python",
    title: "Python List Comprehension & Generator Expressions",
    order: 22,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python List Comprehension & Generator Expressions\n\nPython List Comprehension & Generator Expressions is Python's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python List Comprehension & Generator Expressions following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python List Comprehension & Generator Expressions follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python List Comprehension & Generator Expressions helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python List Comprehension & Generator Expressions — Data structures:",
              "content": "# Python List Comprehension & Generator Expressions — Python Data Structures\n\n# List comprehension — Pythonic\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in [\"hello\", \"world\"]}\n# {\"hello\": 5, \"world\": 5}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # Union: {1,2,3,4,5,6}\nprint(a & b)  # Intersection: {3,4}\nprint(a - b)  # Difference: {1,2}\n\n# Collections module\nfrom collections import Counter, defaultdict\ntext = \"hello world\"\nchar_count = Counter(text)\n# Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python List Comprehension & Generator Expressions\n\nPython's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python List Comprehension & Generator Expressions — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch22-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch22-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch22-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch22-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch22-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["python-ch21"],
    keyPoints: ["Python List Comprehension & Generator Expressions follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python List Comprehension & Generator Expressions helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch23",
    courseId: "python",
    title: "Python Tuples: Immutable Sequences",
    order: 23,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Tuples: Immutable Sequences\n\nPython Tuples: Immutable Sequences is Python's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Tuples: Immutable Sequences following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Tuples: Immutable Sequences follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Tuples: Immutable Sequences helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Tuples: Immutable Sequences — Data structures:",
              "content": "# Python Tuples: Immutable Sequences — Python Data Structures\n\n# List comprehension — Pythonic\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in [\"hello\", \"world\"]}\n# {\"hello\": 5, \"world\": 5}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # Union: {1,2,3,4,5,6}\nprint(a & b)  # Intersection: {3,4}\nprint(a - b)  # Difference: {1,2}\n\n# Collections module\nfrom collections import Counter, defaultdict\ntext = \"hello world\"\nchar_count = Counter(text)\n# Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Tuples: Immutable Sequences\n\nPython's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Tuples: Immutable Sequences — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch23-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch23-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch23-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch23-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch23-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["python-ch22"],
    keyPoints: ["Python Tuples: Immutable Sequences follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Tuples: Immutable Sequences helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch24",
    courseId: "python",
    title: "Python Sets: Unordered Unique Collections",
    order: 24,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Sets: Unordered Unique Collections\n\nPython Sets: Unordered Unique Collections is Python's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Sets: Unordered Unique Collections following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Sets: Unordered Unique Collections follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Sets: Unordered Unique Collections helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Sets: Unordered Unique Collections — Data structures:",
              "content": "# Python Sets: Unordered Unique Collections — Python Data Structures\n\n# List comprehension — Pythonic\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in [\"hello\", \"world\"]}\n# {\"hello\": 5, \"world\": 5}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # Union: {1,2,3,4,5,6}\nprint(a & b)  # Intersection: {3,4}\nprint(a - b)  # Difference: {1,2}\n\n# Collections module\nfrom collections import Counter, defaultdict\ntext = \"hello world\"\nchar_count = Counter(text)\n# Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Sets: Unordered Unique Collections\n\nPython's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Sets: Unordered Unique Collections — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch24-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch24-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch24-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch24-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch24-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["python-ch23"],
    keyPoints: ["Python Sets: Unordered Unique Collections follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Sets: Unordered Unique Collections helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch25",
    courseId: "python",
    title: "Python Dictionaries: Key-Value Pairs",
    order: 25,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Dictionaries: Key-Value Pairs\n\nPython Dictionaries: Key-Value Pairs is Python's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Dictionaries: Key-Value Pairs following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Dictionaries: Key-Value Pairs follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Dictionaries: Key-Value Pairs helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Dictionaries: Key-Value Pairs — Data structures:",
              "content": "# Python Dictionaries: Key-Value Pairs — Python Data Structures\n\n# List comprehension — Pythonic\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in [\"hello\", \"world\"]}\n# {\"hello\": 5, \"world\": 5}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # Union: {1,2,3,4,5,6}\nprint(a & b)  # Intersection: {3,4}\nprint(a - b)  # Difference: {1,2}\n\n# Collections module\nfrom collections import Counter, defaultdict\ntext = \"hello world\"\nchar_count = Counter(text)\n# Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Dictionaries: Key-Value Pairs\n\nPython's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Dictionaries: Key-Value Pairs — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch25-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch25-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch25-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch25-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch25-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["python-ch24"],
    keyPoints: ["Python Dictionaries: Key-Value Pairs follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Dictionaries: Key-Value Pairs helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch26",
    courseId: "python",
    title: "Python Dictionary Methods & Comprehension",
    order: 26,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Dictionary Methods & Comprehension\n\nPython Dictionary Methods & Comprehension is Python's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Dictionary Methods & Comprehension following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Dictionary Methods & Comprehension follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Dictionary Methods & Comprehension helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Dictionary Methods & Comprehension — Data structures:",
              "content": "# Python Dictionary Methods & Comprehension — Python Data Structures\n\n# List comprehension — Pythonic\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in [\"hello\", \"world\"]}\n# {\"hello\": 5, \"world\": 5}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # Union: {1,2,3,4,5,6}\nprint(a & b)  # Intersection: {3,4}\nprint(a - b)  # Difference: {1,2}\n\n# Collections module\nfrom collections import Counter, defaultdict\ntext = \"hello world\"\nchar_count = Counter(text)\n# Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Dictionary Methods & Comprehension\n\nPython's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Dictionary Methods & Comprehension — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch26-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch26-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch26-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch26-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch26-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["python-ch25"],
    keyPoints: ["Python Dictionary Methods & Comprehension follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Dictionary Methods & Comprehension helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch27",
    courseId: "python",
    title: "Python Collections Module (Deque, Counter, DefaultDict)",
    order: 27,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Collections Module (Deque, Counter, DefaultDict)\n\nPython Collections Module (Deque, Counter, DefaultDict) is Python's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Collections Module (Deque, Counter, DefaultDict) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Collections Module (Deque, Counter, DefaultDict) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Collections Module (Deque, Counter, DefaultDict) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Collections Module (Deque, Counter, DefaultDict) — Data structures:",
              "content": "# Python Collections Module (Deque, Counter, DefaultDict) — Python Data Structures\n\n# List comprehension — Pythonic\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in [\"hello\", \"world\"]}\n# {\"hello\": 5, \"world\": 5}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # Union: {1,2,3,4,5,6}\nprint(a & b)  # Intersection: {3,4}\nprint(a - b)  # Difference: {1,2}\n\n# Collections module\nfrom collections import Counter, defaultdict\ntext = \"hello world\"\nchar_count = Counter(text)\n# Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Collections Module (Deque, Counter, DefaultDict)\n\nPython's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Collections Module (Deque, Counter, DefaultDict) — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch27-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch27-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch27-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch27-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch27-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["python-ch26"],
    keyPoints: ["Python Collections Module (Deque, Counter, DefaultDict) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Collections Module (Deque, Counter, DefaultDict) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch28",
    courseId: "python",
    title: "Python Itertools: Chain, Cycle, Combinations, Permutations",
    order: 28,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Itertools: Chain, Cycle, Combinations, Permutations\n\nPython Itertools: Chain, Cycle, Combinations, Permutations is Python's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Itertools: Chain, Cycle, Combinations, Permutations following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Itertools: Chain, Cycle, Combinations, Permutations follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Itertools: Chain, Cycle, Combinations, Permutations helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Itertools: Chain, Cycle, Combinations, Permutations — Data structures:",
              "content": "# Python Itertools: Chain, Cycle, Combinations, Permutations — Python Data Structures\n\n# List comprehension — Pythonic\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in [\"hello\", \"world\"]}\n# {\"hello\": 5, \"world\": 5}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # Union: {1,2,3,4,5,6}\nprint(a & b)  # Intersection: {3,4}\nprint(a - b)  # Difference: {1,2}\n\n# Collections module\nfrom collections import Counter, defaultdict\ntext = \"hello world\"\nchar_count = Counter(text)\n# Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Itertools: Chain, Cycle, Combinations, Permutations\n\nPython's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Itertools: Chain, Cycle, Combinations, Permutations — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch28-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch28-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch28-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch28-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch28-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["python-ch27"],
    keyPoints: ["Python Itertools: Chain, Cycle, Combinations, Permutations follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Itertools: Chain, Cycle, Combinations, Permutations helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch29",
    courseId: "python",
    title: "Python Functions: Def & Return",
    order: 29,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Functions: Def & Return\n\nPython Functions: Def & Return is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Functions: Def & Return following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Functions: Def & Return follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Functions: Def & Return helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Functions: Def & Return — Functions:",
              "content": "# Python Functions: Def & Return — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Functions: Def & Return\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Functions: Def & Return — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch29-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch29-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch29-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch29-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["python-ch28"],
    keyPoints: ["Python Functions: Def & Return follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Functions: Def & Return helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch30",
    courseId: "python",
    title: "Python Parameters: Positional, Keyword, Default, *args, **kwargs",
    order: 30,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Parameters: Positional, Keyword, Default, *args, **kwargs\n\nPython Parameters: Positional, Keyword, Default, *args, **kwargs is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Parameters: Positional, Keyword, Default, *args, **kwargs following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Parameters: Positional, Keyword, Default, *args, **kwargs follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Parameters: Positional, Keyword, Default, *args, **kwargs helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Parameters: Positional, Keyword, Default, *args, **kwargs — Functions:",
              "content": "# Python Parameters: Positional, Keyword, Default, *args, **kwargs — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Parameters: Positional, Keyword, Default, *args, **kwargs\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Parameters: Positional, Keyword, Default, *args, **kwargs — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch30-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch30-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch30-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch30-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["python-ch29"],
    keyPoints: ["Python Parameters: Positional, Keyword, Default, *args, **kwargs follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Parameters: Positional, Keyword, Default, *args, **kwargs helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch31",
    courseId: "python",
    title: "Python Lambda Functions",
    order: 31,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Lambda Functions\n\nPython Lambda Functions is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Lambda Functions following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Lambda Functions follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Lambda Functions helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Lambda Functions — Functions:",
              "content": "# Python Lambda Functions — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Lambda Functions\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Lambda Functions — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch31-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch31-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch31-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch31-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["python-ch30"],
    keyPoints: ["Python Lambda Functions follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Lambda Functions helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch32",
    courseId: "python",
    title: "Python Scope: LEGB Rule (Local, Enclosing, Global, Built-in)",
    order: 32,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Scope: LEGB Rule (Local, Enclosing, Global, Built-in)\n\nPython Scope: LEGB Rule (Local, Enclosing, Global, Built-in) is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Scope: LEGB Rule (Local, Enclosing, Global, Built-in) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Scope: LEGB Rule (Local, Enclosing, Global, Built-in) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Scope: LEGB Rule (Local, Enclosing, Global, Built-in) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Scope: LEGB Rule (Local, Enclosing, Global, Built-in) — Functions:",
              "content": "# Python Scope: LEGB Rule (Local, Enclosing, Global, Built-in) — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Scope: LEGB Rule (Local, Enclosing, Global, Built-in)\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Scope: LEGB Rule (Local, Enclosing, Global, Built-in) — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch32-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch32-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch32-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch32-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["python-ch31"],
    keyPoints: ["Python Scope: LEGB Rule (Local, Enclosing, Global, Built-in) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Scope: LEGB Rule (Local, Enclosing, Global, Built-in) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch33",
    courseId: "python",
    title: "Python Global & Nonlocal Statements",
    order: 33,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Global & Nonlocal Statements\n\nPython Global & Nonlocal Statements is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Global & Nonlocal Statements following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Global & Nonlocal Statements follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Global & Nonlocal Statements helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Global & Nonlocal Statements — Functions:",
              "content": "# Python Global & Nonlocal Statements — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Global & Nonlocal Statements\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Global & Nonlocal Statements — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch33-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch33-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch33-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch33-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["python-ch32"],
    keyPoints: ["Python Global & Nonlocal Statements follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Global & Nonlocal Statements helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch34",
    courseId: "python",
    title: "Python Modules: Import & From",
    order: 34,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Modules: Import & From\n\nPython Modules: Import & From is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Modules: Import & From following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Modules: Import & From follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Modules: Import & From helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Modules: Import & From — Functions:",
              "content": "# Python Modules: Import & From — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Modules: Import & From\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Modules: Import & From — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch34-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch34-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch34-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch34-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["python-ch33"],
    keyPoints: ["Python Modules: Import & From follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Modules: Import & From helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch35",
    courseId: "python",
    title: "Python Packages & __init__.py",
    order: 35,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Packages & __init__.py\n\nPython Packages & __init__.py is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Packages & __init__.py following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Packages & __init__.py follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Packages & __init__.py helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Packages & __init__.py — Functions:",
              "content": "# Python Packages & __init__.py — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Packages & __init__.py\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Packages & __init__.py — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch35-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch35-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch35-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch35-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["python-ch34"],
    keyPoints: ["Python Packages & __init__.py follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Packages & __init__.py helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch36",
    courseId: "python",
    title: "Python Standard Library Overview",
    order: 36,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Standard Library Overview\n\nPython Standard Library Overview is the Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Standard Library Overview following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Standard Library Overview follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Standard Library Overview helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Standard Library Overview — Example:",
              "content": "# Python Standard Library Overview — Python Example\n\"\"\"Demonstration of Python Standard Library Overview in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Standard Library Overview\n\nThe Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Standard Library Overview follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch36-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch36-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch36-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch36-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["python-ch35"],
    keyPoints: ["Python Standard Library Overview follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Standard Library Overview helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch37",
    courseId: "python",
    title: "Python PIP & Virtual Environments",
    order: 37,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python PIP & Virtual Environments\n\nPython PIP & Virtual Environments is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python PIP & Virtual Environments following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python PIP & Virtual Environments follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python PIP & Virtual Environments helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python PIP & Virtual Environments — Functions:",
              "content": "# Python PIP & Virtual Environments — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python PIP & Virtual Environments\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python PIP & Virtual Environments — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch37-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch37-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch37-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch37-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["python-ch36"],
    keyPoints: ["Python PIP & Virtual Environments follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python PIP & Virtual Environments helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch38",
    courseId: "python",
    title: "Python Requirements & Dependency Management",
    order: 38,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Requirements & Dependency Management\n\nPython Requirements & Dependency Management is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Requirements & Dependency Management following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Requirements & Dependency Management follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Requirements & Dependency Management helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Requirements & Dependency Management — Functions:",
              "content": "# Python Requirements & Dependency Management — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Requirements & Dependency Management\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Requirements & Dependency Management — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch38-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch38-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch38-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch38-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["python-ch37"],
    keyPoints: ["Python Requirements & Dependency Management follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Requirements & Dependency Management helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch39",
    courseId: "python",
    title: "Python __name__ == '__main__' Pattern",
    order: 39,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python __name__ == '__main__' Pattern\n\nPython __name__ == '__main__' Pattern is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python __name__ == '__main__' Pattern following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python __name__ == '__main__' Pattern follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python __name__ == '__main__' Pattern helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python __name__ == '__main__' Pattern — Functions:",
              "content": "# Python __name__ == '__main__' Pattern — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python __name__ == '__main__' Pattern\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python __name__ == '__main__' Pattern — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch39-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch39-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch39-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch39-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["python-ch38"],
    keyPoints: ["Python __name__ == '__main__' Pattern follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python __name__ == '__main__' Pattern helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch40",
    courseId: "python",
    title: "Python Type Hints & Annotations",
    order: 40,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Type Hints & Annotations\n\nPython Type Hints & Annotations is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Type Hints & Annotations following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Type Hints & Annotations follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Type Hints & Annotations helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Type Hints & Annotations — Functions:",
              "content": "# Python Type Hints & Annotations — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Type Hints & Annotations\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Type Hints & Annotations — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch40-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch40-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch40-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch40-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["python-ch39"],
    keyPoints: ["Python Type Hints & Annotations follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Type Hints & Annotations helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch41",
    courseId: "python",
    title: "Python Classes & Objects",
    order: 41,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Classes & Objects\n\nPython Classes & Objects is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Classes & Objects following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Classes & Objects follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Classes & Objects helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Classes & Objects — Python OOP:",
              "content": "# Python Classes & Objects — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Classes & Objects\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Classes & Objects follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch41-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch41-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch41-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch41-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["python-ch40"],
    keyPoints: ["Python Classes & Objects follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Classes & Objects helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch42",
    courseId: "python",
    title: "Python __init__ & Constructor",
    order: 42,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python __init__ & Constructor\n\nPython __init__ & Constructor is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python __init__ & Constructor following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python __init__ & Constructor follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python __init__ & Constructor helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python __init__ & Constructor — Python OOP:",
              "content": "# Python __init__ & Constructor — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python __init__ & Constructor\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python __init__ & Constructor follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch42-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch42-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch42-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch42-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["python-ch41"],
    keyPoints: ["Python __init__ & Constructor follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python __init__ & Constructor helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch43",
    courseId: "python",
    title: "Python Instance, Class & Static Methods",
    order: 43,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Instance, Class & Static Methods\n\nPython Instance, Class & Static Methods is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Instance, Class & Static Methods following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Instance, Class & Static Methods follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Instance, Class & Static Methods helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Instance, Class & Static Methods — Python OOP:",
              "content": "# Python Instance, Class & Static Methods — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Instance, Class & Static Methods\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Instance, Class & Static Methods follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch43-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch43-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch43-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch43-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["python-ch42"],
    keyPoints: ["Python Instance, Class & Static Methods follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Instance, Class & Static Methods helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch44",
    courseId: "python",
    title: "Python Attributes: Instance, Class, Private",
    order: 44,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Attributes: Instance, Class, Private\n\nPython Attributes: Instance, Class, Private is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Attributes: Instance, Class, Private following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Attributes: Instance, Class, Private follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Attributes: Instance, Class, Private helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Attributes: Instance, Class, Private — Python OOP:",
              "content": "# Python Attributes: Instance, Class, Private — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Attributes: Instance, Class, Private\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Attributes: Instance, Class, Private follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch44-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch44-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch44-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch44-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["python-ch43"],
    keyPoints: ["Python Attributes: Instance, Class, Private follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Attributes: Instance, Class, Private helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch45",
    courseId: "python",
    title: "Python Property Decorators (@property, @setter)",
    order: 45,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Property Decorators (@property, @setter)\n\nPython Property Decorators (@property, @setter) is Python's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Property Decorators (@property, @setter) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Property Decorators (@property, @setter) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Property Decorators (@property, @setter) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Property Decorators (@property, @setter) — Data structures:",
              "content": "# Python Property Decorators (@property, @setter) — Python Data Structures\n\n# List comprehension — Pythonic\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in [\"hello\", \"world\"]}\n# {\"hello\": 5, \"world\": 5}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # Union: {1,2,3,4,5,6}\nprint(a & b)  # Intersection: {3,4}\nprint(a - b)  # Difference: {1,2}\n\n# Collections module\nfrom collections import Counter, defaultdict\ntext = \"hello world\"\nchar_count = Counter(text)\n# Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Property Decorators (@property, @setter)\n\nPython's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Property Decorators (@property, @setter) — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch45-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch45-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch45-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch45-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch45-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["python-ch44"],
    keyPoints: ["Python Property Decorators (@property, @setter) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Property Decorators (@property, @setter) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch46",
    courseId: "python",
    title: "Python Inheritance & Super()",
    order: 46,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Inheritance & Super()\n\nPython Inheritance & Super() is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Inheritance & Super() following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Inheritance & Super() follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Inheritance & Super() helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Inheritance & Super() — Python OOP:",
              "content": "# Python Inheritance & Super() — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Inheritance & Super()\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Inheritance & Super() follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch46-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch46-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch46-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch46-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["python-ch45"],
    keyPoints: ["Python Inheritance & Super() follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Inheritance & Super() helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch47",
    courseId: "python",
    title: "Python Method Overriding & MRO",
    order: 47,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Method Overriding & MRO\n\nPython Method Overriding & MRO is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Method Overriding & MRO following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Method Overriding & MRO follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Method Overriding & MRO helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Method Overriding & MRO — Python OOP:",
              "content": "# Python Method Overriding & MRO — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Method Overriding & MRO\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Method Overriding & MRO follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch47-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch47-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch47-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch47-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["python-ch46"],
    keyPoints: ["Python Method Overriding & MRO follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Method Overriding & MRO helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch48",
    courseId: "python",
    title: "Python Abstract Base Classes (ABC)",
    order: 48,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Abstract Base Classes (ABC)\n\nPython Abstract Base Classes (ABC) is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Abstract Base Classes (ABC) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Abstract Base Classes (ABC) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Abstract Base Classes (ABC) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Abstract Base Classes (ABC) — Python OOP:",
              "content": "# Python Abstract Base Classes (ABC) — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Abstract Base Classes (ABC)\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Abstract Base Classes (ABC) follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch48-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch48-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch48-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch48-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["python-ch47"],
    keyPoints: ["Python Abstract Base Classes (ABC) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Abstract Base Classes (ABC) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch49",
    courseId: "python",
    title: "Python Dataclasses (@dataclass)",
    order: 49,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Dataclasses (@dataclass)\n\nPython Dataclasses (@dataclass) is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Dataclasses (@dataclass) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Dataclasses (@dataclass) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Dataclasses (@dataclass) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Dataclasses (@dataclass) — Python OOP:",
              "content": "# Python Dataclasses (@dataclass) — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Dataclasses (@dataclass)\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Dataclasses (@dataclass) follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch49-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch49-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch49-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch49-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["python-ch48"],
    keyPoints: ["Python Dataclasses (@dataclass) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Dataclasses (@dataclass) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch50",
    courseId: "python",
    title: "Python Magic Methods: __str__, __repr__, __len__",
    order: 50,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Magic Methods: __str__, __repr__, __len__\n\nPython Magic Methods: __str__, __repr__, __len__ is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Magic Methods: __str__, __repr__, __len__ following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Magic Methods: __str__, __repr__, __len__ follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Magic Methods: __str__, __repr__, __len__ helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Magic Methods: __str__, __repr__, __len__ — Python OOP:",
              "content": "# Python Magic Methods: __str__, __repr__, __len__ — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Magic Methods: __str__, __repr__, __len__\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Magic Methods: __str__, __repr__, __len__ follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch50-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch50-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch50-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch50-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["python-ch49"],
    keyPoints: ["Python Magic Methods: __str__, __repr__, __len__ follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Magic Methods: __str__, __repr__, __len__ helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch51",
    courseId: "python",
    title: "Python Magic Methods: __eq__, __hash__, __lt__",
    order: 51,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Magic Methods: __eq__, __hash__, __lt__\n\nPython Magic Methods: __eq__, __hash__, __lt__ is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Magic Methods: __eq__, __hash__, __lt__ following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Magic Methods: __eq__, __hash__, __lt__ follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Magic Methods: __eq__, __hash__, __lt__ helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Magic Methods: __eq__, __hash__, __lt__ — Python OOP:",
              "content": "# Python Magic Methods: __eq__, __hash__, __lt__ — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Magic Methods: __eq__, __hash__, __lt__\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Magic Methods: __eq__, __hash__, __lt__ follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch51-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch51-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch51-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch51-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["python-ch50"],
    keyPoints: ["Python Magic Methods: __eq__, __hash__, __lt__ follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Magic Methods: __eq__, __hash__, __lt__ helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch52",
    courseId: "python",
    title: "Python Magic Methods: __getitem__, __setitem__, __iter__",
    order: 52,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Magic Methods: __getitem__, __setitem__, __iter__\n\nPython Magic Methods: __getitem__, __setitem__, __iter__ is Python's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Magic Methods: __getitem__, __setitem__, __iter__ following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Magic Methods: __getitem__, __setitem__, __iter__ follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Magic Methods: __getitem__, __setitem__, __iter__ helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Magic Methods: __getitem__, __setitem__, __iter__ — Data structures:",
              "content": "# Python Magic Methods: __getitem__, __setitem__, __iter__ — Python Data Structures\n\n# List comprehension — Pythonic\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in [\"hello\", \"world\"]}\n# {\"hello\": 5, \"world\": 5}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # Union: {1,2,3,4,5,6}\nprint(a & b)  # Intersection: {3,4}\nprint(a - b)  # Difference: {1,2}\n\n# Collections module\nfrom collections import Counter, defaultdict\ntext = \"hello world\"\nchar_count = Counter(text)\n# Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Magic Methods: __getitem__, __setitem__, __iter__\n\nPython's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Magic Methods: __getitem__, __setitem__, __iter__ — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch52-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch52-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch52-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch52-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch52-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["python-ch51"],
    keyPoints: ["Python Magic Methods: __getitem__, __setitem__, __iter__ follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Magic Methods: __getitem__, __setitem__, __iter__ helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch53",
    courseId: "python",
    title: "Python Operator Overloading",
    order: 53,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Operator Overloading\n\nPython Operator Overloading is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Operator Overloading following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Operator Overloading follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Operator Overloading helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Operator Overloading — Python OOP:",
              "content": "# Python Operator Overloading — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Operator Overloading\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Operator Overloading follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch53-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch53-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch53-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch53-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["python-ch52"],
    keyPoints: ["Python Operator Overloading follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Operator Overloading helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch54",
    courseId: "python",
    title: "Python Polymorphism & Duck Typing",
    order: 54,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Polymorphism & Duck Typing\n\nPython Polymorphism & Duck Typing is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Polymorphism & Duck Typing following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Polymorphism & Duck Typing follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Polymorphism & Duck Typing helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Polymorphism & Duck Typing — Python OOP:",
              "content": "# Python Polymorphism & Duck Typing — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Polymorphism & Duck Typing\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Polymorphism & Duck Typing follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch54-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch54-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch54-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch54-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["python-ch53"],
    keyPoints: ["Python Polymorphism & Duck Typing follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Polymorphism & Duck Typing helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch55",
    courseId: "python",
    title: "Python Exceptions: Try, Except, Finally",
    order: 55,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Exceptions: Try, Except, Finally\n\nPython Exceptions: Try, Except, Finally is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Exceptions: Try, Except, Finally following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Exceptions: Try, Except, Finally follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Exceptions: Try, Except, Finally helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Exceptions: Try, Except, Finally — Error handling and files:",
              "content": "# Python Exceptions: Try, Except, Finally — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Exceptions: Try, Except, Finally\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Exceptions: Try, Except, Finally follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch55-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch55-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch55-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch55-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["python-ch54"],
    keyPoints: ["Python Exceptions: Try, Except, Finally follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Exceptions: Try, Except, Finally helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch56",
    courseId: "python",
    title: "Python Multiple Except Blocks & Exception Hierarchy",
    order: 56,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Multiple Except Blocks & Exception Hierarchy\n\nPython Multiple Except Blocks & Exception Hierarchy is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Multiple Except Blocks & Exception Hierarchy following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Multiple Except Blocks & Exception Hierarchy follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Multiple Except Blocks & Exception Hierarchy helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Multiple Except Blocks & Exception Hierarchy — Error handling and files:",
              "content": "# Python Multiple Except Blocks & Exception Hierarchy — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Multiple Except Blocks & Exception Hierarchy\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Multiple Except Blocks & Exception Hierarchy follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch56-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch56-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch56-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch56-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["python-ch55"],
    keyPoints: ["Python Multiple Except Blocks & Exception Hierarchy follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Multiple Except Blocks & Exception Hierarchy helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch57",
    courseId: "python",
    title: "Python Raising Exceptions (Raise, Assert)",
    order: 57,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Raising Exceptions (Raise, Assert)\n\nPython Raising Exceptions (Raise, Assert) is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Raising Exceptions (Raise, Assert) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Raising Exceptions (Raise, Assert) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Raising Exceptions (Raise, Assert) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Raising Exceptions (Raise, Assert) — Error handling and files:",
              "content": "# Python Raising Exceptions (Raise, Assert) — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Raising Exceptions (Raise, Assert)\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Raising Exceptions (Raise, Assert) follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch57-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch57-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch57-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch57-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["python-ch56"],
    keyPoints: ["Python Raising Exceptions (Raise, Assert) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Raising Exceptions (Raise, Assert) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch58",
    courseId: "python",
    title: "Python Custom Exception Classes",
    order: 58,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Custom Exception Classes\n\nPython Custom Exception Classes is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Custom Exception Classes following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Custom Exception Classes follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Custom Exception Classes helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Custom Exception Classes — Python OOP:",
              "content": "# Python Custom Exception Classes — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Custom Exception Classes\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Custom Exception Classes follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch58-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch58-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch58-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch58-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["python-ch57"],
    keyPoints: ["Python Custom Exception Classes follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Custom Exception Classes helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch59",
    courseId: "python",
    title: "Python File Reading (Open, Read, Readlines)",
    order: 59,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python File Reading (Open, Read, Readlines)\n\nPython File Reading (Open, Read, Readlines) is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python File Reading (Open, Read, Readlines) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python File Reading (Open, Read, Readlines) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python File Reading (Open, Read, Readlines) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python File Reading (Open, Read, Readlines) — Error handling and files:",
              "content": "# Python File Reading (Open, Read, Readlines) — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python File Reading (Open, Read, Readlines)\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python File Reading (Open, Read, Readlines) follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch59-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch59-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch59-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch59-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["python-ch58"],
    keyPoints: ["Python File Reading (Open, Read, Readlines) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python File Reading (Open, Read, Readlines) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch60",
    courseId: "python",
    title: "Python File Writing & Appending",
    order: 60,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python File Writing & Appending\n\nPython File Writing & Appending is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python File Writing & Appending following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python File Writing & Appending follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python File Writing & Appending helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python File Writing & Appending — Error handling and files:",
              "content": "# Python File Writing & Appending — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python File Writing & Appending\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python File Writing & Appending follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch60-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch60-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch60-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch60-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["python-ch59"],
    keyPoints: ["Python File Writing & Appending follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python File Writing & Appending helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch61",
    courseId: "python",
    title: "Python Context Managers (With Statement)",
    order: 61,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Context Managers (With Statement)\n\nPython Context Managers (With Statement) is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Context Managers (With Statement) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Context Managers (With Statement) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Context Managers (With Statement) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Context Managers (With Statement) — Error handling and files:",
              "content": "# Python Context Managers (With Statement) — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Context Managers (With Statement)\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Context Managers (With Statement) follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch61-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch61-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch61-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch61-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["python-ch60"],
    keyPoints: ["Python Context Managers (With Statement) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Context Managers (With Statement) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch62",
    courseId: "python",
    title: "Python Contextlib & Custom Context Managers",
    order: 62,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Contextlib & Custom Context Managers\n\nPython Contextlib & Custom Context Managers is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Contextlib & Custom Context Managers following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Contextlib & Custom Context Managers follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Contextlib & Custom Context Managers helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Contextlib & Custom Context Managers — Error handling and files:",
              "content": "# Python Contextlib & Custom Context Managers — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Contextlib & Custom Context Managers\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Contextlib & Custom Context Managers follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch62-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch62-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch62-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch62-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["python-ch61"],
    keyPoints: ["Python Contextlib & Custom Context Managers follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Contextlib & Custom Context Managers helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch63",
    courseId: "python",
    title: "Python Working with JSON",
    order: 63,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Working with JSON\n\nPython Working with JSON is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Working with JSON following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Working with JSON follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Working with JSON helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Working with JSON — Error handling and files:",
              "content": "# Python Working with JSON — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Working with JSON\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Working with JSON follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch63-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch63-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch63-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch63-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["python-ch62"],
    keyPoints: ["Python Working with JSON follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Working with JSON helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch64",
    courseId: "python",
    title: "Python Working with CSV Files",
    order: 64,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Working with CSV Files\n\nPython Working with CSV Files is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Working with CSV Files following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Working with CSV Files follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Working with CSV Files helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Working with CSV Files — Error handling and files:",
              "content": "# Python Working with CSV Files — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Working with CSV Files\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Working with CSV Files follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch64-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch64-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch64-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch64-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["python-ch63"],
    keyPoints: ["Python Working with CSV Files follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Working with CSV Files helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch65",
    courseId: "python",
    title: "Python Datetime: Dates, Times, Timedeltas",
    order: 65,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Datetime: Dates, Times, Timedeltas\n\nPython Datetime: Dates, Times, Timedeltas is the Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Datetime: Dates, Times, Timedeltas following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Datetime: Dates, Times, Timedeltas follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Datetime: Dates, Times, Timedeltas helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Datetime: Dates, Times, Timedeltas — Example:",
              "content": "# Python Datetime: Dates, Times, Timedeltas — Python Example\n\"\"\"Demonstration of Python Datetime: Dates, Times, Timedeltas in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Datetime: Dates, Times, Timedeltas\n\nThe Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Datetime: Dates, Times, Timedeltas follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch65-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch65-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch65-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch65-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["python-ch64"],
    keyPoints: ["Python Datetime: Dates, Times, Timedeltas follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Datetime: Dates, Times, Timedeltas helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch66",
    courseId: "python",
    title: "Python OS Module: Files, Paths, Environment",
    order: 66,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python OS Module: Files, Paths, Environment\n\nPython OS Module: Files, Paths, Environment is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python OS Module: Files, Paths, Environment following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python OS Module: Files, Paths, Environment follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python OS Module: Files, Paths, Environment helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python OS Module: Files, Paths, Environment — Functions:",
              "content": "# Python OS Module: Files, Paths, Environment — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python OS Module: Files, Paths, Environment\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python OS Module: Files, Paths, Environment — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch66-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch66-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch66-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch66-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["python-ch65"],
    keyPoints: ["Python OS Module: Files, Paths, Environment follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python OS Module: Files, Paths, Environment helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch67",
    courseId: "python",
    title: "Python Sys Module: Arguments, Path, Exit",
    order: 67,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Sys Module: Arguments, Path, Exit\n\nPython Sys Module: Arguments, Path, Exit is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Sys Module: Arguments, Path, Exit following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Sys Module: Arguments, Path, Exit follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Sys Module: Arguments, Path, Exit helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Sys Module: Arguments, Path, Exit — Functions:",
              "content": "# Python Sys Module: Arguments, Path, Exit — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Sys Module: Arguments, Path, Exit\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Sys Module: Arguments, Path, Exit — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch67-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch67-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch67-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch67-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["python-ch66"],
    keyPoints: ["Python Sys Module: Arguments, Path, Exit follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Sys Module: Arguments, Path, Exit helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch68",
    courseId: "python",
    title: "Python Re: Regular Expressions (Match, Search, Sub)",
    order: 68,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Re: Regular Expressions (Match, Search, Sub)\n\nPython Re: Regular Expressions (Match, Search, Sub) is how Python controls program flow with conditionals, loops, and pattern matching. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Re: Regular Expressions (Match, Search, Sub) following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Re: Regular Expressions (Match, Search, Sub) follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Re: Regular Expressions (Match, Search, Sub) helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Re: Regular Expressions (Match, Search, Sub) — Control flow:",
              "content": "# Python Re: Regular Expressions (Match, Search, Sub) — Python Control Flow\n\n# 1. If/elif/else with 'in' operator\nstatus = \"active\"\nif status not in (\"active\", \"pending\"):\n    print(\"Account disabled\")\nelif status == \"active\":\n    print(\"Welcome back!\")\nelse:\n    print(\"Please verify your email\")\n\n# 2. For loop with enumerate\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor i, fruit in enumerate(fruits, start=1):\n    print(f\"{i}. {fruit}\")\n\n# 3. While loop with else (runs if no break)\nn = 0\nwhile n < 3:\n    print(n)\n    n += 1\nelse:\n    print(\"Loop completed normally\")\n\n# 4. Match/case (Python 3.10+)\nmatch command.split():\n    case [\"quit\"]: exit()\n    case [\"hello\", name]: print(f\"Hi, {name}\")\n    case _: print(\"Unknown command\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Re: Regular Expressions (Match, Search, Sub)\n\nHow Python controls program flow with conditionals, loops, and pattern matching. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Re: Regular Expressions (Match, Search, Sub) — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch68-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch68-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch68-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch68-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch68-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["python-ch67"],
    keyPoints: ["Python Re: Regular Expressions (Match, Search, Sub) follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Re: Regular Expressions (Match, Search, Sub) helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch69",
    courseId: "python",
    title: "Python Math & Statistics Modules",
    order: 69,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Math & Statistics Modules\n\nPython Math & Statistics Modules is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Math & Statistics Modules following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Math & Statistics Modules follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Math & Statistics Modules helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Math & Statistics Modules — Python basics:",
              "content": "# Python Math & Statistics Modules — Python Fundamentals\n\"\"\"\"Python Math & Statistics Modules — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Math & Statistics Modules\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Math & Statistics Modules — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch69-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch69-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch69-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch69-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch69-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["python-ch68"],
    keyPoints: ["Python Math & Statistics Modules follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Math & Statistics Modules helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch70",
    courseId: "python",
    title: "Python Random: Seeds, Choices, Shuffle",
    order: 70,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Random: Seeds, Choices, Shuffle\n\nPython Random: Seeds, Choices, Shuffle is the Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Random: Seeds, Choices, Shuffle following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Random: Seeds, Choices, Shuffle follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Random: Seeds, Choices, Shuffle helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Random: Seeds, Choices, Shuffle — Example:",
              "content": "# Python Random: Seeds, Choices, Shuffle — Python Example\n\"\"\"Demonstration of Python Random: Seeds, Choices, Shuffle in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Random: Seeds, Choices, Shuffle\n\nThe Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Random: Seeds, Choices, Shuffle follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch70-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch70-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch70-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch70-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["python-ch69"],
    keyPoints: ["Python Random: Seeds, Choices, Shuffle follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Random: Seeds, Choices, Shuffle helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch71",
    courseId: "python",
    title: "Python Argparse: Building CLI Tools",
    order: 71,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Argparse: Building CLI Tools\n\nPython Argparse: Building CLI Tools is the Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Argparse: Building CLI Tools following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Argparse: Building CLI Tools follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Argparse: Building CLI Tools helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Argparse: Building CLI Tools — Example:",
              "content": "# Python Argparse: Building CLI Tools — Python Example\n\"\"\"Demonstration of Python Argparse: Building CLI Tools in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Argparse: Building CLI Tools\n\nThe Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Argparse: Building CLI Tools follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch71-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch71-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch71-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch71-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["python-ch70"],
    keyPoints: ["Python Argparse: Building CLI Tools follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Argparse: Building CLI Tools helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch72",
    courseId: "python",
    title: "Python Logging: Logger, Handler, Formatter",
    order: 72,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Logging: Logger, Handler, Formatter\n\nPython Logging: Logger, Handler, Formatter is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Logging: Logger, Handler, Formatter following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Logging: Logger, Handler, Formatter follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Logging: Logger, Handler, Formatter helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Logging: Logger, Handler, Formatter — Python basics:",
              "content": "# Python Logging: Logger, Handler, Formatter — Python Fundamentals\n\"\"\"\"Python Logging: Logger, Handler, Formatter — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Logging: Logger, Handler, Formatter\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Logging: Logger, Handler, Formatter — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch72-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch72-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch72-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch72-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch72-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["python-ch71"],
    keyPoints: ["Python Logging: Logger, Handler, Formatter follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Logging: Logger, Handler, Formatter helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch73",
    courseId: "python",
    title: "Python Subprocess: Running Shell Commands",
    order: 73,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Subprocess: Running Shell Commands\n\nPython Subprocess: Running Shell Commands is the Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Subprocess: Running Shell Commands following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Subprocess: Running Shell Commands follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Subprocess: Running Shell Commands helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Subprocess: Running Shell Commands — Example:",
              "content": "# Python Subprocess: Running Shell Commands — Python Example\n\"\"\"Demonstration of Python Subprocess: Running Shell Commands in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Subprocess: Running Shell Commands\n\nThe Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Subprocess: Running Shell Commands follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch73-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch73-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch73-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch73-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["python-ch72"],
    keyPoints: ["Python Subprocess: Running Shell Commands follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Subprocess: Running Shell Commands helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch74",
    courseId: "python",
    title: "Python Threading: Concurrent Execution",
    order: 74,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Threading: Concurrent Execution\n\nPython Threading: Concurrent Execution is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Threading: Concurrent Execution following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Threading: Concurrent Execution follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Threading: Concurrent Execution helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Threading: Concurrent Execution — Error handling and files:",
              "content": "# Python Threading: Concurrent Execution — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Threading: Concurrent Execution\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Threading: Concurrent Execution follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch74-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch74-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch74-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch74-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["python-ch73"],
    keyPoints: ["Python Threading: Concurrent Execution follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Threading: Concurrent Execution helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch75",
    courseId: "python",
    title: "Python Multiprocessing: Parallel CPU Work",
    order: 75,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Multiprocessing: Parallel CPU Work\n\nPython Multiprocessing: Parallel CPU Work is the Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Multiprocessing: Parallel CPU Work following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Multiprocessing: Parallel CPU Work follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Multiprocessing: Parallel CPU Work helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Multiprocessing: Parallel CPU Work — Example:",
              "content": "# Python Multiprocessing: Parallel CPU Work — Python Example\n\"\"\"Demonstration of Python Multiprocessing: Parallel CPU Work in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Multiprocessing: Parallel CPU Work\n\nThe Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Multiprocessing: Parallel CPU Work follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch75-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch75-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch75-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch75-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["python-ch74"],
    keyPoints: ["Python Multiprocessing: Parallel CPU Work follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Multiprocessing: Parallel CPU Work helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch76",
    courseId: "python",
    title: "Python Pathlib: Modern Path Handling",
    order: 76,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Pathlib: Modern Path Handling\n\nPython Pathlib: Modern Path Handling is the Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Pathlib: Modern Path Handling following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Pathlib: Modern Path Handling follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Pathlib: Modern Path Handling helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Pathlib: Modern Path Handling — Example:",
              "content": "# Python Pathlib: Modern Path Handling — Python Example\n\"\"\"Demonstration of Python Pathlib: Modern Path Handling in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Pathlib: Modern Path Handling\n\nThe Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Pathlib: Modern Path Handling follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch76-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch76-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch76-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch76-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["python-ch75"],
    keyPoints: ["Python Pathlib: Modern Path Handling follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Pathlib: Modern Path Handling helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch77",
    courseId: "python",
    title: "Python Enum: Named Constants",
    order: 77,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Enum: Named Constants\n\nPython Enum: Named Constants is the Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Enum: Named Constants following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Enum: Named Constants follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Enum: Named Constants helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Enum: Named Constants — Example:",
              "content": "# Python Enum: Named Constants — Python Example\n\"\"\"Demonstration of Python Enum: Named Constants in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Enum: Named Constants\n\nThe Python standard library — datetime, OS, sys, regex, logging, threading, and more. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Enum: Named Constants follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch77-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch77-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch77-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch77-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["python-ch76"],
    keyPoints: ["Python Enum: Named Constants follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Enum: Named Constants helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch78",
    courseId: "python",
    title: "Python Hashlib & HMAC: Cryptographic Hashing",
    order: 78,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Hashlib & HMAC: Cryptographic Hashing\n\nPython Hashlib & HMAC: Cryptographic Hashing is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Hashlib & HMAC: Cryptographic Hashing following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Hashlib & HMAC: Cryptographic Hashing follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Hashlib & HMAC: Cryptographic Hashing helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Hashlib & HMAC: Cryptographic Hashing — Python OOP:",
              "content": "# Python Hashlib & HMAC: Cryptographic Hashing — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Hashlib & HMAC: Cryptographic Hashing\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Hashlib & HMAC: Cryptographic Hashing follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch78-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch78-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch78-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch78-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["python-ch77"],
    keyPoints: ["Python Hashlib & HMAC: Cryptographic Hashing follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Hashlib & HMAC: Cryptographic Hashing helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch79",
    courseId: "python",
    title: "Python Decorators: Function & Class Decorators",
    order: 79,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Decorators: Function & Class Decorators\n\nPython Decorators: Function & Class Decorators is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Decorators: Function & Class Decorators following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Decorators: Function & Class Decorators follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Decorators: Function & Class Decorators helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Decorators: Function & Class Decorators — Functions:",
              "content": "# Python Decorators: Function & Class Decorators — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Decorators: Function & Class Decorators\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Decorators: Function & Class Decorators — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch79-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch79-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch79-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch79-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["python-ch78"],
    keyPoints: ["Python Decorators: Function & Class Decorators follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Decorators: Function & Class Decorators helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch80",
    courseId: "python",
    title: "Python Decorators with Arguments",
    order: 80,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Decorators with Arguments\n\nPython Decorators with Arguments is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Decorators with Arguments following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Decorators with Arguments follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Decorators with Arguments helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Decorators with Arguments — Error handling and files:",
              "content": "# Python Decorators with Arguments — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Decorators with Arguments\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Decorators with Arguments follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch80-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch80-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch80-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch80-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["python-ch79"],
    keyPoints: ["Python Decorators with Arguments follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Decorators with Arguments helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch81",
    courseId: "python",
    title: "Python Generators: Yield, Send, Throw",
    order: 81,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Generators: Yield, Send, Throw\n\nPython Generators: Yield, Send, Throw is advanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Generators: Yield, Send, Throw following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Generators: Yield, Send, Throw follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Generators: Yield, Send, Throw helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Generators: Yield, Send, Throw — Example:",
              "content": "# Python Generators: Yield, Send, Throw — Python Example\n\"\"\"Demonstration of Python Generators: Yield, Send, Throw in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Generators: Yield, Send, Throw\n\nAdvanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Generators: Yield, Send, Throw follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch81-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch81-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch81-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch81-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["python-ch80"],
    keyPoints: ["Python Generators: Yield, Send, Throw follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Generators: Yield, Send, Throw helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch82",
    courseId: "python",
    title: "Python Generator Pipelines & Coroutines",
    order: 82,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Generator Pipelines & Coroutines\n\nPython Generator Pipelines & Coroutines is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Generator Pipelines & Coroutines following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Generator Pipelines & Coroutines follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Generator Pipelines & Coroutines helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Generator Pipelines & Coroutines — Functions:",
              "content": "# Python Generator Pipelines & Coroutines — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Generator Pipelines & Coroutines\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Generator Pipelines & Coroutines — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch82-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch82-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch82-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch82-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["python-ch81"],
    keyPoints: ["Python Generator Pipelines & Coroutines follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Generator Pipelines & Coroutines helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch83",
    courseId: "python",
    title: "Python Iterators: __iter__ & __next__",
    order: 83,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Iterators: __iter__ & __next__\n\nPython Iterators: __iter__ & __next__ is advanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Iterators: __iter__ & __next__ following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Iterators: __iter__ & __next__ follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Iterators: __iter__ & __next__ helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Iterators: __iter__ & __next__ — Example:",
              "content": "# Python Iterators: __iter__ & __next__ — Python Example\n\"\"\"Demonstration of Python Iterators: __iter__ & __next__ in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Iterators: __iter__ & __next__\n\nAdvanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Iterators: __iter__ & __next__ follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch83-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch83-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch83-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch83-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["python-ch82"],
    keyPoints: ["Python Iterators: __iter__ & __next__ follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Iterators: __iter__ & __next__ helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch84",
    courseId: "python",
    title: "Python Descriptors: __get__, __set__, __delete__",
    order: 84,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Descriptors: __get__, __set__, __delete__\n\nPython Descriptors: __get__, __set__, __delete__ is Python's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Descriptors: __get__, __set__, __delete__ following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Descriptors: __get__, __set__, __delete__ follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Descriptors: __get__, __set__, __delete__ helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Descriptors: __get__, __set__, __delete__ — Data structures:",
              "content": "# Python Descriptors: __get__, __set__, __delete__ — Python Data Structures\n\n# List comprehension — Pythonic\nsquares = [x**2 for x in range(10) if x % 2 == 0]\n# [0, 4, 16, 36, 64]\n\n# Dictionary comprehension\nword_lengths = {word: len(word) for word in [\"hello\", \"world\"]}\n# {\"hello\": 5, \"world\": 5}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)  # Union: {1,2,3,4,5,6}\nprint(a & b)  # Intersection: {3,4}\nprint(a - b)  # Difference: {1,2}\n\n# Collections module\nfrom collections import Counter, defaultdict\ntext = \"hello world\"\nchar_count = Counter(text)\n# Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Descriptors: __get__, __set__, __delete__\n\nPython's built-in data structures — lists, tuples, sets, dicts, and the collections module. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Descriptors: __get__, __set__, __delete__ — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch84-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch84-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch84-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch84-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch84-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["python-ch83"],
    keyPoints: ["Python Descriptors: __get__, __set__, __delete__ follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Descriptors: __get__, __set__, __delete__ helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch85",
    courseId: "python",
    title: "Python Metaclasses: Type & Custom Metaclasses",
    order: 85,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Metaclasses: Type & Custom Metaclasses\n\nPython Metaclasses: Type & Custom Metaclasses is object-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Metaclasses: Type & Custom Metaclasses following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Metaclasses: Type & Custom Metaclasses follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Metaclasses: Type & Custom Metaclasses helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Metaclasses: Type & Custom Metaclasses — Python OOP:",
              "content": "# Python Metaclasses: Type & Custom Metaclasses — Modern Python OOP\n\nfrom dataclasses import dataclass\nfrom abc import ABC, abstractmethod\n\n@dataclass\nclass Product:\n    \"\"\"Product with automatic __init__, __repr__, __eq__.\"\"\"\n    name: str\n    price: float\n    quantity: int = 0\n    \n    @property\n    def total_value(self) -> float:\n        return self.price * self.quantity\n    \n    def __str__(self) -> str:\n        return f\"{self.name}: ${self.price:.2f} ({self.quantity})\"\n\nclass DiscountPolicy(ABC):\n    @abstractmethod\n    def apply(self, price: float) -> float:\n        pass\n\nclass SeasonalDiscount(DiscountPolicy):\n    def apply(self, price: float) -> float:\n        return price * 0.9  # 10% off\n\nproduct = Product(\"Widget\", 19.99, 5)\ndiscount = SeasonalDiscount()\nprint(f\"Total: ${discount.apply(product.total_value):.2f}\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Metaclasses: Type & Custom Metaclasses\n\nObject-oriented programming in Python — classes, inheritance, magic methods, and dataclasses. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Metaclasses: Type & Custom Metaclasses follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch85-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "What is the correct way to define a class in Python?",
          "options": [
            {
              "id": "a",
              "text": "class MyClass:"
            },
            {
              "id": "b",
              "text": "class MyClass {}"
            },
            {
              "id": "c",
              "text": "define MyClass:"
            },
            {
              "id": "d",
              "text": "MyClass = class()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses 'class ClassName:' followed by indented methods. The __init__ method is the constructor."
        },
        {
          "id": "python-ch85-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Python supports multiple inheritance.",
          "correctAnswer": true,
          "explanation": "Python supports multiple inheritance. The Method Resolution Order (MRO, accessible via ClassName.__mro__) determines which parent's method is called."
        },
        {
          "id": "python-ch85-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch85-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["python-ch84"],
    keyPoints: ["Python Metaclasses: Type & Custom Metaclasses follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Metaclasses: Type & Custom Metaclasses helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch86",
    courseId: "python",
    title: "Python Slots: Memory Optimization",
    order: 86,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Slots: Memory Optimization\n\nPython Slots: Memory Optimization is advanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Slots: Memory Optimization following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Slots: Memory Optimization follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Slots: Memory Optimization helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Slots: Memory Optimization — Example:",
              "content": "# Python Slots: Memory Optimization — Python Example\n\"\"\"Demonstration of Python Slots: Memory Optimization in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Slots: Memory Optimization\n\nAdvanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Slots: Memory Optimization follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch86-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch86-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch86-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch86-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["python-ch85"],
    keyPoints: ["Python Slots: Memory Optimization follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Slots: Memory Optimization helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch87",
    courseId: "python",
    title: "Python Weak References & WeakRef",
    order: 87,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Weak References & WeakRef\n\nPython Weak References & WeakRef is advanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Weak References & WeakRef following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Weak References & WeakRef follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Weak References & WeakRef helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Weak References & WeakRef — Example:",
              "content": "# Python Weak References & WeakRef — Python Example\n\"\"\"Demonstration of Python Weak References & WeakRef in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Weak References & WeakRef\n\nAdvanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Weak References & WeakRef follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch87-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch87-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch87-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch87-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["python-ch86"],
    keyPoints: ["Python Weak References & WeakRef follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Weak References & WeakRef helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch88",
    courseId: "python",
    title: "Python Pickle & Serialization",
    order: 88,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Pickle & Serialization\n\nPython Pickle & Serialization is advanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Pickle & Serialization following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Pickle & Serialization follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Pickle & Serialization helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Pickle & Serialization — Example:",
              "content": "# Python Pickle & Serialization — Python Example\n\"\"\"Demonstration of Python Pickle & Serialization in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Pickle & Serialization\n\nAdvanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Pickle & Serialization follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch88-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch88-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch88-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch88-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["python-ch87"],
    keyPoints: ["Python Pickle & Serialization follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Pickle & Serialization helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch89",
    courseId: "python",
    title: "Python Functools: Partial, LRU Cache, Wraps",
    order: 89,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Functools: Partial, LRU Cache, Wraps\n\nPython Functools: Partial, LRU Cache, Wraps is advanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Functools: Partial, LRU Cache, Wraps following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Functools: Partial, LRU Cache, Wraps follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Functools: Partial, LRU Cache, Wraps helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Functools: Partial, LRU Cache, Wraps — Example:",
              "content": "# Python Functools: Partial, LRU Cache, Wraps — Python Example\n\"\"\"Demonstration of Python Functools: Partial, LRU Cache, Wraps in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Functools: Partial, LRU Cache, Wraps\n\nAdvanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Functools: Partial, LRU Cache, Wraps follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch89-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch89-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch89-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch89-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["python-ch88"],
    keyPoints: ["Python Functools: Partial, LRU Cache, Wraps follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Functools: Partial, LRU Cache, Wraps helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch90",
    courseId: "python",
    title: "Python Typing: Generics, Union, Optional, Protocol",
    order: 90,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Typing: Generics, Union, Optional, Protocol\n\nPython Typing: Generics, Union, Optional, Protocol is advanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Typing: Generics, Union, Optional, Protocol following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Typing: Generics, Union, Optional, Protocol follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Typing: Generics, Union, Optional, Protocol helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Typing: Generics, Union, Optional, Protocol — Example:",
              "content": "# Python Typing: Generics, Union, Optional, Protocol — Python Example\n\"\"\"Demonstration of Python Typing: Generics, Union, Optional, Protocol in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Typing: Generics, Union, Optional, Protocol\n\nAdvanced Python features — decorators, generators, descriptors, metaclasses, and functools. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Prefer @dataclass for simple data containers — it auto-generates __init__, __repr__, __eq__, and __hash__. Only write a full class when you need methods, inheritance, or behavior beyond data storage."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Typing: Generics, Union, Optional, Protocol follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Fluent Python (Ramalho)** — The definitive guide to idiomatic Python\n2. **Python Cookbook (Beazley)** — Recipes for modern Python\n3. **Effective Python (Slatkin)** — 90 specific ways to write better Python\n4. **Real Python: OOP** — Python OOP tutorials and guides\n5. **PyCon Talks (YouTube)** — Conference talks from Python experts"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch90-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch90-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch90-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch90-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["python-ch89"],
    keyPoints: ["Python Typing: Generics, Union, Optional, Protocol follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Typing: Generics, Union, Optional, Protocol helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch91",
    courseId: "python",
    title: "Python Asyncio: Event Loop & Coroutines",
    order: 91,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Asyncio: Event Loop & Coroutines\n\nPython Asyncio: Event Loop & Coroutines is asynchronous Python with asyncio — coroutines, tasks, and async I/O. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Asyncio: Event Loop & Coroutines following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Asyncio: Event Loop & Coroutines follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Asyncio: Event Loop & Coroutines helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Asyncio: Event Loop & Coroutines — Async Python:",
              "content": "# Python Asyncio: Event Loop & Coroutines — Async/Await in Python\nimport asyncio\nimport aiohttp\n\nasync def fetch_url(session: aiohttp.ClientSession, url: str) -> dict:\n    \"\"\"Fetch a URL asynchronously.\"\"\"\n    async with session.get(url) as response:\n        return await response.json()\n\nasync def main():\n    urls = [\n        \"https://api.example.com/users\",\n        \"https://api.example.com/posts\",\n    ]\n    async with aiohttp.ClientSession() as session:\n        tasks = [fetch_url(session, url) for url in urls]\n        results = await asyncio.gather(*tasks)\n        for result in results:\n            print(f\"Fetched {len(result)} items\")\n\n# Python 3.7+ — simple entry point\nasyncio.run(main())"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Asyncio: Event Loop & Coroutines\n\nAsynchronous Python with asyncio — coroutines, tasks, and async I/O. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Not everything needs to be async. Use async I/O for network and file operations. CPU-bound work should use multiprocessing or threading. Mixing sync and async requires careful design — use asyncio.to_thread() for sync functions in async code."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Asyncio: Event Loop & Coroutines follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch91-mc1",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "How do you run multiple coroutines concurrently in Python asyncio?",
          "options": [
            {
              "id": "a",
              "text": "asyncio.gather()"
            },
            {
              "id": "b",
              "text": "asyncio.run()"
            },
            {
              "id": "c",
              "text": "asyncio.wait_for()"
            },
            {
              "id": "d",
              "text": "asyncio.sleep()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "asyncio.gather() runs multiple awaitables concurrently and returns results. asyncio.run() runs a single coroutine entry point."
        },
        {
          "id": "python-ch91-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Async functions in Python are defined with the 'async def' syntax.",
          "correctAnswer": true,
          "explanation": "Python uses 'async def' to define coroutines. Inside them, 'await' suspends execution until the awaited operation completes."
        },
        {
          "id": "python-ch91-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch91-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["python-ch90"],
    keyPoints: ["Python Asyncio: Event Loop & Coroutines follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Asyncio: Event Loop & Coroutines helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch92",
    courseId: "python",
    title: "Python Async/Await Syntax",
    order: 92,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Async/Await Syntax\n\nPython Async/Await Syntax is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Async/Await Syntax following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Async/Await Syntax follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Async/Await Syntax helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Async/Await Syntax — Python basics:",
              "content": "# Python Async/Await Syntax — Python Fundamentals\n\"\"\"\"Python Async/Await Syntax — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Async/Await Syntax\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Async/Await Syntax — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch92-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch92-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch92-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch92-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch92-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["python-ch91"],
    keyPoints: ["Python Async/Await Syntax follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Async/Await Syntax helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch93",
    courseId: "python",
    title: "Python Async Context Managers & Async Iterators",
    order: 93,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Async Context Managers & Async Iterators\n\nPython Async Context Managers & Async Iterators is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Async Context Managers & Async Iterators following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Async Context Managers & Async Iterators follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Async Context Managers & Async Iterators helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Async Context Managers & Async Iterators — Error handling and files:",
              "content": "# Python Async Context Managers & Async Iterators — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Async Context Managers & Async Iterators\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Async Context Managers & Async Iterators follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch93-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch93-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch93-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch93-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["python-ch92"],
    keyPoints: ["Python Async Context Managers & Async Iterators follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Async Context Managers & Async Iterators helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch94",
    courseId: "python",
    title: "Python Asyncio: Tasks, Futures, Gather",
    order: 94,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Asyncio: Tasks, Futures, Gather\n\nPython Asyncio: Tasks, Futures, Gather is asynchronous Python with asyncio — coroutines, tasks, and async I/O. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Asyncio: Tasks, Futures, Gather following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Asyncio: Tasks, Futures, Gather follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Asyncio: Tasks, Futures, Gather helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Asyncio: Tasks, Futures, Gather — Async Python:",
              "content": "# Python Asyncio: Tasks, Futures, Gather — Async/Await in Python\nimport asyncio\nimport aiohttp\n\nasync def fetch_url(session: aiohttp.ClientSession, url: str) -> dict:\n    \"\"\"Fetch a URL asynchronously.\"\"\"\n    async with session.get(url) as response:\n        return await response.json()\n\nasync def main():\n    urls = [\n        \"https://api.example.com/users\",\n        \"https://api.example.com/posts\",\n    ]\n    async with aiohttp.ClientSession() as session:\n        tasks = [fetch_url(session, url) for url in urls]\n        results = await asyncio.gather(*tasks)\n        for result in results:\n            print(f\"Fetched {len(result)} items\")\n\n# Python 3.7+ — simple entry point\nasyncio.run(main())"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Asyncio: Tasks, Futures, Gather\n\nAsynchronous Python with asyncio — coroutines, tasks, and async I/O. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Not everything needs to be async. Use async I/O for network and file operations. CPU-bound work should use multiprocessing or threading. Mixing sync and async requires careful design — use asyncio.to_thread() for sync functions in async code."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Asyncio: Tasks, Futures, Gather follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch94-mc1",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "How do you run multiple coroutines concurrently in Python asyncio?",
          "options": [
            {
              "id": "a",
              "text": "asyncio.gather()"
            },
            {
              "id": "b",
              "text": "asyncio.run()"
            },
            {
              "id": "c",
              "text": "asyncio.wait_for()"
            },
            {
              "id": "d",
              "text": "asyncio.sleep()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "asyncio.gather() runs multiple awaitables concurrently and returns results. asyncio.run() runs a single coroutine entry point."
        },
        {
          "id": "python-ch94-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Async functions in Python are defined with the 'async def' syntax.",
          "correctAnswer": true,
          "explanation": "Python uses 'async def' to define coroutines. Inside them, 'await' suspends execution until the awaited operation completes."
        },
        {
          "id": "python-ch94-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch94-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["python-ch93"],
    keyPoints: ["Python Asyncio: Tasks, Futures, Gather follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Asyncio: Tasks, Futures, Gather helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch95",
    courseId: "python",
    title: "Python Aiohttp: Async HTTP Client/Server",
    order: 95,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Aiohttp: Async HTTP Client/Server\n\nPython Aiohttp: Async HTTP Client/Server is asynchronous Python with asyncio — coroutines, tasks, and async I/O. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Aiohttp: Async HTTP Client/Server following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Aiohttp: Async HTTP Client/Server follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Aiohttp: Async HTTP Client/Server helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Aiohttp: Async HTTP Client/Server — Async Python:",
              "content": "# Python Aiohttp: Async HTTP Client/Server — Async/Await in Python\nimport asyncio\nimport aiohttp\n\nasync def fetch_url(session: aiohttp.ClientSession, url: str) -> dict:\n    \"\"\"Fetch a URL asynchronously.\"\"\"\n    async with session.get(url) as response:\n        return await response.json()\n\nasync def main():\n    urls = [\n        \"https://api.example.com/users\",\n        \"https://api.example.com/posts\",\n    ]\n    async with aiohttp.ClientSession() as session:\n        tasks = [fetch_url(session, url) for url in urls]\n        results = await asyncio.gather(*tasks)\n        for result in results:\n            print(f\"Fetched {len(result)} items\")\n\n# Python 3.7+ — simple entry point\nasyncio.run(main())"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Aiohttp: Async HTTP Client/Server\n\nAsynchronous Python with asyncio — coroutines, tasks, and async I/O. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Not everything needs to be async. Use async I/O for network and file operations. CPU-bound work should use multiprocessing or threading. Mixing sync and async requires careful design — use asyncio.to_thread() for sync functions in async code."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Aiohttp: Async HTTP Client/Server follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch95-mc1",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "How do you run multiple coroutines concurrently in Python asyncio?",
          "options": [
            {
              "id": "a",
              "text": "asyncio.gather()"
            },
            {
              "id": "b",
              "text": "asyncio.run()"
            },
            {
              "id": "c",
              "text": "asyncio.wait_for()"
            },
            {
              "id": "d",
              "text": "asyncio.sleep()"
            }
          ],
          "correctAnswer": "a",
          "explanation": "asyncio.gather() runs multiple awaitables concurrently and returns results. asyncio.run() runs a single coroutine entry point."
        },
        {
          "id": "python-ch95-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Async functions in Python are defined with the 'async def' syntax.",
          "correctAnswer": true,
          "explanation": "Python uses 'async def' to define coroutines. Inside them, 'await' suspends execution until the awaited operation completes."
        },
        {
          "id": "python-ch95-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch95-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["python-ch94"],
    keyPoints: ["Python Aiohttp: Async HTTP Client/Server follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Aiohttp: Async HTTP Client/Server helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch96",
    courseId: "python",
    title: "Python Async File I/O & Databases",
    order: 96,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Async File I/O & Databases\n\nPython Async File I/O & Databases is how Python handles errors and file I/O — exceptions, context managers, and serialization. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Async File I/O & Databases following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Async File I/O & Databases follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Async File I/O & Databases helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Async File I/O & Databases — Error handling and files:",
              "content": "# Python Async File I/O & Databases — Python I/O and Errors\n\n# Context manager (with statement) — auto-closes file\nwith open(\"data.txt\", \"r\", encoding=\"utf-8\") as f:\n    content = f.read()\n    \n# Write to file\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Hello, World!\\n\")\n\n# Custom exception\nclass ValidationError(Exception):\n    \"\"\"Raised when data validation fails.\"\"\"\n    def __init__(self, field: str, message: str):\n        self.field = field\n        self.message = message\n        super().__init__(f\"{field}: {message}\")\n\n# Try/except/else/finally\ntry:\n    user_data = load_user(user_id)\nexcept FileNotFoundError:\n    print(\"User file not found\")\nexcept ValidationError as e:\n    print(f\"Validation failed for {e.field}: {e.message}\")\nelse:\n    print(f\"Loaded user: {user_data.name}\")\nfinally:\n    cleanup_resources()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Async File I/O & Databases\n\nHow Python handles errors and file I/O — exceptions, context managers, and serialization. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Async File I/O & Databases follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Forgetting to specify encoding='utf-8' when opening files can cause UnicodeDecodeErrors on systems with different default encodings (like Windows). Always specify encoding explicitly."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch96-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python keyword is used to handle exceptions (equivalent to catch)?",
          "options": [
            {
              "id": "a",
              "text": "except"
            },
            {
              "id": "b",
              "text": "catch"
            },
            {
              "id": "c",
              "text": "error"
            },
            {
              "id": "d",
              "text": "handle"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions. Use 'finally' for cleanup code that always runs."
        },
        {
          "id": "python-ch96-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "The 'with' statement automatically closes files when the block exits.",
          "correctAnswer": true,
          "explanation": "The 'with' statement is a context manager. When used with open(), it automatically calls close() when the block exits, even if an exception occurs."
        },
        {
          "id": "python-ch96-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch96-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["python-ch95"],
    keyPoints: ["Python Async File I/O & Databases follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Async File I/O & Databases helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch97",
    courseId: "python",
    title: "Python Unittest: TestCase, Asserts, Fixtures",
    order: 97,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Unittest: TestCase, Asserts, Fixtures\n\nPython Unittest: TestCase, Asserts, Fixtures is how Python controls program flow with conditionals, loops, and pattern matching. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Unittest: TestCase, Asserts, Fixtures following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Unittest: TestCase, Asserts, Fixtures follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Unittest: TestCase, Asserts, Fixtures helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Unittest: TestCase, Asserts, Fixtures — Control flow:",
              "content": "# Python Unittest: TestCase, Asserts, Fixtures — Python Control Flow\n\n# 1. If/elif/else with 'in' operator\nstatus = \"active\"\nif status not in (\"active\", \"pending\"):\n    print(\"Account disabled\")\nelif status == \"active\":\n    print(\"Welcome back!\")\nelse:\n    print(\"Please verify your email\")\n\n# 2. For loop with enumerate\nfruits = [\"apple\", \"banana\", \"cherry\"]\nfor i, fruit in enumerate(fruits, start=1):\n    print(f\"{i}. {fruit}\")\n\n# 3. While loop with else (runs if no break)\nn = 0\nwhile n < 3:\n    print(n)\n    n += 1\nelse:\n    print(\"Loop completed normally\")\n\n# 4. Match/case (Python 3.10+)\nmatch command.split():\n    case [\"quit\"]: exit()\n    case [\"hello\", name]: print(f\"Hi, {name}\")\n    case _: print(\"Unknown command\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Unittest: TestCase, Asserts, Fixtures\n\nHow Python controls program flow with conditionals, loops, and pattern matching. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python Unittest: TestCase, Asserts, Fixtures — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch97-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "Which Python data structure is ordered, mutable, and allows duplicate elements?",
          "options": [
            {
              "id": "a",
              "text": "List"
            },
            {
              "id": "b",
              "text": "Set"
            },
            {
              "id": "c",
              "text": "Tuple"
            },
            {
              "id": "d",
              "text": "Dictionary"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Lists are ordered, mutable, and allow duplicates. Sets are unordered, mutable, and unique. Tuples are ordered, immutable. Dicts use key-value pairs."
        },
        {
          "id": "python-ch97-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax?",
          "options": [
            {
              "id": "a",
              "text": "[expression for item in iterable if condition]"
            },
            {
              "id": "b",
              "text": "for item in iterable: if condition: expression"
            },
            {
              "id": "c",
              "text": "list(expression for item in iterable)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension [expr for item in iterable if cond] is Pythonic, readable, and faster than equivalent for loops or map/filter."
        },
        {
          "id": "python-ch97-tf1",
          "type": "true-false",
          "difficulty": "medium",
          "question": "Dictionary keys in Python must be of an immutable type.",
          "correctAnswer": true,
          "explanation": "Dictionary keys must be hashable (immutable): strings, numbers, tuples. Lists and dictionaries cannot be keys."
        },
        {
          "id": "python-ch97-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch97-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["python-ch96"],
    keyPoints: ["Python Unittest: TestCase, Asserts, Fixtures follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Unittest: TestCase, Asserts, Fixtures helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch98",
    courseId: "python",
    title: "Python Pytest: Functions, Fixtures, Parametrize",
    order: 98,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Pytest: Functions, Fixtures, Parametrize\n\nPython Pytest: Functions, Fixtures, Parametrize is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Pytest: Functions, Fixtures, Parametrize following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Pytest: Functions, Fixtures, Parametrize follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Pytest: Functions, Fixtures, Parametrize helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Pytest: Functions, Fixtures, Parametrize — Functions:",
              "content": "# Python Pytest: Functions, Fixtures, Parametrize — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Pytest: Functions, Fixtures, Parametrize\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Pytest: Functions, Fixtures, Parametrize — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch98-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch98-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch98-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch98-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["python-ch97"],
    keyPoints: ["Python Pytest: Functions, Fixtures, Parametrize follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Pytest: Functions, Fixtures, Parametrize helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch99",
    courseId: "python",
    title: "Python Pytest: Mocking & Monkeypatch",
    order: 99,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Pytest: Mocking & Monkeypatch\n\nPython Pytest: Mocking & Monkeypatch is testing, data science libraries, and best practices in Python. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Pytest: Mocking & Monkeypatch following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Pytest: Mocking & Monkeypatch follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Pytest: Mocking & Monkeypatch helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Pytest: Mocking & Monkeypatch — Example:",
              "content": "# Python Pytest: Mocking & Monkeypatch — Python Example\n\"\"\"Demonstration of Python Pytest: Mocking & Monkeypatch in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Pytest: Mocking & Monkeypatch\n\nTesting, data science libraries, and best practices in Python. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Pytest: Mocking & Monkeypatch follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch99-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch99-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch99-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch99-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["python-ch98"],
    keyPoints: ["Python Pytest: Mocking & Monkeypatch follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Pytest: Mocking & Monkeypatch helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch100",
    courseId: "python",
    title: "Python NumPy: Arrays, Operations, Broadcasting",
    order: 100,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python NumPy: Arrays, Operations, Broadcasting\n\nPython NumPy: Arrays, Operations, Broadcasting is the foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python NumPy: Arrays, Operations, Broadcasting following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python NumPy: Arrays, Operations, Broadcasting follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python NumPy: Arrays, Operations, Broadcasting helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python NumPy: Arrays, Operations, Broadcasting — Python basics:",
              "content": "# Python NumPy: Arrays, Operations, Broadcasting — Python Fundamentals\n\"\"\"\"Python NumPy: Arrays, Operations, Broadcasting — learning the basics of Python.\"\"\"\"\n\n# Variables — no type declaration needed\nname = \"Python\"\nversion = 3.13\nis_fun = True\n\n# F-strings (Python 3.6+) — clean string formatting\nprint(f\"Welcome to {name} {version}!\")\n\n# Type conversion\nage = \"25\"\nage_num = int(age)  # \"25\" → 25\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Swap — no temp variable needed\na, b = 10, 20\na, b = b, a  # a=20, b=10\n\n# None is Python's null\nresult = None\nif result is None:\n    print(\"No result yet\")"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python NumPy: Arrays, Operations, Broadcasting\n\nThe foundational building blocks of Python — syntax, variables, types, strings, and formatting. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use the Python REPL (just type 'python' in your terminal) to experiment with small code snippets. It's the fastest way to test an idea or understand how a function works. Use help() on any object to see its documentation."
          },
          {
              "type": "comparison",
              "title": "Python NumPy: Arrays, Operations, Broadcasting — Python Idioms",
              "headers": [
                  "Anti-Pattern",
                  "Pythonic Way",
                  "Why"
              ],
              "rows": [
                  [
                      "for i in range(len(list))",
                      "for item in list:",
                      "Direct iteration is cleaner"
                  ],
                  [
                      "if x == True:",
                      "if x:",
                      "Implicit boolean check"
                  ],
                  [
                      "if len(list) > 0:",
                      "if list:",
                      "Empty collections are falsy"
                  ],
                  [
                      "x = x + 1",
                      "x += 1",
                      "Augmented assignment"
                  ],
                  [
                      "s = 'a' + ',' + 'b'",
                      "s = ','.join(['a','b'])",
                      "String join is faster"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Official Tutorial** — The official Python tutorial\n2. **Automate the Boring Stuff with Python (Sweigart)** — Free book for beginners\n3. **Real Python** — High-quality Python tutorials and articles\n4. **Python Crash Course (Matthes)** — Project-based introduction\n5. **Pythontutor.com** — Visualize Python code execution step-by-step"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch100-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses to define functions."
        },
        {
          "id": "python-ch100-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation (not braces) to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch100-fb1",
          "type": "fill-blank",
          "difficulty": "easy",
          "question": "The Python function that prints output to the console is: ___()",
          "correctAnswer": "print",
          "explanation": "print() is Python's built-in function for console output. F-strings (print(f'...')) provide clean string formatting."
        },
        {
          "id": "python-ch100-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch100-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["python-ch99"],
    keyPoints: ["Python NumPy: Arrays, Operations, Broadcasting follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python NumPy: Arrays, Operations, Broadcasting helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch101",
    courseId: "python",
    title: "Python Pandas: Series, DataFrames, GroupBy",
    order: 101,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Pandas: Series, DataFrames, GroupBy\n\nPython Pandas: Series, DataFrames, GroupBy is testing, data science libraries, and best practices in Python. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Pandas: Series, DataFrames, GroupBy following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Pandas: Series, DataFrames, GroupBy follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Pandas: Series, DataFrames, GroupBy helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Pandas: Series, DataFrames, GroupBy — Example:",
              "content": "# Python Pandas: Series, DataFrames, GroupBy — Python Example\n\"\"\"Demonstration of Python Pandas: Series, DataFrames, GroupBy in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Pandas: Series, DataFrames, GroupBy\n\nTesting, data science libraries, and best practices in Python. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Pandas: Series, DataFrames, GroupBy follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch101-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch101-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch101-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch101-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["python-ch100"],
    keyPoints: ["Python Pandas: Series, DataFrames, GroupBy follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Pandas: Series, DataFrames, GroupBy helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch102",
    courseId: "python",
    title: "Python Matplotlib: Plots, Charts, Figures",
    order: 102,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Matplotlib: Plots, Charts, Figures\n\nPython Matplotlib: Plots, Charts, Figures is testing, data science libraries, and best practices in Python. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Matplotlib: Plots, Charts, Figures following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Matplotlib: Plots, Charts, Figures follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Matplotlib: Plots, Charts, Figures helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Matplotlib: Plots, Charts, Figures — Example:",
              "content": "# Python Matplotlib: Plots, Charts, Figures — Python Example\n\"\"\"Demonstration of Python Matplotlib: Plots, Charts, Figures in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Matplotlib: Plots, Charts, Figures\n\nTesting, data science libraries, and best practices in Python. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Matplotlib: Plots, Charts, Figures follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch102-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch102-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch102-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch102-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["python-ch101"],
    keyPoints: ["Python Matplotlib: Plots, Charts, Figures follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Matplotlib: Plots, Charts, Figures helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch103",
    courseId: "python",
    title: "Python SQLite: Databases in Python",
    order: 103,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python SQLite: Databases in Python\n\nPython SQLite: Databases in Python is testing, data science libraries, and best practices in Python. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python SQLite: Databases in Python following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python SQLite: Databases in Python follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python SQLite: Databases in Python helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python SQLite: Databases in Python — Example:",
              "content": "# Python SQLite: Databases in Python — Python Example\n\"\"\"Demonstration of Python SQLite: Databases in Python in Python.\"\"\"\n\ndef process_items(items: list) -> dict:\n    \"\"\"Process a list of items and return statistics.\"\"\"\n    if not items:\n        return {\"count\": 0, \"unique\": 0, \"summary\": \"empty\"}\n    \n    return {\n        \"count\": len(items),\n        \"unique\": len(set(items)),\n        \"summary\": f\"Processed {len(items)} items\"\n    }\n\n# Usage\nresult = process_items([\"a\", \"b\", \"a\", \"c\"])\nprint(result)  # {\"count\": 4, \"unique\": 3, ...}"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python SQLite: Databases in Python\n\nTesting, data science libraries, and best practices in Python. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python SQLite: Databases in Python follows the principle of least surprise",
                  "Use type hints for better code documentation and IDE support",
                  "Prefer list comprehensions over map/filter for readability",
                  "Context managers (with statements) handle resources cleanly",
                  "Write tests with pytest for reliable, maintainable code"
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch103-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python?",
          "options": [
            {
              "id": "a",
              "text": "def function_name():"
            },
            {
              "id": "b",
              "text": "function function_name()"
            },
            {
              "id": "c",
              "text": "func function_name():"
            },
            {
              "id": "d",
              "text": "define function_name():"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Python uses the 'def' keyword followed by the function name and parentheses."
        },
        {
          "id": "python-ch103-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks.",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) instead of braces."
        },
        {
          "id": "python-ch103-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch103-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["python-ch102"],
    keyPoints: ["Python SQLite: Databases in Python follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python SQLite: Databases in Python helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
  {
    id: "python-ch104",
    courseId: "python",
    title: "Python Best Practices: PEP 8, Type Hints, Documentation",
    order: 104,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Best Practices: PEP 8, Type Hints, Documentation\n\nPython Best Practices: PEP 8, Type Hints, Documentation is how Python functions work — parameters, scope, modules, packages, and type hints. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nPython's design philosophy is captured in the Zen of Python: \"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.\" This chapter explores Python Best Practices: PEP 8, Type Hints, Documentation following these principles."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Best Practices: PEP 8, Type Hints, Documentation follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Best Practices: PEP 8, Type Hints, Documentation helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic, Pythonic code"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Best Practices: PEP 8, Type Hints, Documentation — Functions:",
              "content": "# Python Best Practices: PEP 8, Type Hints, Documentation — Python Functions\n\n# Type hints (Python 3.5+) — self-documenting code\ndef greet(name: str, greeting: str = \"Hello\") -> str:\n    \"\"\"Generate a greeting message.\n    \n    Args:\n        name: The person to greet\n        greeting: The greeting to use\n        \n    Returns:\n        The formatted greeting string\n    \"\"\"\n    return f\"{greeting}, {name}!\"\n\n# *args — variable positional arguments\ndef sum_all(*args: int) -> int:\n    return sum(args)\n\n# **kwargs — variable keyword arguments\ndef create_user(**kwargs: str) -> dict:\n    return kwargs\n\n# Lambda — anonymous function\ndouble = lambda x: x * 2\n\n# The __name__ guard\nif __name__ == \"__main__\":\n    print(greet(\"World\"))"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Best Practices: PEP 8, Type Hints, Documentation\n\nHow Python functions work — parameters, scope, modules, packages, and type hints. Python has specific idioms for this that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use breakpoint() (Python 3.7+) to set a debugger breakpoint. It drops you into pdb (Python Debugger) where you can inspect variables, execute code, and step through your program interactively."
          },
          {
              "type": "comparison",
              "title": "Python Best Practices: PEP 8, Type Hints, Documentation — Python vs Other Languages",
              "headers": [
                  "Feature",
                  "Python",
                  "JavaScript/Java"
              ],
              "rows": [
                  [
                      "Block scope",
                      "Indentation",
                      "Braces {}"
                  ],
                  [
                      "Type system",
                      "Dynamic + type hints",
                      "Static or dynamic"
                  ],
                  [
                      "Lists",
                      "list (mutable)",
                      "Array/ArrayList"
                  ],
                  [
                      "Dictionary",
                      "dict",
                      "Map/HashMap"
                  ],
                  [
                      "Error handling",
                      "try/except",
                      "try/catch"
                  ]
              ]
          },
          {
              "type": "callout",
              "style": "warning",
              "content": "⚠️ **Common Pitfall:** Mutable default arguments in Python functions can cause surprising behavior. Always use None as the default for mutable parameters and create a new instance inside the function body."
          },
          {
              "type": "text",
              "content": "## Recommended Resources\n\n1. **Python.org Documentation** — The official Python docs\n2. **Real Python** — Practical Python tutorials for all levels\n3. **PyPI (Python Package Index)** — Find packages for any task\n4. **PEP 8 — Style Guide** — Python's official style guidelines\n5. **Awesome Python (GitHub)** — Curated list of Python frameworks and tools"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need. Write simple, readable code and let Python's clarity speak for itself."
          }
      ],
    examPool: [
        {
          "id": "python-ch104-mc1",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "How do you define a function with default parameters in Python?",
          "options": [
            {
              "id": "a",
              "text": "def greet(name='Guest'):"
            },
            {
              "id": "b",
              "text": "def greet(name='Guest')"
            },
            {
              "id": "c",
              "text": "def greet(name = default 'Guest'):"
            },
            {
              "id": "d",
              "text": "def greet(default name='Guest'):"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Default parameters use the syntax param=value in the function signature. They are evaluated once at definition time."
        },
        {
          "id": "python-ch104-fb1",
          "type": "fill-blank",
          "difficulty": "hard",
          "question": "The special parameter that captures excess keyword arguments is: ___",
          "correctAnswer": "**kwargs",
          "explanation": "**kwargs captures additional keyword arguments as a dictionary. *args captures positional arguments as a tuple."
        },
        {
          "id": "python-ch104-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for production code?",
          "options": [
            {
              "id": "a",
              "text": "Use type hints, docstrings, and comprehensive testing"
            },
            {
              "id": "b",
              "text": "Write minimal code without documentation"
            },
            {
              "id": "c",
              "text": "Use global variables for simplicity"
            },
            {
              "id": "d",
              "text": "Avoid imports to keep code self-contained"
            }
          ],
          "correctAnswer": "a",
          "explanation": "Production Python should use type hints (for mypy), docstrings (for documentation), and tests (for reliability)."
        },
        {
          "id": "python-ch104-fb2",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "Python's package manager used to install third-party packages is called: ___",
          "correctAnswer": "pip",
          "explanation": "pip (Pip Installs Packages) is Python's standard package manager. Use 'pip install package-name' to install packages from PyPI."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["python-ch103"],
    keyPoints: ["Python Best Practices: PEP 8, Type Hints, Documentation follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Best Practices: PEP 8, Type Hints, Documentation helps prevent common Python pitfalls","Apply these patterns to write more idiomatic, Pythonic code"],
  },
];

const pythonProjects: Project[] = [
  {
    id: "py-hello",
    courseId: "python",
    title: "Hello World",
    description: "Write and run your first Python program. Learn basic syntax, the print() function, and how to run Python scripts.",
    difficulty: 1,
    order: 1,
    learningObjectives: ["Install Python and run a script","Use print() for output","Understand basic Python syntax"],
    requirements: ["Print 'Hello, World!' to the console","Print your name and age on separate lines","Add a comment explaining each line"],
    hints: ["print() displays text to the console","Comments start with #","Strings go in quotes (single or double)"],
    expectedConcepts: ["python-introduction","python-getting-started","python-syntax","python-comments"],
    estimatedMinutes: 10,
    xpReward: 15,
  },
  {
    id: "py-bmi",
    courseId: "python",
    title: "BMI Calculator",
    description: "Calculate Body Mass Index from user input — practicing functions, math operations, and user input.",
    difficulty: 1,
    order: 2,
    learningObjectives: ["Define and call functions","Use input() to accept user input","Perform arithmetic operations"],
    requirements: ["Ask for weight (kg) and height (m)","Calculate BMI = weight / height²","Display BMI category: Underweight (<18.5), Normal, Overweight (25-30), Obese (>30)"],
    hints: ["def calculate_bmi(weight, height):","Use float(input()) for numeric input","Use if/elif/else for BMI categories"],
    expectedConcepts: ["python-functions","python-math","python-if-else","python-user-input"],
    estimatedMinutes: 20,
    xpReward: 25,
  },
  {
    id: "py-number-game",
    courseId: "python",
    title: "Number Guessing Game",
    description: "The computer picks a random number — guess it with hints. Learn loops, conditionals, and the random module.",
    difficulty: 1,
    order: 3,
    learningObjectives: ["Use the random module","Implement game loops with while","Provide feedback with if/elif/else"],
    requirements: ["Random number between 1-100","Player enters guesses","Hint: too high / too low","Show attempt count","Max 10 attempts"],
    hints: ["import random, target = random.randint(1, 100)","while True for game loop with break","int(input()) to read guess"],
    expectedConcepts: ["python-random","python-while","python-if-else","python-functions"],
    estimatedMinutes: 25,
    xpReward: 30,
  },
  {
    id: "py-word-count",
    courseId: "python",
    title: "Word Counter",
    description: "Count words, characters, and sentences in user-provided text — mastering string methods.",
    difficulty: 1,
    order: 4,
    learningObjectives: ["Use string methods for text analysis","Split and join strings","Count occurrences"],
    requirements: ["Accept multi-line text input","Count: words, characters (with/without spaces), sentences","Display results in a formatted output"],
    hints: ["Use .split() to get words","len() for counting","Count sentences by splitting on '.', '!', '?'"],
    expectedConcepts: ["python-strings","python-string-methods","python-functions"],
    estimatedMinutes: 20,
    xpReward: 25,
  },
  {
    id: "py-password-gen",
    courseId: "python",
    title: "Password Generator",
    description: "Generate secure random passwords with customizable options — strings, randomness, and lists.",
    difficulty: 2,
    order: 5,
    learningObjectives: ["Random selection from character pools","Build strings with loops","Handle user preferences"],
    requirements: ["Choose password length (8-32)","Options for uppercase, lowercase, digits, symbols","Generate and display the password","Generate multiple passwords at once"],
    hints: ["import string for ascii_letters, digits, punctuation","random.choice() picks one random character","List comprehension: [random.choice(pool) for _ in range(n)]"],
    expectedConcepts: ["python-random","python-strings","python-string-methods","python-loops","python-modules"],
    estimatedMinutes: 25,
    xpReward: 35,
  },
  {
    id: "py-hangman",
    courseId: "python",
    title: "Hangman Game",
    description: "Build the classic word-guessing game Hangman — lists, strings, and game loop logic.",
    difficulty: 2,
    order: 6,
    learningObjectives: ["Work with lists and string manipulation","Implement game state tracking","Design a simple text-based UI"],
    requirements: ["Random word from a predefined list","Display blanks for unguessed letters (_ _ _ _ _)","Show guessed letters and remaining attempts","ASCII art showing the hangman progress","Win/lose detection"],
    hints: ["Use list('word') to work with individual letters","Track guessed: set() stores guessed letters","Display: ' '.join('_' if l not in guessed else l for l in word)"],
    expectedConcepts: ["python-lists","python-strings","python-random","python-functions","python-loops"],
    estimatedMinutes: 40,
    xpReward: 45,
  },
  {
    id: "py-todo-file",
    courseId: "python",
    title: "To-Do List Manager",
    description: "Build a persistent to-do list using file I/O — reading, writing, and managing data in files.",
    difficulty: 2,
    order: 7,
    learningObjectives: ["Read and write text files","Parse structured data","Build a menu-driven CLI application"],
    requirements: ["Add, view, complete, and delete tasks","Tasks persist in a text file","Numbered menu with options","Save on every change"],
    hints: ["Store tasks as lines in a .txt file","with open('todos.txt', 'r') as f: for reading","Use .strip() to clean lines","Each line: task_number|task_text|completed"],
    expectedConcepts: ["python-file-read","python-file-write","python-functions","python-loops"],
    estimatedMinutes: 35,
    xpReward: 40,
  },
  {
    id: "py-mad-libs",
    courseId: "python",
    title: "Mad Libs Generator",
    description: "Create a Mad Libs word game — collect words from the user and insert them into a story template.",
    difficulty: 1,
    order: 8,
    learningObjectives: ["Collect and store user input","Use string formatting effectively","Build a template-based story generator"],
    requirements: ["Ask for words (noun, verb, adjective, etc.)","Insert words into a story template","Display the complete funny story","Allow replay with different words"],
    hints: ["Use f-strings for template: f'The {adj} {noun} {verb}.'","Store user inputs in a dict","Create multiple story templates"],
    expectedConcepts: ["python-strings","python-string-methods","python-functions","python-dictionaries"],
    estimatedMinutes: 20,
    xpReward: 25,
  },
  {
    id: "py-rps",
    courseId: "python",
    title: "Rock Paper Scissors",
    description: "Play Rock Paper Scissors against the computer — conditionals, random choices, and score tracking.",
    difficulty: 1,
    order: 9,
    learningObjectives: ["Use random selection","Implement game rules with conditionals","Track scores across rounds"],
    requirements: ["Player picks Rock, Paper, or Scissors","Computer picks randomly","Determine winner each round","Best of 5 rounds","Display final winner"],
    hints: ["Use random.choice(['rock', 'paper', 'scissors'])","Create a dict mapping choice → beats","Use while rounds < 5 for the game loop"],
    expectedConcepts: ["python-if-else","python-random","python-while","python-dictionaries"],
    estimatedMinutes: 25,
    xpReward: 30,
  },
  {
    id: "py-caesar",
    courseId: "python",
    title: "Caesar Cipher",
    description: "Implement the Caesar cipher encryption and decryption — string manipulation and algorithmic thinking.",
    difficulty: 2,
    order: 10,
    learningObjectives: ["Implement a substitution cipher","Work with character codes (ord/char)","Handle wrap-around in a circular alphabet"],
    requirements: ["Input: message and shift value","Encrypt: shift each letter by the shift amount","Decrypt: reverse the shift","Preserve case and non-letter characters","Brute-force decrypt by trying all 26 shifts"],
    hints: ["ord('a') → 97, chr(97) → 'a'","Shift: (ord(c) - 97 + shift) % 26 + 97","Preserve case by checking .isupper() / .islower()"],
    expectedConcepts: ["python-strings","python-string-methods","python-loops","python-functions"],
    estimatedMinutes: 30,
    xpReward: 40,
  },
  {
    id: "py-quiz",
    courseId: "python",
    title: "Quiz Game",
    description: "Build a multiple-choice quiz game using dictionaries and lists — data-driven programming.",
    difficulty: 2,
    order: 11,
    learningObjectives: ["Structure quiz data with dicts and lists","Implement scoring and feedback","Randomize question order"],
    requirements: ["10+ questions with 4 options each","Shuffle question order each game","Display score after each answer","Show final score and percentage","Option to replay"],
    hints: ["questions = [{ 'q': '...', 'options': [...], 'correct': 2 }]","random.shuffle(questions) for order","Use enumerate() for numbered options"],
    expectedConcepts: ["python-dictionaries","python-lists","python-random","python-functions","python-loops"],
    estimatedMinutes: 35,
    xpReward: 45,
  },
  {
    id: "py-contacts",
    courseId: "python",
    title: "Contact Book",
    description: "Build a contact book that saves to JSON — CRUD operations and data serialization.",
    difficulty: 2,
    order: 12,
    learningObjectives: ["Implement CRUD operations","Serialize/deserialize with JSON","Build a user-friendly CLI"],
    requirements: ["Add contacts (name, phone, email)","View all contacts as a list","Search contacts by name","Update existing contacts","Delete contacts","Persist to contacts.json"],
    hints: ["Use json.dump() / json.load() for persistence","Each contact: { 'id': 1, 'name': '...', 'phone': '...', 'email': '...' }","Use .lower() for case-insensitive search"],
    expectedConcepts: ["python-json","python-file-read","python-file-write","python-dictionaries","python-functions"],
    estimatedMinutes: 40,
    xpReward: 50,
  },
  {
    id: "py-weather-cli",
    courseId: "python",
    title: "Weather CLI",
    description: "Fetch real weather data from a public API and display it in the terminal — learning HTTP requests.",
    difficulty: 3,
    order: 13,
    learningObjectives: ["Make HTTP requests with the requests library","Parse JSON responses","Handle API errors gracefully"],
    requirements: ["Input a city name","Fetch current weather from OpenWeatherMap API","Display temperature, conditions, humidity, wind","Handle network errors and invalid cities"],
    hints: ["pip install requests","Use requests.get(url).json()","Store API key in an environment variable","Use try/except for connection errors"],
    expectedConcepts: ["python-modules","python-pip","python-json","python-exceptions","python-functions"],
    estimatedMinutes: 45,
    xpReward: 60,
  },
  {
    id: "py-expense-tracker",
    courseId: "python",
    title: "Expense Tracker",
    description: "Track expenses and generate summaries — CSV file handling and data analysis basics.",
    difficulty: 2,
    order: 14,
    learningObjectives: ["Read/write CSV files","Calculate summaries with aggregation","Display formatted reports"],
    requirements: ["Add expenses (date, category, amount, description)","View all expenses","Filter by category","Show totals per category and overall","Export summary as CSV"],
    hints: ["import csv — use csv.writer() and csv.reader()","Store expenses as a list of dicts","Use collections.defaultdict for category sums"],
    expectedConcepts: ["python-csv","python-dictionaries","python-functions","python-exceptions"],
    estimatedMinutes: 40,
    xpReward: 50,
  },
  {
    id: "py-web-scraper",
    courseId: "python",
    title: "Web Scraper",
    description: "Scrape and extract data from web pages — learning BeautifulSoup and HTML parsing.",
    difficulty: 3,
    order: 15,
    learningObjectives: ["Send HTTP requests and parse HTML","Extract structured data from web pages","Handle pagination and rate limiting"],
    requirements: ["Fetch web page content with requests","Parse HTML with BeautifulSoup","Extract specific elements (titles, links, prices)","Save results to a CSV file","Handle errors for missing elements"],
    hints: ["pip install beautifulsoup4 requests","Use soup.find_all('tag', class_='cls') for selection","Save extracted data as list of dicts","Add time.sleep(1) between requests to be polite"],
    expectedConcepts: ["python-modules","python-pip","python-csv","python-loops","python-functions"],
    estimatedMinutes: 50,
    xpReward: 65,
  },
  {
    id: "py-tic-tac-toe",
    courseId: "python",
    title: "Tic-Tac-Toe (CLI)",
    description: "Build Tic-Tac-Toe for the terminal — 2D arrays, game logic, and simple AI opponent.",
    difficulty: 2,
    order: 16,
    learningObjectives: ["Work with 2D arrays/list of lists","Implement win-condition checking","Build a simple AI"],
    requirements: ["3×3 board displayed in terminal","Two-player mode","AI opponent mode","Win/draw detection","Play again option"],
    hints: ["Board: [[' ' for _ in range(3)] for _ in range(3)]","Check rows, columns, diagonals for 3 in a row","Simple AI: pick random empty cell as fallback"],
    expectedConcepts: ["python-lists","python-loops","python-functions","python-random"],
    estimatedMinutes: 40,
    xpReward: 50,
  },
  {
    id: "py-markdown-html",
    courseId: "python",
    title: "Markdown to HTML Converter",
    description: "Convert Markdown text to HTML — a practical exercise in text parsing and regex.",
    difficulty: 3,
    order: 17,
    learningObjectives: ["Use regular expressions for pattern matching","Implement a text-to-HTML pipeline","Output valid HTML"],
    requirements: ["Read Markdown from a file or input","Convert: # heading, **bold**, *italic*, - lists, [links]()","Output valid HTML","Save output to .html file"],
    hints: ["import re for regex substitutions","r'^#{1,6} (.*)' matches headings","re.sub(pattern, replacement, text) for replacement"],
    expectedConcepts: ["python-regex","python-strings","python-string-methods","python-file-read","python-file-write"],
    estimatedMinutes: 45,
    xpReward: 55,
  },
  {
    id: "py-snake-game",
    courseId: "python",
    title: "Snake Game",
    description: "Build the classic Snake game using Pygame — game loops, collision detection, and event handling.",
    difficulty: 3,
    order: 18,
    learningObjectives: ["Use Pygame for graphics and input","Implement a game loop with fixed FPS","Handle collision detection"],
    requirements: ["Snake moves continuously in 4 directions","Arrow keys change direction","Food spawns randomly — eating grows the snake","Game over on wall/self collision","Score display"],
    hints: ["pip install pygame","Snake as list of (x, y) segments","Game loop: handle_input → update → draw","Use pygame.time.Clock().tick(10) for speed"],
    expectedConcepts: ["python-modules","python-pip","python-loops","python-classes","python-functions"],
    estimatedMinutes: 60,
    xpReward: 80,
  },
  {
    id: "py-url-shortener",
    courseId: "python",
    title: "URL Shortener (Flask)",
    description: "Build a URL shortener web app with Flask — web development, routing, and database storage.",
    difficulty: 3,
    order: 19,
    learningObjectives: ["Create a Flask web application","Handle HTTP routes (GET/POST)","Use SQLite for persistent storage"],
    requirements: ["Home page with input for long URL","Generate a short, unique code for each URL","Redirect short URL to the original","Track visit count for each link","List all shortened URLs"],
    hints: ["pip install flask","Use string.ascii_letters + digits for short codes","import sqlite3 for database","Store URLs in a table: id, original, short_code, visits, created"],
    expectedConcepts: ["python-modules","python-functions","python-sqlite","python-json"],
    estimatedMinutes: 60,
    xpReward: 75,
  },
  {
    id: "py-password-manager",
    courseId: "python",
    title: "Password Manager",
    description: "Build a secure password manager with encryption — security, hashing, and file I/O.",
    difficulty: 3,
    order: 20,
    learningObjectives: ["Hash passwords with hashlib","Encrypt/decrypt data with cryptography","Build a master-password-protected vault"],
    requirements: ["Master password authentication (SHA-256 hashed)","Add service credentials (service, username, password)","View saved credentials","Copy password to clipboard","Encrypt stored passwords"],
    hints: ["import hashlib; hashlib.sha256(pw.encode()).hexdigest()","from cryptography.fernet import Fernet for encryption","Store vault as encrypted JSON file","Use getpass for hidden password entry"],
    expectedConcepts: ["python-hashlib","python-json","python-functions","python-file-read","python-file-write"],
    estimatedMinutes: 55,
    xpReward: 70,
  },
  {
    id: "py-data-analyzer",
    courseId: "python",
    title: "Data Analyzer",
    description: "Analyze a real dataset using Pandas and create visualizations with Matplotlib — data science foundations.",
    difficulty: 3,
    order: 21,
    learningObjectives: ["Load and explore datasets with Pandas","Filter, group, and aggregate data","Create visualizations with Matplotlib"],
    requirements: ["Load a CSV dataset (e.g., Titanic, Iris, or custom)","Display basic statistics (mean, median, count)","Filter data by conditions","Create at least 2 charts (bar, scatter, histogram)","Export analysis summary"],
    hints: ["pip install pandas matplotlib","df = pd.read_csv('data.csv')","df.describe() for statistics","plt.bar(), plt.scatter(), plt.hist() for charts"],
    expectedConcepts: ["python-modules","python-pip","python-functions","python-csv","python-pandas"],
    estimatedMinutes: 60,
    xpReward: 75,
  },
  {
    id: "py-rest-client",
    courseId: "python",
    title: "REST API Client",
    description: "Build a CLI tool that interacts with REST APIs — making requests, handling responses, and formatting output.",
    difficulty: 3,
    order: 22,
    learningObjectives: ["Use the requests library for HTTP methods","Handle JSON request/response bodies","Build a practical command-line tool"],
    requirements: ["GET, POST, PUT, DELETE operations","Set headers and body in requests","Display formatted JSON responses","Save responses to files"],
    hints: ["import requests; resp = requests.get(url)","resp.json() parses JSON response","Use argparse for CLI arguments","import json; print(json.dumps(data, indent=2))"],
    expectedConcepts: ["python-modules","python-json","python-functions","python-exceptions"],
    estimatedMinutes: 45,
    xpReward: 60,
  },
  {
    id: "py-blog-cli",
    courseId: "python",
    title: "Blog CLI Tool",
    description: "Build a blog management tool with SQLite — full CRUD, search, and structured data storage.",
    difficulty: 3,
    order: 23,
    learningObjectives: ["Design a SQLite database schema","Execute SQL queries from Python","Build a complete CLI application"],
    requirements: ["Create new blog posts (title, content, tags, date)","List all posts (show title, date, tags)","View a single post by ID","Edit existing posts","Delete posts","Search posts by title or tag"],
    hints: ["import sqlite3; conn = sqlite3.connect('blog.db')","Create table: id, title, content, tags, created_at","Use ? placeholders in SQL to prevent injection","Use argparse for command/subcommand routing"],
    expectedConcepts: ["python-sqlite","python-functions","python-loops","python-datetime"],
    estimatedMinutes: 55,
    xpReward: 70,
  },
  {
    id: "py-chat-server",
    courseId: "python",
    title: "Chat Server",
    description: "Build a multi-client chat server using sockets — networking, threading, and real-time communication.",
    difficulty: 3,
    order: 24,
    learningObjectives: ["Create a TCP server with Python sockets","Handle multiple clients with threading","Broadcast messages to all connected clients"],
    requirements: ["Server accepts multiple client connections","Clients choose a username on connect","Messages broadcast to all connected clients","Server logs all activity","Graceful disconnection handling"],
    hints: ["import socket, threading","Server: socket.socket(), bind(), listen(), accept()","Each client runs in its own thread","Use .encode()/.decode() for string↔bytes"],
    expectedConcepts: ["python-modules","python-threading","python-functions","python-exceptions"],
    estimatedMinutes: 65,
    xpReward: 85,
  },
  {
    id: "py-automation",
    courseId: "python",
    title: "File Organizer (Bonus)",
    description: "Build a tool that automatically organizes files into folders by type — practical automation with the OS module.",
    difficulty: 2,
    order: 25,
    learningObjectives: ["Navigate the file system with os/pathlib","Read and move files programmatically","Build a useful real-world tool"],
    requirements: ["Scan a directory for all files","Categorize files by extension (images, docs, audio, etc.)","Create category folders if they don't exist","Move files into appropriate folders","Report: 'Moved 15 files across 5 categories'"],
    hints: ["import os; os.listdir('path') for files","from pathlib import Path for cleaner paths","Create dict mapping extensions to folders","Use shutil.move(src, dst) to move files"],
    expectedConcepts: ["python-os-module","python-pathlib","python-dictionaries","python-functions","python-exceptions"],
    estimatedMinutes: 40,
    xpReward: 50,
  },
];

export const pythonCourse: Course = {
  id: "python",
  title: "Python",
  fullTitle: "Python — Power and Simplicity",
  description: "Python for everyone. Learn syntax, data structures, OOP, file handling, standard library, async, testing, and essential packages — from zero to production-ready.",
  icon: "Terminal",
  color: "#22c55e",
  difficulty: 2,
  chapters: pythonChapters,
  projects: pythonProjects,
  totalXP: 1766,
  estimatedHours: 80,
};
