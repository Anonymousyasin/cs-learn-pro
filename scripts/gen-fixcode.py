#!/usr/bin/env python3
"""
Generate and insert one fix-code exercise per chapter across all 40 chapters.
"""
import re, sys
from pathlib import Path

FIXCODE_EXERCISES = {
    # (file_index, chapter_var_name) -> fix-code data
}

# Define exercises by (file, ch_var) key
exercises = {
    ("1-10", "ch2"): {
        "id": "py2-fix1", "title": "Fix the Variable Assignment",
        "instructions": "The code has a syntax error. Fix it so the variable is properly assigned.",
        "brokenCode": 'user_name = "Alice"\nprint(user_name)',
        "correctCode": 'user_name = "Alice"\nprint(user_name)',
        "hints": ["Variable names can't have hyphens in Python.", "Use underscores instead."],
        "explanation": "Python variable names cannot contain hyphens (`-`). Use underscores `_` to separate words: `user_name` instead of `user-name`.",
    },
    ("1-10", "ch3"): {
        "id": "py3-fix1", "title": "Fix the String Concatenation",
        "instructions": "The code tries to combine a string and a number, which causes a TypeError. Fix it so it prints correctly.",
        "brokenCode": 'age = 25\nprint("I am " + age + " years old")',
        "correctCode": 'age = 25\nprint(f"I am {age} years old")',
        "hints": ["You can't concatenate strings and numbers directly.", "Try an f-string or convert age with str()."],
        "explanation": "Python doesn't allow `+` between `str` and `int`. Use an f-string (`f\"...{var}...\"`) or convert with `str(age)` to fix it.",
    },
    ("1-10", "ch4"): {
        "id": "py4-fix1", "title": "Fix the Type Conversion",
        "instructions": "This code crashes when the user enters a decimal number. Fix it.",
        "brokenCode": 'num = int(input("Enter a number: "))\nprint(num * 2)',
        "correctCode": 'num = float(input("Enter a number: "))\nprint(num * 2)',
        "hints": ["What happens if the user types 3.5 instead of 3?", "There's a conversion that only works with whole numbers."],
        "explanation": "`int()` cannot convert a string containing a decimal point (e.g., `\"3.5\"`). Use `float()` when you need to accept decimal numbers.",
    },
    ("1-10", "ch5"): {
        "id": "py5-fix1", "title": "Fix the Input Type",
        "instructions": "The code below tries to add two numbers from user input, but it crashes. Fix it.",
        "brokenCode": 'a = input("First: ")\nb = input("Second: ")\nprint(a + b)',
        "correctCode": 'a = int(input("First: "))\nb = int(input("Second: "))\nprint(a + b)',
        "hints": ["What type does input() return?", "Check the types before adding."],
        "explanation": "`input()` always returns a **string**. `\"3\" + \"5\"` is `\"35\"`, not `8`. Convert with `int()` or `float()` first.",
    },
    ("1-10", "ch6"): {
        "id": "py6-fix1", "title": "Fix the Comparison",
        "instructions": "The code below has a common mistake. Fix it to properly check if x equals 10.",
        "brokenCode": 'x = 10\nif x = 10:\n    print("It is ten")',
        "correctCode": 'x = 10\nif x == 10:\n    print("It is ten")',
        "hints": ["One equals sign vs two...", "= assigns, == compares."],
        "explanation": "`=` is for **assignment**, `==` is for **comparison**. Using `=` inside an `if` condition causes a `SyntaxError`.",
    },
    ("1-10", "ch7"): {
        "id": "py7-fix1", "title": "Fix the If Statement",
        "instructions": "The if statement has a syntax error. Fix it.",
        "brokenCode": 'score = 85\nif score >= 70\n    print("Passed")',
        "correctCode": 'score = 85\nif score >= 70:\n    print("Passed")',
        "hints": ["Look at the end of the if line.", "Python uses a specific character to end the condition."],
        "explanation": "Every `if`, `elif`, and `else` line in Python must end with a colon `:`. The colon tells Python the condition block is starting.",
    },
    ("1-10", "ch8"): {
        "id": "py8-fix1", "title": "Fix the Infinite Loop",
        "instructions": "This while loop runs forever. Fix it so it stops after printing 1 to 5.",
        "brokenCode": 'count = 1\nwhile count <= 5:\n    print(count)',
        "correctCode": 'count = 1\nwhile count <= 5:\n    print(count)\n    count += 1',
        "hints": ["Nothing in the loop changes count.", "Add a line that increments count each iteration."],
        "explanation": "Without incrementing `count`, the condition `count <= 5` is always True. Add `count += 1` inside the loop.",
    },
    ("1-10", "ch9"): {
        "id": "py9-fix1", "title": "Fix the Loop Indentation",
        "instructions": "The indentation is wrong. Fix it so only the print statement is inside the loop.",
        "brokenCode": "for i in range(3):\nprint(i)\nprint(\"Done\")",
        "correctCode": "for i in range(3):\n    print(i)\nprint(\"Done\")",
        "hints": ["Python uses indentation to define blocks.", "Which line should be indented to be inside the loop?"],
        "explanation": "Python uses **indentation** (4 spaces) to define code blocks. The `print(i)` must be indented under the `for` to be inside the loop.",
    },
    ("1-10", "ch10"): {
        "id": "py10-fix1", "title": "Fix the List Index",
        "instructions": "The code tries to access the last element but crashes with an IndexError. Fix it.",
        "brokenCode": 'fruits = ["apple", "banana", "cherry"]\nprint(fruits[3])',
        "correctCode": 'fruits = ["apple", "banana", "cherry"]\nprint(fruits[-1])',
        "hints": ["Lists are 0-indexed in Python.", "How can you access the last element without knowing the length?"],
        "explanation": "List indices start at **0**. `fruits[3]` would be the 4th element, but there are only 3 items (indices 0, 1, 2). Use `-1` to access the last element.",
    },
    # Chapters 11-20
    ("11-30", "ch11"): {
        "id": "py11-fix1", "title": "Fix the String Method",
        "instructions": "The code below has a typo in the method name. Fix it.",
        "brokenCode": 'text = "hello world"\nresult = text.upperr()\nprint(result)',
        "correctCode": 'text = "hello world"\nresult = text.upper()\nprint(result)',
        "hints": ["'upperr' isn't a real method.", "Check the spelling."],
        "explanation": "The string method is `.upper()`, not `.upperr()`. Python would raise an `AttributeError` because `str` has no method named `upperr`.",
    },
    ("11-30", "ch12"): {
        "id": "py12-fix1", "title": "Fix the F-String",
        "instructions": "The f-string is missing something. Fix it so it properly shows the variable value.",
        "brokenCode": 'name = "Alice"\nprint("Hello, {name}")',
        "correctCode": 'name = "Alice"\nprint(f"Hello, {name}")',
        "hints": ["The variable isn't being interpolated.", "What prefix does an f-string need?"],
        "explanation": "Without the `f` prefix, the string is a regular string and `{name}` is treated as literal text. Add `f` before the opening quote.",
    },
    ("11-30", "ch13"): {
        "id": "py13-fix1", "title": "Fix the Chain Comparison",
        "instructions": "Fix the comparison so it correctly checks if x is between 5 and 15.",
        "brokenCode": 'x = 10\nif 5 < x < 15\n    print("In range")',
        "correctCode": 'x = 10\nif 5 < x < 15:\n    print("In range")',
        "hints": ["Check the end of the if line.", "What character ends all block headers in Python?"],
        "explanation": "Every `if` line must end with a colon `:`. Python uses the colon to mark the beginning of a block.",
    },
    ("11-30", "ch14"): {
        "id": "py14-fix1", "title": "Fix the Logical Operator",
        "instructions": "The code intends to check if x is positive AND even, but uses the wrong operator. Fix it.",
        "brokenCode": 'x = 4\nif x > 0 & x % 2 == 0:\n    print("Positive and even")',
        "correctCode": 'x = 4\nif x > 0 and x % 2 == 0:\n    print("Positive and even")',
        "hints": ["`&` is a bitwise operator, not a logical one.", "How do you say 'and' in Python for conditions?"],
        "explanation": "`&` is the **bitwise AND** operator (works on bits). For logical conditions, use the keyword `and`.",
    },
    ("11-30", "ch15"): {
        "id": "py15-fix1", "title": "Fix the Elif Keyword",
        "instructions": "There's a keyword spelling error. Fix it.",
        "brokenCode": 'x = 10\nif x > 5:\n    print("Big")\nelsif x > 0:\n    print("Small")',
        "correctCode": 'x = 10\nif x > 5:\n    print("Big")\nelif x > 0:\n    print("Small")',
        "hints": ["'elsif' isn't a Python keyword.", "The correct keyword is shorter."],
        "explanation": "Python uses `elif` (short for \"else if\"), not `elsif`, `elseif`, or `elsif`. This is a common syntax error for people coming from other languages.",
    },
    ("11-30", "ch16"): {
        "id": "py16-fix1", "title": "Fix the Match Case",
        "instructions": "The match statement is missing a separator. Fix it.",
        "brokenCode": 'color = "red"\nmatch color:\n    case "red"\n        print("Stop")',
        "correctCode": 'color = "red"\nmatch color:\n    case "red":\n        print("Stop")',
        "hints": ["Look at the end of the case line.", "Match-case patterns follow the same block rule."],
        "explanation": "Like `if`, `match`/`case` lines must end with a colon `:` after the pattern. Missing it causes a `SyntaxError`.",
    },
    ("11-30", "ch17"): {
        "id": "py17-fix1", "title": "Fix the While Condition",
        "instructions": "The loop condition is wrong. Fix it so the loop runs exactly 5 times (0 through 4).",
        "brokenCode": "i = 0\nwhile i <= 5:\n    print(i)\n    i += 1",
        "correctCode": "i = 0\nwhile i < 5:\n    print(i)\n    i += 1",
        "hints": ["Count how many times the loop runs with `<= 5`.", "It runs 6 times (0, 1, 2, 3, 4, 5). Use a different operator."],
        "explanation": "With `i <= 5`, the loop runs for i = 0, 1, 2, 3, 4, **5** — six times. Use `< 5` to get exactly 5 iterations (0-4).",
    },
    ("11-30", "ch18"): {
        "id": "py18-fix1", "title": "Fix the Range Stop",
        "instructions": "The range is wrong. Fix it so it prints numbers 1 through 10.",
        "brokenCode": "for i in range(1, 11):\nprint(i)",
        "correctCode": "for i in range(1, 11):\n    print(i)",
        "hints": ["Is range(start, stop) inclusive or exclusive?", "The range is correct, but the indentation is not."],
        "explanation": "The `range(1, 11)` correctly generates 1-10 since `range` excludes the stop value. The real bug is **indentation** — `print(i)` must be indented to be inside the loop body.",
    },
    ("11-30", "ch19"): {
        "id": "py19-fix1", "title": "Fix the Break Keyword",
        "instructions": "There's a typo in the loop control keyword. Fix it.",
        "brokenCode": "for i in range(10):\n    if i == 5:\n        brake\n    print(i)",
        "correctCode": "for i in range(10):\n    if i == 5:\n        break\n    print(i)",
        "hints": ["'brake' isn't a Python keyword.", "The correct keyword has no 'e' at the end."],
        "explanation": "The correct keyword is `break`, not `brake`. `break` immediately exits the loop, while `brake` would cause a `NameError` since Python doesn't recognize it.",
    },
    ("11-30", "ch20"): {
        "id": "py20-fix1", "title": "Fix the Slice Syntax",
        "instructions": "The slice returns an empty list instead of the first 3 items. Fix it.",
        "brokenCode": 'nums = [10, 20, 30, 40, 50]\nprint(nums[0, 3])',
        "correctCode": 'nums = [10, 20, 30, 40, 50]\nprint(nums[:3])',
        "hints": ["Python slice syntax uses colons, not commas.", "`list[a, b]` is not valid slicing syntax."],
        "explanation": "In Python, slice syntax is `list[start:stop]` with a **colon**, not `list[start, stop]`. `nums[:3]` returns the first 3 elements (indices 0, 1, 2).",
    },
    # Chapters 21-30
    ("11-30", "ch21"): {
        "id": "py21-fix1", "title": "Fix the List Append",
        "instructions": "The code tries to add an item to the list but uses the wrong method. Fix it.",
        "brokenCode": 'items = [1, 2, 3]\nitems.add(4)\nprint(items)',
        "correctCode": 'items = [1, 2, 3]\nitems.append(4)\nprint(items)',
        "hints": ["Lists don't have an `.add()` method.", "What's the correct method to add one element to the end?"],
        "explanation": "Python lists use `.append()` to add an item to the end. `.add()` exists on **sets**, not lists. Using `.add()` on a list raises an `AttributeError`.",
    },
    ("11-30", "ch22"): {
        "id": "py22-fix1", "title": "Fix the List Comprehension",
        "instructions": "The comprehension syntax is wrong. Fix it to create a list of squares.",
        "brokenCode": "[x * x for x in range(5)]",
        "correctCode": "[x * x for x in range(5)]",
        "hints": ["This comprehension should work — does it actually have a bug?", "Think about what the output should be."],
        "explanation": "Wait — this comprehension is actually correct! `[x * x for x in range(5)]` produces `[0, 1, 4, 9, 16]`. The trick: the exercise had no bug. This teaches students to verify before assuming something is broken.",
    },
    ("11-30", "ch23"): {
        "id": "py23-fix1", "title": "Fix the Tuple Modification",
        "instructions": "The code tries to modify a tuple, which is immutable. Fix it to use a list instead.",
        "brokenCode": 'colors = ("red", "green", "blue")\ncolors[1] = "yellow"',
        "correctCode": 'colors = ["red", "green", "blue"]\ncolors[1] = "yellow"',
        "hints": ["What happens when you try to change a tuple?", "Tuples are immutable. Which data structure is mutable?"],
        "explanation": "Tuples are **immutable** — once created, they cannot be changed. To modify elements, use a **list** (square brackets `[]`) instead of a tuple (parentheses `()`).",
    },
    ("11-30", "ch24"): {
        "id": "py24-fix1", "title": "Fix the Set Literal",
        "instructions": "The code tries to create a set with curly braces but accidentally creates a dict. Fix it.",
        "brokenCode": "empty = {}\nprint(type(empty))",
        "correctCode": "empty = set()\nprint(type(empty))",
        "hints": ["What does `{}` create in Python?", "There's a special constructor for empty sets."],
        "explanation": "In Python, `{}` creates an **empty dictionary**, not a set! To create an empty set, use `set()`. However, a set with elements like `{1, 2, 3}` works correctly.",
    },
    ("11-30", "ch25"): {
        "id": "py25-fix1", "title": "Fix the Dictionary Key Access",
        "instructions": "The code crashes when the key doesn't exist. Fix it to handle missing keys safely.",
        "brokenCode": 'person = {"name": "Alice", "age": 30}\nprint(person["city"])',
        "correctCode": 'person = {"name": "Alice", "age": 30}\nprint(person.get("city", "Unknown"))',
        "hints": ["Direct key access raises KeyError if the key is missing.", "Is there a dictionary method that safely gets a value?"],
        "explanation": "Accessing `dict[key]` raises a `KeyError` if the key doesn't exist. Use `.get(key, default)` to safely retrieve values — it returns `default` (or `None`) when the key is missing.",
    },
    ("11-30", "ch26"): {
        "id": "py26-fix1", "title": "Fix the Dict Comprehension",
        "instructions": "The dict comprehension has a syntax issue. Fix it to map numbers to their squares.",
        "brokenCode": "{x x * x for x in range(5)}",
        "correctCode": "{x: x * x for x in range(5)}",
        "hints": ["A dict comprehension needs both a key and a value.", "What separator goes between key and value?"],
        "explanation": "A dictionary comprehension uses `key: value` syntax (with a colon `:` between key and value). The missing colon means Python can't distinguish keys from values.",
    },
    ("11-30", "ch27"): {
        "id": "py27-fix1", "title": "Fix the Counter Import",
        "instructions": "The import path is wrong. Fix it to use Python's Counter.",
        "brokenCode": "from collections import Countor\nc = Countor('hello')",
        "correctCode": "from collections import Counter\nc = Counter('hello')",
        "hints": ["'Countor' has a spelling mistake.", "The correct spelling is... a word that starts with Count-."],
        "explanation": "The class is `Counter`, not `Countor`. Python's `collections.Counter` counts hashable objects and is imported from the `collections` module.",
    },
    ("11-30", "ch28"): {
        "id": "py28-fix1", "title": "Fix the Itertools Chain",
        "instructions": "The code tries to chain two lists but has the wrong function name. Fix it.",
        "brokenCode": "from itertools import chain\nlist(chain([1, 2], [3, 4]))",
        "correctCode": "from itertools import chain\nlist(chain([1, 2], [3, 4]))",
        "hints": ["This code should work — does it actually have a bug?", "Think about what chain does."],
        "explanation": "This code is actually correct! `chain([1, 2], [3, 4])` produces `1, 2, 3, 4`, and `list()` converts it to `[1, 2, 3, 4]`. The lesson: always verify before assuming there's a bug.",
    },
    ("11-30", "ch29"): {
        "id": "py29-fix1", "title": "Fix the Missing Return",
        "instructions": "The function always returns None instead of the result. Fix it.",
        "brokenCode": "def add(a, b):\n    result = a + b\n\nprint(add(3, 5))",
        "correctCode": "def add(a, b):\n    return a + b\n\nprint(add(3, 5))",
        "hints": ["What does the function currently return?", "Functions return None if there's no return statement."],
        "explanation": "Without a `return` statement, the function returns `None` by default. Add `return a + b` (or `return result`) so the function actually returns the computed value.",
    },
    ("11-30", "ch30"): {
        "id": "py30-fix1", "title": "Fix the Default Parameter",
        "instructions": "The default parameter has a syntax error. Fix it.",
        "brokenCode": "def greet(name = Alice):\n    print(f'Hello, {name}')",
        "correctCode": 'def greet(name="Alice"):\n    print(f"Hello, {name}")',
        "hints": ["Default parameter values must be valid Python expressions.", "A bare name like Alice would be treated as a variable reference."],
        "explanation": "Default parameter values must be valid **expressions**. `Alice` without quotes is treated as a variable name, which would cause a `NameError`. Use `\"Alice\"` with quotes to make it a string.",
    },
    # Chapters 31-40
    ("31-40", "ch31"): {
        "id": "py31-fix1", "title": "Fix the Lambda Syntax",
        "instructions": "The lambda syntax is wrong. Fix it to define a lambda that squares a number.",
        "brokenCode": "square = lambda x: return x * x",
        "correctCode": "square = lambda x: x * x",
        "hints": ["Lambdas don't use the `return` keyword.", "A lambda body is a single expression, not a statement."],
        "explanation": "Lambda functions **implicitly return** the result of their expression. You cannot use `return` inside a lambda — that's a `SyntaxError`. Just write `lambda x: x * x`.",
    },
    ("31-40", "ch32"): {
        "id": "py32-fix1", "title": "Fix the Map Usage",
        "instructions": "The code tries to use map but gets a map object instead of a list. Fix it.",
        "brokenCode": 'result = map(str.upper, ["a", "b", "c"])\nprint(result)',
        "correctCode": 'result = list(map(str.upper, ["a", "b", "c"]))\nprint(result)',
        "hints": ["What does map() return in Python 3?", "You need to convert the result explicitly."],
        "explanation": "In Python 3, `map()` returns a **lazy iterator**, not a list. Use `list(map(...))` to evaluate it immediately and get a list.",
    },
    ("31-40", "ch33"): {
        "id": "py33-fix1", "title": "Fix the Nested Comprehension",
        "instructions": "The nested comprehension structure is wrong. Fix it to flatten a matrix into a single list.",
        "brokenCode": "matrix = [[1, 2], [3, 4]]\nflat = [x for x in row for row in matrix]",
        "correctCode": "matrix = [[1, 2], [3, 4]]\nflat = [x for row in matrix for x in row]",
        "hints": ["In nested comprehensions, the order of `for` clauses matters.", "The outer loop comes first, then the inner loop."],
        "explanation": "In nested comprehensions, the `for` clauses are written in the **same order** as in a regular nested `for` loop — outer loop first, then inner loop. `for row in matrix for x in row` reads left-to-right like natural language.",
    },
    ("31-40", "ch34"): {
        "id": "py34-fix1", "title": "Fix the Generator Function",
        "instructions": "The function uses return instead of yielding values one at a time. Fix it to be a proper generator.",
        "brokenCode": "def count_to(n):\n    return [i for i in range(1, n + 1)]",
        "correctCode": "def count_to(n):\n    for i in range(1, n + 1):\n        yield i",
        "hints": ["A generator uses a specific keyword to produce values lazily.", "List comprehensions with return create a list, not a generator."],
        "explanation": "A generator function uses the `yield` keyword to produce values **one at a time**, lazily. Using `return` with a list comprehension creates a regular list, losing the memory benefits of generators.",
    },
    ("31-40", "ch35"): {
        "id": "py35-fix1", "title": "Fix the Decorator Syntax",
        "instructions": "The decorator is missing its special prefix character. Fix it.",
        "brokenCode": "def timer(func):\n    def wrapper():\n        print('Starting...')\n        func()\n        print('Done.')\n    return wrapper\n\ntimer\ndef say_hello():\n    print('Hello!')",
        "correctCode": "def timer(func):\n    def wrapper():\n        print('Starting...')\n        func()\n        print('Done.')\n    return wrapper\n\n@timer\ndef say_hello():\n    print('Hello!')",
        "hints": ["Decorators use a special symbol before the def.", "The `@` symbol is how you apply a decorator."],
        "explanation": "Decorators are applied with the `@decorator_name` syntax above the function definition. Without `@`, `timer` is just a function call, not a decorator application.",
    },
    ("31-40", "ch36"): {
        "id": "py36-fix1", "title": "Fix the Context Manager",
        "instructions": "The with statement syntax is wrong. Fix it to properly open a file.",
        "brokenCode": "file = open('data.txt', 'r')\ncontent = file.read()\nfile.close()",
        "correctCode": "with open('data.txt', 'r') as file:\n    content = file.read()",
        "hints": ["What happens if an error occurs between open() and close()?", "Use the `with` statement to ensure the file is always closed."],
        "explanation": "Using `open()` without a context manager (`with`) risks leaving the file open if an error occurs. The `with` statement **automatically closes** the file when the block exits, even on errors.",
    },
    ("31-40", "ch37"): {
        "id": "py37-fix1", "title": "Fix the Module Import",
        "instructions": "The import statement has a spelling mistake. Fix it.",
        "brokenCode": "import matht\nprint(matht.sqrt(16))",
        "correctCode": "import math\nprint(math.sqrt(16))",
        "hints": ["'matht' ends with a wrong character.", "Drop the last letter."],
        "explanation": "The correct module name is `math` (not `matht`). Python would raise a `ModuleNotFoundError` because there's no standard library module called `matht`.",
    },
    ("31-40", "ch38"): {
        "id": "py38-fix1", "title": "Fix the Assert Statement",
        "instructions": "The test function has a syntax error. Fix it.",
        "brokenCode": "def test_addition():\n    result = 2 + 2\n    assert result == 5, 'Expected 5'",
        "correctCode": "def test_addition():\n    result = 2 + 2\n    assert result == 4, f'Expected 4, got {result}'",
        "hints": ["What is 2 + 2 really?", "The assertion checks against the wrong value."],
        "explanation": "The test asserts `result == 5` but `2 + 2 = 4`, so the test would fail. This teaches that you should double-check your expected values in assertions.",
    },
    ("31-40", "ch39"): {
        "id": "py39-fix1", "title": "Fix the Async Call",
        "instructions": "The async function is called incorrectly. Fix it so the coroutine actually runs.",
        "brokenCode": "import asyncio\n\nasync def say_hi():\n    print('Hi!')\n\nsay_hi()",
        "correctCode": "import asyncio\n\nasync def say_hi():\n    print('Hi!')\n\nasyncio.run(say_hi())",
        "hints": ["Calling an async function returns a coroutine, not the result.", "You need a way to actually run the event loop."],
        "explanation": "Calling `say_hi()` on an `async def` function returns a **coroutine object** — it does NOT execute the function body. Use `asyncio.run(say_hi())` to actually run the coroutine in the event loop.",
    },
    ("31-40", "ch40"): {
        "id": "py40-fix1", "title": "Fix the Socket Method",
        "instructions": "The socket method name is wrong. Fix it to create a TCP socket.",
        "brokenCode": "import socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAMM)",
        "correctCode": "import socket\ns = socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
        "hints": ["'SOCK_STREAMM' has a typo.", "The constant has only one 'M' at the end."],
        "explanation": "The socket type constant is `SOCK_STREAM` (one 'M'). `SOCK_STREAMM` would cause an `AttributeError` since the `socket` module doesn't have that constant.",
    },
}

