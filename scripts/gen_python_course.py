#!/usr/bin/env python3
"""Generate the complete Python course TypeScript file with 55 chapters."""

import json
import os
from textwrap import dedent

OUTPUT = "/data/data/com.termux/files/home/cs-learning/src/lib/courses/python/index.ts"

# ─── Helpers ──────────────────────────────────────────────────────────────

def chapter(id_, title, order, sections, exam_pool, key_points,
            xp_reward=15, estimated_minutes=6, prerequisites=None):
    prereqs = prerequisites or ([] if order == 1 else [f"python-{order-1:02d}"])
    return {
        "id": id_,
        "courseId": "python",
        "title": title,
        "order": order,
        "xpReward": xp_reward,
        "estimatedMinutes": estimated_minutes,
        "prerequisites": prereqs,
        "sections": sections,
        "examPool": exam_pool,
        "keyPoints": key_points,
    }

def text(content):
    return {"type": "text", "content": dedent(content).strip()}

def code(content, language="python", caption=None):
    return {"type": "code", "content": content, "language": language, "caption": caption}

def callout(content, style="info"):
    return {"type": "callout", "style": style, "content": dedent(content).strip()}

def list_items(items, ordered=False):
    return {"type": "list", "items": items, "ordered": ordered}

def key_points(points):
    return {"type": "key-points", "points": points}

def comparison(title, headers, rows):
    return {"type": "comparison", "title": title, "headers": headers, "rows": rows}

def exercise(title, description, instructions, expected_output=None, hint=None):
    return {
        "type": "exercise", "title": title, "description": description,
        "instructions": instructions, "expectedOutput": expected_output, "hint": hint,
    }

# Exam question helpers
def mcq(id_, difficulty, question, options, correct, explanation):
    return {
        "id": id_, "type": "multiple-choice", "difficulty": difficulty,
        "question": question,
        "options": [{"id": k, "text": v} for k, v in options.items()],
        "correctAnswer": correct, "explanation": explanation,
    }

def tfq(id_, difficulty, question, correct, explanation):
    return {
        "id": id_, "type": "true-false", "difficulty": difficulty,
        "question": question, "correctAnswer": correct, "explanation": explanation,
    }

def fbq(id_, difficulty, question, correct, acceptable=None, explanation=""):
    return {
        "id": id_, "type": "fill-blank", "difficulty": difficulty,
        "question": question, "correctAnswer": correct,
        "acceptableAnswers": acceptable or [], "explanation": explanation,
    }

def coq(id_, difficulty, question, code_lines, correct_order, explanation=""):
    return {
        "id": id_, "type": "code-order", "difficulty": difficulty,
        "question": question, "codeLines": code_lines,
        "correctOrder": correct_order, "explanation": explanation,
    }

def mpq(id_, difficulty, question, left, right, matches, explanation=""):
    return {
        "id": id_, "type": "match-pairs", "difficulty": difficulty,
        "question": question, "leftItems": left, "rightItems": right,
        "correctMatches": matches, "explanation": explanation,
    }

# ─── Build chapters ───────────────────────────────────────────────────────

