// Auto-generated course data - do not edit directly
import { Course, Chapter, Section, ExamQuestion, MultipleChoiceQuestion, TrueFalseQuestion, FillBlankQuestion, CodeOrderQuestion, MatchPairsQuestion } from "../types";

const pythonChapters: Chapter[] = [
  {
    id: "python-ch1",
    courseId: "python",
    title: "Python Intro",
    order: 1,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Intro\n\nPython Intro is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Intro with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Intro follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Intro helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Intro — Basic example:",
              "content": "# Python Intro — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Intro\n\nPython has specific idioms for Python Intro that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Intro follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch1-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Intro?",
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
          "question": "Python uses indentation to define code blocks (for python intro).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch1-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python intro?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch1-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch1-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python intro in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: [],
    keyPoints: ["Python Intro follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Intro helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch2",
    courseId: "python",
    title: "Python Getting Started",
    order: 2,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Getting Started\n\nPython Getting Started is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Getting Started with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Getting Started follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Getting Started helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Getting Started — Advanced usage:",
              "content": "# Python Getting Started — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Getting Started\n\nPython has specific idioms for Python Getting Started that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Getting Started — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch2-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Getting Started?",
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
          "question": "Python uses indentation to define code blocks (for python getting started).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch2-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python getting started?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch2-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch2-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python getting started in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["python-ch1"],
    keyPoints: ["Python Getting Started follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Getting Started helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch3",
    courseId: "python",
    title: "Python Syntax",
    order: 3,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Syntax\n\nPython Syntax is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Syntax with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Syntax follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Syntax helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Syntax — Basic example:",
              "content": "# Python Syntax — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Syntax\n\nPython has specific idioms for Python Syntax that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Syntax follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch3-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Syntax?",
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
          "question": "Python uses indentation to define code blocks (for python syntax).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch3-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python syntax?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch3-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch3-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python syntax in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["python-ch2"],
    keyPoints: ["Python Syntax follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Syntax helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch4",
    courseId: "python",
    title: "Python Comments",
    order: 4,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Comments\n\nPython Comments is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Comments with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Comments follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Comments helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Comments — Advanced usage:",
              "content": "# Python Comments — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Comments\n\nPython has specific idioms for Python Comments that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Comments — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch4-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Comments?",
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
          "question": "Python uses indentation to define code blocks (for python comments).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch4-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python comments?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch4-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch4-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python comments in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["python-ch3"],
    keyPoints: ["Python Comments follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Comments helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch5",
    courseId: "python",
    title: "Python Variables",
    order: 5,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Variables\n\nPython Variables is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Variables with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Variables follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Variables helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Variables — Basic example:",
              "content": "# Python Variables — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Variables\n\nPython has specific idioms for Python Variables that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Variables follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch5-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Variables?",
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
          "question": "Python uses indentation to define code blocks (for python variables).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch5-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python variables?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch5-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch5-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python variables in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["python-ch4"],
    keyPoints: ["Python Variables follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Variables helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch6",
    courseId: "python",
    title: "Python Data Types",
    order: 6,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Data Types\n\nPython Data Types is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Data Types with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Data Types follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Data Types helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Data Types — Advanced usage:",
              "content": "# Python Data Types — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Data Types\n\nPython has specific idioms for Python Data Types that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Data Types — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch6-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Data Types?",
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
          "question": "Python uses indentation to define code blocks (for python data types).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch6-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python data types?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch6-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch6-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python data types in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["python-ch5"],
    keyPoints: ["Python Data Types follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Data Types helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch7",
    courseId: "python",
    title: "Python Numbers",
    order: 7,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Numbers\n\nPython Numbers is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Numbers with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Numbers follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Numbers helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Numbers — Basic example:",
              "content": "# Python Numbers — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Numbers\n\nPython has specific idioms for Python Numbers that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Numbers follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch7-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Numbers?",
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
          "question": "Python uses indentation to define code blocks (for python numbers).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch7-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python numbers?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch7-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch7-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python numbers in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["python-ch6"],
    keyPoints: ["Python Numbers follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Numbers helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch8",
    courseId: "python",
    title: "Python Casting",
    order: 8,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Casting\n\nPython Casting is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Casting with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Casting follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Casting helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Casting — Advanced usage:",
              "content": "# Python Casting — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Casting\n\nPython has specific idioms for Python Casting that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Casting — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch8-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Casting?",
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
          "question": "Python uses indentation to define code blocks (for python casting).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch8-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python casting?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch8-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch8-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python casting in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["python-ch7"],
    keyPoints: ["Python Casting follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Casting helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch9",
    courseId: "python",
    title: "Python Strings",
    order: 9,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Strings\n\nPython Strings is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Strings with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Strings follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Strings helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Strings — Basic example:",
              "content": "# Python Strings — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Strings\n\nPython has specific idioms for Python Strings that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Strings follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch9-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Strings?",
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
          "id": "python-ch9-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python strings).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch9-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python strings?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch9-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch9-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python strings in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["python-ch8"],
    keyPoints: ["Python Strings follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Strings helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch10",
    courseId: "python",
    title: "Python Slicing",
    order: 10,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Slicing\n\nPython Slicing is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Slicing with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Slicing follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Slicing helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Slicing — Advanced usage:",
              "content": "# Python Slicing — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Slicing\n\nPython has specific idioms for Python Slicing that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Slicing — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch10-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Slicing?",
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
          "question": "Python uses indentation to define code blocks (for python slicing).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch10-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python slicing?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch10-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch10-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python slicing in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["python-ch9"],
    keyPoints: ["Python Slicing follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Slicing helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch11",
    courseId: "python",
    title: "Python String Methods",
    order: 11,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python String Methods\n\nPython String Methods is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python String Methods with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python String Methods follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python String Methods helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python String Methods — Basic example:",
              "content": "# Python String Methods — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python String Methods\n\nPython has specific idioms for Python String Methods that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python String Methods follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch11-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python String Methods?",
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
          "question": "Python uses indentation to define code blocks (for python string methods).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch11-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python string methods?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch11-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch11-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python string methods in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["python-ch10"],
    keyPoints: ["Python String Methods follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python String Methods helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch12",
    courseId: "python",
    title: "Python Format Strings",
    order: 12,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Format Strings\n\nPython Format Strings is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Format Strings with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Format Strings follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Format Strings helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Format Strings — Advanced usage:",
              "content": "# Python Format Strings — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Format Strings\n\nPython has specific idioms for Python Format Strings that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Format Strings — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch12-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Format Strings?",
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
          "question": "Python uses indentation to define code blocks (for python format strings).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch12-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python format strings?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch12-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch12-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python format strings in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["python-ch11"],
    keyPoints: ["Python Format Strings follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Format Strings helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch13",
    courseId: "python",
    title: "Python Booleans",
    order: 13,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Booleans\n\nPython Booleans is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Booleans with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Booleans follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Booleans helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Booleans — Basic example:",
              "content": "# Python Booleans — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Booleans\n\nPython has specific idioms for Python Booleans that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Booleans follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch13-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Booleans?",
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
          "id": "python-ch13-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python booleans).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch13-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python booleans?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch13-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch13-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python booleans in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["python-ch12"],
    keyPoints: ["Python Booleans follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Booleans helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch14",
    courseId: "python",
    title: "Python Operators",
    order: 14,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Operators\n\nPython Operators is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Operators with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Operators follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Operators helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Operators — Advanced usage:",
              "content": "# Python Operators — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Operators\n\nPython has specific idioms for Python Operators that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Operators — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch14-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Operators?",
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
          "id": "python-ch14-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python operators).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch14-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python operators?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch14-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch14-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python operators in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["python-ch13"],
    keyPoints: ["Python Operators follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Operators helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch15",
    courseId: "python",
    title: "Python Lists",
    order: 15,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Lists\n\nPython Lists is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Lists with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Lists follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Lists helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Lists — Basic example:",
              "content": "# Python Lists — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Lists\n\nPython has specific idioms for Python Lists that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Lists follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch15-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Lists?",
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
          "id": "python-ch15-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python lists).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch15-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python lists?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch15-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch15-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python lists in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["python-ch14"],
    keyPoints: ["Python Lists follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Lists helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch16",
    courseId: "python",
    title: "Python List Methods",
    order: 16,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python List Methods\n\nPython List Methods is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python List Methods with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python List Methods follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python List Methods helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python List Methods — Advanced usage:",
              "content": "# Python List Methods — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python List Methods\n\nPython has specific idioms for Python List Methods that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python List Methods — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch16-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python List Methods?",
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
          "id": "python-ch16-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python list methods).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch16-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python list methods?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch16-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch16-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python list methods in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["python-ch15"],
    keyPoints: ["Python List Methods follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python List Methods helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch17",
    courseId: "python",
    title: "Python List Comprehension",
    order: 17,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python List Comprehension\n\nPython List Comprehension is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python List Comprehension with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python List Comprehension follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python List Comprehension helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python List Comprehension — Basic example:",
              "content": "# Python List Comprehension — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python List Comprehension\n\nPython has specific idioms for Python List Comprehension that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python List Comprehension follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch17-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python List Comprehension?",
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
          "id": "python-ch17-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python list comprehension).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch17-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python list comprehension?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch17-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch17-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python list comprehension in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["python-ch16"],
    keyPoints: ["Python List Comprehension follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python List Comprehension helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch18",
    courseId: "python",
    title: "Python Tuples",
    order: 18,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Tuples\n\nPython Tuples is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Tuples with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Tuples follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Tuples helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Tuples — Advanced usage:",
              "content": "# Python Tuples — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Tuples\n\nPython has specific idioms for Python Tuples that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Tuples — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch18-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Tuples?",
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
          "id": "python-ch18-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python tuples).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch18-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python tuples?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch18-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch18-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python tuples in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["python-ch17"],
    keyPoints: ["Python Tuples follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Tuples helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch19",
    courseId: "python",
    title: "Python Sets",
    order: 19,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Sets\n\nPython Sets is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Sets with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Sets follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Sets helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Sets — Basic example:",
              "content": "# Python Sets — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Sets\n\nPython has specific idioms for Python Sets that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Sets follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch19-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Sets?",
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
          "id": "python-ch19-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python sets).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch19-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python sets?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch19-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch19-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python sets in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["python-ch18"],
    keyPoints: ["Python Sets follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Sets helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch20",
    courseId: "python",
    title: "Python Dictionaries",
    order: 20,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Dictionaries\n\nPython Dictionaries is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Dictionaries with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Dictionaries follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Dictionaries helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Dictionaries — Advanced usage:",
              "content": "# Python Dictionaries — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Dictionaries\n\nPython has specific idioms for Python Dictionaries that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Dictionaries — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch20-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Dictionaries?",
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
          "question": "Python uses indentation to define code blocks (for python dictionaries).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch20-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python dictionaries?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch20-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch20-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python dictionaries in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["python-ch19"],
    keyPoints: ["Python Dictionaries follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Dictionaries helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch21",
    courseId: "python",
    title: "Python If Else",
    order: 21,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python If Else\n\nPython If Else is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python If Else with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python If Else follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python If Else helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python If Else — Basic example:",
              "content": "# Python If Else — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python If Else\n\nPython has specific idioms for Python If Else that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python If Else follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch21-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python If Else?",
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
          "id": "python-ch21-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python if else).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch21-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python if else?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch21-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch21-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python if else in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["python-ch20"],
    keyPoints: ["Python If Else follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python If Else helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch22",
    courseId: "python",
    title: "Python While",
    order: 22,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python While\n\nPython While is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python While with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python While follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python While helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python While — Advanced usage:",
              "content": "# Python While — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python While\n\nPython has specific idioms for Python While that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python While — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch22-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python While?",
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
          "id": "python-ch22-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python while).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch22-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python while?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch22-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch22-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python while in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["python-ch21"],
    keyPoints: ["Python While follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python While helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch23",
    courseId: "python",
    title: "Python For",
    order: 23,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python For\n\nPython For is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python For with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python For follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python For helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python For — Basic example:",
              "content": "# Python For — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python For\n\nPython has specific idioms for Python For that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python For follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch23-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python For?",
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
          "id": "python-ch23-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python for).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch23-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python for?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch23-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch23-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python for in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["python-ch22"],
    keyPoints: ["Python For follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python For helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch24",
    courseId: "python",
    title: "Python Functions",
    order: 24,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Functions\n\nPython Functions is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Functions with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Functions follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Functions helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Functions — Advanced usage:",
              "content": "# Python Functions — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Functions\n\nPython has specific idioms for Python Functions that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Functions — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch24-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Functions?",
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
          "id": "python-ch24-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python functions).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch24-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python functions?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch24-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch24-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python functions in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["python-ch23"],
    keyPoints: ["Python Functions follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Functions helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch25",
    courseId: "python",
    title: "Python Function Args",
    order: 25,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Function Args\n\nPython Function Args is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Function Args with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Function Args follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Function Args helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Function Args — Basic example:",
              "content": "# Python Function Args — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Function Args\n\nPython has specific idioms for Python Function Args that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Function Args follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch25-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Function Args?",
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
          "id": "python-ch25-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python function args).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch25-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python function args?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch25-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch25-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python function args in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["python-ch24"],
    keyPoints: ["Python Function Args follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Function Args helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch26",
    courseId: "python",
    title: "Python Lambda",
    order: 26,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Lambda\n\nPython Lambda is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Lambda with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Lambda follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Lambda helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Lambda — Advanced usage:",
              "content": "# Python Lambda — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Lambda\n\nPython has specific idioms for Python Lambda that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Lambda — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch26-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Lambda?",
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
          "id": "python-ch26-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python lambda).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch26-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python lambda?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch26-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch26-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python lambda in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["python-ch25"],
    keyPoints: ["Python Lambda follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Lambda helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch27",
    courseId: "python",
    title: "Python Scope",
    order: 27,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Scope\n\nPython Scope is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Scope with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Scope follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Scope helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Scope — Basic example:",
              "content": "# Python Scope — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Scope\n\nPython has specific idioms for Python Scope that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Scope follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch27-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Scope?",
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
          "id": "python-ch27-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python scope).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch27-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python scope?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch27-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch27-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python scope in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["python-ch26"],
    keyPoints: ["Python Scope follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Scope helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch28",
    courseId: "python",
    title: "Python Modules",
    order: 28,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Modules\n\nPython Modules is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Modules with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Modules follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Modules helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Modules — Advanced usage:",
              "content": "# Python Modules — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Modules\n\nPython has specific idioms for Python Modules that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Modules — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch28-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Modules?",
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
          "id": "python-ch28-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python modules).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch28-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python modules?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch28-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch28-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python modules in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["python-ch27"],
    keyPoints: ["Python Modules follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Modules helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch29",
    courseId: "python",
    title: "Python Import",
    order: 29,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Import\n\nPython Import is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Import with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Import follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Import helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Import — Basic example:",
              "content": "# Python Import — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Import\n\nPython has specific idioms for Python Import that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Import follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch29-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Import?",
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
          "id": "python-ch29-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python import).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch29-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python import?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch29-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch29-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python import in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["python-ch28"],
    keyPoints: ["Python Import follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Import helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch30",
    courseId: "python",
    title: "Python PIP",
    order: 30,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python PIP\n\nPython PIP is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python PIP with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python PIP follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python PIP helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python PIP — Advanced usage:",
              "content": "# Python PIP — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python PIP\n\nPython has specific idioms for Python PIP that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python PIP — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch30-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python PIP?",
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
          "id": "python-ch30-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python pip).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch30-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python pip?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch30-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch30-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python pip in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["python-ch29"],
    keyPoints: ["Python PIP follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python PIP helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch31",
    courseId: "python",
    title: "Python Try Except",
    order: 31,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Try Except\n\nPython Try Except is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Try Except with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Try Except follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Try Except helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Try Except — Basic example:",
              "content": "# Python Try Except — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Try Except\n\nPython has specific idioms for Python Try Except that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Try Except follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch31-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Try Except?",
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
          "id": "python-ch31-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python try except).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch31-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python try except?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch31-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch31-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python try except in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["python-ch30"],
    keyPoints: ["Python Try Except follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Try Except helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch32",
    courseId: "python",
    title: "Python User Input",
    order: 32,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python User Input\n\nPython User Input is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python User Input with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python User Input follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python User Input helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python User Input — Advanced usage:",
              "content": "# Python User Input — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python User Input\n\nPython has specific idioms for Python User Input that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python User Input — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch32-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python User Input?",
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
          "id": "python-ch32-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python user input).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch32-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python user input?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch32-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch32-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python user input in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["python-ch31"],
    keyPoints: ["Python User Input follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python User Input helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch33",
    courseId: "python",
    title: "Python File Read",
    order: 33,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python File Read\n\nPython File Read is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python File Read with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python File Read follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python File Read helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python File Read — Basic example:",
              "content": "# Python File Read — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python File Read\n\nPython has specific idioms for Python File Read that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python File Read follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch33-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python File Read?",
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
          "id": "python-ch33-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python file read).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch33-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python file read?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch33-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch33-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python file read in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["python-ch32"],
    keyPoints: ["Python File Read follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python File Read helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch34",
    courseId: "python",
    title: "Python File Write",
    order: 34,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python File Write\n\nPython File Write is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python File Write with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python File Write follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python File Write helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python File Write — Advanced usage:",
              "content": "# Python File Write — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python File Write\n\nPython has specific idioms for Python File Write that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python File Write — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch34-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python File Write?",
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
          "id": "python-ch34-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python file write).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch34-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python file write?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch34-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch34-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python file write in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["python-ch33"],
    keyPoints: ["Python File Write follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python File Write helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch35",
    courseId: "python",
    title: "Python File Delete",
    order: 35,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python File Delete\n\nPython File Delete is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python File Delete with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python File Delete follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python File Delete helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python File Delete — Basic example:",
              "content": "# Python File Delete — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python File Delete\n\nPython has specific idioms for Python File Delete that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python File Delete follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch35-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python File Delete?",
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
          "id": "python-ch35-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python file delete).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch35-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python file delete?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch35-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch35-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python file delete in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["python-ch34"],
    keyPoints: ["Python File Delete follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python File Delete helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch36",
    courseId: "python",
    title: "Python OS Module",
    order: 36,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python OS Module\n\nPython OS Module is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python OS Module with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python OS Module follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python OS Module helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python OS Module — Advanced usage:",
              "content": "# Python OS Module — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python OS Module\n\nPython has specific idioms for Python OS Module that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python OS Module — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch36-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python OS Module?",
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
          "id": "python-ch36-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python os module).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch36-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python os module?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch36-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch36-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python os module in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["python-ch35"],
    keyPoints: ["Python OS Module follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python OS Module helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch37",
    courseId: "python",
    title: "Python JSON",
    order: 37,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python JSON\n\nPython JSON is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python JSON with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python JSON follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python JSON helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python JSON — Basic example:",
              "content": "# Python JSON — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python JSON\n\nPython has specific idioms for Python JSON that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python JSON follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch37-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python JSON?",
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
          "id": "python-ch37-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python json).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch37-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python json?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch37-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch37-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python json in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["python-ch36"],
    keyPoints: ["Python JSON follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python JSON helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch38",
    courseId: "python",
    title: "Python Dates",
    order: 38,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Dates\n\nPython Dates is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Dates with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Dates follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Dates helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Dates — Advanced usage:",
              "content": "# Python Dates — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Dates\n\nPython has specific idioms for Python Dates that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Dates — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch38-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Dates?",
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
          "id": "python-ch38-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python dates).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch38-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python dates?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch38-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch38-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python dates in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["python-ch37"],
    keyPoints: ["Python Dates follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Dates helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch39",
    courseId: "python",
    title: "Python Math",
    order: 39,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Math\n\nPython Math is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Math with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Math follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Math helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Math — Basic example:",
              "content": "# Python Math — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Math\n\nPython has specific idioms for Python Math that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Math follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch39-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Math?",
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
          "id": "python-ch39-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python math).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch39-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python math?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch39-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch39-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python math in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["python-ch38"],
    keyPoints: ["Python Math follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Math helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch40",
    courseId: "python",
    title: "Python Regex",
    order: 40,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Regex\n\nPython Regex is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Regex with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Regex follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Regex helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Regex — Advanced usage:",
              "content": "# Python Regex — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Regex\n\nPython has specific idioms for Python Regex that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Regex — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch40-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Regex?",
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
          "id": "python-ch40-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python regex).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch40-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python regex?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch40-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch40-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python regex in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["python-ch39"],
    keyPoints: ["Python Regex follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Regex helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch41",
    courseId: "python",
    title: "Python Iterators",
    order: 41,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Iterators\n\nPython Iterators is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Iterators with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Iterators follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Iterators helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Iterators — Basic example:",
              "content": "# Python Iterators — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Iterators\n\nPython has specific idioms for Python Iterators that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Iterators follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch41-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Iterators?",
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
          "id": "python-ch41-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python iterators).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch41-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python iterators?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch41-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch41-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python iterators in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["python-ch40"],
    keyPoints: ["Python Iterators follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Iterators helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch42",
    courseId: "python",
    title: "Python Generators",
    order: 42,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Generators\n\nPython Generators is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Generators with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Generators follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Generators helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Generators — Advanced usage:",
              "content": "# Python Generators — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Generators\n\nPython has specific idioms for Python Generators that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Generators — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch42-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Generators?",
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
          "id": "python-ch42-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python generators).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch42-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python generators?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch42-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch42-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python generators in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["python-ch41"],
    keyPoints: ["Python Generators follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Generators helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch43",
    courseId: "python",
    title: "Python Decorators",
    order: 43,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Decorators\n\nPython Decorators is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Decorators with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Decorators follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Decorators helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Decorators — Basic example:",
              "content": "# Python Decorators — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Decorators\n\nPython has specific idioms for Python Decorators that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Decorators follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch43-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Decorators?",
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
          "id": "python-ch43-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python decorators).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch43-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python decorators?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch43-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch43-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python decorators in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["python-ch42"],
    keyPoints: ["Python Decorators follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Decorators helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch44",
    courseId: "python",
    title: "Python Classes",
    order: 44,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Classes\n\nPython Classes is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Classes with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Classes follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Classes helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Classes — Advanced usage:",
              "content": "# Python Classes — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Classes\n\nPython has specific idioms for Python Classes that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Classes — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch44-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Classes?",
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
          "id": "python-ch44-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python classes).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch44-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python classes?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch44-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch44-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python classes in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["python-ch43"],
    keyPoints: ["Python Classes follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Classes helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch45",
    courseId: "python",
    title: "Python Inheritance",
    order: 45,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Inheritance\n\nPython Inheritance is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Inheritance with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Inheritance follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Inheritance helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Inheritance — Basic example:",
              "content": "# Python Inheritance — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Inheritance\n\nPython has specific idioms for Python Inheritance that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Inheritance follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch45-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Inheritance?",
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
          "id": "python-ch45-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python inheritance).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch45-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python inheritance?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch45-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch45-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python inheritance in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["python-ch44"],
    keyPoints: ["Python Inheritance follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Inheritance helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch46",
    courseId: "python",
    title: "Python Polymorphism",
    order: 46,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Polymorphism\n\nPython Polymorphism is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Polymorphism with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Polymorphism follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Polymorphism helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Polymorphism — Advanced usage:",
              "content": "# Python Polymorphism — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Polymorphism\n\nPython has specific idioms for Python Polymorphism that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Polymorphism — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch46-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Polymorphism?",
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
          "id": "python-ch46-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python polymorphism).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch46-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python polymorphism?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch46-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch46-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python polymorphism in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 20,
    prerequisites: ["python-ch45"],
    keyPoints: ["Python Polymorphism follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Polymorphism helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch47",
    courseId: "python",
    title: "Python Magic Methods",
    order: 47,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Magic Methods\n\nPython Magic Methods is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Magic Methods with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Magic Methods follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Magic Methods helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Magic Methods — Basic example:",
              "content": "# Python Magic Methods — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Magic Methods\n\nPython has specific idioms for Python Magic Methods that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Magic Methods follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch47-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Magic Methods?",
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
          "id": "python-ch47-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python magic methods).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch47-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python magic methods?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch47-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch47-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python magic methods in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 21,
    prerequisites: ["python-ch46"],
    keyPoints: ["Python Magic Methods follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Magic Methods helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch48",
    courseId: "python",
    title: "Python Itertools",
    order: 48,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Itertools\n\nPython Itertools is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Itertools with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Itertools follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Itertools helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Itertools — Advanced usage:",
              "content": "# Python Itertools — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Itertools\n\nPython has specific idioms for Python Itertools that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Itertools — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch48-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Itertools?",
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
          "id": "python-ch48-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python itertools).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch48-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python itertools?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch48-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch48-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python itertools in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 22,
    prerequisites: ["python-ch47"],
    keyPoints: ["Python Itertools follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Itertools helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch49",
    courseId: "python",
    title: "Python Collections",
    order: 49,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Collections\n\nPython Collections is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Collections with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Collections follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Collections helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Collections — Basic example:",
              "content": "# Python Collections — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Collections\n\nPython has specific idioms for Python Collections that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Collections follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch49-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Collections?",
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
          "id": "python-ch49-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python collections).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch49-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python collections?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch49-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch49-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python collections in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 23,
    prerequisites: ["python-ch48"],
    keyPoints: ["Python Collections follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Collections helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch50",
    courseId: "python",
    title: "Python Virtual Env",
    order: 50,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Virtual Env\n\nPython Virtual Env is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Virtual Env with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Virtual Env follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Virtual Env helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Virtual Env — Advanced usage:",
              "content": "# Python Virtual Env — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Virtual Env\n\nPython has specific idioms for Python Virtual Env that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Virtual Env — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch50-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Virtual Env?",
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
          "id": "python-ch50-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python virtual env).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch50-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python virtual env?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch50-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch50-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python virtual env in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 24,
    prerequisites: ["python-ch49"],
    keyPoints: ["Python Virtual Env follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Virtual Env helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch51",
    courseId: "python",
    title: "Python NumPy",
    order: 51,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python NumPy\n\nPython NumPy is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python NumPy with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python NumPy follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python NumPy helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python NumPy — Basic example:",
              "content": "# Python NumPy — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python NumPy\n\nPython has specific idioms for Python NumPy that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python NumPy follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch51-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python NumPy?",
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
          "id": "python-ch51-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python numpy).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch51-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python numpy?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch51-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch51-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python numpy in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 25,
    prerequisites: ["python-ch50"],
    keyPoints: ["Python NumPy follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python NumPy helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch52",
    courseId: "python",
    title: "Python Pandas",
    order: 52,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Pandas\n\nPython Pandas is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Pandas with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Pandas follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Pandas helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Pandas — Advanced usage:",
              "content": "# Python Pandas — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Pandas\n\nPython has specific idioms for Python Pandas that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Pandas — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch52-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Pandas?",
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
          "id": "python-ch52-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python pandas).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch52-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python pandas?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch52-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch52-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python pandas in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 26,
    prerequisites: ["python-ch51"],
    keyPoints: ["Python Pandas follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Pandas helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch53",
    courseId: "python",
    title: "Python Matplotlib",
    order: 53,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Matplotlib\n\nPython Matplotlib is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Matplotlib with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Matplotlib follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Matplotlib helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Matplotlib — Basic example:",
              "content": "# Python Matplotlib — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Matplotlib\n\nPython has specific idioms for Python Matplotlib that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Matplotlib follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch53-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Matplotlib?",
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
          "id": "python-ch53-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python matplotlib).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch53-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python matplotlib?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch53-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch53-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python matplotlib in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 27,
    prerequisites: ["python-ch52"],
    keyPoints: ["Python Matplotlib follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Matplotlib helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch54",
    courseId: "python",
    title: "Python SQLite",
    order: 54,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python SQLite\n\nPython SQLite is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python SQLite with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python SQLite follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python SQLite helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python SQLite — Advanced usage:",
              "content": "# Python SQLite — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python SQLite\n\nPython has specific idioms for Python SQLite that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python SQLite — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch54-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python SQLite?",
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
          "id": "python-ch54-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python sqlite).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch54-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python sqlite?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch54-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch54-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python sqlite in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 28,
    prerequisites: ["python-ch53"],
    keyPoints: ["Python SQLite follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python SQLite helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch55",
    courseId: "python",
    title: "Python CSV",
    order: 55,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python CSV\n\nPython CSV is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python CSV with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python CSV follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python CSV helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python CSV — Basic example:",
              "content": "# Python CSV — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python CSV\n\nPython has specific idioms for Python CSV that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python CSV follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch55-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python CSV?",
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
          "id": "python-ch55-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python csv).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch55-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python csv?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch55-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch55-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python csv in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 29,
    prerequisites: ["python-ch54"],
    keyPoints: ["Python CSV follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python CSV helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch56",
    courseId: "python",
    title: "Python Email",
    order: 56,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Email\n\nPython Email is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Email with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Email follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Email helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Email — Advanced usage:",
              "content": "# Python Email — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Email\n\nPython has specific idioms for Python Email that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Email — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch56-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Email?",
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
          "id": "python-ch56-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python email).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch56-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python email?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch56-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch56-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python email in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 15,
    estimatedMinutes: 30,
    prerequisites: ["python-ch55"],
    keyPoints: ["Python Email follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Email helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch57",
    courseId: "python",
    title: "Python Threading",
    order: 57,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Threading\n\nPython Threading is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Threading with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Threading follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Threading helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Threading — Basic example:",
              "content": "# Python Threading — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Threading\n\nPython has specific idioms for Python Threading that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Threading follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch57-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Threading?",
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
          "id": "python-ch57-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python threading).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch57-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python threading?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch57-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch57-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python threading in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 16,
    estimatedMinutes: 31,
    prerequisites: ["python-ch56"],
    keyPoints: ["Python Threading follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Threading helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch58",
    courseId: "python",
    title: "Python Subprocess",
    order: 58,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Subprocess\n\nPython Subprocess is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Subprocess with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Subprocess follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Subprocess helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Subprocess — Advanced usage:",
              "content": "# Python Subprocess — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Subprocess\n\nPython has specific idioms for Python Subprocess that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Subprocess — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch58-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Subprocess?",
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
          "id": "python-ch58-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python subprocess).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch58-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python subprocess?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch58-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch58-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python subprocess in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 17,
    estimatedMinutes: 32,
    prerequisites: ["python-ch57"],
    keyPoints: ["Python Subprocess follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Subprocess helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch59",
    courseId: "python",
    title: "Python Datetime",
    order: 59,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Datetime\n\nPython Datetime is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Datetime with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Datetime follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Datetime helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Datetime — Basic example:",
              "content": "# Python Datetime — Getting Started\ndef demonstrate_concept(items=None):\n    \"\"\"Demonstrate this Python concept with real data.\"\"\"\n    if items is None:\n        items = [\"python\", \"code\", \"learn\"]\n    \n    # Use list comprehension (Pythonic)\n    result = [item.upper() for item in items if len(item) > 3]\n    \n    print(f\"Result: {result}\")\n    return result\n\nif __name__ == \"__main__\":\n    demonstrate_concept()"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Datetime\n\nPython has specific idioms for Python Datetime that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "list",
              "ordered": false,
              "items": [
                  "Python's Python Datetime follows the principle of least surprise",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch59-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Datetime?",
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
          "id": "python-ch59-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python datetime).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch59-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python datetime?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch59-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch59-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python datetime in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 18,
    estimatedMinutes: 33,
    prerequisites: ["python-ch58"],
    keyPoints: ["Python Datetime follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Datetime helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
  {
    id: "python-ch60",
    courseId: "python",
    title: "Python Best Practices",
    order: 60,
    sections: [
          {
              "type": "text",
              "content": "## Understanding Python Best Practices\n\nPython Best Practices is an important Python concept that helps you write cleaner, more efficient code. Python emphasizes readability and simplicity, making it an excellent language for beginners and professionals alike.\n\nThis chapter explores Python Best Practices with practical examples and best practices drawn from real-world Python development."
          },
          {
              "type": "key-points",
              "points": [
                  "Python Best Practices follows Python's philosophy of simplicity and readability",
                  "Python's design emphasizes clear, explicit code over clever tricks",
                  "Mastering Python Best Practices helps prevent common Python pitfalls",
                  "Apply these patterns to write more idiomatic Python"
              ]
          },
          {
              "type": "code",
              "language": "python",
              "caption": "Python Best Practices — Advanced usage:",
              "content": "# Python Best Practices — Production Pattern\nfrom dataclasses import dataclass\nfrom typing import Optional, List\n\n@dataclass\nclass DataProcessor:\n    name: str\n    items: List[str]\n    \n    def __post_init__(self):\n        self.processed = False\n    \n    def process(self) -> List[str]:\n        \"\"\"Process items with proper error handling.\"\"\"\n        try:\n            result = [item.strip().lower() for item in self.items]\n            self.processed = True\n            return result\n        except Exception as e:\n            print(f\"Error processing: {e}\")\n            return []"
          },
          {
              "type": "text",
              "content": "## Pythonic Approach to Python Best Practices\n\nPython has specific idioms for Python Best Practices that experienced Python developers follow:\n\n1. **Explicit over implicit** — Code should be clear and obvious\n2. **Simple over complex** — The simplest solution is usually the best\n3. **Flat over nested** — Prefer flat structure to deep nesting\n4. **Use built-in functions** — Python's standard library is comprehensive\n5. **Follow PEP 8** — Consistent style improves readability"
          },
          {
              "type": "callout",
              "style": "tip",
              "content": "💡 **Pro Tip:** Use Python's built-in help() function and docstrings to document your code. Run 'python -m pdb script.py' for the built-in debugger, or use breakpoint() (Python 3.7+) to set debug breakpoints."
          },
          {
              "type": "comparison",
              "title": "Python Best Practices — Python vs Other Languages",
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
              "content": "## Testing Your Code\n\nPython provides excellent testing tools:\n\n1. **pytest** — Modern testing framework with minimal boilerplate\n2. **unittest** — Built-in testing library (xUnit style)\n3. **doctest** — Tests embedded in docstrings\n4. **mypy** — Static type checking\n5. **pylint/flake8** — Code quality and style analysis"
          },
          {
              "type": "callout",
              "style": "important",
              "content": "📌 **Remember:** Python's \"batteries included\" philosophy means the standard library has tools for most common tasks. Before installing a third-party package, check if the standard library already provides what you need."
          }
      ],
    examPool: [
        {
          "id": "python-ch60-mc1",
          "type": "multiple-choice",
          "difficulty": "easy",
          "question": "How do you define a function in Python for Python Best Practices?",
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
          "id": "python-ch60-tf1",
          "type": "true-false",
          "difficulty": "easy",
          "question": "Python uses indentation to define code blocks (for python best practices).",
          "correctAnswer": true,
          "explanation": "Python uses indentation (typically 4 spaces) to define code blocks instead of braces like C/Java/JavaScript."
        },
        {
          "id": "python-ch60-mc2",
          "type": "multiple-choice",
          "difficulty": "medium",
          "question": "What is the Python list comprehension syntax for python best practices?",
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
              "text": "list(expression for item in iterable if condition)"
            },
            {
              "id": "d",
              "text": "map(expression, filter(condition, iterable))"
            }
          ],
          "correctAnswer": "a",
          "explanation": "List comprehension syntax is [expr for item in iterable if condition]. It's Pythonic, readable, and generally faster than loops or map/filter."
        },
        {
          "id": "python-ch60-fb1",
          "type": "fill-blank",
          "difficulty": "medium",
          "question": "The Python keyword to handle exceptions (like try/catch) is: ___",
          "correctAnswer": "except",
          "explanation": "Python uses try/except blocks. 'except' catches exceptions, similar to 'catch' in other languages."
        },
        {
          "id": "python-ch60-mc3",
          "type": "multiple-choice",
          "difficulty": "hard",
          "question": "What is the best Python practice for python best practices in production code?",
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
          "explanation": "Production Python should use type hints (for IDE support and mypy), docstrings (for documentation), and tests (for reliability). Minimal docs, globals, and avoiding imports are anti-patterns."
        }
      ],
    xpReward: 19,
    estimatedMinutes: 34,
    prerequisites: ["python-ch59"],
    keyPoints: ["Python Best Practices follows Python's philosophy of simplicity and readability","Python's design emphasizes clear, explicit code over clever tricks","Mastering Python Best Practices helps prevent common Python pitfalls","Apply these patterns to write more idiomatic Python"],
  },
];

export const pythonCourse: Course = {
  id: "python",
  title: "Python",
  fullTitle: "Python — Power and Simplicity",
  description: "Python for everyone. Learn syntax, data structures, OOP, file handling, standard library, and essential packages.",
  icon: "Terminal",
  color: "#22c55e",
  difficulty: 2,
  chapters: pythonChapters,
  totalXP: 1020,
  estimatedHours: 40,
};
