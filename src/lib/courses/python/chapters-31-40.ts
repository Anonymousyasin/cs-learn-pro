// ─── Python Chapters 31-40 — Real educational content ──────────────
import { Chapter, Section, ExerciseSection, ExamQuestion } from "../types";

// ───────────────────────────────────────────────────────────────────
// Chapter 31 – Lambda Functions
// Topics: lambda syntax, use in sorted/max/min, single-expression functions
// ───────────────────────────────────────────────────────────────────
const ch31Sections: Section[] = [
  {
    type: "text",
    content:
      "## Lambda Functions in Python\n\nA **lambda function** is a small, anonymous function defined with the `lambda` keyword instead of `def`. Lambdas can have any number of arguments but only **one expression** — the expression is evaluated and returned automatically.\n\n```python\n# Regular function\ndef add(x, y):\n    return x + y\n\n# Same logic as a lambda\nadd_lambda = lambda x, y: x + y\n\nprint(add(3, 4))        # 7\nprint(add_lambda(3, 4)) # 7\n```\n\nLambdas are best used when you need a simple function for a short period, especially as an argument to higher-order functions like `sorted()`, `map()`, `filter()`, and `min()`/`max()`.",
  },
  {
    type: "code",
    language: "python",
    caption: "Lambda syntax — `lambda arguments: expression` — no return keyword needed:",
    content:
      '# Lambda with one argument\nsquare = lambda x: x ** 2\nprint(square(5))          # 25\n\n# Lambda with multiple arguments\nmultiply = lambda a, b: a * b\nprint(multiply(4, 7))     # 28\n\n# Lambda with no arguments\nfrom datetime import datetime\nget_year = lambda: datetime.now().year\nprint(get_year())         # 2026',
  },
  {
    type: "text",
    content:
      "## Lambdas with `sorted()`\n\nOne of the most common uses of lambdas is providing a custom sort key. The `sorted()` function accepts a `key` parameter that should be a function taking one argument and returning the value to sort by.\n\n```python\nstudents = [\n    {\"name\": \"Alice\", \"grade\": 85},\n    {\"name\": \"Bob\", \"grade\": 72},\n    {\"name\": \"Charlie\", \"grade\": 95},\n]\n\n# Sort by grade (ascending)\nsorted_by_grade = sorted(students, key=lambda s: s[\"grade\"])\n# → Bob (72), Alice (85), Charlie (95)\n\n# Sort by name (descending)\nsorted_by_name = sorted(students, key=lambda s: s[\"name\"], reverse=True)\n# → Charlie, Bob, Alice\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Lambdas work with any callable that takes one argument — including max(), min(), and list.sort():",
    content:
      'words = ["python", "java", "c", "rust", "typescript"]\n\n# Longest word\nlongest = max(words, key=lambda w: len(w))\nprint(longest)            # "typescript"\n\n# Shortest word\nshortest = min(words, key=lambda w: len(w))\nprint(shortest)           # "c"\n\n# Sort by last character\nby_last = sorted(words, key=lambda w: w[-1])\nprint(by_last)            # ["java", "rust", "python", "typescript", "c"]',
  },
  {
    type: "callout",
    style: "warning",
    content:
      "**Lambda limitations:** Lambdas can only contain a **single expression** — no statements like `if`/`elif`/`else` (though you can use the ternary expression `x if cond else y`), no loops, no assignments with `=` (use `:=` walrus operator in some cases), and no `return` keyword. If your logic is more complex, use a regular `def` function.",
  },
  {
    type: "comparison",
    title: "def vs lambda",
    headers: ["Feature", "def", "lambda"],
    rows: [
      ["Name", "Required (can be any valid name)", "Anonymous (no name needed)"],
      ["Body", "Multiple statements and expressions", "Single expression only"],
      ["Return", "Uses `return` keyword", "Implicitly returns the expression"],
      ["Use case", "Complex logic, reused widely", "Simple logic, used once"],
      ["Readability", "Better for complex code", "Better for short operations"],
    ],
  },
  {
    type: "text",
    content:
      "## When to Use (and Not Use) Lambdas\n\n**✅ Good lambda use cases:**\n- Simple sort keys: `sorted(data, key=lambda x: x[\"field\"])`\n- Short transformations in `map()` or `filter()`\n- Callback functions for GUI or event handling\n- Quick data extraction with `min()`/`max()`\n\n**❌ Avoid lambdas when:**\n- The logic requires multiple statements or conditions\n- The function would be reused in multiple places\n- The lambda would be longer than a one-line `def`\n- Debugging matters — lambdas show as `<lambda>` in tracebacks\n\n```python\n# ❌ Lambda too complex — use def instead\nprocess = lambda items: [x for sublist in items for x in sublist if x > 0]\n\n# ✅ Same logic with def\ndef flatten_positive(items):\n    return [x for sublist in items for x in sublist if x > 0]\n```",
  },
  {
    type: "key-points",
    points: [
      "`lambda args: expression` creates an anonymous function that returns the expression",
      "Lambdas can only contain a single expression — no statements or multiple lines",
      "Most commonly used with `sorted()`, `max()`, `min()`, `map()`, and `filter()`",
      "Use lambdas for simple, one-off functions; use `def` for anything complex or reused",
      "Lambdas support default arguments and variable arguments: `lambda x, y=10: x + y`",
      "Ternary expressions work in lambdas: `lambda x: \"even\" if x % 2 == 0 else \"odd\"`",
    ],
  },
];

const ch31Exercises: ExerciseSection[] = [
  {
    id: "py31-ex1", type: "exercise", title: "Basic Lambda",
    description: "What does this lambda return when called?",
    instructions: ["Evaluate the lambda expression", "Type the output"],
    code: "f = lambda x: x * 3\nprint(f(7))",
    correctOutput: "21",
    hint: "The lambda takes x and returns x * 3.",
  },
  {
    id: "py31-ex2", type: "exercise", title: "Lambda with Two Args",
    description: "What does calling this lambda produce?",
    instructions: ["Call the lambda with 10 and 5", "Type the result"],
    code: "f = lambda a, b: a - b\nprint(f(10, 5))",
    correctOutput: "5",
    hint: "a - b with a=10, b=5 equals 5.",
  },
  {
    id: "py31-ex3", type: "exercise", title: "Lambda as Sort Key",
    description: "What is the first element after sorting?",
    instructions: ["Determine what key the lambda computes", "Type the first element of the sorted list"],
    code: 'data = [(1, "z"), (3, "a"), (2, "m")]\nresult = sorted(data, key=lambda x: x[1])\nprint(result[0])',
    correctOutput: "(3, 'a')",
    hint: "The lambda sorts by the second element of each tuple — 'a', 'm', 'z'.",
  },
  {
    id: "py31-ex4", type: "exercise", title: "Lambda with max()",
    description: "What does max() return with this key?",
    instructions: ["The key extracts the second value", "Type what max() returns"],
    code: 'data = [(1, 50), (2, 20), (3, 90)]\nresult = max(data, key=lambda x: x[1])\nprint(result)',
    correctOutput: "(3, 90)",
    hint: "max with key=x[1] finds the tuple with the largest second element.",
  },
  {
    id: "py31-ex5", type: "exercise", title: "Lambda with Ternary",
    description: "What does this lambda with a ternary return?",
    instructions: ["The ternary checks if x is even", "Call with 7 and type the result"],
    code: 'f = lambda x: "even" if x % 2 == 0 else "odd"\nprint(f(7))',
    correctOutput: "odd",
    hint: "7 % 2 == 1, so the condition is False and \"odd\" is returned.",
  },
  {
    id: "py31-ex6", type: "exercise", title: "Lambda with Default Arg",
    description: "Lambdas support default arguments. What does this return?",
    instructions: ["Note the default value of y", "Call with just one argument"],
    code: "f = lambda x, y=10: x + y\nprint(f(5))",
    correctOutput: "15",
    hint: "y defaults to 10, so f(5) = 5 + 10 = 15.",
  },
  {
    id: "py31-ex7", type: "exercise", title: "Sort Names by Length",
    description: "What is the sorted order by name length?",
    instructions: ["Sort by length using a lambda key", "Type the sorted list as Python displays it"],
    code: 'names = ["Kate", "Bob", "Alexander"]\nresult = sorted(names, key=lambda n: len(n))\nprint(result)',
    correctOutput: "['Bob', 'Kate', 'Alexander']",
    hint: "len: Bob=3, Kate=4, Alexander=9.",
  },
  {
    id: "py31-ex8", type: "exercise", title: "Lambda as Filter",
    description: "What does filter() return with this lambda?",
    instructions: ["Remember filter keeps items where the lambda returns True", "Type the filtered list"],
    code: "nums = [1, 2, 3, 4, 5, 6]\nresult = list(filter(lambda x: x > 3, nums))\nprint(result)",
    correctOutput: "[4, 5, 6]",
    hint: "filter keeps items where x > 3 is True: 4, 5, 6.",
  },
  {
    id: "py31-ex9", type: "exercise", title: "Lambda Closure",
    description: "What does the third lambda in a list produce when called?",
    instructions: ["Each lambda captures n from the loop", "Call f[2](4) and type the result"],
    code: "f = [lambda x: x * n for n in range(1, 4)]\nprint(f[2](4))",
    correctOutput: "12",
    hint: "f[2] is index 2 (third lambda). Due to closure, n=3 at call time: 4 * 3 = 12.",
  },
  {
    id: "py31-ex10", type: "exercise", title: "Lambda with List of Dicts",
    description: "Sort these dicts by age using a lambda.",
    instructions: ["The lambda extracts the 'age' value", "Type the sorted list of dicts"],
    code: 'people = [{"name": "A", "age": 30}, {"name": "B", "age": 20}]\nresult = sorted(people, key=lambda p: p["age"])\nprint(result)',
    correctOutput: "[{'name': 'B', 'age': 20}, {'name': 'A', 'age': 30}]",
    hint: "Sorted by age ascending: 20 then 30.",
  },
];