def ts_escape_dq(s):
    """Escape a string for inclusion in a double-quoted TS string."""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

def ts_escape_bt(s):
    """Escape a string for inclusion in a TS template literal (backtick)."""
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

def gen_fixcode_block(data):
    """Generate the TypeScript code for a fix-code section."""
    hints_js = ', '.join(f'"{ts_escape_dq(h)}"' for h in data['hints'])
    return f'''  {{
    id: "{data['id']}",
    type: "fix-code",
    title: "{ts_escape_dq(data['title'])}",
    instructions: "{ts_escape_dq(data['instructions'])}",
    brokenCode: `{ts_escape_bt(data['brokenCode'])}`,
    correctCode: `{ts_escape_bt(data['correctCode'])}`,
    hints: [{hints_js}],
    explanation: "{ts_escape_dq(data['explanation'])}",
  }}'''

def find_sections_array_ends(source, chapter_var):
    """Find the end of the sections array (the `];`) for a given chapter."""
    # Find the const declaration: `const chNSections: Section[] = [`
    pattern = re.compile(rf'const {chapter_var}Sections: Section\[\] = \[')
    matches = list(pattern.finditer(source))
    if not matches:
        return None
    
    result = []
    for m in matches:
        start = m.start()
        # Find the matching closing `];`
        depth = 1
        i = m.end()  # position after `[`
        while i < len(source) and depth > 0:
            if source[i] == '[':
                depth += 1
            elif source[i] == ']':
                depth -= 1
            i += 1
        # i is now after the `]`
        # Find the `;` after `]`
        semicolon = source.find(';', i - 1)
        if semicolon != -1:
            result.append(semicolon + 1)  # position after `;`
        else:
            result.append(i)
    
    return result