def build_chapter_01():
    secs = [
        text("Python is a **high-level**, **interpreted** programming language created by **Guido van Rossum** and first released in 1991. It was designed with a philosophy centered on code readability and developer productivity. Python's syntax emphasizes clarity through significant whitespace and English-like keywords, making it one of the most accessible languages for beginners while remaining powerful enough for professional software engineers, data scientists, and researchers."),
        text("The language's name was inspired by the British comedy series *Monty Python's Flying Circus*, not the snake. Van Rossum wanted a name that was short, unique, and slightly mysterious. Today, Python runs on virtually every platform — Windows, macOS, Linux, and even embedded systems — and powers applications ranging from web frameworks like Django and Flask to machine learning libraries like TensorFlow and PyTorch, automation scripts, and scientific computing."),
        text("Python has undergone several major version releases. **Python 2** was released in 2000 and became the de facto standard for over a decade, but it was officially sunset on January 1, 2020. **Python 3**, released in 2008, introduced breaking improvements like better Unicode support, consistent iterator behavior, and cleaner syntax. All modern Python development uses Python 3.x. The Python Software Foundation maintains the language under an open-source license, and its development is guided by PEPs — Python Enhancement Proposals."),
        code("print(\"Hello, World!\")", caption="The classic first program — hello from Python"),
        callout("Python is an **interpreted language**, meaning code is executed line by line by the Python interpreter rather than being compiled into machine code beforehand. This makes development faster because you can test code immediately without a compilation step, but it also means Python can be slower than compiled languages like C++ or Rust for CPU-intensive tasks."),
        list_items(["Install Python from python.org or your system package manager", "Open a terminal and type `python3 --version` to verify", "Write your code in a `.py` file using any text editor", "Run it with `python3 filename.py`", "The interpreter reads, parses, and executes your code in one step"], ordered=True),
        key_points(["Python was created by Guido van Rossum and first released in 1991", "The name comes from Monty Python's Flying Circus, not the snake", "Python 2 is deprecated — all modern code uses Python 3", "Python is interpreted, dynamically typed, and focuses on readability", "It runs everywhere and powers web, data science, AI, and automation"]),
    ]
    questions = [
        mcq("q-py-intro-1", "easy", "Who created the Python programming language?", {"a": "Guido van Rossum", "b": "Brendan Eich", "c": "Dennis Ritchie", "d": "Bjarne Stroustrup"}, "a", "Guido van Rossum created Python in 1991. Brendan Eich created JavaScript, Dennis Ritchie created C, and Bjarne Stroustrup created C++."),
        tfq("q-py-intro-2", "easy", "Python was named after the snake family.", False, "Python was named after Monty Python's Flying Circus, the British comedy series. Guido van Rossum wanted a short, unique name."),
        mcq("q-py-intro-3", "easy", "What year was Python first released?", {"a": "1989", "b": "1991", "c": "1995", "d": "2000"}, "b", "Python was first released in 1991. Work began in 1989 as a hobby project, but the first public release came in 1991."),
        tfq("q-py-intro-4", "easy", "Python is a compiled programming language.", False, "Python is interpreted. Code is executed line by line by the Python interpreter."),
        mcq("q-py-intro-5", "medium", "Which Python version was officially sunset on January 1, 2020?", {"a": "Python 2", "b": "Python 3.0", "c": "Python 3.6", "d": "Python 1.0"}, "a", "Python 2 was officially sunset on January 1, 2020. All code should migrate to Python 3."),
        fbq("q-py-intro-6", "easy", "Python source files use the extension ___. (include the dot)", ".py", [".PY", "py"], "Python source files use the .py extension."),
        mcq("q-py-intro-7", "medium", "What organization maintains the Python language today?", {"a": "Python Software Foundation", "b": "Apache Software Foundation", "c": "Mozilla Foundation", "d": "Free Software Foundation"}, "a", "The Python Software Foundation (PSF) maintains and stewards the Python language."),
        mcq("q-py-intro-8", "medium", "What is a PEP in the Python ecosystem?", {"a": "Python Enhancement Proposal — a design document for Python features", "b": "Python Executable Program — a compiled Python file", "c": "Primary Entry Point — the main function", "d": "Python Error Protocol — a debugging standard"}, "a", "A PEP (Python Enhancement Proposal) describes new features, processes, or standards for Python. PEP 8 (style guide) is a well-known example."),
        tfq("q-py-intro-9", "medium", "Python code must be compiled before it can be executed.", False, "Python is interpreted. The interpreter reads and executes code directly without a separate compilation step."),
        fbq("q-py-intro-10", "medium", "Python's philosophy emphasizes ___ in code, using English-like keywords and significant whitespace.", "readability", ["code readability", "simplicity", "clarity"], "Python's design philosophy prioritizes readability. The language uses indentation to define code blocks and English keywords instead of symbols."),
        mcq("q-py-intro-11", "easy", "Which command runs a Python script named 'hello.py'?", {"a": "python3 hello.py", "b": "run hello.py", "c": "execute hello.py", "d": "py start hello.py"}, "a", "The command `python3 hello.py` tells the Python interpreter to execute the script file."),
        tfq("q-py-intro-12", "medium", "Python 3 introduced breaking changes that made Python 2 code incompatible without modification.", True, "Python 3 intentionally broke backward compatibility with Python 2 to fix fundamental issues."),
        mcq("q-py-intro-13", "hard", "What is the Zen of Python, and how do you access it?", {"a": "A collection of 19 guiding principles; accessed by typing `import this`", "b": "A philosophical book by Guido van Rossum", "c": "A coding style checker; run with `python -m zen`", "d": "A community forum for Python discussions"}, "a", "The Zen of Python by Tim Peters lists 19 guiding principles — type `import this` in any Python interpreter to see it."),
        tfq("q-py-intro-14", "hard", "Python 2's `print` statement and Python 3's `print()` function are syntactically identical.", False, "In Python 2, `print \"Hello\"` is a statement. In Python 3, `print()` is a function and requires parentheses."),
        fbq("q-py-intro-15", "hard", "Python Enhancement Proposals that describe new language features are categorized as ___ PEPs.", "Standards Track", ["Standards Track", "standards track", "Standard Track"], "PEPs are categorized as Standards Track (new features), Informational (guidelines), or Process (community procedures)."),
        mcq("q-py-intro-16", "hard", "Which of these is NOT one of the 19 principles in the Zen of Python?", {"a": "There should be one obvious way to do it", "b": "Fast is better than slow", "c": "Simple is better than complex", "d": "Explicit is better than implicit"}, "b", "\"Fast is better than slow\" is not in the Zen of Python. It includes \"Simple is better than complex\" and \"Explicit is better than implicit.\""),
        mcq("q-py-intro-17", "easy", "Which of the following is Python commonly used for?", {"a": "All of the above", "b": "Web development", "c": "Data science and machine learning", "d": "Automation and scripting"}, "a", "Python is used across all these domains: web (Django, Flask), data science (NumPy, Pandas), and automation."),
        tfq("q-py-intro-18", "easy", "Python runs on Windows, macOS, and Linux only.", False, "Python runs on virtually every platform including mobile and embedded systems."),
        fbq("q-py-intro-19", "medium", "The command `___ --version` displays the installed Python version.", "python3", ["python", "py"], "On most systems, `python3 --version` prints the installed Python version."),
        mcq("q-py-intro-20", "medium", "Which organization originally employed Guido van Rossum when he started working on Python?", {"a": "Centrum Wiskunde & Informatica (CWI)", "b": "Google", "c": "Dropbox", "d": "Microsoft"}, "a", "Van Rossum started Python while working at CWI in the Netherlands. He later worked at Google, Dropbox, and Microsoft."),
        tfq("q-py-intro-21", "medium", "Python is a statically typed programming language.", False, "Python is dynamically typed. Variable types are inferred at runtime."),
        fbq("q-py-intro-22", "easy", "The ___ function is used to print output to the console in Python 3.", "print", [], "In Python 3, `print()` is a built-in function."),
        mpq("q-py-intro-23", "medium", "Match each Python version milestone to its year:", ["Python 0.9.0 (first release)", "Python 2.0", "Python 3.0", "Python 2 sunset"], ["1991", "2000", "2008", "2020"], [[0,0],[1,1],[2,2],[3,3]], "Python 0.9.0 in 1991, Python 2.0 in 2000, Python 3.0 in 2008, Python 2 sunset in 2020."),
        mcq("q-py-intro-24", "hard", "What is the purpose of the Python bytecode (.pyc) cache?", {"a": "To speed up subsequent executions by storing compiled bytecode", "b": "To encrypt Python source code", "c": "To compress large Python files", "d": "To convert Python to machine code permanently"}, "a", "Python compiles to bytecode (.pyc files in __pycache__/) for faster loading on subsequent runs."),
        tfq("q-py-intro-25", "hard", "CPython is the only implementation of the Python language.", False, "Other implementations include PyPy (JIT), Jython (Java), IronPython (.NET), and MicroPython (embedded)."),
        mcq("q-py-intro-26", "easy", "What kind of language is Python classified as?", {"a": "High-level, interpreted, general-purpose", "b": "Low-level, compiled, domain-specific", "c": "Assembly-level, interpreted, scripting-only", "d": "Mid-level, compiled, systems-only"}, "a", "Python is high-level, interpreted, and general-purpose."),
        fbq("q-py-intro-27", "hard", "The Python ___ is the organization that administers conferences, community grants, and intellectual property for the language.", "Software Foundation", ["PSF", "Python Software Foundation"], "The Python Software Foundation (PSF) manages the language's IP and organizes PyCon."),
    ]
    return chapter("python-introduction", "Python Introduction", 1, secs, questions, [
        "Python was created by Guido van Rossum in 1991; the name references Monty Python",
        "Python is high-level, interpreted, dynamically typed, and emphasizes readability",
        "Python 3 is the current standard; Python 2 was deprecated in 2020",
        "Use `python3 filename.py` to run scripts; `print()` outputs to the console",
        "Python powers web, data science, AI, automation, and scientific computing",
    ])