const ch31Exam: ExamQuestion[] = [
  { id: "py31-q1", type: "multiple-choice", difficulty: "easy", question: "What keyword defines a lambda function?", options: [{ id: "a", text: "def" }, { id: "b", text: "lambda" }, { id: "c", text: "fun" }, { id: "d", text: "=>" }], correctAnswer: "b", explanation: "The `lambda` keyword creates anonymous functions." },
  { id: "py31-q2", type: "true-false", difficulty: "easy", question: "A lambda function can contain multiple statements.", correctAnswer: false, explanation: "Lambdas can only contain a single expression, not multiple statements." },
  { id: "py31-q3", type: "fill-blank", difficulty: "easy", question: "A lambda that returns x squared is: lambda x: ___", correctAnswer: "x ** 2", acceptableAnswers: ["x*x", "pow(x,2)", "x**2"], explanation: "lambda x: x ** 2 returns the square of x." },
  { id: "py31-q4", type: "multiple-choice", difficulty: "medium", question: "What does `(lambda x, y: x if x > y else y)(3, 7)` return?", options: [{ id: "a", text: "3" }, { id: "b", text: "7" }, { id: "c", text: "10" }, { id: "d", text: "Error" }], correctAnswer: "b", explanation: "The ternary returns x if x > y else y. Since 3 > 7 is False, it returns y=7." },
  { id: "py31-q5", type: "code-order", difficulty: "medium", question: "Arrange to sort words by their last character.", codeLines: ['result = sorted(words, key=lambda w: w[-1])', 'print(result)', 'words = ["cat", "dog", "bird"]', 'lambda w: w[-1]'], correctOrder: [2, 0, 1, 3], explanation: "Define data, sort with lambda key by last char, print." },
  { id: "py31-q6", type: "match-pairs", difficulty: "medium", question: "Match each lambda to its result when called with argument 5.", leftItems: ["lambda x: x + 2", "lambda x: x * 2", "lambda x: x ** 2", "lambda x: x % 2"], rightItems: ["7", "10", "25", "1"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "5+2=7, 5*2=10, 5**2=25, 5%2=1." },
  { id: "py31-q7", type: "true-false", difficulty: "medium", question: "Lambdas support default argument values like regular functions.", correctAnswer: true, explanation: "Lambdas support default arguments: lambda x, y=10: x + y is valid." },
  { id: "py31-q8", type: "fill-blank", difficulty: "medium", question: "The lambda keyword returns a function object without using the ___ keyword.", correctAnswer: "return", acceptableAnswers: ["return"], explanation: "Lambda expressions don't use return — the expression result is implicit." },
  { id: "py31-q9", type: "multiple-choice", difficulty: "hard", question: "What does `sorted([3, -1, 2, -4], key=lambda x: abs(x))` return?", options: [{ id: "a", text: "[-1, 2, 3, -4]" }, { id: "b", text: "[-1, 2, -4, 3]" }, { id: "c", text: "[-4, -1, 2, 3]" }, { id: "d", text: "[3, -1, 2, -4]" }], correctAnswer: "a", explanation: "abs: |-1|=1, |2|=2, |3|=3, |-4|=4 → sorted by abs gives [-1, 2, 3, -4]." },
  { id: "py31-q10", type: "code-order", difficulty: "hard", question: "Arrange to use a lambda with max() to find the longest word.", codeLines: ['max(words, key=lambda w: len(w))', 'words = ["short", "longest", "medium"]', 'lambda w: len(w)', 'print(max(words, key=lambda w: len(w)))'], correctOrder: [1, 0, 3, 2], explanation: "Define words, call max with lambda key, print result." },
];

const ch31: Chapter = {
  id: "python-ch31", courseId: "python", title: "Lambda Functions", order: 31,
  sections: ch31Sections, examPool: ch31Exam, xpReward: 200, estimatedMinutes: 35,
  prerequisites: ["python-ch30"],
  keyPoints: [
    "lambda args: expression creates an anonymous function returning the expression",
    "Lambdas are limited to a single expression — no statements or blocks",
    "Commonly used as key functions in sorted(), max(), min(), map(), filter()",
    "Lambdas support default arguments, *args, and **kwargs",
    "Use def instead of lambda when logic is complex or reused in multiple places",
    "Ternary expressions work: lambda x: 'even' if x % 2 == 0 else 'odd'",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 32 – Map, Filter, Reduce
// Topics: map(), filter(), functools.reduce(), list comprehensions vs functional
// ───────────────────────────────────────────────────────────────────
const ch32Sections: Section[] = [
  {
    type: "text",
    content:
      "## Map, Filter, and Reduce\n\nPython provides three built-in functions — `map()`, `filter()`, and `functools.reduce()` — that implement common **functional programming** patterns. These functions operate on iterables and are often used with lambda functions.\n\nWhile list comprehensions are generally more Pythonic for simple cases, `map()` and `filter()` can be more readable when you already have a named function, and `reduce()` has no direct comprehension equivalent.",
  },
  {
    type: "code",
    language: "python",
    caption: "map() applies a function to every item in an iterable:",
    content:
      '# map(function, iterable) — returns an iterator\nnums = [1, 2, 3, 4]\n\n# Square each number\nsquares = map(lambda x: x ** 2, nums)\nprint(list(squares))      # [1, 4, 9, 16]\n\n# Convert strings to ints\nstrings = ["10", "20", "30"]\nints = list(map(int, strings))\nprint(ints)               # [10, 20, 30]\n\n# Multiple iterables\nsummed = list(map(lambda a, b: a + b, [1, 2, 3], [10, 20, 30]))\nprint(summed)             # [11, 22, 33]',
  },
  {
    type: "text",
    content:
      "## `filter()` — Keep Matching Items\n\n`filter(function, iterable)` keeps only items for which the function returns `True`. If the function is `None`, it removes falsy values (`None`, `0`, `\"\"`, `[]`, `False`).\n\n```python\nnums = [1, 2, 3, 4, 5, 6]\n\n# Keep even numbers\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)              # [2, 4, 6]\n\n# Remove None and empty strings\ndata = [\"hello\", \"\", None, \"world\", 0, \"ok\"]\nclean = list(filter(None, data))\nprint(clean)              # [\"hello\", \"world\", \"ok\"]\n\n# Filter with a named function\ndef is_positive(x):\n    return x > 0\n\nprint(list(filter(is_positive, [-2, -1, 0, 1, 2])))  # [1, 2]\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Combining map and filter — clean functional pipelines:",
    content:
      'words = ["python", "is", "fun", "and", "powerful"]\n\n# Get lengths of words longer than 2 characters\nresult = list(\n    map(len, filter(lambda w: len(w) > 2, words))\n)\nprint(result)             # [6, 3, 8]\n\n# Equivalent list comprehension\nresult2 = [len(w) for w in words if len(w) > 2]\nprint(result2)            # [6, 3, 8]',
  },
  {
    type: "text",
    content:
      "## `functools.reduce()` — Cumulative Operations\n\n`reduce(function, iterable, initial)` applies a function cumulatively to the items, reducing the iterable to a single value. The function must take **two arguments**.\n\n```python\nfrom functools import reduce\n\n# Sum all numbers\nnums = [1, 2, 3, 4, 5]\ntotal = reduce(lambda a, b: a + b, nums)\nprint(total)              # 15\n\n# With initial value\ntotal = reduce(lambda a, b: a + b, nums, 10)\nprint(total)              # 25\n\n# Find maximum\nmax_val = reduce(lambda a, b: a if a > b else b, nums)\nprint(max_val)            # 5\n\n# Factorial\nfact = reduce(lambda a, b: a * b, range(1, 6))\nprint(fact)               # 120\n```\n\n`reduce()` works left to right. With `[1, 2, 3, 4]` and `lambda a, b: a + b`:\n- Step 1: a=1, b=2 → 3\n- Step 2: a=3, b=3 → 6\n- Step 3: a=6, b=4 → 10",
  },
  {
    type: "callout",
    style: "info",
    content:
      "**Pythonic preference:** For simple transformations, list comprehensions are generally preferred over `map()` and `filter()` because they are more readable. However, `map()` and `filter()` are more memory-efficient (they return lazy iterators) and can be cleaner when you already have a named function like `map(str.strip, lines)`.",
  },
  {
    type: "comparison",
    title: "Functional vs Comprehension",
    headers: ["Operation", "map/filter", "List Comprehension"],
    rows: [
      ["Square numbers", "list(map(lambda x: x**2, nums))", "[x**2 for x in nums]"],
      ["Evens only", "list(filter(lambda x: x%2==0, nums))", "[x for x in nums if x%2==0]"],
      ["Square evens", "map then filter chained", "[x**2 for x in nums if x%2==0]"],
      ["Multiple iterables", "map(lambda a,b: a+b, x, y)", "[x[i]+y[i] for i in range(len(x))]"],
      ["Cumulative reduce", "reduce(lambda a,b: a+b, nums)", "sum(nums) or loop"],
    ],
  },
  {
    type: "code",
    language: "python",
    caption: "Practical examples — real-world uses of map, filter, reduce:",
    content:
      'from functools import reduce\n\n# 1. Clean and process data rows\nrows = ["  Alice,85  ", " Bob,72 ", " Charlie,95  "]\nclean = list(map(lambda r: r.strip().split(","), rows))\nprint(clean)\n# [["Alice", "85"], ["Bob", "72"], ["Charlie", "95"]]\n\n# 2. Calculate total of all positive numbers\nnums = [10, -5, 20, -8, 15, 0]\npositive_total = reduce(\n    lambda a, b: a + b,\n    filter(lambda x: x > 0, nums),\n    0\n)\nprint(positive_total)     # 45\n\n# 3. Chained transformations\ntexts = [" hello ", "WORLD", "  PYTHON  "]\ncleaned = list(map(lambda s: s.strip().lower(), texts))\nprint(cleaned)            # ["hello", "world", "python"]',
  },
  {
    type: "key-points",
    points: [
      "map(func, iterable) applies func to every item and returns a lazy iterator",
      "filter(func, iterable) keeps items where func returns True; filter(None, ...) removes falsy values",
      "functools.reduce(func, iterable, initial) cumulatively reduces to a single value",
      "map and filter return lazy iterators — wrap in list() to materialize results",
      "List comprehensions are preferred for simple transformations; use map/filter with named functions",
      "reduce() requires two-argument functions and processes left to right",
    ],
  },
];

const ch32Exercises: ExerciseSection[] = [
  {
    id: "py32-ex1", type: "exercise", title: "Basic map()",
    description: "What does map() return when materialized?",
    instructions: ["Apply lambda x: x + 1 to each element", "Type the resulting list"],
    code: "nums = [1, 2, 3]\nresult = list(map(lambda x: x + 1, nums))\nprint(result)",
    correctOutput: "[2, 3, 4]",
    hint: "Add 1 to each: 1→2, 2→3, 3→4.",
  },
  {
    id: "py32-ex2", type: "exercise", title: "map() with str",
    description: "What does map(str.upper) do to strings?",
    instructions: ["Upper case each string", "Type the result"],
    code: 'words = ["cat", "dog"]\nresult = list(map(str.upper, words))\nprint(result)',
    correctOutput: "['CAT', 'DOG']",
    hint: "str.upper converts each string to uppercase.",
  },
  {
    id: "py32-ex3", type: "exercise", title: "Basic filter()",
    description: "Which numbers pass the filter?",
    instructions: ["Keep numbers > 2", "Type the filtered list"],
    code: "nums = [1, 2, 3, 4]\nresult = list(filter(lambda x: x > 2, nums))\nprint(result)",
    correctOutput: "[3, 4]",
    hint: "filter keeps items where the condition is True.",
  },
  {
    id: "py32-ex4", type: "exercise", title: "filter(None)",
    description: "What does filter(None, ...) remove?",
    instructions: ["filter(None) removes falsy values", "Type the result"],
    code: 'data = [0, 1, "", "hello", None, True, False]\nresult = list(filter(None, data))\nprint(result)',
    correctOutput: "[1, 'hello', True]",
    hint: "Falsy values: 0, '', None, False are all removed.",
  },
  {
    id: "py32-ex5", type: "exercise", title: "reduce() Sum",
    description: "What does reduce() with addition return?",
    instructions: ["Reduce adds numbers cumulatively", "Type the result"],
    code: "from functools import reduce\nnums = [1, 2, 3, 4]\nresult = reduce(lambda a, b: a + b, nums)\nprint(result)",
    correctOutput: "10",
    hint: "1+2=3, 3+3=6, 6+4=10.",
  },
  {
    id: "py32-ex6", type: "exercise", title: "reduce() with Initial",
    description: "What changes when reduce has an initial value?",
    instructions: ["The initial value is the first accumulator", "Type the result"],
    code: "from functools import reduce\nnums = [1, 2, 3]\nresult = reduce(lambda a, b: a + b, nums, 10)\nprint(result)",
    correctOutput: "16",
    hint: "Start with a=10, then: 10+1=11, 11+2=13, 13+3=16.",
  },
  {
    id: "py32-ex7", type: "exercise", title: "Map + Filter Chain",
    description: "First filter, then map. What's the result?",
    instructions: ["Filter evens, then square each", "Type the result"],
    code: "nums = [1, 2, 3, 4, 5, 6]\nresult = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, nums)))\nprint(result)",
    correctOutput: "[4, 16, 36]",
    hint: "Evens: 2, 4, 6. Then square: 4, 16, 36.",
  },
  {
    id: "py32-ex8", type: "exercise", title: "reduce() Product",
    description: "Use reduce to compute the product of numbers.",
    instructions: ["Multiply all numbers together", "Type the result"],
    code: "from functools import reduce\nnums = [2, 3, 4]\nresult = reduce(lambda a, b: a * b, nums)\nprint(result)",
    correctOutput: "24",
    hint: "2*3=6, 6*4=24.",
  },
  {
    id: "py32-ex9", type: "exercise", title: "map() Multiple Iterables",
    description: "map() can take multiple iterables as arguments.",
    instructions: ["The lambda receives one element from each iterable", "Type the result"],
    code: "a = [1, 2, 3]\nb = [10, 20, 30]\nresult = list(map(lambda x, y: x + y, a, b))\nprint(result)",
    correctOutput: "[11, 22, 33]",
    hint: "1+10=11, 2+20=22, 3+30=33.",
  },
  {
    id: "py32-ex10", type: "exercise", title: "filter() with Strings",
    description: "Filter words that start with 'p'.",
    instructions: ["Use .startswith() inside the lambda", "Type the result"],
    code: 'words = ["python", "java", "pascal", "rust"]\nresult = list(filter(lambda w: w.startswith("p"), words))\nprint(result)',
    correctOutput: "['python', 'pascal']",
    hint: "words starting with 'p': python, pascal.",
  },
];

const ch32Exam: ExamQuestion[] = [
  { id: "py32-q1", type: "multiple-choice", difficulty: "easy", question: "What does map() return?", options: [{ id: "a", text: "A list" }, { id: "b", text: "An iterator" }, { id: "c", text: "A tuple" }, { id: "d", text: "A dict" }], correctAnswer: "b", explanation: "map() returns a lazy iterator, not a list. Wrap with list() to materialize." },
  { id: "py32-q2", type: "true-false", difficulty: "easy", question: "filter() keeps items where the function returns False.", correctAnswer: false, explanation: "filter() keeps items where the function returns True and discards where it returns False." },
  { id: "py32-q3", type: "fill-blank", difficulty: "easy", question: "The function used in reduce() must take exactly ___ arguments.", correctAnswer: "2", acceptableAnswers: ["two"], explanation: "reduce() requires a two-argument function: accumulator and current item." },
  { id: "py32-q4", type: "multiple-choice", difficulty: "medium", question: "Which import is needed for reduce()?", options: [{ id: "a", text: "import reduce" }, { id: "b", text: "from itertools import reduce" }, { id: "c", text: "from functools import reduce" }, { id: "d", text: "reduce is a built-in" }], correctAnswer: "c", explanation: "reduce() lives in the functools module since Python 3." },
  { id: "py32-q5", type: "code-order", difficulty: "medium", question: "Arrange to filter names longer than 4 chars.", codeLines: ['filter(lambda n: len(n) > 4, names)', 'names = ["Bob", "Alice", "Eve", "Charlie"]', 'list(filter(lambda n: len(n) > 4, names))', 'lambda n: len(n) > 4'], correctOrder: [1, 0, 3, 2], explanation: "Define names, filter with lambda, wrap in list()." },
  { id: "py32-q6", type: "match-pairs", difficulty: "medium", question: "Match each operation to its purpose.", leftItems: ["map()", "filter()", "reduce()", "list comprehension"], rightItems: ["Transform every item", "Keep items by condition", "Combine to single value", "Pythonic map + filter"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "map transforms, filter selects, reduce aggregates, comprehensions are Pythonic." },
  { id: "py32-q7", type: "true-false", difficulty: "medium", question: "map() and filter() modify the original iterable.", correctAnswer: false, explanation: "They return new iterators and do not modify the original data." },
  { id: "py32-q8", type: "fill-blank", difficulty: "hard", question: "What does reduce(lambda a,b: a if a>b else b, [3,7,2,9]) return?", correctAnswer: "9", acceptableAnswers: ["9"], explanation: "This is a maximum finder: compare pairwise and keep the larger. Result is 9." },
  { id: "py32-q9", type: "multiple-choice", difficulty: "hard", question: "What does `list(filter(None, [0, 1, '', [], {}, None, True]))` return?", options: [{ id: "a", text: "[0, 1, '', [], {}, None, True]" }, { id: "b", text: "[1, True]" }, { id: "c", text: "[1]" }, { id: "d", text: "[1, [], True]" }], correctAnswer: "b", explanation: "filter(None) removes all falsy values: 0, '', [], {}, None. Only 1 and True remain." },
  { id: "py32-q10", type: "code-order", difficulty: "hard", question: "Arrange to compute the sum of squares of even numbers using functional tools.", codeLines: ['nums = [1, 2, 3, 4, 5, 6]', 'map(lambda x: x**2, filter(lambda x: x%2==0, nums))', 'sum(map(lambda x: x**2, filter(lambda x: x%2==0, nums)))', 'evens = filter(lambda x: x%2==0, nums)'], correctOrder: [0, 1, 2, 3], explanation: "Define nums, filter evens, map to squares, sum." },
];

const ch32: Chapter = {
  id: "python-ch32", courseId: "python", title: "Map, Filter, Reduce", order: 32,
  sections: ch32Sections, examPool: ch32Exam, xpReward: 205, estimatedMinutes: 40,
  prerequisites: ["python-ch31"],
  keyPoints: [
    "map(func, iterable) applies func to each item and returns a lazy iterator",
    "filter(func, iterable) keeps items where func returns True; filter(None) removes falsy values",
    "functools.reduce(func, iterable, initial) cumulatively combines items into one value",
    "map and filter are lazy — wrap in list() to materialize",
    "List comprehensions are often more Pythonic than map/filter combos",
    "reduce() needs a two-argument function and is great for cumulative operations",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 33 – List Comprehensions (Advanced)
// Topics: Nested comprehensions, conditionals, dict/set comprehensions, walrus
// ───────────────────────────────────────────────────────────────────
const ch33Sections: Section[] = [
  {
    type: "text",
    content:
      "## Advanced List Comprehensions\n\nYou already know basic list comprehensions: `[expr for item in iterable]`. This chapter covers **advanced patterns** — nested loops, multiple conditions, dict and set comprehensions, generator expressions, and using the walrus operator (`:=`) inside comprehensions.\n\nMastering these patterns will let you write expressive, concise Python that's still readable.",
  },
  {
    type: "code",
    language: "python",
    caption: "Nested loops in comprehensions — the outer loop runs first:",
    content:
      '# Cartesian product — every pair\ncolors = ["red", "green"]\nsizes = ["S", "M", "L"]\n\npairs = [(c, s) for c in colors for s in sizes]\nprint(pairs)\n# [("red", "S"), ("red", "M"), ("red", "L"),\n#  ("green", "S"), ("green", "M"), ("green", "L")]\n\n# Flatten a matrix\nmatrix = [[1, 2], [3, 4], [5, 6]]\nflat = [x for row in matrix for x in row]\nprint(flat)               # [1, 2, 3, 4, 5, 6]',
  },
  {
    type: "text",
    content:
      "## Multiple Conditions\n\nYou can add multiple `if` clauses at different levels of nesting. Each `if` applies to the loop immediately before it.\n\n```python\n# Numbers divisible by both 3 and 5 (using two if clauses)\nnums = [x for x in range(1, 31) if x % 3 == 0 if x % 5 == 0]\nprint(nums)  # [15, 30]\n\n# Same as: [x for x in range(1, 31) if x % 3 == 0 and x % 5 == 0]\n\n# Condition on the outer loop\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n# Only flatten rows where the sum is even\nresult = [x for row in matrix if sum(row) % 2 == 0 for x in row]\nprint(result)  # [1, 2, 3, 7, 8, 9] (rows [1,2,3] sum=6, [7,8,9] sum=24)\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Nested loops with conditions — powerful but keep it readable:",
    content:
      '# All even numbers from all rows where the row has more than 2 elements\ndata = [[1, 2], [3, 4, 5], [6, 7, 8, 9]]\nresult = [x for row in data if len(row) > 2 for x in row if x % 2 == 0]\nprint(result)             # [4, 6, 8]\n\n# Read as nested for loops:\n# for row in data:\n#     if len(row) > 2:\n#         for x in row:\n#             if x % 2 == 0:\n#                 result.append(x)',
  },
  {
    type: "text",
    content:
      "## Dictionary Comprehensions\n\nPython extends comprehension syntax to dictionaries and sets. The syntax uses `{}` with `key: value` pairs for dicts and just `{expr}` for sets.\n\n```python\n# Dict comprehension: {key_expr: value_expr for item in iterable}\nsquares = {x: x ** 2 for x in range(1, 6)}\nprint(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n\n# Filtering a dict\nages = {\"Alice\": 25, \"Bob\": 17, \"Charlie\": 30}\nadults = {name: age for name, age in ages.items() if age >= 18}\nprint(adults)   # {\"Alice\": 25, \"Charlie\": 30}\n\n# Swapping keys and values\noriginal = {\"a\": 1, \"b\": 2, \"c\": 3}\nswapped = {v: k for k, v in original.items()}\nprint(swapped)  # {1: 'a', 2: 'b', 3: 'c'}\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Set comprehensions — like list comprehensions but with unique, unordered results:",
    content:
      '# Unique even squares\nnums = [1, 2, 2, 3, 4, 4, 5]\neven_squares = {x ** 2 for x in nums if x % 2 == 0}\nprint(even_squares)       # {16, 4} — unique squares of evens\n\n# Characters in a string (unique)\ntext = "hello world"\nunique_chars = {c for c in text if c != " "}\nprint(sorted(unique_chars))  # [\'d\', \'e\', \'h\', \'l\', \'o\', \'r\', \'w\']',
  },
  {
    type: "text",
    content:
      "## Walrus Operator (`:=`) in Comprehensions\n\nPython 3.8+ allows the walrus operator inside comprehensions, enabling you to compute a value once and reuse it within the same comprehension.\n\n```python\n# Without walrus — computes len twice\nlong_words = [w for w in words if len(w) > 5 and len(w) < 10]\n\n# With walrus — computes len once\nlong_words = [w for w in words if 5 < (n := len(w)) < 10]\n\n# Walrus in the filter condition\nlengths = [n for w in words if (n := len(w)) > 5]\nprint(lengths)  # [6, 8, 7] — lengths only for words > 5 chars\n```",
  },
  {
    type: "callout",
    style: "warning",
    content:
      "**Readability matters.** A comprehension with more than two `for` clauses or complex conditions is often better written as a regular loop. There's no prize for squeezing everything into one line. If you have to think hard about what a comprehension does, it's too complex — use a loop with comments.",
  },
  {
    type: "comparison",
    title: "Comprehension Types",
    headers: ["Type", "Syntax", "Example"],
    rows: [
      ["List", "[expr for x in it]", "[x**2 for x in range(5)] → [0,1,4,9,16]"],
      ["Dict", "{k: v for x in it}", "{x: x**2 for x in range(3)} → {0:0, 1:1, 2:4}"],
      ["Set", "{expr for x in it}", "{x%3 for x in range(5)} → {0,1,2}"],
      ["Generator", "(expr for x in it)", "(x**2 for x in range(1000)) — lazy"],
    ],
  },
  {
    type: "code",
    language: "python",
    caption: "Practical examples — combining techniques:",
    content:
      '# Transpose a matrix (rows ↔ columns)\nmatrix = [[1, 2, 3], [4, 5, 6]]\ntransposed = [[row[i] for row in matrix] for i in range(3)]\nprint(transposed)  # [[1, 4], [2, 5], [3, 6]]\n\n# Group words by first letter\nwords = ["apple", "banana", "apricot", "blueberry", "cherry"]\nfrom collections import defaultdict\ngroups = defaultdict(list)\n[groups[w[0]].append(w) for w in words]\nprint(dict(groups))\n# {"a": ["apple", "apricot"], "b": ["banana", "blueberry"], "c": ["cherry"]}\n\n# Find all files in nested structure (simulated)\nnested = {"docs": ["readme.md", "guide.pdf"], "src": ["main.py", "utils.py"]}\nall_files = [f for folder in nested.values() for f in folder]\nprint(all_files)  # ["readme.md", "guide.pdf", "main.py", "utils.py"]',
  },
  {
    type: "key-points",
    points: [
      "Nested loops in comprehensions: outer loop first, inner loop second — read left to right",
      "Multiple if clauses work like chained AND conditions",
      "Dict comprehensions: `{k: v for ...}` and set comprehensions: `{expr for ...}`",
      "Generator expressions `(expr for ...)` are lazy — use for large datasets",
      "Walrus operator `:=` lets you compute and reuse values inside comprehensions",
      "Keep comprehensions simple — if it spans multiple lines or is hard to read, use a loop",
    ],
  },
];

const ch33Exercises: ExerciseSection[] = [
  {
    id: "py33-ex1", type: "exercise", title: "Nested Comprehension",
    description: "What does this nested comprehension produce?",
    instructions: ["Two loops — what's the order?", "Type the resulting list"],
    code: "result = [x + y for x in [1, 2] for y in [10, 20]]\nprint(result)",
    correctOutput: "[11, 21, 12, 22]",
    hint: "Outer x: 1→1+10=11, 1+20=21. Then x=2→2+10=12, 2+20=22.",
  },
  {
    id: "py33-ex2", type: "exercise", title: "Flatten Matrix",
    description: "What does flattening a matrix produce?",
    instructions: ["Each row is a sublist", "Type the flattened list"],
    code: "matrix = [[1, 2], [3, 4]]\nresult = [x for row in matrix for x in row]\nprint(result)",
    correctOutput: "[1, 2, 3, 4]",
    hint: "Row 0: [1,2] → 1, 2. Row 1: [3,4] → 3, 4.",
  },
  {
    id: "py33-ex3", type: "exercise", title: "Dict Comprehension",
    description: "What dict does this comprehension produce?",
    instructions: ["Keys are x, values are x*2", "Type the dict"],
    code: "result = {x: x * 2 for x in range(1, 4)}\nprint(result)",
    correctOutput: "{1: 2, 2: 4, 3: 6}",
    hint: "1→2, 2→4, 3→6.",
  },
  {
    id: "py33-ex4", type: "exercise", title: "Set Comprehension",
    description: "What set does this produce?",
    instructions: ["Compute x % 3 for each number", "Type the set"],
    code: "result = {x % 3 for x in range(6)}\nprint(result)",
    correctOutput: "{0, 1, 2}",
    hint: "0%3=0, 1%3=1, 2%3=2, 3%3=0, 4%3=1, 5%3=2 → unique: {0,1,2}.",
  },
  {
    id: "py33-ex5", type: "exercise", title: "Condition in Dict Comp",
    description: "Filter and create a dict.",
    instructions: ["Keep only even values", "Type the dict"],
    code: 'items = {"a": 1, "b": 2, "c": 3, "d": 4}\nresult = {k: v for k, v in items.items() if v % 2 == 0}\nprint(result)',
    correctOutput: "{'b': 2, 'd': 4}",
    hint: "Even values: 2 and 4.",
  },
  {
    id: "py33-ex6", type: "exercise", title: "Nested with Condition",
    description: "The condition applies to the outer loop.",
    instructions: ["Only flatten rows with sum > 5", "Type the flattened list"],
    code: "data = [[1, 2], [3, 4], [5, 6]]\nresult = [x for row in data if sum(row) > 5 for x in row]\nprint(result)",
    correctOutput: "[3, 4, 5, 6]",
    hint: "sum([1,2])=3 ≤ 5 excluded. sum([3,4])=7 and sum([5,6])=11 included.",
  },
  {
    id: "py33-ex7", type: "exercise", title: "Transpose Matrix",
    description: "What is the transposed matrix?",
    instructions: ["The comprehension swaps rows and columns", "Type the result"],
    code: "matrix = [[1, 2], [3, 4]]\nresult = [[row[i] for row in matrix] for i in range(2)]\nprint(result)",
    correctOutput: "[[1, 3], [2, 4]]",
    hint: "i=0: [1,3], i=1: [2,4].",
  },
  {
    id: "py33-ex8", type: "exercise", title: "Swap Keys and Values",
    description: "What happens when you swap dict keys and values?",
    instructions: ["Each value becomes a key and vice versa", "Type the result"],
    code: 'd = {"x": 1, "y": 2}\nresult = {v: k for k, v in d.items()}\nprint(result)',
    correctOutput: "{1: 'x', 2: 'y'}",
    hint: "k='x', v=1 → 1:'x'. k='y', v=2 → 2:'y'.",
  },
  {
    id: "py33-ex9", type: "exercise", title: "Generator Expression",
    description: "A generator expression is lazy. What happens when we consume it?",
    instructions: ["sum() consumes the generator", "Type the result"],
    code: "gen = (x ** 2 for x in range(5))\nprint(sum(gen))",
    correctOutput: "30",
    hint: "Squares: 0+1+4+9+16 = 30.",
  },
  {
    id: "py33-ex10", type: "exercise", title: "Walrus in Comprehension",
    description: "What does the walrus operator change here?",
    instructions: ["n is computed once per iteration and reused", "Type the result"],
    code: 'words = ["hi", "hello", "greetings"]\nresult = [w for w in words if (n := len(w)) > 3 and n < 8]\nprint(result)',
    correctOutput: "['hello']",
    hint: "len: 'hi'=2 (no), 'hello'=5 (yes), 'greetings'=9 (no). Only 'hello' matches.",
  },
];

const ch33Exam: ExamQuestion[] = [
  { id: "py33-q1", type: "multiple-choice", difficulty: "easy", question: "What does `[x*2 for x in range(3)]` produce?", options: [{ id: "a", text: "[0, 2, 4]" }, { id: "b", text: "[2, 4, 6]" }, { id: "c", text: "[0, 1, 2]" }, { id: "d", text: "[1, 2, 3]" }], correctAnswer: "a", explanation: "range(3) is 0,1,2. Times 2: 0,2,4." },
  { id: "py33-q2", type: "true-false", difficulty: "easy", question: "Dict comprehensions use square brackets [].", correctAnswer: false, explanation: "Dict comprehensions use curly braces {} with key:value syntax, like {x: x**2 for x in range(5)}." },
  { id: "py33-q3", type: "fill-blank", difficulty: "easy", question: "A lazy comprehension that produces values one at a time uses ___ parentheses.", correctAnswer: "round", acceptableAnswers: ["()", "parentheses"], explanation: "Generator expressions use parentheses: (expr for x in iterable)." },
  { id: "py33-q4", type: "multiple-choice", difficulty: "medium", question: "How many `if` clauses can a list comprehension have?", options: [{ id: "a", text: "Only one" }, { id: "b", text: "Up to two" }, { id: "c", text: "As many as needed" }, { id: "d", text: "None" }], correctAnswer: "c", explanation: "You can add an if after each for clause, so the number is unlimited (though readability degrades)." },
  { id: "py33-q5", type: "code-order", difficulty: "medium", question: "Arrange to create a dict mapping numbers to their cubes.", codeLines: ['cubes = {x: x**3 for x in range(1, 5)}', 'print(cubes)', 'x: x**3', 'range(1, 5)'], correctOrder: [0, 1, 2, 3], explanation: "Dict comprehension with x as key and x**3 as value." },
  { id: "py33-q6", type: "match-pairs", difficulty: "medium", question: "Match each comprehension type to its syntax.", leftItems: ["List comp", "Dict comp", "Set comp", "Generator expr"], rightItems: ["[x for x in it]", "{k:v for x in it}", "{x for x in it}", "(x for x in it)"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "Lists use [], dicts use {k:v}, sets use {x}, generators use ()." },
  { id: "py33-q7", type: "true-false", difficulty: "hard", question: "Generator expressions can be iterated over multiple times.", correctAnswer: false, explanation: "Generator expressions are single-use iterators. Once consumed, they're exhausted." },
  { id: "py33-q8", type: "fill-blank", difficulty: "medium", question: "In a nested comprehension `[x for row in m for x in row]`, the loop that changes most slowly is the one over ___.", correctAnswer: "row", acceptableAnswers: ["m", "rows", "the outer loop"], explanation: "The outer loop (for row in m) changes slowest; the inner loop (for x in row) changes fastest." },
  { id: "py33-q9", type: "multiple-choice", difficulty: "hard", question: "What does `[[x*2 for x in range(3)] for _ in range(2)]` produce?", options: [{ id: "a", text: "[[0,2,4], [0,2,4]]" }, { id: "b", text: "[0,2,4,0,2,4]" }, { id: "c", text: "[[0,2,4]]" }, { id: "d", text: "[[0,2,4], []]" }], correctAnswer: "a", explanation: "The inner comprehension creates [0,2,4], and the outer one repeats it twice: [[0,2,4], [0,2,4]]." },
  { id: "py33-q10", type: "code-order", difficulty: "hard", question: "Arrange to create a set of squared even numbers.", codeLines: ['{x**2 for x in nums if x % 2 == 0}', 'nums = [1, 2, 3, 4, 5, 6]', 'x**2', 'x % 2 == 0'], correctOrder: [1, 0, 2, 3], explanation: "Define nums, set comprehension with filter." },
];

const ch33: Chapter = {
  id: "python-ch33", courseId: "python", title: "Advanced Comprehensions", order: 33,
  sections: ch33Sections, examPool: ch33Exam, xpReward: 210, estimatedMinutes: 40,
  prerequisites: ["python-ch32"],
  keyPoints: [
    "Nested comprehensions: outer loop first, inner loop second, read left to right",
    "Dict comprehension: {k: v for k, v in iterable}; Set comprehension: {expr for x in iterable}",
    "Generator expression (expr for x in iterable) is lazy and memory-efficient",
    "Walrus operator := can compute and reuse values within comprehensions",
    "Keep comprehensions readable — 2 for clauses max before using a regular loop",
    "All comprehension types support optional if conditions",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 34 – Generator Functions & yield
// Topics: yield, generator functions, state, send(), yield from, use cases
// ───────────────────────────────────────────────────────────────────
const ch34Sections: Section[] = [
  {
    type: "text",
    content:
      "## Generator Functions\n\nA **generator function** is a function that uses `yield` instead of `return`. When called, it returns a generator object that can be iterated over — but unlike a regular function that runs once and exits, a generator function **pauses** at each `yield` and **resumes** from where it left off on the next iteration.\n\n```python\ndef count_up_to(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\ncounter = count_up_to(3)\nprint(next(counter))  # 1\nprint(next(counter))  # 2\nprint(next(counter))  # 3\n\n# Or use in a for loop\nfor num in count_up_to(5):\n    print(num)  # 1, 2, 3, 4, 5\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Generators maintain state between yields — they remember local variables:",
    content:
      "def fibonacci(limit):\n    \"\"\"Generate Fibonacci numbers up to a limit.\"\"\"\n    a, b = 0, 1\n    while a < limit:\n        yield a\n        a, b = b, a + b\n\nfor n in fibonacci(100):\n    print(n, end=\" \")  # 0 1 1 2 3 5 8 13 21 34 55 89\n\n# Convert to list if needed\nfibs = list(fibonacci(50))\nprint(fibs)  # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]",
  },
  {
    type: "text",
    content:
      "## Generators vs Regular Functions\n\n| Aspect | Regular Function | Generator Function |\n|--------|-----------------|-------------------|\n| Keyword | `return` | `yield` |\n| Execution | Runs once, exits | Pauses on yield, resumes on next() |\n| Memory | Full result in memory | Produces values lazily one at a time |\n| State | Local vars destroyed on exit | Local vars preserved between yields |\n| Return type | The result value | A generator object (iterator) |\n| Reuse | Can be called multiple times | Single-use iterator (recreate to reuse) |\n\nGenerators are **memory-efficient** because they produce values on demand rather than storing an entire sequence in memory.",
  },
  {
    type: "code",
    language: "python",
    caption: "Generators for large data — memory comparison:",
    content:
      "# Memory-inefficient: creates full list in memory\ndef squares_list(n):\n    return [x ** 2 for x in range(n)]\n\n# Memory-efficient: yields one at a time\ndef squares_gen(n):\n    for x in range(n):\n        yield x ** 2\n\n# Both produce the same result\nprint(sum(squares_list(10)))  # 285\nprint(sum(squares_gen(10)))   # 285\n\n# But squares_gen(10_000_000) uses almost no memory\n# while squares_list(10_000_000) would use GBs",
  },
  {
    type: "callout",
    style: "tip",
    content:
      "**Generator expressions** (covered in the next chapter) are like compact generator functions. The pattern `x ** 2 for x in range(n)` above can be written as `(x ** 2 for x in range(n))` — but generator functions can have complex multi-step logic that expressions can't express.",
  },
  {
    type: "text",
    content:
      "## `send()` — Two-Way Generators\n\nGenerators aren't just one-way; you can **send values back** into a generator using the `.send()` method. The sent value becomes the result of the `yield` expression where the generator paused.\n\n```python\ndef echo_generator():\n    while True:\n        received = yield\n        print(f\"Received: {received}\")\n\ngen = echo_generator()\nnext(gen)          # Prime the generator (run to first yield)\ngen.send(\"Hello\")  # Received: Hello\ngen.send(42)       # Received: 42\ngen.close()        # Stop the generator\n```\n\n`.send()` is useful for coroutines, data pipelines, and interactive generators.",
  },
  {
    type: "code",
    language: "python",
    caption: "Practical generator — reading large files line by line:",
    content:
      "def read_lines(filename):\n    \"\"\"Read a file line by line, yielding one at a time.\n    Handles files too large to fit in memory.\"\"\"\n    with open(filename, 'r') as f:\n        for line in f:\n            yield line.strip()\n\n# Infinite sequence\ndef infinite_odds():\n    n = 1\n    while True:\n        yield n\n        n += 2\n\nodds = infinite_odds()\nfirst_5 = [next(odds) for _ in range(5)]\nprint(first_5)  # [1, 3, 5, 7, 9]\n\n# CAUTION: infinite generators must be bounded when consumed\n# list(infinite_odds())  ← would run forever!",
  },
  {
    type: "text",
    content:
      "## `yield from` — Delegating to Subgenerators\n\nPython 3.3+ introduced `yield from`, which lets a generator delegate part of its iteration to another iterable or generator. It yields all values from the sub-iterable.\n\n```python\ndef chain(*iterables):\n    \"\"\"Chain multiple iterables into one sequence.\"\"\"\n    for iterable in iterables:\n        yield from iterable\n\nresult = list(chain([1, 2], \"abc\", range(3)))\nprint(result)  # [1, 2, 'a', 'b', 'c', 0, 1, 2]\n\n# Nested generators\ndef flatten(nested):\n    for item in nested:\n        if hasattr(item, '__iter__') and not isinstance(item, str):\n            yield from flatten(item)\n        else:\n            yield item\n\ndeep = [1, [2, [3, 4], 5], 6]\nprint(list(flatten(deep)))  # [1, 2, 3, 4, 5, 6]\n```",
  },
  {
    type: "key-points",
    points: [
      "Generator functions use `yield` instead of `return` to produce a sequence of values lazily",
      "Each call to next() runs the function until the next yield, then pauses — state is preserved",
      "Generators are single-use iterators: once consumed, they're exhausted",
      "`.send(value)` sends a value back into a generator from the caller",
      "`yield from subiterable` delegates yielding to another iterable or generator",
      "Use generators for infinite sequences, large data, and memory-efficient data pipelines",
    ],
  },
];

const ch34Exercises: ExerciseSection[] = [
  {
    id: "py34-ex1", type: "exercise", title: "Basic yield",
    description: "What does the generator produce?",
    instructions: ["Calling a generator function returns a generator object", "Iterate to see values"],
    code: "def my_gen():\n    yield 1\n    yield 2\n    yield 3\n\nprint(list(my_gen()))",
    correctOutput: "[1, 2, 3]",
    hint: "Each yield produces one value in sequence.",
  },
  {
    id: "py34-ex2", type: "exercise", title: "Generator Loop",
    description: "What values does the for loop print?",
    instructions: ["Trace the while loop", "Type the values separated by newlines"],
    code: "def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor val in countdown(3):\n    print(val)",
    correctOutput: "3\n2\n1",
    hint: "Starts at n=3, yields n, decrements, repeats until n=0.",
  },
  {
    id: "py34-ex3", type: "exercise", title: "next() Manual Iteration",
    description: "What does each next() call return?",
    instructions: ["Call next() three times on the generator", "Type the values"],
    code: "def ab_gen():\n    yield 'A'\n    yield 'B'\n    yield 'C'\n\ng = ab_gen()\nprint(next(g))\nprint(next(g))\nprint(next(g))",
    correctOutput: "A\nB\nC",
    hint: "Each next() resumes from the last yield and runs to the next one.",
  },
  {
    id: "py34-ex4", type: "exercise", title: "Generator state",
    description: "Generators preserve state between yields.",
    instructions: ["Trace how x changes between each next()", "Type the values"],
    code: "def counter():\n    x = 0\n    while True:\n        x += 1\n        yield x\n\ng = counter()\nprint(next(g))\nprint(next(g))\nprint(next(g))",
    correctOutput: "1\n2\n3",
    hint: "x starts at 0, increments to 1, yields. Next call: x is still 1, increments to 2, yields.",
  },
  {
    id: "py34-ex5", type: "exercise", title: "Finite generator",
    description: "What values does this finite generator yield?",
    instructions: ["The generator only has 2 yields", "Read them"],
    code: "def two_yields():\n    yield 10\n    yield 20\n\ng = two_yields()\nprint(next(g))\nprint(next(g))",
    correctOutput: "10\n20",
    hint: "The generator yields 10, then 20, then is exhausted.",
  },
  {
    id: "py34-ex6", type: "exercise", title: "Generator in List",
    description: "What does list() do with a generator?",
    instructions: ["list() consumes the entire generator", "Type the result"],
    code: "def my_range(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n\nprint(list(my_range(4)))",
    correctOutput: "[0, 1, 2, 3]",
    hint: "Yields 0, 1, 2, 3.",
  },
  {
    id: "py34-ex7", type: "exercise", title: "yield from basics",
    description: "What does yield from do?",
    instructions: ["yield from yields all values from the sub-iterable", "Type the result"],
    code: "def gen():\n    yield from [10, 20, 30]\n\nprint(list(gen()))",
    correctOutput: "[10, 20, 30]",
    hint: "yield from [10, 20, 30] is equivalent to: yield 10; yield 20; yield 30.",
  },
  {
    id: "py34-ex8", type: "exercise", title: "Generator with Condition",
    description: "Yields only even numbers up to n.",
    instructions: ["Only even numbers pass the if", "Type the list"],
    code: "def evens(n):\n    for i in range(n):\n        if i % 2 == 0:\n            yield i\n\nprint(list(evens(8)))",
    correctOutput: "[0, 2, 4, 6]",
    hint: "Even numbers from 0 to 7: 0, 2, 4, 6.",
  },
  {
    id: "py34-ex9", type: "exercise", title: "Infinite Generator",
    description: "Take only what you need from an infinite generator.",
    instructions: ["islice takes 5 values", "Type the result"],
    code: "from itertools import islice\n\ndef squares():\n    n = 1\n    while True:\n        yield n ** 2\n        n += 1\n\nprint(list(islice(squares(), 5)))",
    correctOutput: "[1, 4, 9, 16, 25]",
    hint: "First 5 squares: 1, 4, 9, 16, 25.",
  },
  {
    id: "py34-ex10", type: "exercise", title: "yield from with chain",
    description: "Chain two lists using yield from.",
    instructions: ["yield from each list in sequence", "Type the result"],
    code: "def chain(a, b):\n    yield from a\n    yield from b\n\nprint(list(chain([1, 2], [3, 4])))",
    correctOutput: "[1, 2, 3, 4]",
    hint: "First yields all from a (1, 2), then all from b (3, 4).",
  },
];

const ch34Exam: ExamQuestion[] = [
  { id: "py34-q1", type: "multiple-choice", difficulty: "easy", question: "What keyword makes a function a generator?", options: [{ id: "a", text: "return" }, { id: "b", text: "yield" }, { id: "c", text: "generate" }, { id: "d", text: "await" }], correctAnswer: "b", explanation: "The `yield` keyword makes a function a generator function." },
  { id: "py34-q2", type: "true-false", difficulty: "easy", question: "Calling a generator function executes the function body immediately.", correctAnswer: false, explanation: "Calling a generator function returns a generator object — execution starts only when next() is called." },
  { id: "py34-q3", type: "fill-blank", difficulty: "easy", question: "A generator raises ___ when it has no more values to yield.", correctAnswer: "StopIteration", acceptableAnswers: ["StopIteration"], explanation: "When a generator is exhausted, it raises StopIteration." },
  { id: "py34-q4", type: "multiple-choice", difficulty: "medium", question: "What does `yield from` do?", options: [{ id: "a", text: "Yields from the same function recursively" }, { id: "b", text: "Delegates yields to a sub-iterable" }, { id: "c", text: "Creates a new generator" }, { id: "d", text: "Returns a value" }], correctAnswer: "b", explanation: "yield from delegates iteration to another iterable, yielding all its values." },
  { id: "py34-q5", type: "code-order", difficulty: "medium", question: "Arrange a generator that yields three values.", codeLines: ['yield 1', 'yield 2', 'yield 3', 'def three():\n    yield 1\n    yield 2\n    yield 3'], correctOrder: [3, 0, 1, 2], explanation: "Define function, then three yields." },
  { id: "py34-q6", type: "match-pairs", difficulty: "medium", question: "Match each concept to its description.", leftItems: ["yield", "next()", "generator", "yield from"], rightItems: ["Pause and produce value", "Resume generator execution", "Iterator produced by generator function", "Delegate to sub-generator"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "yield produces, next() resumes, generator is the iterator, yield from delegates." },
  { id: "py34-q7", type: "true-false", difficulty: "medium", question: "A generator can be reused by calling next() on it again after it's exhausted.", correctAnswer: false, explanation: "Generators are single-use. Create a new generator by calling the function again." },
  { id: "py34-q8", type: "fill-blank", difficulty: "medium", question: "The method used to send a value back into a generator is ___.", correctAnswer: "send", acceptableAnswers: [".send()", "send()"], explanation: "generator.send(value) sends a value back, which becomes the result of the yield expression." },
  { id: "py34-q9", type: "multiple-choice", difficulty: "hard", question: "What happens when a generator function has a return statement with a value?", options: [{ id: "a", text: "The return value is ignored" }, { id: "b", text: "It becomes the StopIteration value" }, { id: "c", text: "It raises SyntaxError" }, { id: "d", text: "It yields the value" }], correctAnswer: "b", explanation: "In generators, return X is equivalent to raising StopIteration with value X." },
  { id: "py34-q10", type: "code-order", difficulty: "hard", question: "Arrange to filter even numbers from a generator.", codeLines: ['def even_gen(n):', '    for i in range(n):', '        if i % 2 == 0:', '            yield i'], correctOrder: [0, 1, 2, 3], explanation: "Define function, loop, condition, yield." },
];

const ch34: Chapter = {
  id: "python-ch34", courseId: "python", title: "Generator Functions & yield", order: 34,
  sections: ch34Sections, examPool: ch34Exam, xpReward: 215, estimatedMinutes: 40,
  prerequisites: ["python-ch33"],
  keyPoints: [
    "yield produces a value and pauses the function; execution resumes on the next next() call",
    "Generator functions return generator objects — lazy iterators that produce values on demand",
    "State is preserved between yields (local variables, instruction pointer)",
    "Generators are single-use — exhausted after one iteration",
    "send(value) enables two-way communication with a generator",
    "yield from delegates iteration to a sub-iterable or sub-generator",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 35 – Generator Expressions
// Topics: Generator expressions, lazy evaluation, memory efficiency, pipelines
// ───────────────────────────────────────────────────────────────────
const ch35Sections: Section[] = [
  {
    type: "text",
    content:
      "## Generator Expressions\n\nA **generator expression** is a compact way to create a generator without defining a function. The syntax is identical to a list comprehension but with **parentheses** instead of square brackets.\n\n```python\n# List comprehension — creates a list in memory\nsquares_list = [x ** 2 for x in range(10)]\nprint(type(squares_list))  # <class 'list'>\n\n# Generator expression — creates a lazy generator\nsquares_gen = (x ** 2 for x in range(10))\nprint(type(squares_gen))   # <class 'generator'>\n\n# Both produce the same values\nprint(list(squares_gen))   # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Generator expressions are lazy — they compute nothing until you iterate:",
    content:
      "# This doesn't compute anything yet\ngen = (x * x for x in range(1000000))\nprint(\"Generator created, no computation done yet\")\n\n# Consume a few values\nprint(next(gen))  # 0\nprint(next(gen))  # 1\nprint(next(gen))  # 4\n\n# Sum without creating a list\ntotal = sum(x ** 2 for x in range(1000))\nprint(total)  # 332833500\n\n# Note: sum() can take a generator expression directly\n# without double parentheses when it's the only argument",
  },
  {
    type: "text",
    content:
      "## When to Use Generator Expressions\n\nGenerator expressions are ideal when:\n1. **You're processing large datasets** — avoids loading everything into memory\n2. **You only need to iterate once** — generators are single-use\n3. **You're chaining transformations** — each step stays lazy until consumed\n4. **You're passing to functions like `sum()`, `all()`, `any()`** — no extra list allocated\n\n```python\n# Without generator: creates an intermediate list\nresult = sum([x * 2 for x in range(10**7)])  # Uses ~80MB for the list!\n\n# With generator: no intermediate list\nresult = sum(x * 2 for x in range(10**7))    # Uses ~0 extra memory\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Generator expressions with conditions — same filtering as list comprehensions:",
    content:
      "# Filter and transform lazily\nnums = range(1, 21)\n\n# Generator: even numbers squared\neven_squares = (x ** 2 for x in nums if x % 2 == 0)\n\nprint(list(even_squares))  # [4, 16, 36, 64, 100, 144, 196, 256, 324, 400]\n\n# Nested generator expression (not recommended for readability)\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflat_gen = (x for row in matrix for x in row)\nprint(list(flat_gen))  # [1, 2, 3, 4, 5, 6, 7, 8, 9]",
  },
  {
    type: "text",
    content:
      "## Chaining Generator Expressions\n\nYou can chain generator expressions to build **lazy pipelines** — each step is a generator that feeds the next without creating intermediate collections.\n\n```python\ndef pipeline_demo(data):\n    # Step 1: filter (lazy)\n    filtered = (x for x in data if x > 0)\n    # Step 2: transform (lazy)\n    transformed = (x ** 2 for x in filtered)\n    # Step 3: another filter (lazy)\n    result = (x for x in transformed if x % 2 == 0)\n    # Nothing computed yet — only when we iterate\n    return result\n\ndata = [-3, 1, 2, -1, 3, 4, -2, 5]\npipe = pipeline_demo(data)\nprint(list(pipe))  # [4, 16]\n# Step 1: 1, 2, 3, 4, 5\n# Step 2: 1, 4, 9, 16, 25\n# Step 3 (even): 4, 16\nprint(list(pipe))  # [] — generator is exhausted!\n```",
  },
  {
    type: "callout",
    style: "warning",
    content:
      "**Generator expressions are single-use!** Once you iterate over one, it's exhausted. If you need to iterate multiple times, use a list comprehension or recreate the generator. This is a common source of bugs: `gen = (x for x in data); if all(gen): process(list(gen))` — the `list(gen)` will be empty because `all()` already consumed it.",
  },
  {
    type: "code",
    language: "python",
    caption: "Practical — processing data with lazy pipelines:",
    content:
      '# Simulating processing log lines with lazy pipelines\nlines = [\n    "2026-01-01 INFO  Server started",\n    "2026-01-01 ERROR Disk full",\n    "2026-01-02 INFO  Backup completed",\n    "2026-01-02 WARN  Memory usage 90%",\n]\n\n# Lazy pipeline: strip → filter ERROR/WARN → extract message\ncleaned = (line.strip() for line in lines)\nerrors = (line for line in cleaned if "ERROR" in line or "WARN" in line)\nmessages = (line.split(maxsplit=2)[-1] for line in errors)\n\nfor msg in messages:\n    print(msg)\n# Disk full\n# Memory usage 90%',
  },
  {
    type: "comparison",
    title: "List Comp vs Generator Expression",
    headers: ["Aspect", "List Comprehension", "Generator Expression"],
    rows: [
      ["Syntax", "[expr for x in it]", "(expr for x in it)"],
      ["Returns", "list", "generator (lazy iterator)"],
      ["Memory", "O(n) — stores all results", "O(1) — computes on demand"],
      ["Speed (iteration)", "Faster for small datasets", "Slightly slower per item"],
      ["Multi-pass", "Can iterate multiple times", "Single-use only"],
      ["Use case", "Small data, need random access", "Large data, one pass needed"],
    ],
  },
  {
    type: "key-points",
    points: [
      "Generator expressions use parentheses: `(expr for x in iterable)`",
      "They're lazy — no computation happens until iteration begins",
      "Ideal for large datasets and memory-constrained environments",
      "Single-use — exhausted after one iteration; recreate for another pass",
      "Chain generator expressions for lazy data pipelines without intermediate storage",
      "When generator expressions get too complex, switch to a generator function with yield",
    ],
  },
];

const ch35Exercises: ExerciseSection[] = [
  {
    id: "py35-ex1", type: "exercise", title: "Basic Generator Expression",
    description: "What type does a generator expression create?",
    instructions: ["Create a generator expression and check its type", "Type the first value"],
    code: "g = (x for x in [1, 2, 3])\nprint(type(g).__name__)\nprint(next(g))",
    correctOutput: "generator\n1",
    hint: "Parentheses create a generator, not a tuple. next() gets the first yielded value.",
  },
  {
    id: "py35-ex2", type: "exercise", title: "Generator vs List",
    description: "What's the difference in output?",
    instructions: ["A list comprehension creates a list", "A generator expression creates a generator"],
    code: "list_comp = [x * 2 for x in [1, 2, 3]]\ngen_expr = (x * 2 for x in [1, 2, 3])\nprint(list_comp)\nprint(list(gen_expr))",
    correctOutput: "[2, 4, 6]\n[2, 4, 6]",
    hint: "Both produce the same values, but one is a list and the other is a generator.",
  },
  {
    id: "py35-ex3", type: "exercise", title: "Lazy Evaluation",
    description: "Generator expressions are lazy — they compute on demand.",
    instructions: ["Create a generator with range(100)", "Consume only the first value"],
    code: "g = (x ** 2 for x in range(100))\nprint(next(g))\nprint(next(g))",
    correctOutput: "0\n1",
    hint: "Only the requested values are computed: 0^2=0, 1^2=1.",
  },
  {
    id: "py35-ex4", type: "exercise", title: "Sum with Generator",
    description: "sum() works directly with generator expressions.",
    instructions: ["Sum of squares of 0..4", "Notice no extra parentheses needed"],
    code: "result = sum(x ** 2 for x in range(5))\nprint(result)",
    correctOutput: "30",
    hint: "0+1+4+9+16 = 30.",
  },
  {
    id: "py35-ex5", type: "exercise", title: "Filter with Generator",
    description: "Generator expressions support if conditions.",
    instructions: ["Keep only odd numbers", "Type the result"],
    code: "g = (x for x in range(10) if x % 2 == 1)\nprint(list(g))",
    correctOutput: "[1, 3, 5, 7, 9]",
    hint: "Odd numbers from 0 to 9: 1, 3, 5, 7, 9.",
  },
  {
    id: "py35-ex6", type: "exercise", title: "any() with Generator",
    description: "any() short-circuits with generator expressions.",
    instructions: ["Does the sequence have any number > 5?", "Type the result"],
    code: "nums = [1, 3, 7, 2]\nresult = any(x > 5 for x in nums)\nprint(result)",
    correctOutput: "True",
    hint: "7 > 5 is True, so any() returns True immediately (short-circuits).",
  },
  {
    id: "py35-ex7", type: "exercise", title: "all() with Generator",
    description: "all() checks if every item satisfies the condition.",
    instructions: ["Are all numbers even?", "Type the result"],
    code: "nums = [2, 4, 6, 8]\nresult = all(x % 2 == 0 for x in nums)\nprint(result)",
    correctOutput: "True",
    hint: "All numbers are divisible by 2, so all() returns True.",
  },
  {
    id: "py35-ex8", type: "exercise", title: "Generator Exhaustion",
    description: "What happens when you iterate a generator twice?",
    instructions: ["First iteration consumes all values", "The second iteration yields nothing"],
    code: "g = (x for x in [1, 2, 3])\nprint(list(g))\nprint(list(g))",
    correctOutput: "[1, 2, 3]\n[]",
    hint: "The first list(g) consumes the generator. The second sees it already exhausted.",
  },
  {
    id: "py35-ex9", type: "exercise", title: "Nested Generator",
    description: "Flatten a matrix with a generator expression.",
    instructions: ["Generator with nested for clauses", "Type the result"],
    code: "matrix = [[1, 2], [3, 4]]\ng = (x for row in matrix for x in row)\nprint(list(g))",
    correctOutput: "[1, 2, 3, 4]",
    hint: "Row 0: 1, 2. Row 1: 3, 4.",
  },
  {
    id: "py35-ex10", type: "exercise", title: "Chained Generators",
    description: "Chain two generator expressions together.",
    instructions: ["First gen filters, second gen transforms", "Type the result"],
    code: "nums = range(1, 11)\nfiltered = (x for x in nums if x > 5)\ntransformed = (x ** 2 for x in filtered)\nprint(list(transformed))",
    correctOutput: "[36, 49, 64, 81, 100]",
    hint: "Filter: 6,7,8,9,10. Then square: 36,49,64,81,100.",
  },
];

const ch35Exam: ExamQuestion[] = [
  { id: "py35-q1", type: "multiple-choice", difficulty: "easy", question: "What brackets create a generator expression?", options: [{ id: "a", text: "[]" }, { id: "b", text: "()" }, { id: "c", text: "{}" }, { id: "d", text: "<>" }], correctAnswer: "b", explanation: "Generator expressions use parentheses (expr for x in iterable)." },
  { id: "py35-q2", type: "true-false", difficulty: "easy", question: "A generator expression computes all values immediately when created.", correctAnswer: false, explanation: "Generator expressions are lazy — they compute values only when iterated." },
  { id: "py35-q3", type: "fill-blank", difficulty: "easy", question: "The function ___ consumes a generator and returns True if any element satisfies the condition.", correctAnswer: "any", acceptableAnswers: ["any()"], explanation: "any(condition for x in iterable) short-circuits on the first True." },
  { id: "py35-q4", type: "multiple-choice", difficulty: "medium", question: "How many times can you iterate over a generator expression?", options: [{ id: "a", text: "Unlimited times" }, { id: "b", text: "Once" }, { id: "c", text: "Twice" }, { id: "d", text: "Depends on the data" }], correctAnswer: "b", explanation: "Generator expressions produce single-use iterators — they can be iterated exactly once." },
  { id: "py35-q5", type: "code-order", difficulty: "medium", question: "Arrange to create a generator of squared evens.", codeLines: ['(x**2 for x in range(20) if x % 2 == 0)', 'list((x**2 for x in range(20) if x % 2 == 0))', 'x**2', 'x % 2 == 0'], correctOrder: [0, 1, 2, 3], explanation: "Generator expression with condition, wrap in list to materialize." },
  { id: "py35-q6", type: "match-pairs", difficulty: "medium", question: "Match each to its memory behavior.", leftItems: ["List comprehension", "Generator expression", "List literal", "range()"], rightItems: ["O(n) memory", "O(1) memory", "O(n) memory", "O(1) memory (lazy)"], correctMatches: [[0, 0], [1, 1], [2, 0], [3, 1]], explanation: "list comprehensions and list literals store everything; generator expressions and range() are lazy." },
  { id: "py35-q7", type: "true-false", difficulty: "medium", question: "Generator expressions can be used as arguments to sum(), all(), and any().", correctAnswer: true, explanation: "These functions accept iterables, making generator expressions natural arguments." },
  { id: "py35-q8", type: "fill-blank", difficulty: "medium", question: "If `g = (x for x in [1,2,3])` and we call `list(g)` twice, the second call returns ___.", correctAnswer: "[]", acceptableAnswers: ["[]", "an empty list"], explanation: "The first list(g) consumes the generator; the second sees it exhausted and returns []." },
  { id: "py35-q9", type: "multiple-choice", difficulty: "hard", question: "What does `sum(x for x in range(5) if x % 2 == 0)` return?", options: [{ id: "a", text: "6" }, { id: "b", text: "10" }, { id: "c", text: "4" }, { id: "d", text: "20" }], correctAnswer: "a", explanation: "Even range: 0+2+4 = 6." },
  { id: "py35-q10", type: "code-order", difficulty: "hard", question: "Arrange a lazy pipeline: filter > 0, square, check even.", codeLines: ['nums = [-3, 1, 2, -1, 3, 4]', 'filtered = (x for x in nums if x > 0)', 'squared = (x**2 for x in filtered)', 'result = (x for x in squared if x % 2 == 0)'], correctOrder: [0, 1, 2, 3], explanation: "Define data, filter positive, square, filter even." },
];

const ch35: Chapter = {
  id: "python-ch35", courseId: "python", title: "Generator Expressions", order: 35,
  sections: ch35Sections, examPool: ch35Exam, xpReward: 210, estimatedMinutes: 35,
  prerequisites: ["python-ch34"],
  keyPoints: [
    "Generator expression syntax: (expr for x in iterable) — creates a lazy generator",
    "No computation happens until iteration; ideal for large datasets",
    "Single-use iterators — must recreate to iterate again",
    "Great with sum(), all(), any(), max(), min() — avoid creating intermediate lists",
    "Chain multiple generator expressions for lazy data pipelines",
    "Switch to a generator function with yield when logic gets complex",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 36 – Decorators (Basics)
// Topics: Function decorators, @ syntax, wrappers, common use cases
// ───────────────────────────────────────────────────────────────────
const ch36Sections: Section[] = [
  {
    type: "text",
    content:
      "## Decorators in Python\n\nA **decorator** is a function that takes another function and extends its behavior without modifying it directly. Decorators use the `@` syntax and are applied above the function definition.\n\n```python\ndef my_decorator(func):\n    def wrapper():\n        print(\"Something before the function\")\n        func()\n        print(\"Something after the function\")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print(\"Hello!\")\n\nsay_hello()\n# Output:\n# Something before the function\n# Hello!\n# Something after the function\n```\n\n`@my_decorator` is syntactic sugar for `say_hello = my_decorator(say_hello)`.",
  },
  {
    type: "code",
    language: "python",
    caption: "Decorators are just functions that take and return functions:",
    content:
      "# Without @ syntax — equivalent to the decorator pattern\n\ndef logger(func):\n    \"\"\"Log when a function is called.\"\"\"\n    def wrapper(*args, **kwargs):\n        print(f\"Calling {func.__name__}\")\n        result = func(*args, **kwargs)\n        print(f\"Finished {func.__name__}\")\n        return result\n    return wrapper\n\ndef add(a, b):\n    return a + b\n\n# Apply decorator manually\nadd = logger(add)\n\nprint(add(3, 4))\n# Output:\n# Calling add\n# Finished add\n# 7",
  },
  {
    type: "text",
    content:
      "## Decorators with Arguments\n\nWhen a decorated function takes arguments, the `wrapper` inside the decorator must accept them and forward them to the original function.\n\n```python\ndef uppercase_result(func):\n    \"\"\"Convert the return value to uppercase.\"\"\"\n    def wrapper(*args, **kwargs):\n        result = func(*args, **kwargs)\n        return result.upper()\n    return wrapper\n\n@uppercase_result\ndef greet(name):\n    return f\"Hello, {name}!\"\n\nprint(greet(\"Alice\"))  # \"HELLO, ALICE!\"\n```\n\nUsing `*args, **kwargs` makes the decorator general-purpose — it works with any function signature.",
  },
  {
    type: "callout",
    style: "important",
    content:
      "**Lost metadata problem:** When you wrap a function with `wrapper`, the resulting function loses the original's name, docstring, and other metadata. `print(greet.__name__)` would show `\"wrapper\"` instead of `\"greet\"`. The `functools.wraps` decorator fixes this — we'll cover it in the advanced decorator chapter.",
  },
  {
    type: "code",
    language: "python",
    caption: "Practical decorators — timing and debugging:",
    content:
      "import time\n\ndef timer(func):\n    \"\"\"Measure and print the execution time of a function.\"\"\"\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        result = func(*args, **kwargs)\n        elapsed = time.perf_counter() - start\n        print(f\"{func.__name__} took {elapsed:.4f}s\")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(0.5)\n    return \"Done\"\n\nprint(slow_function())\n# slow_function took 0.5003s\n# Done",
  },
  {
    type: "comparison",
    title: "Decorated vs Undecorated",
    headers: ["Aspect", "Without Decorator", "With Decorator (@timer)"],
    rows: [
      ["Code", "def func(): ...\\nfunc = timer(func)", "@timer\\ndef func(): ..."],
      ["Timing logic", "Inside the function body", "Separate, reusable in decorator"],
      ["Reusability", "Write timing in each function", "Apply @timer to any function"],
      ["Readability", "Business logic mixed with cross-cutting concern", "Clean separation of concerns"],
    ],
  },
  {
    type: "text",
    content:
      "## Stacking Decorators\n\nYou can apply multiple decorators to a function by stacking them. They apply **bottom-up** (the closest to the function runs first).\n\n```python\n@decorator_a\n@decorator_b\n@decorator_c\ndef my_function():\n    pass\n\n# Equivalent to:\n# my_function = decorator_a(decorator_b(decorator_c(my_function)))\n```\n\nExecution order when `my_function()` is called:\n1. `decorator_a`'s wrapper runs (outermost)\n2. It calls `decorator_b`'s wrapper\n3. It calls `decorator_c`'s wrapper\n4. It calls the original `my_function`\n5. Returns back up through each wrapper",
  },
  {
    type: "code",
    language: "python",
    caption: "Stacking decorators — each adds a layer of behavior:",
    content:
      "def bold(func):\n    def wrapper():\n        return \"<b>\" + func() + \"</b>\"\n    return wrapper\n\ndef italic(func):\n    def wrapper():\n        return \"<i>\" + func() + \"</i>\"\n    return wrapper\n\n@bold\n@italic\ndef greet():\n    return \"Hello!\"\n\nprint(greet())  # \"<b><i>Hello!</i></b>\"\n# Execution: bold wraps italic, italic wraps greet\n# greet() → italic wrapper → bold wrapper",
  },
  {
    type: "key-points",
    points: [
      "A decorator is a function that takes a function and returns a new function with extended behavior",
      "@decorator is syntactic sugar for func = decorator(func)",
      "Use *args, **kwargs in the wrapper to make decorators work with any function signature",
      "Stack multiple decorators with @decorator_a, @decorator_b — applied bottom-up",
      "Decorators are great for cross-cutting concerns: logging, timing, auth, caching, validation",
      "Use functools.wraps to preserve the original function's metadata",
    ],
  },
];

const ch36Exercises: ExerciseSection[] = [
  {
    id: "py36-ex1", type: "exercise", title: "Basic Decorator",
    description: "What does the decorated function return?",
    instructions: ["The decorator wraps the function", "Trace what gets executed"],
    code: "def decorator(func):\n    def wrapper():\n        return func() + \"!\"\n    return wrapper\n\n@decorator\ndef greet():\n    return \"Hello\"\n\nprint(greet())",
    correctOutput: "Hello!",
    hint: "The wrapper adds '!' to the result of func() = 'Hello'.",
  },
  {
    id: "py36-ex2", type: "exercise", title: "Decorator Order",
    description: "Which decorator runs first on call?",
    instructions: ["Bottom decorator wraps first, top runs first on call", "Trace the output"],
    code: "def a(func):\n    def wrap():\n        return \"<a>\" + func() + \"</a>\"\n    return wrap\n\ndef b(func):\n    def wrap():\n        return \"<b>\" + func() + \"</b>\"\n    return wrap\n\n@a\n@b\ndef text():\n    return \"hi\"\n\nprint(text())",
    correctOutput: "<a><b>hi</b></a>",
    hint: "@a wraps @b wraps text. On call: a's wrapper calls b's wrapper calls text.",
  },
  {
    id: "py36-ex3", type: "exercise", title: "Decorator with Args",
    description: "What does this decorator do to a function with arguments?",
    instructions: ["The wrapper receives args and forwards them", "Trace the output"],
    code: "def add_exclaim(func):\n    def wrapper(*args):\n        return func(*args) + \"!\"\n    return wrapper\n\n@add_exclaim\ndef join(a, b):\n    return a + b\n\nprint(join(\"Hi\", \" there\"))",
    correctOutput: "Hi there!",
    hint: "join('Hi', ' there') returns 'Hi there', then wrapper adds '!'.",
  },
  {
    id: "py36-ex4", type: "exercise", title: "Before and After",
    description: "A decorator that adds behavior before and after.",
    instructions: ["The decorator prints before and after calling func", "Trace the output lines in order"],
    code: "def surround(func):\n    def wrapper():\n        print(\"---\")\n        func()\n        print(\"---\")\n    return wrapper\n\n@surround\ndef msg():\n    print(\"Hello\")\n\nmsg()",
    correctOutput: "---\nHello\n---",
    hint: "Wrapper prints ---, then calls the function, then prints --- again.",
  },
  {
    id: "py36-ex5", type: "exercise", title: "Decorator @ syntax",
    description: "@decorator is short for what?",
    instructions: ["Understand the equivalence", "Call the equivalent manual version"],
    code: "def cap(func):\n    def wrapper(*args):\n        return func(*args).upper()\n    return wrapper\n\ndef greet():\n    return \"hi\"\n\ngreet = cap(greet)\nprint(greet())",
    correctOutput: "HI",
    hint: "@cap def greet(): ... is equivalent to greet = cap(greet).",
  },
  {
    id: "py36-ex6", type: "exercise", title: "Decorator Return Value",
    description: "The wrapper must return the function's result.",
    instructions: ["What happens if wrapper doesn't return?", "Trace this code"],
    code: "def bad_decorator(func):\n    def wrapper():\n        func()\n    return wrapper\n\n@bad_decorator\ndef give():\n    return 42\n\nprint(give())",
    correctOutput: "None",
    hint: "wrapper() calls func() but doesn't return its result. So give() returns None.",
  },
  {
    id: "py36-ex7", type: "exercise", title: "Multiple Args to Decorator",
    description: "The wrapper must handle any number of arguments.",
    instructions: ["*args captures all positional args", "Trace the sum"],
    code: "def log_call(func):\n    def wrapper(*args):\n        print(f\"Called with {args}\")\n        return func(*args)\n    return wrapper\n\n@log_call\ndef add(a, b, c):\n    return a + b + c\n\nresult = add(1, 2, 3)\nprint(result)",
    correctOutput: "Called with (1, 2, 3)\n6",
    hint: "log_call prints the args tuple, then calls add(1,2,3) = 6.",
  },
  {
    id: "py36-ex8", type: "exercise", title: "Decorator Without @",
    description: "Apply a decorator manually without @ syntax.",
    instructions: ["Define a decorator and apply it without @", "Use the decorated function"],
    code: "def twice(func):\n    def wrapper():\n        func()\n        func()\n    return wrapper\n\ndef say():\n    print(\"Hello\")\n\nsay = twice(say)\nsay()",
    correctOutput: "Hello\nHello",
    hint: "say = twice(say) replaces say with wrapper that calls the original say twice.",
  },
  {
    id: "py36-ex9", type: "exercise", title: "Null Decorator",
    description: "What does a decorator that does nothing look like?",
    instructions: ["The wrapper just calls func and returns", "The result should be unchanged"],
    code: "def null(func):\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper\n\n@null\ndef echo(x):\n    return x\n\nprint(echo(42))",
    correctOutput: "42",
    hint: "The null decorator passes through everything unchanged.",
  },
  {
    id: "py36-ex10", type: "exercise", title: "Changing Behavior",
    description: "A decorator that transforms function output.",
    instructions: ["Reverse the string return value", "Trace the result"],
    code: "def reverse_str(func):\n    def wrapper(*args):\n        return func(*args)[::-1]\n    return wrapper\n\n@reverse_str\ndef get_name():\n    return \"Python\"\n\nprint(get_name())",
    correctOutput: "nohtyP",
    hint: "get_name() returns 'Python', then wrapper reverses it with [::-1] → 'nohtyP'.",
  },
];

const ch36Exam: ExamQuestion[] = [
  { id: "py36-q1", type: "multiple-choice", difficulty: "easy", question: "What does the @ symbol do in Python?", options: [{ id: "a", text: "Creates a lambda" }, { id: "b", text: "Applies a decorator" }, { id: "c", text: "Imports a module" }, { id: "d", text: "Defines a class" }], correctAnswer: "b", explanation: "@decorator is syntactic sugar for func = decorator(func)." },
  { id: "py36-q2", type: "true-false", difficulty: "easy", question: "A decorator must be applied using the @ syntax; there's no other way.", correctAnswer: false, explanation: "The @ syntax is convenience. You can also do func = decorator(func) manually." },
  { id: "py36-q3", type: "fill-blank", difficulty: "easy", question: "A decorator is a function that takes a function and ___ a function.", correctAnswer: "returns", acceptableAnswers: ["returns"], explanation: "A decorator takes a function as argument and returns a (usually new) function." },
  { id: "py36-q4", type: "multiple-choice", difficulty: "medium", question: "When stacking decorators @A and @B, which runs first when the decorated function is called?", options: [{ id: "a", text: "@A runs first" }, { id: "b", text: "@B runs first" }, { id: "c", text: "They run simultaneously" }, { id: "d", text: "Neither" }], correctAnswer: "a", explanation: "@A is on top and wraps @B, so @A's wrapper runs first (outermost), then calls @B's wrapper." },
  { id: "py36-q5", type: "code-order", difficulty: "medium", question: "Arrange a decorator that adds '---' before and after the function.", codeLines: ['def border(func):', '    def wrapper():', '        print(\"---\")', '        func()', '        print(\"---\")', '    return wrapper'], correctOrder: [0, 1, 2, 3, 4, 5], explanation: "Define decorator, create wrapper, print ---, call func, print --- again, return wrapper." },
  { id: "py36-q6", type: "match-pairs", difficulty: "medium", question: "Match each decorator component to its role.", leftItems: ["Decorator function", "Wrapper function", "Original function", "@ syntax"], rightItems: ["Takes func and returns wrapper", "Adds behavior, calls original", "Contains business logic", "Shortcut for decoration"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "Decorator receives func, wrapper extends it, original has logic, @ is sugar." },
  { id: "py36-q7", type: "true-false", difficulty: "medium", question: "Decorators can only be applied to functions, not methods.", correctAnswer: false, explanation: "Decorators work with any callable including methods, classes, and even other decorators (decorator factories)." },
  { id: "py36-q8", type: "fill-blank", difficulty: "medium", question: "To make a decorator work with any function, the wrapper should accept ___.", correctAnswer: "*args, **kwargs", acceptableAnswers: ["*args and **kwargs", "*args, **kwargs"], explanation: "*args, **kwargs captures any positional and keyword arguments." },
  { id: "py36-q9", type: "multiple-choice", difficulty: "hard", question: "What does `functools.wraps` do for decorators?", options: [{ id: "a", text: "Makes the decorator faster" }, { id: "b", text: "Preserves original function metadata" }, { id: "c", text: "Adds error handling" }, { id: "d", text: "Removes the wrapper" }], correctAnswer: "b", explanation: "functools.wraps copies __name__, __doc__, and other metadata from the original function to the wrapper." },
  { id: "py36-q10", type: "code-order", difficulty: "hard", question: "Arrange a decorator that converts the return value to uppercase.", codeLines: ['def uppercase(func):', '    def wrapper(*args, **kwargs):', '        result = func(*args, **kwargs)', '        return result.upper()', '    return wrapper'], correctOrder: [0, 1, 2, 3, 4], explanation: "Define decorator, wrapper, call func, uppercase result, return wrapper." },
];

const ch36: Chapter = {
  id: "python-ch36", courseId: "python", title: "Decorators (Basics)", order: 36,
  sections: ch36Sections, examPool: ch36Exam, xpReward: 220, estimatedMinutes: 40,
  prerequisites: ["python-ch35"],
  keyPoints: [
    "A decorator is a function taking a function and returning a (usually new) function",
    "@decorator is syntactic sugar for func = decorator(func)",
    "Use *args, **kwargs in wrappers for decorators to work with any function",
    "Stack decorators @A @B — A wraps B, outermost runs first on call",
    "Always return the result of the original function from the wrapper",
    "Decorators cleanly separate cross-cutting concerns from business logic",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 37 – Decorators (Advanced)
// Topics: Decorator factories, class decorators, decorating classes, @wraps
// ───────────────────────────────────────────────────────────────────
const ch37Sections: Section[] = [
  {
    type: "text",
    content:
      "## Advanced Decorator Patterns\n\nBeyond simple function decorators, Python supports **decorator factories** (decorators that take arguments), **class decorators**, and **decorating entire classes**. These patterns enable powerful metaprogramming.\n\n## Decorator Factories\n\nA **decorator factory** is a function that returns a decorator. This lets you pass arguments to customize the decorator's behavior.\n\n```python\ndef repeat(n):\n    \"\"\"Decorator factory: run the function n times.\"\"\"\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef say_hello():\n    print(\"Hello!\")\n\nsay_hello()\n# Hello!\n# Hello!\n# Hello!\n```\n\nThe triple nesting (`repeat` → `decorator` → `wrapper`) is the standard pattern.",
  },
  {
    type: "code",
    language: "python",
    caption: "Factory pattern — @repeat(3) = @(repeat(3)) — decorator created with n=3:",
    content:
      "def tag(tag_name):\n    \"\"\"Decorator factory: wrap function output in an HTML tag.\"\"\"\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            return f\"<{tag_name}>{func(*args, **kwargs)}</{tag_name}>\"\n        return wrapper\n    return decorator\n\n@tag(\"p\")\ndef get_text():\n    return \"Hello\"\n\n@tag(\"h1\")\n@tag(\"i\")\ndef get_title():\n    return \"Big News\"\n\nprint(get_text())    # \"<p>Hello</p>\"\nprint(get_title())   # \"<h1><i>Big News</i></h1>\"",
  },
  {
    type: "callout",
    style: "info",
    content:
      "**@functools.wraps — Fixing Lost Metadata**\n\nEvery time you write a decorator, use `@functools.wraps` on the wrapper. It copies `__name__`, `__doc__`, `__module__`, and `__annotations__` from the original function to the wrapper, which is critical for debugging, documentation, and other decorators that inspect function metadata.",
  },
  {
    type: "code",
    language: "python",
    caption: "Using @functools.wraps correctly in every decorator:",
    content:
      "from functools import wraps\n\ndef logged(func):\n    @wraps(func)  # ← preserves func's metadata\n    def wrapper(*args, **kwargs):\n        print(f\"Calling {func.__name__}\")\n        return func(*args, **kwargs)\n    return wrapper\n\n@logged\ndef add(x, y):\n    \"\"\"Add two numbers.\"\"\"\n    return x + y\n\nprint(add.__name__)  # \"add\"  (not \"wrapper\")\nprint(add.__doc__)   # \"Add two numbers.\" (not None)\n\n# Without @wraps, these would show \"wrapper\" and None",
  },
  {
    type: "text",
    content:
      "## Class Decorators\n\nYou can apply decorators to entire classes, not just methods. Class decorators are commonly used for registering classes, adding methods, or injecting behavior.\n\n```python\ndef add_repr(cls):\n    \"\"\"Add a __repr__ method to a class.\"\"\"\n    def __repr__(self):\n        attrs = ', '.join(f'{k}={v!r}' for k, v in self.__dict__.items())\n        return f'{cls.__name__}({attrs})'\n    cls.__repr__ = __repr__\n    return cls\n\n@add_repr\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\np = Point(3, 4)\nprint(p)  # Point(x=3, y=4)\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Practical — a rate-limiting decorator factory:",
    content:
      "import time\nfrom functools import wraps\n\ndef rate_limit(max_calls, period=1.0):\n    \"\"\"Limit function to max_calls per period seconds.\"\"\"\n    def decorator(func):\n        calls = []\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            now = time.time()\n            while calls and calls[0] < now - period:\n                calls.pop(0)\n            if len(calls) >= max_calls:\n                raise RuntimeError(f\"Rate limit: {max_calls} calls per {period}s exceeded\")\n            calls.append(now)\n            return func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@rate_limit(max_calls=2, period=5)\ndef api_call():\n    return \"Data fetched\"\n\nprint(api_call())  # Works\nprint(api_call())  # Works\n# print(api_call())  # RuntimeError!",
  },
  {
    type: "comparison",
    title: "Simple vs Parameterized Decorators",
    headers: ["Aspect", "Simple Decorator", "Parameterized Decorator (Factory)"],
    rows: [
      ["Definition", "def dec(func):\\n    def w(): ...\\n    return w", "def dec_factory(args):\\n    def dec(func):\\n        def w(): ...\\n        return w\\n    return dec"],
      ["Usage", "@dec", "@dec_factory(args)"],
      ["Arguments", "Only the function", "Factory arguments + function"],
      ["Nesting level", "2 functions (dec, wrapper)", "3 functions (factory, dec, wrapper)"],
      ["Use case", "Fixed behavior (logging, timing)", "Configurable behavior (retry, auth)"],
    ],
  },
  {
    type: "text",
    content:
      "## Real-World Decorator Use Cases\n\n- **@property** — Makes a method look like an attribute (built-in)\n- **@classmethod** / **@staticmethod** — Alternative method types (built-in)\n- **@functools.lru_cache** — Memoization/caching (stdlib)\n- **@dataclass** — Auto-generates __init__, __repr__, __eq__ (stdlib)\n- **Flask @app.route()** — Registers URL routes\n- **@pytest.fixture** — Marks test fixtures\n- **@click.command()** / **@click.option()** — CLI argument definitions\n- **@login_required** — Authentication checks in web frameworks\n\nMost of these are decorator factories, not simple decorators — they receive configuration and return a decorator.",
  },
  {
    type: "code",
    language: "python",
    caption: "Complete example — a retry decorator with exponential backoff:",
    content:
      "import time\nimport random\nfrom functools import wraps\n\ndef retry(max_attempts=3, delay=1.0, backoff=2.0):\n    \"\"\"Retry a function on failure with exponential backoff.\"\"\"\n    def decorator(func):\n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            last_error = None\n            for attempt in range(1, max_attempts + 1):\n                try:\n                    return func(*args, **kwargs)\n                except Exception as e:\n                    last_error = e\n                    if attempt < max_attempts:\n                        wait = delay * (backoff ** (attempt - 1))\n                        print(f\"Attempt {attempt} failed. Retrying in {wait:.1f}s...\")\n                        time.sleep(wait)\n            raise last_error\n        return wrapper\n    return decorator\n\n@retry(max_attempts=3, delay=0.5, backoff=2.0)\ndef unstable_network_call():\n    if random.random() < 0.7:\n        raise ConnectionError(\"Network timeout\")\n    return \"Success!\"",
  },
  {
    type: "key-points",
    points: [
      "Decorator factories are functions that return a decorator — enables parameterization",
      "Factory pattern: outer function takes args → inner decorator takes func → innermost wrapper adds behavior",
      "Always use @functools.wraps on wrapper functions to preserve original metadata",
      "Class decorators can modify or register classes; they receive the class and return a (possibly modified) class",
      "Common in web frameworks (Flask, Django), testing (pytest), CLI tools (click), and caching",
      "Real-world decorators often combine factories, @wraps, and sophisticated logic",
    ],
  },
];

const ch37Exercises: ExerciseSection[] = [
  {
    id: "py37-ex1", type: "exercise", title: "Decorator Factory",
    description: "What does this decorator factory do?",
    instructions: ["The factory takes an argument and returns a decorator", "Trace the output"],
    code: "def prefix(text):\n    def decorator(func):\n        def wrapper():\n            return text + func()\n        return wrapper\n    return decorator\n\n@prefix(\">> \")\ndef get_msg():\n    return \"hi\"\n\nprint(get_msg())",
    correctOutput: ">> hi",
    hint: "The factory creates a decorator that prepends '>> ' to the function's return.",
  },
  {
    id: "py37-ex2", type: "exercise", title: "@wraps preserves name",
    description: "What does __name__ show with @wraps?",
    instructions: ["@wraps copies metadata from func to wrapper", "Type the output"],
    code: "from functools import wraps\n\ndef my_decorator(func):\n    @wraps(func)\n    def wrapper():\n        return func()\n    return wrapper\n\n@my_decorator\ndef hello():\n    \"\"\"Says hello\"\"\"\n    return \"hi\"\n\nprint(hello.__name__)",
    correctOutput: "hello",
    hint: "Without @wraps, this would show 'wrapper'. With @wraps, it shows 'hello'.",
  },
  {
    id: "py37-ex3", type: "exercise", title: "Factory with Multiple Args",
    description: "A factory that takes multiple configuration args.",
    instructions: ["The decorator uses these args to customize behavior", "Trace the output"],
    code: "def surround(before, after):\n    def decorator(func):\n        def wrapper():\n            return before + func() + after\n        return wrapper\n    return decorator\n\n@surround(\"[\", \"]\")\ndef get_name():\n    return \"Python\"\n\nprint(get_name())",
    correctOutput: "[Python]",
    hint: "before='[', after=']'. Wraps 'Python' → '[Python]'.",
  },
  {
    id: "py37-ex4", type: "exercise", title: "Class Decorator",
    description: "What does a class decorator do?",
    instructions: ["The decorator receives a class and adds an attribute", "Access the added attribute"],
    code: "def add_attr(cls):\n    cls.category = \"utility\"\n    return cls\n\n@add_attr\nclass Tool:\n    pass\n\nprint(Tool.category)",
    correctOutput: "utility",
    hint: "The class decorator adds category='utility' to the Tool class.",
  },
  {
    id: "py37-ex5", type: "exercise", title: "@wraps preserves docstring",
    description: "What does __doc__ return with @wraps?",
    instructions: ["The original function has a docstring", "@wraps preserves it"],
    code: "from functools import wraps\n\ndef decor(func):\n    @wraps(func)\n    def wrapper():\n        return func()\n    return wrapper\n\n@decor\ndef example():\n    \"\"\"This is an example.\"\"\"\n    return 42\n\nprint(example.__doc__)",
    correctOutput: "This is an example.",
    hint: "Without @wraps, __doc__ would be None. With it, it's preserved.",
  },
  {
    id: "py37-ex6", type: "exercise", title: "Factory Calling Convention",
    description: "@factory(args) is equivalent to what?",
    instructions: ["@factory(args) calls factory(args) first", "Then that result decorates the function"],
    code: "def make_decorator(value):\n    print(f\"Factory called with {value}\")\n    def decorator(func):\n        print(f\"Decorator called\")\n        def wrapper():\n            return func()\n        return wrapper\n    return decorator\n\n@make_decorator(5)\ndef test():\n    return \"done\"\n\nprint(test())",
    correctOutput: "Factory called with 5\nDecorator called\ndone",
    hint: "make_decorator(5) is called first, returns decorator which is called, then wrapper returns 'done'.",
  },
  {
    id: "py37-ex7", type: "exercise", title: "Factory Returning Decorator",
    description: "A decorator factory that transforms numeric output.",
    instructions: ["The factory multiplies the result by n", "Trace the output"],
    code: "def multiply(n):\n    def decorator(func):\n        def wrapper(*args):\n            return n * func(*args)\n        return wrapper\n    return decorator\n\n@multiply(3)\ndef get_num():\n    return 10\n\nprint(get_num())",
    correctOutput: "30",
    hint: "get_num() returns 10. multiply(3)'s wrapper multiplies by 3: 30.",
  },
  {
    id: "py37-ex8", type: "exercise", title: "Default Arguments in Factory",
    description: "A factory with default arguments.",
    instructions: ["Default values make the factory flexible", "The decorator is created with defaults"],
    code: "def tag(name=\"div\"):\n    def decorator(func):\n        def wrapper():\n            return f\"<{name}>{func()}</{name}>\"\n        return wrapper\n    return decorator\n\n@tag()\ndef content():\n    return \"text\"\n\nprint(content())",
    correctOutput: "<div>text</div>",
    hint: "tag() uses the default name='div'.",
  },
  {
    id: "py37-ex9", type: "exercise", title: "Manual Factory Application",
    description: "Apply a decorator factory manually.",
    instructions: ["Create decorator by calling factory, then apply to function", "Call the result"],
    code: "def bold(func):\n    def wrapper():\n        return \"<b>\" + func() + \"</b>\"\n    return wrapper\n\ndef greet():\n    return \"Hello\"\n\nnew_greet = bold(greet)\nprint(new_greet())",
    correctOutput: "<b>Hello</b>",
    hint: "Manual application: new_greet = bold(greet).",
  },
  {
    id: "py37-ex10", type: "exercise", title: "Stacking Factories",
    description: "Multiple factory decorators stacked.",
    instructions: ["Each factory wraps behavior around the function", "Trace from bottom up"],
    code: "def wrap(before, after):\n    def dec(func):\n        def wrapper():\n            return before + func() + after\n        return wrapper\n    return dec\n\n@wrap(\"[\", \"]\")\n@wrap(\"(\", \")\")\ndef text():\n    return \"x\"\n\nprint(text())",
    correctOutput: "[(x)]",
    hint: "Bottom: text()→'x', then wrap('(',')'): '(x)', then wrap('[',']'): '[(x)]'.",
  },
];

const ch37Exam: ExamQuestion[] = [
  { id: "py37-q1", type: "multiple-choice", difficulty: "easy", question: "How many nested functions does a parameterized decorator factory typically need?", options: [{ id: "a", text: "1" }, { id: "b", text: "2" }, { id: "c", text: "3" }, { id: "d", text: "4" }], correctAnswer: "c", explanation: "Factory: outer (args) → decorator (func) → wrapper (*args, **kwargs). Three levels." },
  { id: "py37-q2", type: "true-false", difficulty: "easy", question: "@functools.wraps is recommended for every decorator.", correctAnswer: true, explanation: "functools.wraps copies __name__, __doc__, and other metadata from the original function to the wrapper." },
  { id: "py37-q3", type: "fill-blank", difficulty: "easy", question: "A decorator factory is a function that returns a ___.", correctAnswer: "decorator", acceptableAnswers: ["decorator"], explanation: "The factory's job is to create and return a decorator customized with the factory's arguments." },
  { id: "py37-q4", type: "multiple-choice", difficulty: "medium", question: "What does functools.wraps copy from the original function?", options: [{ id: "a", text: "Only __name__" }, { id: "b", text: "Only __doc__" }, { id: "c", text: "__name__, __doc__, __module__, __annotations__" }, { id: "d", text: "Nothing" }], correctAnswer: "c", explanation: "functools.wraps copies several metadata attributes from the original function." },
  { id: "py37-q5", type: "code-order", difficulty: "medium", question: "Arrange a decorator factory that repeats output n times.", codeLines: ['def repeat(n):', '    def decorator(func):', '        def wrapper(*args, **kwargs):', '            return \"\\n\".join(func(*args, **kwargs) for _ in range(n))', '        return wrapper', '    return decorator'], correctOrder: [0, 1, 2, 3, 4, 5], explanation: "Factory (n) → decorator (func) → wrapper (*args) with join." },
  { id: "py37-q6", type: "match-pairs", difficulty: "medium", question: "Match each level of a decorator factory.", leftItems: ["Outer function", "Middle function", "Inner function", "@factory(args)"], rightItems: ["Receives factory arguments", "Receives decorated function", "Receives call arguments", "Calls factory, returns decorator, applies it"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "Outer gets args, middle gets func, inner gets call args, @ does the wiring." },
  { id: "py37-q7", type: "true-false", difficulty: "medium", question: "Class decorators must return a new class; they cannot modify the existing class.", correctAnswer: false, explanation: "Class decorators can modify the existing class in place and return it, or return an entirely new class." },
  { id: "py37-q8", type: "fill-blank", difficulty: "hard", question: "The decorator that preserves function metadata is called ___.", correctAnswer: "functools.wraps", acceptableAnswers: ["@functools.wraps", "wraps", "@wraps"], explanation: "Apply @functools.wraps(func) to the wrapper inside your decorator." },
  { id: "py37-q9", type: "multiple-choice", difficulty: "hard", question: "What's the output of `@tag('p') @tag('b') def f(): return 'hi'` given a proper tag factory?", options: [{ id: "a", text: "'<p><b>hi</b></p>'" }, { id: "b", text: "'<b><p>hi</p></b>'" }, { id: "c", text: "'<p>hi</p>'" }, { id: "d", text: "'hi'" }], correctAnswer: "a", explanation: "Bottom-up: f is wrapped by @tag('b') first, then @tag('p') wraps the result: '<p><b>hi</b></p>'." },
  { id: "py37-q10", type: "code-order", difficulty: "hard", question: "Arrange a class decorator that adds a __str__ method.", codeLines: ['def add_str(cls):', '    def __str__(self):', '        return f\"{cls.__name__}: {self.__dict__}\"', '    cls.__str__ = __str__', '    return cls'], correctOrder: [0, 1, 2, 3, 4], explanation: "Define class decorator, define __str__, attach to class, return class." },
];

const ch37: Chapter = {
  id: "python-ch37", courseId: "python", title: "Decorators (Advanced)", order: 37,
  sections: ch37Sections, examPool: ch37Exam, xpReward: 225, estimatedMinutes: 45,
  prerequisites: ["python-ch36"],
  keyPoints: [
    "Decorator factories are functions that return a decorator — enables parameterization",
    "Factory pattern: outer args → middle func → inner wrapper",
    "Always use @functools.wraps on wrapper functions to preserve original metadata",
    "Class decorators can modify or register classes",
    "Common in web frameworks, testing, CLI tools, and caching",
    "Stacking decorators with factories: applied bottom-up, executed top-down on call",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 38 – Context Managers
// Topics: with statement, __enter__/__exit__, contextlib, contextmanager
// ───────────────────────────────────────────────────────────────────
const ch38Sections: Section[] = [
  {
    type: "text",
    content:
      "## Context Managers\n\nA **context manager** is a Python construct that simplifies resource management — opening files, acquiring locks, connecting to databases — by ensuring that setup and teardown happen automatically. You've already used context managers with the `with` statement:\n\n```python\nwith open(\"file.txt\", \"r\") as f:\n    content = f.read()\n# File is automatically closed, even if an error occurs\n```\n\nContext managers guarantee that cleanup code runs, making them superior to try/finally blocks for resource management.",
  },
  {
    type: "code",
    language: "python",
    caption: "The with statement — your first context manager (file I/O):",
    content:
      "# Traditional approach — manual cleanup\nf = open(\"example.txt\", \"w\")\ntry:\n    f.write(\"Hello\")\nfinally:\n    f.close()  # Must close manually\n\n# Context manager approach — automatic cleanup\nwith open(\"example.txt\", \"w\") as f:\n    f.write(\"Hello\")\n# f.close() is called automatically when leaving the with block",
  },
  {
    type: "text",
    content:
      "## Creating a Context Manager: Class Approach\n\nTo create your own context manager, define a class with `__enter__` and `__exit__` methods. `__enter__` runs when entering the `with` block and returns the resource. `__exit__` runs when leaving and handles cleanup.\n\n```python\nclass ManagedFile:\n    def __init__(self, filename, mode):\n        self.filename = filename\n        self.mode = mode\n\n    def __enter__(self):\n        print(f\"Opening {self.filename}\")\n        self.file = open(self.filename, self.mode)\n        return self.file  # This is what 'as f' receives\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(f\"Closing {self.filename}\")\n        self.file.close()\n        # Return False to propagate exceptions, True to suppress them\n        return False\n\nwith ManagedFile(\"test.txt\", \"w\") as f:\n    f.write(\"Hello!\")\n# Output: Opening test.txt\n#         Closing test.txt\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Custom context manager — a timer that measures block execution:",
    content:
      "import time\n\nclass Timer:\n    def __enter__(self):\n        self.start = time.perf_counter()\n        return self  # Returning self gives access to elapsed after the block\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.elapsed = time.perf_counter() - self.start\n        print(f\"Block took {self.elapsed:.4f}s\")\n        return False\n\n# Usage\nwith Timer() as t:\n    time.sleep(0.5)\n    total = sum(range(1000000))\n\n# Block took 0.6234s\n# We can also access t.elapsed after the block",
  },
  {
    type: "callout",
    style: "tip",
    content:
      "**The `__exit__` parameters:** `exc_type` is the exception class (e.g., `ValueError`), `exc_val` is the exception instance, and `exc_tb` is the traceback. If no exception occurred, all three are `None`. Return `True` from `__exit__` to suppress an exception; return `False` or `None` to let it propagate.",
  },
  {
    type: "text",
    content:
      "## Creating a Context Manager: `@contextmanager` Decorator\n\nThe `@contextmanager` decorator from the `contextlib` module lets you create context managers using generator functions — much less boilerplate than the class approach.\n\n```python\nfrom contextlib import contextmanager\n\n@contextmanager\ndef managed_file(filename, mode):\n    print(f\"Opening {filename}\")\n    f = open(filename, mode)\n    try:\n        yield f  # This is what 'as f' receives\n    finally:\n        print(f\"Closing {filename}\")\n        f.close()\n\nwith managed_file(\"test.txt\", \"w\") as f:\n    f.write(\"Hello!\")\n```\n\nThe code before `yield` is `__enter__`. The code after `yield` (in the `finally`) is `__exit__`. If an exception occurs in the `with` block, it's raised inside the generator at the `yield` point.",
  },
  {
    type: "code",
    language: "python",
    caption: "Practical contexts with @contextmanager — database transactions, redirects:",
    content:
      "from contextlib import contextmanager\nimport sys\nimport io\n\n@contextmanager\ndef redirect_output(filepath):\n    \"\"\"Redirect stdout to a file within the context.\"\"\"\n    old_stdout = sys.stdout\n    sys.stdout = open(filepath, \"w\")\n    try:\n        yield\n    finally:\n        sys.stdout.close()\n        sys.stdout = old_stdout\n\n# Usage\nwith redirect_output(\"output.txt\"):\n    print(\"This goes to the file, not the console\")\nprint(\"This goes back to the console\")",
  },
  {
    type: "text",
    content:
      "## `contextlib.suppress` — Suppressing Specific Exceptions\n\nPython 3.4+ includes `contextlib.suppress`, a context manager that suppresses specific exceptions — cleaner than a bare `except: pass`.\n\n```python\nfrom contextlib import suppress\n\n# Instead of:\ntry:\n    os.remove(\"file.txt\")\nexcept FileNotFoundError:\n    pass\n\n# Use suppress:\nwith suppress(FileNotFoundError):\n    os.remove(\"file.txt\")\n\n# Multiple exception types\nwith suppress(FileNotFoundError, PermissionError):\n    os.remove(\"file.txt\")\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Nested and chained context managers:",
    content:
      "# Nested contexts — each level manages its own resource\nwith open(\"input.txt\", \"r\") as infile:\n    with open(\"output.txt\", \"w\") as outfile:\n        outfile.write(infile.read().upper())\n\n# Chained contexts (Python 3.10+ with parenthesized context managers)\n# or comma-separated in Python 3+\nwith open(\"input.txt\", \"r\") as infile, open(\"output.txt\", \"w\") as outfile:\n    outfile.write(infile.read().upper())\n\n# contextlib.ExitStack — dynamic number of context managers\nfrom contextlib import ExitStack\n\nfilenames = [\"file1.txt\", \"file2.txt\", \"file3.txt\"]\nwith ExitStack() as stack:\n    files = [stack.enter_context(open(f, \"r\")) for f in filenames]\n    # All files are closed when exiting the with block",
  },
  {
    type: "comparison",
    title: "Class vs @contextmanager Approach",
    headers: ["Aspect", "Class (__enter__/__exit__)", "@contextmanager Decorator"],
    rows: [
      ["Boilerplate", "More — two methods required", "Less — single generator function"],
      ["Readability", "Clearer for complex contexts", "More concise for simple contexts"],
      ["Exception handling", "Full control via return True/False", "Use try/except inside generator"],
      ["Reusable context", "Yes — can be instantiated and reused", "Generator is single-use"],
      ["Async support", "Use __aenter__/__aexit__", "Use @asynccontextmanager"],
    ],
  },
  {
    type: "code",
    language: "python",
    caption: "contextlib.redirect_stdout / redirect_stderr — built-in context managers:",
    content:
      "from contextlib import redirect_stdout, redirect_stderr\nimport io\n\n# Capture printed output into a string\nf = io.StringIO()\nwith redirect_stdout(f):\n    print(\"This is captured\")\n    print(\"This too\")\n\noutput = f.getvalue()\nprint(output)  # \"This is captured\\nThis too\\n\"",
  },
  {
    type: "key-points",
    points: [
      "Context managers automate resource setup and cleanup via the `with` statement",
      "Class-based: define `__enter__` and `__exit__` methods; `__exit__` receives exception info",
      "Generator-based: use `@contextmanager` decorator with yield separating setup from teardown",
      "Return True from `__exit__` to suppress exceptions; False to propagate them",
      "Chain contexts: `with A() as a, B() as b:` or use `ExitStack` for dynamic managers",
      "contextlib.suppress is cleaner than bare except:pass for expected exceptions",
    ],
  },
];

const ch38Exercises: ExerciseSection[] = [
  {
    id: "py38-ex1", type: "exercise", title: "Basic with Statement",
    description: "What does the with statement do with files?",
    instructions: ["The with block automatically closes the file", "What prints?"],
    code: "class MyContext:\n    def __enter__(self):\n        print(\"Enter\")\n        return 42\n    def __exit__(self, *args):\n        print(\"Exit\")\n\nwith MyContext() as x:\n    print(x)",
    correctOutput: "Enter\n42\nExit",
    hint: "__enter__ prints 'Enter' and returns 42. Then the block prints 42. Then __exit__ prints 'Exit'.",
  },
  {
    id: "py38-ex2", type: "exercise", title: "__enter__ Return Value",
    description: "What value does 'as' get from __enter__?",
    instructions: ["__enter__ returns a value that becomes the 'as' target", "Type the output"],
    code: "class Greeter:\n    def __enter__(self):\n        return \"Hello!\"\n    def __exit__(self, *args):\n        pass\n\nwith Greeter() as g:\n    print(g)",
    correctOutput: "Hello!",
    hint: "__enter__ returns 'Hello!', so g = 'Hello!'.",
  },
  {
    id: "py38-ex3", type: "exercise", title: "Exception Propagation",
    description: "What happens when __exit__ returns True?",
    instructions: ["Returning True suppresses exceptions", "The error is silently swallowed"],
    code: "class Suppressor:\n    def __enter__(self):\n        return self\n    def __exit__(self, *args):\n        return True\n\nwith Suppressor():\n    raise ValueError(\"oops\")\nprint(\"Still running\")",
    correctOutput: "Still running",
    hint: "__exit__ returns True, so the raised ValueError is suppressed.",
  },
  {
    id: "py38-ex4", type: "exercise", title: "@contextmanager",
    description: "What does the @contextmanager decorator version do?",
    instructions: ["The yield separates setup from teardown", "Trace the output"],
    code: "from contextlib import contextmanager\n\n@contextmanager\ndef simple():\n    print(\"Setup\")\n    yield \"resource\"\n    print(\"Cleanup\")\n\nwith simple() as r:\n    print(r)",
    correctOutput: "Setup\nresource\nCleanup",
    hint: "Setup before yield, the yielded value becomes r, cleanup after yield runs at block exit.",
  },
  {
    id: "py38-ex5", type: "exercise", title: "Exception in Context",
    description: "What happens when an exception occurs inside the with block?",
    instructions: ["The exception propagates to __exit__", "If __exit__ returns False, the exception continues"],
    code: "class ShowError:\n    def __enter__(self):\n        return self\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print(f\"Got: {exc_type.__name__}\")\n        return False\n\nwith ShowError():\n    raise ValueError(\"bad\")",
    correctOutput: "Got: ValueError",
    hint: "__exit__ receives the exception info and prints the exception type name.",
  },
  {
    id: "py38-ex6", type: "exercise", title: "contextlib.suppress",
    description: "What does suppress do?",
    instructions: ["suppress silences specific exceptions", "Only FileNotFoundError is suppressed here"],
    code: "from contextlib import suppress\nimport os\n\nwith suppress(FileNotFoundError):\n    os.remove(\"nonexistent.txt\")\n    print(\"Never reached\")\nprint(\"Done\")",
    correctOutput: "Done",
    hint: "FileNotFoundError is suppressed, so 'Done' is printed. The 'Never reached' line is after the error and not executed.",
  },
  {
    id: "py38-ex7", type: "exercise", title: "ExitStack",
    description: "ExitStack manages dynamic context managers.",
    instructions: ["enter_context adds a context manager to the stack", "All contexts are cleaned up on exit"],
    code: "from contextlib import ExitStack, contextmanager\n\n@contextmanager\ndef resource(name):\n    print(f\"Acquire {name}\")\n    yield name\n    print(f\"Release {name}\")\n\nwith ExitStack() as stack:\n    r1 = stack.enter_context(resource(\"A\"))\n    r2 = stack.enter_context(resource(\"B\"))\n    print(f\"Using {r1} and {r2}\")\nprint(\"Done\")",
    correctOutput: "Acquire A\nAcquire B\nUsing A and B\nRelease B\nRelease A\nDone",
    hint: "Resources are acquired in order, released in reverse order (stack-like).",
  },
  {
    id: "py38-ex8", type: "exercise", title: "File-like Context",
    description: "What happens if __exit__ doesn't close the resource?",
    instructions: ["Always clean up in __exit__", "This custom context prints cleanup messages"],
    code: "class Connection:\n    def __enter__(self):\n        print(\"Connecting...\")\n        return self\n    def __exit__(self, *args):\n        print(\"Disconnecting...\")\n\nwith Connection() as conn:\n    print(\"Using connection\")",
    correctOutput: "Connecting...\nUsing connection\nDisconnecting...",
    hint: "__enter__ connects, block uses connection, __exit__ disconnects.",
  },
  {
    id: "py38-ex9", type: "exercise", title: "Multiple with Statements",
    description: "Chained context managers with comma.",
    instructions: ["Two context managers in one with statement", "Trace the order"],
    code: "from contextlib import contextmanager\n\n@contextmanager\ndef ctx(name):\n    print(f\"Enter {name}\")\n    yield name\n    print(f\"Exit {name}\")\n\nwith ctx(\"A\") as a, ctx(\"B\") as b:\n    print(f\"In block: {a}, {b}\")",
    correctOutput: "Enter A\nEnter B\nIn block: A, B\nExit B\nExit A",
    hint: "Contexts are entered left-to-right, exited right-to-left.",
  },
  {
    id: "py38-ex10", type: "exercise", title: "Context Manager as Decorator",
    description: "@contextmanager can be used as a decorator too.",
    instructions: ["When used as a decorator, the generator runs before the function", "Each yield pauses and resumes"],
    code: "from contextlib import contextmanager\n\n@contextmanager\ndef tag(t):\n    print(f\"<{t}>\")\n    yield\n    print(f\"</{t}>\")\n\nwith tag(\"b\"):\n    print(\"bold text\")",
    correctOutput: "<b>\nbold text\n</b>",
    hint: "The context prints opening tag, the block runs, then the closing tag is printed.",
  },
];

const ch38Exam: ExamQuestion[] = [
  { id: "py38-q1", type: "multiple-choice", difficulty: "easy", question: "What keyword is used with context managers?", options: [{ id: "a", text: "using" }, { id: "b", text: "with" }, { id: "c", text: "context" }, { id: "d", text: "try" }], correctAnswer: "b", explanation: "The `with` statement is used with context managers." },
  { id: "py38-q2", type: "true-false", difficulty: "easy", question: "A context manager's __exit__ method always runs, even if an exception occurs.", correctAnswer: true, explanation: "__exit__ is guaranteed to run, making context managers reliable for resource cleanup." },
  { id: "py38-q3", type: "fill-blank", difficulty: "easy", question: "Context managers must implement __enter__ and ___.", correctAnswer: "__exit__", acceptableAnswers: ["__exit__", "exit"], explanation: "The two required methods are __enter__ and __exit__." },
  { id: "py38-q4", type: "multiple-choice", difficulty: "medium", question: "What happens if __exit__ returns True?", options: [{ id: "a", text: "The exception is re-raised" }, { id: "b", text: "The exception is suppressed" }, { id: "c", text: "The program crashes" }, { id: "d", text: "The with block re-executes" }], correctAnswer: "b", explanation: "Returning True from __exit__ suppresses any exception that occurred in the with block." },
  { id: "py38-q5", type: "code-order", difficulty: "medium", question: "Arrange a simple class-based context manager.", codeLines: ['class Simple:', '    def __enter__(self):', '        return 1', '    def __exit__(self, *args):', '        print(\"done\")'], correctOrder: [0, 1, 2, 3, 4], explanation: "Define class, __enter__, __exit__." },
  { id: "py38-q6", type: "match-pairs", difficulty: "medium", question: "Match each context manager component.", leftItems: ["__enter__", "__exit__", "as variable", "with statement"], rightItems: ["Acquires resource", "Releases resource", "Receives __enter__ return value", "Initiates the context"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "enter acquires, exit releases, as captures return, with initiates." },
  { id: "py38-q7", type: "true-false", difficulty: "medium", question: "The @contextmanager decorator is from the functools module.", correctAnswer: false, explanation: "It's from the contextlib module: from contextlib import contextmanager." },
  { id: "py38-q8", type: "fill-blank", difficulty: "hard", question: "The contextlib context manager for suppressing exceptions is called ___.", correctAnswer: "suppress", acceptableAnswers: ["suppress", "contextlib.suppress"], explanation: "from contextlib import suppress; with suppress(ValueError):" },
  { id: "py38-q9", type: "multiple-choice", difficulty: "hard", question: "What does ExitStack.enter_context() return?", options: [{ id: "a", text: "None" }, { id: "b", text: "The context manager itself" }, { id: "c", text: "The __enter__ return value" }, { id: "d", text: "A boolean" }], correctAnswer: "c", explanation: "enter_context() returns the result of __enter__(), just like 'as variable' does." },
  { id: "py38-q10", type: "code-order", difficulty: "hard", question: "Arrange a @contextmanager-based file reader.", codeLines: ['@contextmanager', 'def open_file(name):', '    f = open(name)', '    yield f', '    f.close()', 'from contextlib import contextmanager'], correctOrder: [5, 0, 1, 2, 3, 4], explanation: "Import, decorator, define, open, yield, close." },
];

const ch38: Chapter = {
  id: "python-ch38", courseId: "python", title: "Context Managers", order: 38,
  sections: ch38Sections, examPool: ch38Exam, xpReward: 220, estimatedMinutes: 40,
  prerequisites: ["python-ch37"],
  keyPoints: [
    "Context managers automate resource setup/cleanup using the with statement",
    "Class-based: __enter__ and __exit__ methods; __exit__ receives exception info",
    "Generator-based: @contextmanager decorator with yield separates setup from teardown",
    "Return True from __exit__ to suppress exceptions; False to propagate",
    "Chain with statements: with A() as a, B() as b:",
    "ExitStack enables dynamic management of multiple context managers",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 39 – functools Module
// Topics: wraps, partial, lru_cache, reduce, cmp_to_key, singledispatch
// ───────────────────────────────────────────────────────────────────
const ch39Sections: Section[] = [
  {
    type: "text",
    content:
      "## The `functools` Module\n\nThe `functools` module provides higher-order functions that operate on or return other functions. It's part of Python's standard library and contains utilities that make functional programming in Python more convenient.\n\nKey tools in `functools`:\n- `wraps` — Preserve function metadata in decorators\n- `partial` — Fix function arguments (partial application)\n- `lru_cache` — Memoization with caching\n- `reduce` — Cumulative reduction (covered in Ch. 32)\n- `cmp_to_key` — Convert old-style comparison to key function\n- `singledispatch` — Single-dispatch generic functions",
  },
  {
    type: "code",
    language: "python",
    caption: "functools.partial — fix some arguments of a function, creating a simpler callable:",
    content:
      "from functools import partial\n\ndef power(base, exponent):\n    return base ** exponent\n\n# Create specialized functions with partial\nsquare = partial(power, exponent=2)\ncube = partial(power, exponent=3)\n\nprint(square(5))  # 25\nprint(cube(5))    # 125\n\n# Real-world: fixing arguments for callbacks\ndef log_message(level, message):\n    print(f\"[{level}] {message}\")\n\ninfo = partial(log_message, \"INFO\")\nerror = partial(log_message, \"ERROR\")\n\ninfo(\"Server started\")    # [INFO] Server started\nerror(\"Disk full\")         # [ERROR] Disk full",
  },
  {
    type: "text",
    content:
      "## `functools.lru_cache` — Memoization\n\n`lru_cache` is a decorator that caches the results of expensive function calls. It stores the most recently used results up to a maximum size (hence LRU — Least Recently Used).\n\n```python\nfrom functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    \"\"\"Recursive Fibonacci with memoization.\"\"\"\n    if n < 2:\n        return n\n    return fibonacci(n - 1) + fibonacci(n - 2)\n\nprint(fibonacci(50))  # 12586269025 — computes instantly!\nprint(fibonacci.cache_info())  # CacheInfo(hits=48, misses=51, maxsize=128, currsize=51)\n```\n\nWithout `@lru_cache`, `fibonacci(50)` would take minutes. With caching, it's instant. Each computed value is stored and reused.",
  },
  {
    type: "code",
    language: "python",
    caption: "lru_cache in action — cache info, clearing, and the simpler @cache (Python 3.9+):",
    content:
      "from functools import lru_cache, cache\n\n# @cache is a shorthand for @lru_cache(maxsize=None)\n@cache\ndef expensive_function(n):\n    \"\"\"Simulate expensive computation.\"\"\"\n    print(f\"Computing {n}...\")\n    return n * n\n\nprint(expensive_function(4))  # Computing 4... → 16\nprint(expensive_function(4))  # 16 (cached, no \"Computing\" message)\nprint(expensive_function(5))  # Computing 5... → 25\n\n# Cache inspection\nprint(expensive_function.cache_info())  # CacheInfo(hits=1, misses=2, maxsize=None, currsize=2)\n\n# Clear the cache\nexpensive_function.cache_clear()\nprint(expensive_function(4))  # Computing 4... → 16 (computed again)",
  },
  {
    type: "callout",
    style: "warning",
    content:
      "**Cache limitations:** `lru_cache` works only with **hashable** arguments. Lists, dicts, and sets as arguments will raise `TypeError`. Convert mutable arguments to tuples/frozensets or use a custom cache key. Also, cached functions should be **pure** (same arguments → same result) — if the function depends on external state, caching will give stale results.",
  },
  {
    type: "comparison",
    title: "functools Utilities",
    headers: ["Function", "Purpose", "Use Case"],
    rows: [
      ["wraps", "Preserve metadata in decorators", "Every custom decorator"],
      ["partial", "Fix arguments to create specialized functions", "Callbacks, reducing arity"],
      ["lru_cache", "Memoize results (LRU eviction)", "Expensive pure functions"],
      ["cache", "Memoize without size limit (Python 3.9+)", "Same as lru_cache, unbounded"],
      ["reduce", "Cumulative reduction to single value", "Sum of products, max finding"],
      ["singledispatch", "Type-dispatch generic functions", "Overloading by type"],
    ],
  },
  {
    type: "text",
    content:
      "## `functools.singledispatch` — Generic Functions\n\n`singledispatch` transforms a function into a **generic function** — the implementation is chosen based on the type of the first argument. This provides a form of method overloading similar to what static languages offer.\n\n```python\nfrom functools import singledispatch\n\n@singledispatch\ndef process(data):\n    \"\"\"Default implementation — raise if type not handled.\"\"\"\n    raise NotImplementedError(f\"No handler for {type(data)}\")\n\n@process.register(str)\ndef _(data: str):\n    return f\"String: {data.upper()}\"\n\n@process.register(int)\ndef _(data: int):\n    return f\"Integer: {data * 2}\"\n\n@process.register(list)\ndef _(data: list):\n    return f\"List: {sum(data)}\"\n\nprint(process(\"hello\"))  # String: HELLO\nprint(process(42))        # Integer: 84\nprint(process([1, 2, 3])) # List: 6\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Practical — singledispatch for serialization:",
    content:
      "from functools import singledispatch\nimport json\n\n@singledispatch\ndef serialize(data):\n    \"\"\"Default serialization.\"\"\"\n    return str(data)\n\n@serialize.register(dict)\ndef _(data):\n    return json.dumps(data, indent=2)\n\n@serialize.register(list)\ndef _(data):\n    return json.dumps(data)\n\n@serialize.register(str)\ndef _(data):\n    return data\n\n@serialize.register(int)\n@serialize.register(float)\ndef _(data):\n    return str(data)\n\nprint(serialize({\"name\": \"Alice\"}))\n# {\n#   \"name\": \"Alice\"\n# }\nprint(serialize([1, 2, 3]))  # [1, 2, 3]",
  },
  {
    type: "text",
    content:
      "## `functools.cmp_to_key` — Converting Comparison Functions\n\nBefore Python 3, sorting could use a `cmp` argument (a comparison function returning -1, 0, or 1). This was removed in Python 3. `cmp_to_key` converts old-style comparison functions to key functions for use with `sorted()`.\n\n```python\nfrom functools import cmp_to_key\n\ndef compare_by_last(item1, item2):\n    \"\"\"Compare two items by their last character.\"\"\"\n    if item1[-1] < item2[-1]:\n        return -1\n    elif item1[-1] > item2[-1]:\n        return 1\n    return 0\n\nwords = [\"apple\", \"banana\", \"cherry\", \"date\"]\nsorted_words = sorted(words, key=cmp_to_key(compare_by_last))\nprint(sorted_words)  # ['banana', 'apple', 'date', 'cherry']\n# Sorted by last character: a, e, e, y\n```\n\nIn modern code, prefer writing a `key` function directly.",
  },
  {
    type: "code",
    language: "python",
    caption: "Combining functools tools — a practical cache with TTL pattern:",
    content:
      "from functools import lru_cache, wraps\nimport time\n\ndef ttl_cache(seconds=60):\n    \"\"\"A time-to-live cache decorator.\"\"\"\n    def decorator(func):\n        # Use lru_cache internally\n        cached_func = lru_cache(maxsize=128)(func)\n        cached_func.cache_timestamp = time.time()\n        \n        @wraps(func)\n        def wrapper(*args, **kwargs):\n            if time.time() - cached_func.cache_timestamp > seconds:\n                cached_func.cache_clear()\n                cached_func.cache_timestamp = time.time()\n            return cached_func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@ttl_cache(seconds=30)\ndef get_data():\n    \"\"\"Simulate an expensive API call.\"\"\"\n    print(\"Fetching data...\")\n    return {\"value\": 42}\n\nprint(get_data())  # Fetching data... → {\"value\": 42}\nprint(get_data())  # Cached → {\"value\": 42}\ntime.sleep(31)\nprint(get_data())  # Fetching data... → {\"value\": 42} (cache expired)",
  },
  {
    type: "key-points",
    points: [
      "functools.wraps copies function metadata — use in every decorator",
      "functools.partial creates specialized functions by fixing some arguments",
      "functools.lru_cache and @cache memoize expensive pure functions automatically",
      "functools.singledispatch enables type-based dispatch without class hierarchies",
      "functools.cmp_to_key converts old-style comparison functions to key functions",
      "Cached functions must be pure (same args → same result) for correct behavior",
    ],
  },
];

const ch39Exercises: ExerciseSection[] = [
  {
    id: "py39-ex1", type: "exercise", title: "Basic partial",
    description: "What does partial do to a function?",
    instructions: ["partial fixes some arguments", "Call the partial and type the result"],
    code: "from functools import partial\n\ndef multiply(x, y):\n    return x * y\n\ndouble = partial(multiply, 2)\nprint(double(5))",
    correctOutput: "10",
    hint: "double(5) calls multiply(2, 5) = 10.",
  },
  {
    id: "py39-ex2", type: "exercise", title: "partial with keyword args",
    description: "partial can fix keyword arguments too.",
    instructions: ["Fix the exponent keyword argument", "Call with base only"],
    code: "from functools import partial\n\ndef power(base, exponent=1):\n    return base ** exponent\n\nsquare = partial(power, exponent=2)\nprint(square(4))",
    correctOutput: "16",
    hint: "square(4) calls power(4, exponent=2) = 4**2 = 16.",
  },
  {
    id: "py39-ex3", type: "exercise", title: "lru_cache Basic",
    description: "How many times does the function actually run?",
    instructions: ["The function prints when called", "Count the print statements"],
    code: "from functools import lru_cache\n\n@lru_cache(maxsize=3)\ndef calc(x):\n    print(f\"Calc {x}\")\n    return x * x\n\nprint(calc(3))\nprint(calc(3))\nprint(calc(4))",
    correctOutput: "Calc 3\n9\n9\nCalc 4\n16",
    hint: "First calc(3) computes, second returns cached. calc(4) computes fresh.",
  },
  {
    id: "py39-ex4", type: "exercise", title: "lru_cache cache_info",
    description: "What does cache_info() reveal?",
    instructions: ["hits = cached results used, misses = fresh computations", "Read the output"],
    code: "from functools import lru_cache\n\n@lru_cache(maxsize=5)\ndef add(a, b):\n    return a + b\n\nadd(1, 2)\nadd(1, 2)\nadd(3, 4)\nprint(add.cache_info())",
    correctOutput: "CacheInfo(hits=1, misses=2, maxsize=5, currsize=2)",
    hint: "1 hit (second call to add(1,2)), 2 misses (first calls to add(1,2) and add(3,4)).",
  },
  {
    id: "py39-ex5", type: "exercise", title: "singledispatch default",
    description: "What happens for unregistered types?",
    instructions: ["The base function raises NotImplementedError for unknown types", "What happens with a bool?"],
    code: "from functools import singledispatch\n\n@singledispatch\ndef handle(x):\n    return f\"Default: {x}\"\n\n@handle.register(int)\ndef _(x):\n    return f\"Int: {x}\"\n\nprint(handle(42))\nprint(handle(\"hello\"))",
    correctOutput: "Int: 42\nDefault: hello",
    hint: "int is registered, so it gets special handling. str is not registered, so the default runs.",
  },
  {
    id: "py39-ex6", type: "exercise", title: "wraps metadata",
    description: "What does @wraps preserve (revisited)?",
    instructions: ["Check __name__ with @wraps applied", "Type the name"],
    code: "from functools import wraps\n\ndef dec(func):\n    @wraps(func)\n    def wrapper():\n        return func()\n    return wrapper\n\n@dec\ndef my_func():\n    \"\"\"My doc\"\"\"\n    return 1\n\nprint(my_func.__name__)",
    correctOutput: "my_func",
    hint: "Without @wraps, __name__ would be 'wrapper'. With it, it's 'my_func'.",
  },
  {
    id: "py39-ex7", type: "exercise", title: "partial with more args",
    description: "Partial can fix multiple arguments.",
    instructions: ["Fix both a and b in a 3-arg function", "Complete the partial call"],
    code: "from functools import partial\n\ndef volume(l, w, h):\n    return l * w * h\n\n# Fix width=10 and height=5\nbase = partial(volume, w=10, h=5)\nprint(base(3))",
    correctOutput: "150",
    hint: "base(3) calls volume(3, w=10, h=5) = 3 * 10 * 5 = 150.",
  },
  {
    id: "py39-ex8", type: "exercise", title: "lru_cache clearing",
    description: "What happens after cache_clear()?",
    instructions: ["cache_clear() removes all cached results", "The function recomputes"],
    code: "from functools import lru_cache\n\n@lru_cache(maxsize=5)\ndef sq(n):\n    print(f\"sq({n})\")\n    return n * n\n\nsq(3)\nsq(3)\nsq.cache_clear()\nsq(3)",
    correctOutput: "sq(3)\nsq(3)",
    hint: "First call computes, second uses cache, cache is cleared, third computes again.",
  },
  {
    id: "py39-ex9", type: "exercise", title: "singledispatch multiple types",
    description: "Register multiple types for singledispatch.",
    instructions: ["Register handlers for str, int, and list", "Test each type"],
    code: "from functools import singledispatch\n\n@singledispatch\ndef length(x):\n    return 0\n\n@length.register(str)\ndef _(x):\n    return len(x)\n\n@length.register(list)\ndef _(x):\n    return len(x)\n\nprint(length(\"hello\"))\nprint(length([1, 2, 3]))\nprint(length(42))",
    correctOutput: "5\n3\n0",
    hint: "str and list have length handlers. int uses the default which returns 0.",
  },
  {
    id: "py39-ex10", type: "exercise", title: "partial object attributes",
    description: "Partial objects have useful attributes.",
    instructions: ["Access .func and .args on a partial object", "Type the output"],
    code: "from functools import partial\n\ndef add(x, y):\n    return x + y\n\np = partial(add, 5)\nprint(p.func.__name__)\nprint(p.args)",
    correctOutput: "add\n(5,)",
    hint: ".func is the original function (add), .args contains the fixed arguments (5,).",
  },
];

const ch39Exam: ExamQuestion[] = [
  { id: "py39-q1", type: "multiple-choice", difficulty: "easy", question: "What does functools.partial do?", options: [{ id: "a", text: "Wraps a function with metadata" }, { id: "b", text: "Fixes some arguments of a function" }, { id: "c", text: "Caches function results" }, { id: "d", text: "Creates generic functions" }], correctAnswer: "b", explanation: "partial creates a new function with some arguments fixed." },
  { id: "py39-q2", type: "true-false", difficulty: "easy", question: "lru_cache works with any argument types, including lists and dicts.", correctAnswer: false, explanation: "lru_cache requires hashable arguments; lists and dicts are unhashable." },
  { id: "py39-q3", type: "fill-blank", difficulty: "easy", question: "The functools function that preserves function metadata in decorators is ___.", correctAnswer: "wraps", acceptableAnswers: ["wraps", "functools.wraps"], explanation: "Apply @functools.wraps to your wrapper function to preserve metadata." },
  { id: "py39-q4", type: "multiple-choice", difficulty: "medium", question: "What does `@cache` (Python 3.9+) mean compared to @lru_cache?", options: [{ id: "a", text: "It's a time-based cache" }, { id: "b", text: "It's @lru_cache(maxsize=None)" }, { id: "c", text: "It caches to disk" }, { id: "d", text: "It's for async functions" }], correctAnswer: "b", explanation: "@cache is shorthand for @lru_cache(maxsize=None) — unbounded cache." },
  { id: "py39-q5", type: "code-order", difficulty: "medium", question: "Arrange a memoized Fibonacci function.", codeLines: ['@lru_cache(maxsize=128)', 'def fib(n):', '    if n < 2:', '        return n', '    return fib(n-1) + fib(n-2)', 'from functools import lru_cache'], correctOrder: [5, 0, 1, 2, 3, 4], explanation: "Import, decorator, define, base case, recursive case." },
  { id: "py39-q6", type: "match-pairs", difficulty: "medium", question: "Match each functools utility to its purpose.", leftItems: ["partial", "lru_cache", "wraps", "singledispatch"], rightItems: ["Fix function arguments", "Memoize function results", "Preserve function metadata", "Type-based dispatch"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "partial fixes args, lru_cache caches, wraps preserves metadata, singledispatch dispatches by type." },
  { id: "py39-q7", type: "true-false", difficulty: "medium", question: "singledispatch selects an implementation based on the type of the first argument.", correctAnswer: true, explanation: "singledispatch dispatches based on the type of the first (positional) argument." },
  { id: "py39-q8", type: "fill-blank", difficulty: "hard", question: "To clear an lru_cache-decorated function's cache, call ___.", correctAnswer: "cache_clear()", acceptableAnswers: ["cache_clear", "func.cache_clear()"], explanation: "func.cache_clear() empties the cache." },
  { id: "py39-q9", type: "multiple-choice", difficulty: "hard", question: "What does partial(func, x)(y) do?", options: [{ id: "a", text: "func(x, y)" }, { id: "b", text: "func(y, x)" }, { id: "c", text: "func(x) + func(y)" }, { id: "d", text: "Error" }], correctAnswer: "a", explanation: "partial(func, x) fixes the first argument as x; calling with y passes y as the second argument: func(x, y)." },
  { id: "py39-q10", type: "code-order", difficulty: "hard", question: "Arrange singledispatch handlers for different types.", codeLines: ['@singledispatch', 'def describe(x):', '    return \"unknown\"', '@describe.register(int)', 'def _(x):', '    return \"integer\"'], correctOrder: [0, 1, 2, 3, 4, 5], explanation: "Base function with @singledispatch, then registered handler for int." },
];

const ch39: Chapter = {
  id: "python-ch39", courseId: "python", title: "functools Module", order: 39,
  sections: ch39Sections, examPool: ch39Exam, xpReward: 230, estimatedMinutes: 45,
  prerequisites: ["python-ch38"],
  keyPoints: [
    "functools.partial fixes function arguments to create specialized versions",
    "functools.lru_cache and @cache memoize results; args must be hashable",
    "functools.wraps preserves metadata — use in every decorator",
    "functools.singledispatch enables type-based dispatch for functions",
    "functools.cmp_to_key converts old comparison functions to key functions",
    "Cache clearing: func.cache_clear(); inspection: func.cache_info()",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Chapter 40 – itertools Module
// Topics: chain, cycle, count, repeat, permutations, combinations, groupby
// ───────────────────────────────────────────────────────────────────
const ch40Sections: Section[] = [
  {
    type: "text",
    content:
      "## The `itertools` Module\n\nThe `itertools` module is a collection of fast, memory-efficient tools for working with iterators. It's often called the \"gem\" of Python's standard library because its functions are incredibly useful yet frequently overlooked.\n\n`itertools` functions operate on iterators and return lazy iterators, making them memory-efficient even with large data.\n\n**Categories:**\n- **Infinite iterators:** `count()`, `cycle()`, `repeat()`\n- **Finite iterators:** `chain()`, `compress()`, `dropwhile()`, `filterfalse()`, `takewhile()`\n- **Combinatoric generators:** `product()`, `permutations()`, `combinations()`, `combinations_with_replacement()`\n- **Grouping:** `groupby()`, `zip_longest()`\n- **Accumulation:** `accumulate()`, `batched()`, `pairwise()`",
  },
  {
    type: "code",
    language: "python",
    caption: "Infinite iterators — use with islice or takewhile to limit:",
    content:
      "from itertools import count, cycle, repeat, islice\n\n# count(start, step) — infinite counter\nfor n in islice(count(10, 2), 5):\n    print(n, end=\" \")  # 10 12 14 16 18\nprint()\n\n# cycle(iterable) — infinite loop over iterable\ncolors = [\"red\", \"green\", \"blue\"]\nfor color in islice(cycle(colors), 7):\n    print(color, end=\" \")  # red green blue red green blue red\nprint()\n\n# repeat(object, times) — repeat object N times (or infinitely)\nfor x in repeat(\"A\", 4):\n    print(x, end=\" \")  # A A A A\nprint()",
  },
  {
    type: "text",
    content:
      "## Chaining and Combining Iterables\n\n`chain()` concatenates multiple iterables into a single sequence. `zip_longest()` zips iterables of unequal lengths, filling missing values.\n\n```python\nfrom itertools import chain, zip_longest\n\n# chain — flatten multiple iterables\nnumbers = [1, 2, 3]\nletters = [\"a\", \"b\", \"c\"]\ncombined = list(chain(numbers, letters))\nprint(combined)  # [1, 2, 3, 'a', 'b', 'c']\n\n# chain.from_iterable — chain nested iterables\nnested = [[1, 2], [3, 4], [5, 6]]\nflat = list(chain.from_iterable(nested))\nprint(flat)  # [1, 2, 3, 4, 5, 6]\n\n# zip_longest — zip with fill for shorter iterables\na = [1, 2, 3]\nb = [\"x\", \"y\"]\nresult = list(zip_longest(a, b, fillvalue=\"?\"))\nprint(result)  # [(1, 'x'), (2, 'y'), (3, '?')]\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Combinatoric iterators — product, permutations, combinations:",
    content:
      "from itertools import product, permutations, combinations, combinations_with_replacement\n\n# product — Cartesian product (like nested for loops)\ncolors = [\"red\", \"green\"]\nsizes = [\"S\", \"M\"]\nprint(list(product(colors, sizes)))\n# [('red', 'S'), ('red', 'M'), ('green', 'S'), ('green', 'M')]\n\n# permutations(r) — all r-length ordered arrangements\nprint(list(permutations([1, 2, 3], 2)))\n# [(1,2), (1,3), (2,1), (2,3), (3,1), (3,2)]\n\n# combinations(r) — all r-length unordered selections\nprint(list(combinations([1, 2, 3], 2)))\n# [(1,2), (1,3), (2,3)]\n\n# combinations_with_replacement — with repetition allowed\nprint(list(combinations_with_replacement([1, 2, 3], 2)))\n# [(1,1), (1,2), (1,3), (2,2), (2,3), (3,3)]",
  },
  {
    type: "callout",
    style: "important",
    content:
      "**Combinatoric explosion warning!** The number of permutations grows as n! (factorial). `permutations(range(10))` produces 3,628,800 results. `permutations(range(20))` produces 2.4 × 10^18 results — your computer will run out of memory and time. Always limit combinatoric operations with `islice` or small inputs.",
  },
  {
    type: "text",
    content:
      "## `itertools.groupby` — Grouping Consecutive Elements\n\n`groupby()` groups consecutive elements in an iterable by a key function. **Important:** the data must be sorted by the key first, as `groupby` only groups consecutive runs.\n\n```python\nfrom itertools import groupby\n\n# Data must be sorted by the key!\ndata = [(2024, \"Q1\"), (2024, \"Q2\"), (2025, \"Q1\"), (2025, \"Q2\")]\nsorted_data = sorted(data, key=lambda x: x[0])\n\nfor year, quarters in groupby(sorted_data, key=lambda x: x[0]):\n    print(f\"Year {year}:\", list(quarters))\n# Year 2024: [(2024, 'Q1'), (2024, 'Q2')]\n# Year 2025: [(2025, 'Q1'), (2025, 'Q2')]\n```",
  },
  {
    type: "code",
    language: "python",
    caption: "Practical itertools examples — accumulate, pairwise, batched (Python 3.12+):",
    content:
      "from itertools import accumulate, pairwise, batched, compress, filterfalse\n\n# accumulate — running total (or other binary operation)\nprint(list(accumulate([1, 2, 3, 4])))       # [1, 3, 6, 10]\nprint(list(accumulate([1, 2, 3, 4], lambda a, b: a * b)))  # [1, 2, 6, 24]\n\n# pairwise (Python 3.10+) — successive overlapping pairs\nprint(list(pairwise([1, 2, 3, 4])))\n# [(1, 2), (2, 3), (3, 4)]\n\n# batched (Python 3.12+) — batch iterable into fixed-size chunks\nprint(list(batched(range(10), 3)))\n# [(0, 1, 2), (3, 4, 5), (6, 7, 8), (9,)]\n\n# compress — filter by selector list\nitems = [\"A\", \"B\", \"C\", \"D\"]\nselectors = [1, 0, 1, 0]\nprint(list(compress(items, selectors)))  # ['A', 'C']\n\n# filterfalse — opposite of filter\nprint(list(filterfalse(lambda x: x % 2 == 0, [1, 2, 3, 4, 5])))\n# [1, 3, 5] (keeps odd numbers)",
  },
  {
    type: "comparison",
    title: "itertools Functions by Category",
    headers: ["Category", "Functions", "Description"],
    rows: [
      ["Infinite", "count, cycle, repeat", "Continuous iterators; limit with islice"],
      ["Combining", "chain, zip_longest, product", "Merge, combine, or align iterables"],
      ["Filtering", "filterfalse, dropwhile, takewhile, compress, islice", "Select or skip items by condition"],
      ["Grouping", "groupby", "Group consecutive items by key"],
      ["Combinatorics", "permutations, combinations, combinations_with_r", "Generate arrangements and selections"],
      ["Accumulation", "accumulate, pairwise, batched", "Running calculations over iterables"],
    ],
  },
  {
    type: "code",
    language: "python",
    caption: "Real-world — chunking, cycling, and grouping data:",
    content:
      "from itertools import cycle, islice, groupby, count\n\n# 1. Round-robin scheduling\ntasks = [\"task_A\", \"task_B\", \"task_C\"]\nworkers = cycle([\"alice\", \"bob\", \"charlie\"])\nschedule = list(zip(tasks, islice(workers, len(tasks))))\nprint(schedule)\n# [('task_A', 'alice'), ('task_B', 'bob'), ('task_C', 'charlie')]\n\n# 2. Numbering items (like enumerate but with custom start)\nitems = [\"x\", \"y\", \"z\"]\nnumbered = list(zip(count(100, 10), items))\nprint(numbered)\n# [(100, 'x'), (110, 'y'), (120, 'z')]\n\n# 3. Group log entries by date\nlines = [\"2026-01-01: Started\", \"2026-01-01: Running\", \"2026-01-02: Stopped\"]\nsorted_lines = sorted(lines)\nfor date, entries in groupby(sorted_lines, key=lambda l: l[:10]):\n    print(f\"{date}: {len(list(entries))} entries\")",
  },
  {
    type: "key-points",
    points: [
      "itertools provides fast, memory-efficient iterator tools — all return lazy iterators",
      "Infinite iterators (count, cycle, repeat) must be bounded with islice or takewhile",
      "chain and chain.from_iterable flatten multiple iterables into one",
      "product, permutations, combinations generate combinatoric arrangements lazily",
      "groupby groups consecutive items by key — sort data first for correct grouping",
      "accumulate computes running totals; pairwise creates overlapping pairs; batched chunks data",
    ],
  },
];

const ch40Exercises: ExerciseSection[] = [
  {
    id: "py40-ex1", type: "exercise", title: "chain basic",
    description: "What does chain do with two lists?",
    instructions: ["chain concatenates iterables", "Type the result"],
    code: "from itertools import chain\nresult = list(chain([1, 2], [3, 4]))\nprint(result)",
    correctOutput: "[1, 2, 3, 4]",
    hint: "chain yields items from the first iterable, then the second.",
  },
  {
    id: "py40-ex2", type: "exercise", title: "count with islice",
    description: "What does count with islice produce?",
    instructions: ["count(5, 3) starts at 5, steps by 3", "islice limits to 4 items"],
    code: "from itertools import count, islice\nresult = list(islice(count(5, 3), 4))\nprint(result)",
    correctOutput: "[5, 8, 11, 14]",
    hint: "5, 5+3=8, 8+3=11, 11+3=14.",
  },
  {
    id: "py40-ex3", type: "exercise", title: "cycle basic",
    description: "What does cycle do with an iterable?",
    instructions: ["cycle repeats the iterable infinitely", "islice takes 6 items"],
    code: "from itertools import cycle, islice\nresult = list(islice(cycle([\"A\", \"B\"]), 5))\nprint(result)",
    correctOutput: "['A', 'B', 'A', 'B', 'A']",
    hint: "cycle repeats 'A', 'B', 'A', 'B', 'A'...",
  },
  {
    id: "py40-ex4", type: "exercise", title: "product",
    description: "What does product produce?",
    instructions: ["product computes the Cartesian product", "Order matters: colors × sizes"],
    code: "from itertools import product\nresult = list(product([1, 2], [\"a\", \"b\"]))\nprint(result)",
    correctOutput: "[(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]",
    hint: "Each element from the first with each from the second.",
  },
  {
    id: "py40-ex5", type: "exercise", title: "combinations",
    description: "What combinations of 2 are there?",
    instructions: ["combinations('ABC', 2) — unordered pairs", "Type the result"],
    code: "from itertools import combinations\nresult = list(combinations([\"A\", \"B\", \"C\"], 2))\nprint(result)",
    correctOutput: "[('A', 'B'), ('A', 'C'), ('B', 'C')]",
    hint: "Unordered pairs: AB, AC, BC.",
  },
  {
    id: "py40-ex6", type: "exercise", title: "permutations",
    description: "What permutations of 2 are there?",
    instructions: ["permutations considers order", "AB and BA are different"],
    code: "from itertools import permutations\nresult = list(permutations([\"A\", \"B\", \"C\"], 2))\nprint(result)",
    correctOutput: "[('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'C'), ('C', 'A'), ('C', 'B')]",
    hint: "6 ordered pairs from 3 items taken 2 at a time.",
  },
  {
    id: "py40-ex7", type: "exercise", title: "groupby basic",
    description: "What does groupby do with sorted data?",
    instructions: ["groupby groups consecutive equal keys", "Data must be sorted"],
    code: "from itertools import groupby\ndata = [1, 1, 2, 2, 2, 3]\nresult = [(k, list(g)) for k, g in groupby(data)]\nprint(result)",
    correctOutput: "[(1, [1, 1]), (2, [2, 2, 2]), (3, [3])]",
    hint: "groupby groups consecutive equal values: 1→[1,1], 2→[2,2,2], 3→[3].",
  },
  {
    id: "py40-ex8", type: "exercise", title: "accumulate",
    description: "What does accumulate produce by default?",
    instructions: ["accumulate computes running sums by default", "Type the result"],
    code: "from itertools import accumulate\nresult = list(accumulate([1, 2, 3, 4]))\nprint(result)",
    correctOutput: "[1, 3, 6, 10]",
    hint: "Running total: 1, 1+2=3, 3+3=6, 6+4=10.",
  },
  {
    id: "py40-ex9", type: "exercise", title: "chain.from_iterable",
    description: "What does chain.from_iterable do?",
    instructions: ["Flatten a list of lists", "like chain but takes a single iterable of iterables"],
    code: "from itertools import chain\nnested = [[1, 2], [3], [4, 5]]\nresult = list(chain.from_iterable(nested))\nprint(result)",
    correctOutput: "[1, 2, 3, 4, 5]",
    hint: "Flattens: [1,2]→1,2, [3]→3, [4,5]→4,5.",
  },
  {
    id: "py40-ex10", type: "exercise", title: "repeat",
    description: "What does repeat produce?",
    instructions: ["repeat(object, times) repeats object N times", "Type the result"],
    code: "from itertools import repeat\nresult = list(repeat(\"X\", 4))\nprint(result)",
    correctOutput: "['X', 'X', 'X', 'X']",
    hint: "repeat(\"X\", 4) yields \"X\" four times.",
  },
];

const ch40Exam: ExamQuestion[] = [
  { id: "py40-q1", type: "multiple-choice", difficulty: "easy", question: "Which module contains chain, cycle, and permutations?", options: [{ id: "a", text: "functools" }, { id: "b", text: "itertools" }, { id: "c", text: "collections" }, { id: "d", text: "math" }], correctAnswer: "b", explanation: "itertools contains chain, cycle, permutations, product, etc." },
  { id: "py40-q2", type: "true-false", difficulty: "easy", question: "itertools functions all return lists.", correctAnswer: false, explanation: "itertools functions return lazy iterators, not lists. Use list() to materialize." },
  { id: "py40-q3", type: "fill-blank", difficulty: "easy", question: "To limit an infinite iterator, use ___.", correctAnswer: "islice", acceptableAnswers: ["islice", "itertools.islice"], explanation: "islice(iterable, n) limits the number of values taken from the iterator." },
  { id: "py40-q4", type: "multiple-choice", difficulty: "medium", question: "What's the key difference between permutations and combinations?", options: [{ id: "a", text: "Permutations are ordered, combinations are unordered" }, { id: "b", text: "Combinations are ordered, permutations are unordered" }, { id: "c", text: "They're the same" }, { id: "d", text: "Combinations allow repetition" }], correctAnswer: "a", explanation: "permutations cares about order (AB ≠ BA); combinations ignores order (AB = BA)." },
  { id: "py40-q5", type: "code-order", difficulty: "medium", question: "Arrange to compute the product of two lists.", codeLines: ['product([1, 2], [\"a\", \"b\"])', 'from itertools import product', 'list(product([1, 2], [\"a\", \"b\"]))', 'print(list(product([1, 2], [\"a\", \"b\"])))'], correctOrder: [1, 0, 2, 3], explanation: "Import, call product, wrap in list, print." },
  { id: "py40-q6", type: "match-pairs", difficulty: "medium", question: "Match each itertools function to its result.", leftItems: ["chain([1,2],[3,4])", "product([1,2],['a','b'])", "combinations('ABC',2)", "accumulate([1,2,3])"], rightItems: ["[1,2,3,4]", "[(1,'a'),(1,'b'),(2,'a'),(2,'b')]", "[('A','B'),('A','C'),('B','C')]", "[1,3,6]"], correctMatches: [[0, 0], [1, 1], [2, 2], [3, 3]], explanation: "chain flattens, product pairs, combinations selects, accumulate sums." },
  { id: "py40-q7", type: "true-false", difficulty: "medium", question: "groupby works correctly with unsorted data.", correctAnswer: false, explanation: "groupby only groups consecutive elements. Sort data by the key first for correct grouping." },
  { id: "py40-q8", type: "fill-blank", difficulty: "medium", question: "The function that creates the Cartesian product of iterables is ___.", correctAnswer: "product", acceptableAnswers: ["product", "itertools.product"], explanation: "product(a, b) yields all pairs (x, y) where x is from a and y is from b." },
  { id: "py40-q9", type: "multiple-choice", difficulty: "hard", question: "What does `list(islice(cycle('AB'), 4))` return?", options: [{ id: "a", text: "['A', 'B', 'A', 'B']" }, { id: "b", text: "['A', 'A', 'B', 'B']" }, { id: "c", text: "['A', 'B']" }, { id: "d", text: "['A', 'A', 'A', 'A']" }], correctAnswer: "a", explanation: "cycle('AB') yields A, B, A, B, ... islice(..., 4) takes the first 4: A, B, A, B." },
  { id: "py40-q10", type: "code-order", difficulty: "hard", question: "Arrange to use groupby to count items by parity.", codeLines: ['from itertools import groupby', 'nums = [1, 2, 3, 4, 5, 6]', 'sorted_by_parity = sorted(nums, key=lambda x: x % 2)', 'result = {k: len(list(g)) for k, g in groupby(sorted_by_parity, key=lambda x: x % 2)}'], correctOrder: [0, 1, 2, 3], explanation: "Import, define data, sort by key (since groupby needs sorted input), group and count." },
];

const ch40: Chapter = {
  id: "python-ch40", courseId: "python", title: "itertools Module", order: 40,
  sections: ch40Sections, examPool: ch40Exam, xpReward: 235, estimatedMinutes: 50,
  prerequisites: ["python-ch39"],
  keyPoints: [
    "itertools provides lazy, memory-efficient iterator tools — use list() to materialize",
    "Infinite iterators (count, cycle, repeat) must be bounded with islice or takewhile",
    "chain concatenates iterables; chain.from_iterable flattens nested iterables",
    "product (Cartesian), permutations (ordered), combinations (unordered) for combinatorics",
    "groupby groups consecutive items by key — always sort data by the key first",
    "accumulate (running total), pairwise (overlapping pairs), batched (chunking) are practical tools",
  ],
};

// ───────────────────────────────────────────────────────────────────
// Export – All Chapters 31 through 40
// ───────────────────────────────────────────────────────────────────
export const pythonChapters31to40: Chapter[] = [
  ch31, ch32, ch33, ch34, ch35, ch36, ch37, ch38, ch39, ch40,
];