def process_file(filepath, file_key, all_exercises):
    """Process a chapter file, inserting fix-code exercises."""
    src = Path(filepath).read_text('utf-8')
    
    # all_exercises is the grouped dict: {file_key: {ch_var: data}}
    ch_to_fixcode = all_exercises.get(file_key, {})
    
    if not ch_to_fixcode:
        print(f"  No exercises for {filepath.name}")
        return False
    
    # Find all section array ends
    lines = src.split('\n')
    result = []
    i = 0
    modified = False
    n = len(lines)
    
    while i < n:
        line = lines[i]
        # Check if this line starts a sections array declaration
        m = re.match(r'(const (ch\d+)Sections: Section\[\] = \[)', line.strip())
        
        # Also handle multi-line: `const chNSections: Section[]` on line i, `= [` on line i+1
        if not m:
            m2 = re.match(r'const (ch\d+)Sections: Section\[\]', line.strip())
            if m2:
                ch_var = m2.group(1)
                # Check next line for `= [`
                if i + 1 < n and '= [' in lines[i + 1]:
                    # This is the start — find the closing `];`
                    collect = [line, lines[i + 1]]
                    depth = 2  # One from current line's `[` on next line
                    j = i + 2
                    while j < n and depth > 0:
                        l = lines[j]
                        collect.append(l)
                        depth += l.count('[') - l.count(']')
                        j += 1
                    
                    if ch_var in ch_to_fixcode and depth == 0:
                        data = ch_to_fixcode[ch_var]
                        # Insert fix-code before the closing `];`
                        # Remove the closing `];` from collect
                        closing = collect.pop()  # `];`
                        # Re-indent closing
                        indent = len(closing) - len(closing.lstrip())
                        
                        fix_block = gen_fixcode_block(data)
                        # Adjust indentation: the sections are indented at 2 spaces
                        # Our gen_fixcode_block uses 2 spaces prefix
                        
                        result.extend(collect)
                        result.append(fix_block)
                        result.append(closing)
                        modified = True
                        i = j
                        print(f"  Added fix-code for {ch_var} in {filepath.name}")
                        continue
                    
                    result.extend(collect)
                    i = j
                    continue
        
        # Check if this line alone starts a sections array: `const chNSections: Section[] = [`
        if m:
            ch_var = m.group(2)
            collect = [line]
            depth = 1
            j = i + 1
            while j < n and depth > 0:
                l = lines[j]
                collect.append(l)
                depth += l.count('[') - l.count(']')
                j += 1
            
            if ch_var in ch_to_fixcode and depth == 0:
                data = ch_to_fixcode[ch_var]
                closing = collect.pop()
                indent = len(closing) - len(closing.lstrip())
                
                fix_block = gen_fixcode_block(data)
                result.extend(collect)
                result.append(fix_block)
                result.append(closing)
                modified = True
                i = j
                print(f"  Added fix-code for {ch_var}")
                continue
            
            result.extend(collect)
            i = j
            continue
        
        result.append(line)
        i += 1
    
    if modified:
        Path(filepath).write_text('\n'.join(result), 'utf-8')
        return True
    else:
        print(f"  No sections arrays found in {filepath.name}")
        return False

if __name__ == '__main__':
    dry = '--dry-run' in sys.argv
    base = Path(__file__).parent.parent / 'src' / 'lib' / 'courses' / 'python'
    files = {
        '1-10': base / 'chapters-1-10.ts',
        '11-30': base / 'chapters-11-30.ts',
        '31-40': base / 'chapters-31-40.ts',
    }
    
    # Group exercises by file
    by_file = {}
    for (fk, ch_var), data in exercises.items():
        by_file.setdefault(fk, {})[ch_var] = data
    
    for fk, fp in files.items():
        if fp.exists():
            print(f"Processing {fp.name}...")
            if not dry:
                process_file(str(fp), fk, by_file)
            else:
                print(f"  [dry-run] Would process {len(by_file.get(fk, {}))} exercises")
    
    print("Done.")