def build_chapter_02():
    secs = [
        text("Before you can write Python code, you need the Python interpreter installed on your machine. The official distribution is available at **python.org/downloads**. On Windows, download the installer and ensure you check **\"Add Python to PATH\"** during installation. On macOS, you can use the official installer or Homebrew (`brew install python`). Most Linux distributions come with Python pre-installed — verify with `python3 --version`. For a more isolated experience, consider using **Anaconda** (popular for data science) or **Miniconda** (a lightweight alternative)."),
        text("Once Python is installed, you have multiple ways to write and run code. The **Python REPL** (Read-Eval-Print Loop) is an interactive shell — simply type `python3` in your terminal and start coding line by line. This is excellent for testing small snippets. For larger programs, use a text editor or IDE. Popular choices include **VS Code** (with the Python extension by Microsoft), **PyCharm** (by JetBrains), and **Thonny** (great for beginners). Online platforms like **Replit**, **Google Colab**, and **PythonAnywhere** let you code in a browser without any local installation."),
        text("Your first Python program should be the classic **Hello, World!** — a tradition dating back to Brian Kernighan's 1978 book *The C Programming Language*. Create a file called `hello.py`, write `print(\"Hello, World!\")`, and run it with `python3 hello.py`. When you see the text printed to your terminal, you've successfully written and executed your first Python program."),
        code("print(\"Hello, World!\")\nname = input(\"What is your name? \")\nprint(f\"Nice to meet you, {name}!\")", caption="Your first script with input"),
        callout('If you get a `command not found` error when typing `python3`, Python may not be in your PATH or may be installed as `python`. On some systems (especially macOS), `python3` is the correct command while `python` points to Python 2.', "tip"),
        list_items(["Download Python 3 from python.org/downloads", "Verify installation with `python3 --version`", "Create a file named `hello.py`", "Write `print(\"Hello, World!\")` and save", "Run: `python3 hello.py`", "Experiment in the REPL: type `python3` and try `2 + 2`"], ordered=True),
        key_points(["Install Python from python.org — verify with `python3 --version`", "Use the REPL (`python3`) for quick experiments; `.py` files for programs", "VS Code, PyCharm, and Thonny are popular editors", "Run scripts with `python3 filename.py` from the terminal", "The REPL evaluates expressions instantly — great for learning syntax"]),
    ]
    questions = [
        mcq("q-py-start-1", "easy", "What command verifies Python is installed correctly?", {"a": "python3 --version", "b": "version python", "c": "check python", "d": "py --check"}, "a", "`python3 --version` displays the installed Python version."),
        tfq("q-py-start-2", "easy", "Python must be compiled before it runs.", False, "Python is interpreted, not compiled."),
        mcq("q-py-start-3", "easy", "What does REPL stand for?", {"a": "Read-Eval-Print Loop", "b": "Run-Execute-Parse Loop", "c": "Recursive Execution Programming Language", "d": "Rapid Expression Parsing Library"}, "a", "REPL stands for Read-Eval-Print Loop."),
        mcq("q-py-start-4", "easy", "Which of these is NOT a valid way to write Python code?", {"a": "Creating a .exe file and double-clicking it", "b": "Typing commands into the Python REPL", "c": "Writing code in a .py file and running with python3", "d": "Using an online interpreter like Replit"}, "a", "Python source uses .py extension, not .exe."),
        fbq("q-py-start-5", "easy", "The technology that lets you write code line by line and see immediate results is called the ___.", "REPL", ["repl", "interactive shell", "python shell"], "The REPL is the interactive Python shell."),
        tfq("q-py-start-6", "easy", "The `print()` function in Python outputs text to the console.", True, "`print()` is Python's built-in function for sending output to the console."),
        mcq("q-py-start-7", "medium", "What is the Python extension for VS Code called?", {"a": "Python (by Microsoft)", "b": "Python Runner", "c": "PyCode", "d": "Code Python"}, "a", "The official Python extension for VS Code is published by Microsoft."),
        fbq("q-py-start-8", "easy", "The `___` function reads user input from the keyboard as a string.", "input", [], "The `input()` function displays an optional prompt and returns the user's input."),
        mcq("q-py-start-9", "medium", "Which of the following can you do in the Python REPL?", {"a": "All of the above", "b": "Define functions and classes", "c": "Import modules and test their functions", "d": "Perform calculations and test expressions"}, "a", "The REPL supports all Python syntax."),
        tfq("q-py-start-10", "medium", "Python code can be run in Jupyter Notebooks, which combine code, text, and visualizations.", True, "Jupyter Notebooks combine live code, narrative text, equations, and visualizations."),
        mcq("q-py-start-11", "medium", "What is Anaconda in the Python ecosystem?", {"a": "A Python distribution that bundles data science packages", "b": "A Python web framework", "c": "A Python testing library", "d": "A Python game engine"}, "a", "Anaconda bundles over 250 pre-installed packages for data science."),
        fbq("q-py-start-12", "medium", "To start the Python interactive shell from the terminal, type ___.", "python3", ["python", "py"], "Typing `python3` starts the Python REPL with the `>>>` prompt."),
        tfq("q-py-start-13", "medium", "You must use an IDE like PyCharm to write Python code.", False, "Any text editor can create .py files. An IDE provides helpful features but is not required."),
        mcq("q-py-start-14", "hard", "What is a key benefit of using virtual environments in Python?", {"a": "They isolate project dependencies per project", "b": "They make Python code run faster", "c": "They automatically fix syntax errors", "d": "They convert Python to JavaScript"}, "a", "Virtual environments prevent dependency conflicts between projects."),
        coq("q-py-start-15", "easy", "Arrange these steps in the correct order to run a Python script:", ["Write `print(\"Hello\")` in a file named hello.py", "Open a terminal window", "Install Python 3", "Type `python3 hello.py` and press Enter", "Verify Python with `python3 --version`"], [2, 1, 4, 0, 3], "Install Python, open terminal, verify, write script, run."),
        mcq("q-py-start-16", "hard", "Which Python implementation is designed for microcontrollers?", {"a": "MicroPython", "b": "PyPy", "c": "Jython", "d": "IronPython"}, "a", "MicroPython is designed for microcontrollers and constrained environments."),
        tfq("q-py-start-17", "easy", "Python files use the .py extension by convention.", True, "Python source files use the .py extension."),
        fbq("q-py-start-18", "hard", "To exit the Python REPL and return to your terminal, type ___().", "exit", ["quit", "exit()", "quit()"], "Typing `exit()` or pressing Ctrl+D exits the REPL."),
        mcq("q-py-start-19", "easy", "What should you check during Python installation on Windows to make it accessible from any terminal?", {"a": "Add Python to PATH", "b": "Install for all users", "c": "Create desktop shortcut", "d": "Enable automatic updates"}, "a", "\"Add Python to PATH\" ensures the python command is recognized in any terminal."),
        tfq("q-py-start-20", "hard", "The Python bytecode cache (.pyc files) should be committed to version control.", False, "`__pycache__/` and `.pyc` files are generated artifacts excluded from version control."),
        fbq("q-py-start-21", "medium", "The `___` module provides functions for interacting with the Python interpreter.", "sys", [], "The `sys` module provides access to interpreter variables and functions."),
        mpq("q-py-start-22", "easy", "Match each tool to its description:", ["IDLE", "PyCharm", "Jupyter Notebook", "VS Code + Python ext"], ["Built-in Python IDE", "Full-featured Python IDE by JetBrains", "Interactive documents with live code", "Lightweight editor with Python support"], [[0,0],[1,1],[2,2],[3,3]], "IDLE is built-in, PyCharm is a dedicated IDE, Jupyter has live code, VS Code is lightweight."),
        mcq("q-py-start-23", "hard", "What does the `python3 -c` command do?", {"a": "Runs Python code passed as a string argument", "b": "Checks Python syntax", "c": "Compiles Python to bytecode", "d": "Opens Python configuration"}, "a", "`python3 -c \"code\"` executes the given string as Python code."),
        tfq("q-py-start-24", "medium", "Google Colab requires Python to be installed on your local machine.", False, "Google Colab runs entirely in the browser on Google's servers."),
        mcq("q-py-start-25", "easy", "What does `print()` add by default at the end of output?", {"a": "A newline character (\\n)", "b": "A space", "c": "A semicolon", "d": "Nothing"}, "a", "By default, `print()` adds a newline."),
    ]
    return chapter("python-get-started", "Python Getting Started", 2, secs, questions, [
        "Install Python 3 from python.org; verify with `python3 --version`",
        "Use the REPL (`python3`) for quick experiments; `.py` files for programs",
        "Editors: VS Code, PyCharm, IDLE, or any text editor",
        "Run scripts with `python3 filename.py`; `print()` outputs to console",
        "Virtual environments isolate dependencies between projects",
    ])

