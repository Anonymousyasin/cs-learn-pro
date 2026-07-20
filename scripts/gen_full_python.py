#!/usr/bin/env python3
"""Generate complete Python course with 55 chapters."""

import json, os, textwrap

OUTPUT = "/data/data/com.termux/files/home/cs-learning/src/lib/courses/python/index.ts"
OUT = []
INDENT = "  "

def L(s="", indent=1):
    OUT.append(INDENT * indent + s)

def wrap(s, indent=2):
    return textwrap.fill(s, width=100, subsequent_indent=INDENT * indent)

def esc(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

def wsec(s):
    s_esc = esc(s)
    L(f'content: "{s_esc}",', 3)

def wlist(arr, indent=4):
    for item in arr:
        L(f'"{esc(item)}",', indent)

# ═══════════════════════════════════════════════════════════════════
# Header
# ═══════════════════════════════════════════════════════════════════
L('import { Course } from "../types";')
L()
L('export const pythonCourse: Course = {')
L('id: "python",')
L('title: "Python",')
L('fullTitle: "Python \u2014 Power and Simplicity",')
L('description:', 1)
L('"Python for everyone. Learn syntax, data structures, OOP, file handling, and popular libraries. From scripts to full applications.",', 1)
L('icon: "Snake",')
L('color: "#3776ab",')
L('difficulty: 2,')
L('estimatedHours: 40,')

total_xp = 0
L('chapters: [')

# ─── Chapter building block ──────────────────────────────────────

def start_chapter(id_, title, order, xp=15, mins=6, prereqs=None):
    global total_xp
    total_xp += xp
    sep = "═" * 70
    L(f'// {sep}', 1)
    L(f'// Chapter {order} \u2013 {id_}', 1)
    L(f'// {sep}', 1)
    L('{')
    L(f'id: "{id_}",')
    L(f'courseId: "python",')
    L(f'title: "{title}",')
    L(f'order: {order},')
    L(f'xpReward: {xp},')
    L(f'estimatedMinutes: {mins},')
    if prereqs is None:
        prereqs = [f"python-{order-1}"] if order > 1 else []
    L(f'prerequisites: {json.dumps(prereqs)},')
    L('sections: [', 1)

def text_sec(content):
    L('{')
    L('type: "text",', 2)
    wsec(content)
    L('},')

def code_sec(content, caption=None, lang="python"):
    L('{')
    L('type: "code",', 2)
    L(f'language: "{lang}",', 2)
    if caption:
        L(f'caption: "{esc(caption)}",', 2)
    L(f'content: `{content}`,', 2)
    L('},')

def callout_sec(content, style="info"):
    L('{')
    L('type: "callout",', 2)
    L(f'style: "{style}",', 2)
    wsec(content)
    L('},')

def list_sec(items, ordered=False):
    L('{')
    L('type: "list",', 2)
    L(f'ordered: {str(ordered).lower()},', 2)
    L('items: [', 2)
    wlist(items, 3)
    L('],', 2)
    L('},')

def kp_sec(points):
    L('{')
    L('type: "key-points",', 2)
    L('points: [', 2)
    wlist(points, 3)
    L('],', 2)
    L('},')

def end_sections():
    L('],', 1)
    L('examPool: [', 1)

def mcq(id_, diff, question, options, correct, explanation):
    L('{')
    L(f'id: "{id_}",')
    L(f'type: "multiple-choice",')
    L(f'difficulty: "{diff}",')
    L(f'question: "{esc(question)}",')
    L('options: [', 1)
    for k, v in options.items():
        L(f'{{ id: "{k}", text: "{esc(v)}" }},', 2)
    L('],', 1)
    L(f'correctAnswer: "{correct}",')
    L(f'explanation: "{esc(explanation)}",')
    L('},')

def tfq(id_, diff, question, correct, explanation):
    L('{')
    L(f'id: "{id_}",')
    L(f'type: "true-false",')
    L(f'difficulty: "{diff}",')
    L(f'question: "{esc(question)}",')
    L(f'correctAnswer: {str(correct).lower()},')
    L(f'explanation: "{esc(explanation)}",')
    L('},')

def fbq(id_, diff, question, correct, acceptable=None, explanation=""):
    L('{')
    L(f'id: "{id_}",')
    L(f'type: "fill-blank",')
    L(f'difficulty: "{diff}",')
    L(f'question: "{esc(question)}",')
    L(f'correctAnswer: "{esc(correct)}",')
    L(f'acceptableAnswers: {json.dumps(acceptable or [])},')
    L(f'explanation: "{esc(explanation)}",')
    L('},')

def coq(id_, diff, question, code_lines, correct_order, explanation=""):
    L('{')
    L(f'id: "{id_}",')
    L(f'type: "code-order",')
    L(f'difficulty: "{diff}",')
    L(f'question: "{esc(question)}",')
    L('codeLines: [', 1)
    for line in code_lines:
        L(f'"{esc(line)}",', 2)
    L('],', 1)
    L(f'correctOrder: {json.dumps(correct_order)},')
    L(f'explanation: "{esc(explanation)}",')
    L('},')

def mpq(id_, diff, question, left, right, matches, explanation=""):
    L('{')
    L(f'id: "{id_}",')
    L(f'type: "match-pairs",')
    L(f'difficulty: "{diff}",')
    L(f'question: "{esc(question)}",')
    L(f'leftItems: {json.dumps(left)},')
    L(f'rightItems: {json.dumps(right)},')
    L(f'correctMatches: {json.dumps(matches)},')
    L(f'explanation: "{esc(explanation)}",')
    L('},')

def end_chapter(kps):
    L('],', 1)
    L('keyPoints: [', 1)
    wlist(kps, 2)
    L('],', 1)
    L('},')

# ═══════════════════════════════════════════════════════════════════
# CHAPTER 1: Python Introduction
# ═══════════════════════════════════════════════════════════════════
start_chapter("python-introduction", "Python Introduction", 1)
text_sec("Python is a **high-level**, **interpreted** programming language created by **Guido van Rossum** and first released in 1991. It was designed with a philosophy centered on code readability and developer productivity. Python's syntax emphasizes clarity through significant whitespace and English-like keywords, making it one of the most accessible languages for beginners while remaining powerful enough for professional software engineers, data scientists, and researchers. The language has grown to become one of the most popular programming languages in the world, consistently ranking in the top indices like TIOBE and Stack Overflow surveys.")
text_sec("The name \"Python\" has a fun origin — it was inspired by the British comedy series *Monty Python's Flying Circus*, not the snake. Guido van Rossum wanted a name that was short, unique, and slightly mysterious. Today, Python runs on virtually every platform — Windows, macOS, Linux, and even embedded systems — and powers everything from web frameworks like Django and Flask to machine learning libraries like TensorFlow and PyTorch, automation scripts, scientific computing, and even game development with PyGame. Its versatility is unmatched, making it a valuable skill in any developer's toolkit.")
text_sec("Python has undergone several major version releases. **Python 2** was released in 2000 and became the de facto standard for over a decade, but it was officially sunset on January 1, 2020. **Python 3**, released in 2008, introduced breaking improvements like better Unicode support, consistent iterator behavior, and cleaner syntax. All modern Python development uses Python 3.x. The Python Software Foundation maintains the language under an open-source license, and its evolution is guided by community-driven documents called PEPs (Python Enhancement Proposals). Notable PEPs include PEP 8 (style guide), PEP 257 (docstring conventions), and PEP 20 (the Zen of Python).")
code_sec("print(\"Hello, World!\")\n\n# The Zen of Python\nimport this", caption="Your first Python program and the Zen of Python")
callout_sec("Python is an **interpreted language**, meaning code is executed line by line by the Python interpreter rather than being compiled into machine code beforehand. This makes development faster because you can test code immediately without a compilation step, but it also means Python is generally slower than compiled languages like C++ or Rust for CPU-intensive tasks. For most applications, this speed difference is negligible compared to the productivity gains Python offers.")
list_sec(["Install Python from python.org or your system package manager", "Open a terminal and type `python3 --version` to verify", "Write your code in a `.py` file using any text editor", "Run it with `python3 filename.py`", "The interpreter reads, parses, and executes your code in one step"], ordered=True)
kp_sec(["Python was created by Guido van Rossum and first released in 1991", "The name comes from Monty Python's Flying Circus, not the snake", "Python 2 is deprecated — all modern code uses Python 3", "Python is interpreted, dynamically typed, and focuses on readability", "The Python Software Foundation (PSF) maintains the language"])
end_sections()
mcq("q-py-intro-1","easy","Who created the Python programming language?",{"a":"Guido van Rossum","b":"Brendan Eich","c":"Dennis Ritchie","d":"Bjarne Stroustrup"},"a","Guido van Rossum created Python in 1991. Brendan Eich created JavaScript, Dennis Ritchie created C, and Bjarne Stroustrup created C++.")
tfq("q-py-intro-2","easy","Python was named after the snake family.",False,"Python was named after Monty Python's Flying Circus, the British comedy series.")
mcq("q-py-intro-3","easy","What year was Python first released?",{"a":"1989","b":"1991","c":"1995","d":"2000"},"b","Python was first released in 1991. Work began in 1989 as a hobby project.")
tfq("q-py-intro-4","easy","Python is a compiled programming language.",False,"Python is interpreted. Code is executed line by line by the Python interpreter.")
mcq("q-py-intro-5","medium","Which Python version was officially sunset on January 1, 2020?",{"a":"Python 2","b":"Python 3.0","c":"Python 3.6","d":"Python 1.0"},"a","Python 2 was officially sunset on January 1, 2020. All code should migrate to Python 3.")
fbq("q-py-intro-6","easy","Python source files use the extension ___. (include the dot)",".py",[".PY","py"],"Python source files use the .py extension.")
mcq("q-py-intro-7","medium","What organization maintains the Python language today?",{"a":"Python Software Foundation","b":"Apache Software Foundation","c":"Mozilla Foundation","d":"Free Software Foundation"},"a","The Python Software Foundation (PSF) maintains and stewards the Python language.")
mcq("q-py-intro-8","medium","What is a PEP in the Python ecosystem?",{"a":"Python Enhancement Proposal","b":"Python Executable Program","c":"Primary Entry Point","d":"Python Error Protocol"},"a","A PEP describes new features, processes, or standards for Python. PEP 8 is the style guide.")
tfq("q-py-intro-9","medium","Python code must be compiled before it can be executed.",False,"Python is interpreted. The interpreter reads and executes code directly.")
fbq("q-py-intro-10","medium","Python's design philosophy emphasizes ___ in code, using English-like keywords and indentation.","readability",["code readability","simplicity","clarity"],"Python's design philosophy prioritizes readability.")
mcq("q-py-intro-11","easy","Which command runs a Python script called 'hello.py'?",{"a":"python3 hello.py","b":"run hello.py","c":"execute hello.py","d":"py start hello.py"},"a","`python3 hello.py` tells the interpreter to execute the script.")
tfq("q-py-intro-12","medium","Python 3 is fully backward-compatible with Python 2.",False,"Python 3 intentionally broke backward compatibility to fix fundamental design issues.")
mcq("q-py-intro-13","hard","How do you view the Zen of Python?",{"a":"Type `import this`","b":"Read the Python documentation","c":"Run `python --zen`","d":"Visit python.org/zen"},"a","The Zen of Python is included as an Easter egg — type `import this` in any interpreter.")
tfq("q-py-intro-14","hard","Python 2's `print` statement and Python 3's `print()` function are identical in syntax.",False,"Python 2: `print \"Hello\"` (statement). Python 3: `print(\"Hello\")` (function). Requires parentheses.")
fbq("q-py-intro-15","hard","PEPs that describe new language features are classified as ___ PEPs.","Standards Track",["Standards Track","standards track","Standard Track"],"PEPs are categorized as Standards Track, Informational, or Process.")
mcq("q-py-intro-16","hard","Which of these is NOT one of the Zen of Python principles?",{"a":"Fast is better than slow","b":"Simple is better than complex","c":"Explicit is better than implicit","d":"Readability counts"},"a","\"Fast is better than slow\" is not in the Zen of Python.")
mcq("q-py-intro-17","easy","Python is commonly used for which of the following?",{"a":"All of the above","b":"Web development","c":"Data science","d":"Automation and scripting"},"a","Python is used for web dev, data science, AI, automation, and more.")
tfq("q-py-intro-18","easy","Python only runs on Windows and Linux.",False,"Python runs on virtually every platform including macOS, mobile, and embedded systems.")
fbq("q-py-intro-19","medium","Type `___ --version` to display the installed Python version.","python3",["python","py"],"`python3 --version` prints the installed version.")
mcq("q-py-intro-20","medium","Where did Guido van Rossum work when he started Python?",{"a":"CWI in the Netherlands","b":"Google","c":"Dropbox","d":"Microsoft"},"a","Python began at CWI (Centrum Wiskunde & Informatica) in the Netherlands.")
tfq("q-py-intro-21","medium","Python is a statically typed programming language.",False,"Python is dynamically typed — types are inferred at runtime.")
fbq("q-py-intro-22","easy","The ___ function outputs text to the console in Python 3.","print",[],"`print()` is Python's built-in function for console output.")
mpq("q-py-intro-23","medium","Match Python version milestones to their years:",["Python 0.9.0 release","Python 2.0","Python 3.0","Python 2 sunset"],["1991","2000","2008","2020"],[[0,0],[1,1],[2,2],[3,3]],"1991: first release, 2000: Python 2, 2008: Python 3, 2020: Python 2 sunset.")
mcq("q-py-intro-24","hard","What does the .pyc bytecode cache do?",{"a":"Speeds up subsequent runs by storing compiled bytecode","b":"Encrypts source code","c":"Compresses Python files","d":"Converts Python to machine code"},"a",".pyc files in __pycache__/ store compiled bytecode for faster loading.")
tfq("q-py-intro-25","hard","CPython is the only implementation of Python.",False,"Other implementations include PyPy, Jython, IronPython, and MicroPython.")
mcq("q-py-intro-26","easy","How is Python classified?",{"a":"High-level, interpreted, general-purpose","b":"Low-level, compiled, domain-specific","c":"Assembly-level, scripting-only","d":"Mid-level, compiled, systems-only"},"a","Python is high-level, interpreted, and general-purpose.")
fbq("q-py-intro-27","hard","The Python ___ Foundation manages conferences, grants, and IP for the language.","Software",["PSF","Python Software Foundation"],"The Python Software Foundation (PSF) manages the language's community and IP.")
end_chapter(["Python was created by Guido van Rossum in 1991; the name references Monty Python","Python is high-level, interpreted, dynamically typed, and emphasizes readability","Python 3 is the current standard; Python 2 was deprecated in 2020","Use `python3 filename.py` to run scripts; `print()` outputs to console","Python powers web, data science, AI, automation, and scientific computing"])

# ═══════════════════════════════════════════════════════════════════
# CHAPTER 2: Python Getting Started
# ═══════════════════════════════════════════════════════════════════
start_chapter("python-get-started", "Python Getting Started", 2)
text_sec("Before writing Python code, you need the Python interpreter installed. The official distribution is available at **python.org/downloads**. On Windows, download the installer and check **\"Add Python to PATH\"** during installation. On macOS, use the official installer or Homebrew (`brew install python`). Most Linux distributions come with Python pre-installed — verify with `python3 --version`. For data science work, **Anaconda** or **Miniconda** provide a bundled Python distribution with popular packages pre-installed. For isolated project environments, Python's built-in `venv` module creates lightweight virtual environments.")
text_sec("Once installed, you have multiple ways to run Python. The **Python REPL** (Read-Eval-Print Loop) starts when you type `python3` in your terminal — it lets you test code line by line interactively. For larger programs, use a text editor or IDE. Popular choices include **VS Code** with the Python extension, **PyCharm** by JetBrains, **Thonny** for beginners, and **IDLE** which comes bundled with Python. Online platforms like **Replit**, **Google Colab**, and **PythonAnywhere** let you code in your browser without any local setup, making them perfect for beginners.")
text_sec("Your first program should be the classic **Hello, World!** — a tradition from Brian Kernighan's 1978 book *The C Programming Language*. Create a file called `hello.py`, write `print(\"Hello, World!\")`, and run it with `python3 hello.py`. When you see the output printed, you've successfully written and executed your first Python program. From here, you can explore the REPL by typing expressions like `2 + 2`, `\"hello\" * 3`, and `len(\"Python\")` to see how Python evaluates them instantly.")
code_sec("print(\"Hello, World!\")\nname = input(\"What is your name? \")\nprint(f\"Nice to meet you, {name}!\")\n\n# Try these in the REPL:\n# >>> 2 + 2\n# >>> \"Py\" * 3\n# >>> len(\"Python\")", caption="First script with user input and REPL experiments")
callout_sec("If `python3 --version` gives a \"command not found\" error, Python may not be in your PATH. On some systems, `python` points to Python 2 and `python3` is the correct command. On Windows, re-run the installer and ensure \"Add Python to PATH\" is checked. On macOS, try `brew install python` if using Homebrew.", "tip")
list_sec(["Download Python 3 from python.org/downloads or your package manager", "Verify with `python3 --version` in your terminal", "Create a file named `hello.py` with `print(\"Hello, World!\")`", "Run the script: `python3 hello.py`", "Start the REPL: type `python3` without arguments", "Experiment: try `2 + 2`, `\"abc\" * 3`, `len(\"Python\")`, `round(3.14)`"], ordered=True)
kp_sec(["Install Python from python.org; verify with `python3 --version`", "Use the REPL (`python3`) for quick experiments; `.py` files for programs", "VS Code, PyCharm, Thonny, and IDLE are common editors", "Run scripts with `python3 filename.py`", "Online platforms like Replit and Google Colab require no local setup"])
end_sections()
mcq("q-py-start-1","easy","What command verifies Python is installed?",{"a":"python3 --version","b":"version python","c":"check python","d":"py --check"},"a","`python3 --version` displays the installed Python version.")
tfq("q-py-start-2","easy","Python must be compiled before execution.",False,"Python is interpreted, not compiled. Code runs directly through the interpreter.")
mcq("q-py-start-3","easy","What does REPL stand for?",{"a":"Read-Eval-Print Loop","b":"Run-Execute-Parse Loop","c":"Recursive Execution Programming Language","d":"Rapid Expression Parsing Library"},"a","REPL stands for Read-Eval-Print Loop.")
mcq("q-py-start-4","easy","Which is NOT a valid way to write Python code?",{"a":"Creating a .exe file","b":"Using the Python REPL","c":"Writing a .py file and running with python3","d":"Using an online interpreter"},"a","Python source files use .py, not .exe.")
fbq("q-py-start-5","easy","The interactive Python shell is called the ___.","REPL",["repl","interactive shell","python shell"],"The REPL lets you test code interactively.")
tfq("q-py-start-6","easy","`print()` outputs text to the console.",True,"`print()` is Python's built-in function for console output.")
mcq("q-py-start-7","medium","What is the VS Code Python extension called?",{"a":"Python (by Microsoft)","b":"Python Runner","c":"PyCode","d":"Code Python"},"a","The official Python extension for VS Code is by Microsoft.")
fbq("q-py-start-8","easy","The `___` function reads keyboard input as a string.","input",[],"`input()` displays a prompt and returns user input as a string.")
mcq("q-py-start-9","medium","What can you do in the Python REPL?",{"a":"All of the above","b":"Define functions","c":"Import modules","d":"Test expressions"},"a","The REPL supports all Python operations.")
tfq("q-py-start-10","medium","Jupyter Notebooks combine code, text, and visualizations.",True,"Jupyter Notebooks are interactive documents with live code and rich text.")
mcq("q-py-start-11","medium","What is Anaconda?",{"a":"A Python distribution for data science","b":"A web framework","c":"A testing library","d":"A game engine"},"a","Anaconda bundles over 250 data science packages.")
fbq("q-py-start-12","medium","Start the Python REPL by typing `___` in the terminal.","python3",["python","py"],"`python3` without arguments starts the REPL.")
tfq("q-py-start-13","medium","You need an IDE like PyCharm to write Python.",False,"Any text editor works. IDEs provide helpful features but are optional.")
mcq("q-py-start-14","hard","Why use virtual environments?",{"a":"Isolate project dependencies","b":"Make code run faster","c":"Fix syntax errors automatically","d":"Convert Python to JavaScript"},"a","Virtual environments prevent dependency conflicts between projects.")
coq("q-py-start-15","easy","Order these steps to run a Python script:",["Write `print(\"Hello\")` in hello.py","Open a terminal","Install Python 3","Type `python3 hello.py`","Verify with `python3 --version`"],[2,1,4,0,3],"Install Python, open terminal, verify, write script, run.")
mcq("q-py-start-16","hard","Which Python is for microcontrollers?",{"a":"MicroPython","b":"PyPy","c":"Jython","d":"IronPython"},"a","MicroPython is designed for microcontrollers and embedded systems.")
tfq("q-py-start-17","easy","Python files use the .py extension.",True,"Python source files use .py by convention.")
fbq("q-py-start-18","hard","Exit the REPL with ___() or Ctrl+D.","exit",["quit","exit()","quit()"],"`exit()` or Ctrl+D exits the REPL.")
mcq("q-py-start-19","easy","What should you check on Windows during Python installation?",{"a":"Add Python to PATH","b":"Install for all users","c":"Create desktop shortcut","d":"Enable updates"},"a","\"Add Python to PATH\" makes Python accessible from any terminal.")
tfq("q-py-start-20","hard",".pyc files should be committed to version control.",False,"__pycache__/ and .pyc are generated artifacts excluded from git.")
fbq("q-py-start-21","medium","The `___` module provides `sys.version` and `sys.path`.","sys",[],"The sys module provides interpreter-specific variables.")
mpq("q-py-start-22","easy","Match tools to descriptions:",["IDLE","PyCharm","Jupyter Notebook","VS Code + Python"],["Built-in Python IDE","Full IDE by JetBrains","Interactive docs with live code","Lightweight editor with Python support"],[[0,0],[1,1],[2,2],[3,3]],"IDLE is built-in, PyCharm is a full IDE, Jupyter has live code, VS Code is lightweight.")
mcq("q-py-start-23","hard","What does `python3 -c \"code\"` do?",{"a":"Runs code as a string argument","b":"Checks syntax","c":"Compiles to bytecode","d":"Opens config"},"a","`-c` executes the given string as Python code directly.")
tfq("q-py-start-24","medium","Google Colab requires local Python installation.",False,"Google Colab runs entirely in Google's cloud servers via browser.")
mcq("q-py-start-25","easy","What does `print()` add at the end by default?",{"a":"A newline (\\n)","b":"A space","c":"A semicolon","d":"Nothing"},"a","`print()` adds a newline character by default.")
end_chapter(["Install Python 3; verify with `python3 --version`","Use REPL for experiments; .py files for programs","Editors: VS Code, PyCharm, IDLE, or any text editor","Run with `python3 filename.py`","Virtual environments isolate dependencies"])

print(f"Chapters built so far")
for i, ch in enumerate(OUT):
    pass

# Write the file
with open(OUTPUT, 'w') as f:
    f.write('\n'.join(OUT))
    
print(f"Generated {OUTPUT}")
print(f"Total lines: {len(OUT)}")
print(f"Total XP (placeholder): {total_xp}")