def build_chapter_03():
    secs = [
        text("Python's syntax is designed for clarity and readability. Unlike many languages that use curly braces `{}` to define code blocks, Python uses **indentation** (spaces or tabs) to group statements. The standard convention is **4 spaces per indentation level**. This might feel restrictive at first, but it enforces consistent, readable code across all Python projects. A block of code — such as the body of an `if` statement or a loop — is indented one level deeper than the line that introduces it."),
        text("A Python statement is a unit of code that the interpreter can execute. Simple statements like assignments (`x = 5`), function calls (`print()`), and control flow statements end at the newline. For long statements, you can use a **backslash `\\`** for explicit line continuation, or rely on **implicit continuation** inside parentheses `()`, brackets `[]`, or braces `{}`. Multiple statements on one line are separated by semicolons `;`, but this is discouraged for readability."),
        text("Python programs are executed sequentially from top to bottom. The interpreter reads each line, parses it, and executes it. Variables must be defined before they are used. To write a runnable script, you typically define functions and classes, then call them. By convention, a script's entry point is guarded by `if __name__ == \"__main__\":` which ensures code runs only when the file is executed directly, not when imported as a module."),
        code("# This is a comment\nx = 10\ny = 20\nif x > y:\n    print(\"x is greater\")\nelse:\n    print(\"y is greater\")\n\n# Multi-line in parentheses\nresult = (x + y * 2 -\n         y // 3)\nprint(result)", caption="Python syntax — indentation, conditionals, and line continuation"),
        callout("Python uses **significant whitespace**: the indentation level determines which block a statement belongs to. Mixing tabs and spaces is a syntax error (`TabError`). Most editors can be configured to convert tabs to spaces automatically. PEP 8 recommends 4 spaces per indentation level.", "warning"),
        comparison("Language Syntax Comparison", ["Feature", "Python", "JavaScript", "Java"], [
            ["Block delimiters", "Indentation", "Curly braces {}", "Curly braces {}"],
            ["Statement terminator", "Newline (; optional)", "Semicolon ;", "Semicolon ;"],
            ["Line continuation", "\\ or implicit in ()", "\\ or implicit", "None needed"],
            ["Comment style", "# line comments", "// line comments", "// line comments"],
        ]),
        list_items(["Statements end at newline — no semicolons required", "Indentation defines blocks — 4 spaces is standard", "Use `\\` for explicit line continuation", "Parentheses, brackets, braces allow implicit continuation", "Multiple statements on one line use `;` (avoid this)", "`if __name__ == \"__main__\":` guards the entry point"], ordered=True),
        key_points(["Python uses indentation (4 spaces) instead of curly braces for code blocks", "Statements end at the newline; semicolons are optional", "Use `\\` for line continuation or rely on implicit continuation inside brackets", "Code executes sequentially from top to bottom", "Imports and definitions typically go at the top of the file"]),
    ]
    questions = [
        mcq("q-py-syn-1", "easy", "How does Python define code blocks?", {"a": "Using indentation (whitespace)", "b": "Using curly braces {}", "c": "Using `begin` / `end` keywords", "d": "Using parentheses"}, "a", "Python uses indentation (typically 4 spaces) to define code blocks."),
        tfq("q-py-syn-2", "easy", "Python statements must end with a semicolon.", False, "Python statements end at the newline. Semicolons are optional and discouraged."),
        mcq("q-py-syn-3", "easy", "How many spaces per indentation level does PEP 8 recommend?", {"a": "4", "b": "2", "c": "8", "d": "1"}, "a", "PEP 8 recommends 4 spaces per indentation level."),
        fbq("q-py-syn-4", "easy", "Python uses ___ to define code blocks instead of curly braces.", "indentation", ["whitespace", "spaces", "tabs"], "Python uses indentation (whitespace) to group statements into blocks."),
        tfq("q-py-syn-5", "medium", "Mixing tabs and spaces for indentation in Python is allowed but discouraged.", False, "Mixing tabs and spaces causes a `TabError: inconsistent use of tabs and spaces in indentation`."),
        mcq("q-py-syn-6", "medium", "What does `if __name__ == \"__main__\":` do?", {"a": "Ensures code runs only when the file is executed directly", "b": "Checks if Python is running on the main thread", "c": "Verifies the script is the main module of a package", "d": "Checks the operating system type"}, "a", "This guard ensures code runs only when the file is executed directly, not when imported."),
        mcq("q-py-syn-7", "easy", "Which of the following is a valid Python statement?", {"a": "x = 5", "b": "x := 5", "c": "let x = 5", "d": "int x = 5"}, "a", "`x = 5` is Python's assignment syntax. The others are from other languages (Go, JavaScript, Java)."),
        fbq("q-py-syn-8", "medium", "A ___ is a unit of code that the Python interpreter can execute.", "statement", [], "A statement is a unit of code that the interpreter can execute. Simple statements end at the newline."),
        tfq("q-py-syn-9", "medium", "Python supports implicit line continuation inside parentheses.", True, "Inside (), [], or {}, you can break lines without using `\\`."),
        mcq("q-py-syn-10", "hard", "What happens when Python encounters inconsistent indentation?", {"a": "It raises an IndentationError or TabError", "b": "It ignores the indentation difference", "c": "It automatically corrects the indentation", "d": "It prints a warning and continues"}, "a", "Python raises `IndentationError` (or `TabError` for mixed tabs/spaces) when indentation is inconsistent."),
    ]
    return chapter("python-syntax", "Python Syntax", 3, secs, questions, [
        "Python uses indentation (4 spaces) instead of curly braces for code blocks",
        "Statements end at the newline; semicolons are optional and discouraged",
        "Use `\\` for explicit line continuation or rely on implicit continuation inside brackets",
        "The `if __name__ == \"__main__\":` guard prevents code from running on import",
        "Consistent indentation is mandatory — mixing tabs and spaces causes errors",
    ])

# Generate all 55 chapters
chapters = []
chapters.append(build_chapter_01())
chapters.append(build_chapter_02())
chapters.append(build_chapter_03())

# For now, generate what we have
# Build the full output
output_parts = []
output_parts.append('import { Course } from "../types";\n')
output_parts.append('export const pythonCourse: Course = {')
output_parts.append('  id: "python",')
output_parts.append('  title: "Python",')
output_parts.append('  fullTitle: "Python — Power and Simplicity",')
output_parts.append('  description:')
output_parts.append('    "Python for everyone. Learn syntax, data structures, OOP, file handling, and popular libraries. From scripts to full applications.",')
output_parts.append('  icon: "Snake",')
output_parts.append('  color: "#3776ab",')
output_parts.append('  difficulty: 2,')
output_parts.append('  estimatedHours: 40,')

total_xp = sum(c["xpReward"] for c in chapters)
output_parts.append(f'  totalXP: {total_xp},')
output_parts.append('  chapters: [')

for i, ch in enumerate(chapters):
    sep = "    // " + "═" * 70
    output_parts.append(sep)
    output_parts.append(f'    // Chapter {i+1} – {ch["id"]}')
    output_parts.append(sep)
    output_parts.append('    {')
    output_parts.append(f'      id: "{ch["id"]}",')
    output_parts.append(f'      courseId: "{ch["courseId"]}",')
    output_parts.append(f'      title: "{ch["title"]}",')
    output_parts.append(f'      order: {ch["order"]},')
    output_parts.append(f'      xpReward: {ch["xpReward"]},')
    output_parts.append(f'      estimatedMinutes: {ch["estimatedMinutes"]},')
    prereqs_json = json.dumps(ch["prerequisites"])
    output_parts.append(f'      prerequisites: {prereqs_json},')
    
    # Sections
    output_parts.append('      sections: [')
    for sec in ch["sections"]:
        output_parts.append('        {')
        for k, v in sec.items():
            if isinstance(v, str):
                v_escaped = v.replace('\\', '\\\\').replace('"', '\\"')
                output_parts.append(f'          {k}: "{v_escaped}",')
            elif isinstance(v, bool):
                output_parts.append(f'          {k}: {str(v).lower()},')
            elif isinstance(v, list):
                if k == "points":
                    output_parts.append(f'          {k}: [')
                    for item in v:
                        item_e = item.replace('\\', '\\\\').replace('"', '\\"')
                        output_parts.append(f'            "{item_e}",')
                    output_parts.append('          ],')
                elif k == "items":
                    output_parts.append(f'          {k}: [')
                    for item in v:
                        item_e = item.replace('\\', '\\\\').replace('"', '\\"')
                        output_parts.append(f'            "{item_e}",')
                    output_parts.append('          ],')
                else:
                    output_parts.append(f'          {k}: {json.dumps(v)},')
            else:
                output_parts.append(f'          {k}: {json.dumps(v)},')
        output_parts.append('        },')
    output_parts.append('      ],')
    
    # Exam pool
    output_parts.append('      examPool: [')
    for q in ch["examPool"]:
        output_parts.append('        {')
        for k, v in q.items():
            if isinstance(v, str):
                v_escaped = v.replace('\\', '\\\\').replace('"', '\\"')
                output_parts.append(f'          {k}: "{v_escaped}",')
            elif isinstance(v, bool):
                output_parts.append(f'          {k}: {str(v).lower()},')
            elif isinstance(v, list):
                if k == "options":
                    output_parts.append(f'          {k}: [')
                    for opt in v:
                        output_parts.append(f'            {{ id: "{opt["id"]}", text: "{opt["text"]}" }},')
                    output_parts.append('          ],')
                elif k == "codeLines":
                    output_parts.append(f'          {k}: [')
                    for line in v:
                        line_e = line.replace('\\', '\\\\').replace('"', '\\"')
                        output_parts.append(f'            "{line_e}",')
                    output_parts.append('          ],')
                elif k == "acceptableAnswers":
                    output_parts.append(f'          {k}: {json.dumps(v)},')
                elif k == "correctMatches":
                    output_parts.append(f'          {k}: {json.dumps(v)},')
                elif k == "leftItems":
                    output_parts.append(f'          {k}: {json.dumps(v)},')
                elif k == "rightItems":
                    output_parts.append(f'          {k}: {json.dumps(v)},')
                else:
                    output_parts.append(f'          {k}: {json.dumps(v)},')
            elif isinstance(v, list):
                output_parts.append(f'          {k}: {json.dumps(v)},')
            else:
                output_parts.append(f'          {k}: {json.dumps(v)},')
        output_parts.append('        },')
    output_parts.append('      ],')
    
    # Key points
    output_parts.append('      keyPoints: [')
    for kp in ch["keyPoints"]:
        kp_e = kp.replace('\\', '\\\\').replace('"', '\\"')
        output_parts.append(f'        "{kp_e}",')
    output_parts.append('      ],')
    output_parts.append('    },')

output_parts.append('  ],')
output_parts.append('};')
output_parts.append('')

with open(OUTPUT, 'w') as f:
    f.write('\n'.join(output_parts))

print(f"Generated {OUTPUT}")
print(f"Chapters: {len(chapters)}")
print(f"Total XP: {total_xp}")
print(f"Total lines: {len(output_parts)}")
